import React, { useEffect, useState } from "react";
import DashboardHeader from "./DashboardHeader";
import axios from "axios";
import { Form, Input, Button, Row, Col, Select, Upload, Steps, Radio } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import LocationMap from "../../components/Steps/LocationMap";
import MapLoaction from "../../components/Steps/MapLoaction";
import AutocompleteInput from "../../components/Steps/AutoCompleate";

const { Option } = Select;

const UpdateProperty = () => {
  const [form] = Form.useForm();
  const [propertyData, setPropertyData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [isModified, setIsModified] = useState(false);
  const [savedFormValues, setSavedFormValues] = useState({});
  const [listingType, setListingType] = useState(null)
  const [map, setMap] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 13.736717,
    lng: 100.523186,
  });
  const { id } = useParams();

  const fetchPropertyData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/property/${id}`);
      setPropertyData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching property data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPropertyData();
  }, [id]);

  useEffect(() => {
    if (Object.keys(propertyData).length) {
      form.setFieldsValue(propertyData);
    }
  }, [propertyData, form]);
  const handlePlaceChanged = (name, newLocation) => {
    // console.log(`Updating form field ${name} with value`, newLocation.name);
    form.setFieldsValue({ [name]: newLocation.name });
    setSelectedLocation(newLocation);
    if (map) {
      map.panTo(newLocation);
    }
  };
  const handleNextStep = () => {
    setSavedFormValues(prevValues => ({
      ...prevValues,
      ...form.getFieldsValue()
    }));
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setSavedFormValues(prevValues => ({
      ...prevValues,
      ...form.getFieldsValue()
    }));
    setCurrentStep(currentStep - 1);
  };
  const [fileList, setFileList] = useState([]);
  // const [form] = Form.useForm();

  const handleChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handleUpdateButton = async () => {
    const values = { ...savedFormValues, ...form.getFieldsValue() };
    const formData = new FormData();

    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        if (values[key] !== undefined && (!Array.isArray(values[key]) || values[key].length > 0)) {
          formData.append(key, values[key]);
        }
      }
    }

    if (fileList.length) {
      formData.append('coverImage', fileList[0].originFileObj);
      fileList.slice(1).forEach(file => {
        formData.append('imageUrls', file.originFileObj);
      });
    }

    try {
      const res = await axios.put(`/update/property/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (res.status === 201) {
        await fetchPropertyData();
        setCurrentStep(0);
        console.log(res.data)
        alert(res.data.message);
      }
    } catch (error) {
      console.error("Error updating property:", error.response || error.message);
    }
  };
  const handleImageClick = (file) => {
    const index = fileList.indexOf(file);
    if (index !== 0) {
      const newFileList = [...fileList];
      const [clickedImage] = newFileList.splice(index, 1);
      newFileList.unshift(clickedImage);
      setFileList(newFileList);
    }
  };
  useEffect(() => {
    if (propertyData && propertyData.listType) {
      setListingType(propertyData.listType);
    }
  }, [propertyData]);
  const handleListingTypeChange = (e) => {
    setListingType(e.target.value);
  };
  if (isLoading) {
    return <Loader />;
  }
  console.log(propertyData)
  const {
    propertyName, province, city, location, price, bedrooms,
    bathrooms, floorSize, headline, video, coverImage = [], imageUrls = [], referenceNote,
    descriptionEnglish, size, propertyType, rentDuration, contactName, contactEmail,
    contactNumber, contactAddress, priceType
  } = propertyData;

  const cover = coverImage.map((url, index) => ({
    uid: `${-1}`,
    name: `cover_photo${index}.png`,
    status: 'done',
    url,
  }));

  const images = imageUrls.map((url, index) => ({
    uid: `${-1}`,
    name: `other_photo${index}.png`,
    status: 'done',
    url,
  }));
  console.log({ cover, images })
  const handleValuesChange = () => {
    setIsModified(true);
  };
  console.log(propertyData)
  const sections = [
    {
      title: "Update Location",
      content: (
        <div className="bg-white p-10 rounded-lg">
          <h1 className="mb-5 font-semibold text-2xl">Update Location</h1>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Name of the property" name="propertyName" rules={[{ required: true }]}>
                <Input size="large" placeholder="Please enter property name" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Province" name="province" rules={[{ required: true }]}>
                <AutocompleteInput prefilledValue={province} name="province" onPlaceChanged={handlePlaceChanged} placeholder="Please Enter province" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="City" name="city" rules={[{ required: true }]}>
                <AutocompleteInput prefilledValue={city} name="city" onPlaceChanged={handlePlaceChanged} placeholder="Please Enter city" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Location" name="location" rules={[{ required: true }]}>
                <AutocompleteInput prefilledValue={location} name="location" onPlaceChanged={handlePlaceChanged} placeholder="Please Enter location" />
              </Form.Item>
            </Col>
          </Row>
          <div style={{ width: "350px" }}>
            <MapLoaction location={selectedLocation} setMap={setMap} />
          </div>
        </div>
      ),
    },
    {
      title: "Update Details",
      content: (
        <div className="bg-white p-10 rounded-lg">
          <h1 className="mb-5 font-semibold text-2xl">Enter Property Details</h1>
          <Form.Item label="Listing Type" name="listingType" rules={[{ required: true }]}>
            <Radio.Group
              buttonStyle="solid"
              size="large"
              value={listingType}
              onChange={handleListingTypeChange}
              style={{ display: 'flex', gap: '10px' }}
              required
            >
              <Radio.Button value="forSale">For Sale</Radio.Button>
              <Radio.Button value="forRent">For Rent</Radio.Button>
            </Radio.Group>
          </Form.Item>


          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Price" name="price" rules={[{ required: true }]}>
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              {listingType === "forRent" && (
                <Form.Item label="Rent Duration" name="rentDuration" rules={[{ required: true }]}>
                  <Select size="large" placeholder="Select Type" required>
                    <Option value="Daily">Daily</Option>
                    <Option value="Monthly">Monthly</Option>
                    <Option value="Yearly">Yearly</Option>
                  </Select>
                </Form.Item>
              )}
              {listingType === "forSale" && (
                <Form.Item label="Price Type" name="priceType" rules={[{ required: true }]}>
                  <Input size="large" disabled defaultValue={"THB"} />
                </Form.Item>
              )}
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Bedrooms" name="bedrooms" rules={[{ required: true }]}>
                <Select size="large" placeholder="Select Bedrooms" required>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Bathrooms" name="bathrooms" rules={[{ required: true }]}>
                <Select size="large" placeholder="Select Bathrooms">
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Size m²" name="size" rules={[{ required: true }]}>
                <Input size="large" required />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Floor Size" name="floorSize" rules={[{ required: true }]}>
                <Input size="large" required />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Reference Note" name="referenceNote" rules={[{ required: true }]}>
                <Input size="large" required />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Headline" name="headline" rules={[{ required: true }]}>
                <Input size="large" required />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24}>
              <Form.Item label="Description" name="descriptionEnglish" rules={[{ required: true }]}>
                <Input.TextArea size="large" rows={4} required />
              </Form.Item>
            </Col>
          </Row>

        </div>
      ),
    },
    {
      title: "Update Media",
      content: (
        <div className="bg-white p-10 rounded-lg">
          <h1 className="mb-5 font-semibold text-2xl">Update Listing: Media</h1>
          <Form.Item label="Add Photos">
            <Upload
              listType="picture-card"
              multiple
              maxCount={10}
              beforeUpload={() => false}
              fileList={fileList}
              onChange={handleChange}
              itemRender={(originNode, file, currFileList) => (
                <div onClick={() => handleImageClick(currFileList.indexOf(file))}>
                  {originNode}
                </div>
              )}
            >
              {fileList.length >= 10 ? null : (
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload Image</div>
                </div>
              )}
            </Upload>
          </Form.Item>

          {fileList.length > 0 && (
            <Form.Item label="Cover Photo">
              <Upload
                listType="picture-card"
                fileList={[fileList[0]]}
                showUploadList={{ showPreviewIcon: false, showRemoveIcon: false }}
                itemRender={(originNode) => (
                  <div onClick={() => handleImageClick(0)}>
                    {originNode}
                  </div>
                )}
              />
            </Form.Item>
          )}

          {fileList.length > 1 && (
            <Form.Item label="Other Photos">
              <Upload
                listType="picture-card"
                fileList={fileList.slice(1)}
                showUploadList={{ showPreviewIcon: false, showRemoveIcon: false }}
                itemRender={(originNode, file) => (
                  <div onClick={() => handleImageClick(fileList.indexOf(file))}>
                    {originNode}
                  </div>
                )}
              />
            </Form.Item>
          )}

          <Form.Item
            name="video"
            label="Add Video"
            rules={[
              {
                type: 'url',
                message: 'Please enter a valid URL',
              },
              { required: true },
            ]}
          >
            <Input placeholder="Provide a video link from YouTube" />
          </Form.Item>
        </div>
      ),
    },
    {
      title: "Update Contact Information",
      content: (
        <div className="bg-white p-10 rounded-lg">
          <h1 className="mb-5 font-semibold text-2xl">Update Your Contact Information</h1>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Your name" name="contactName" rules={[{ required: true }]}>
                <Input size="large" disabled />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Your Email" name="contactEmail" rules={[{ required: true }]}>
                <Input size="large" disabled />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Your number" name="contactNumber" rules={[{ required: true }]}>
                <Input size="large" disabled />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Your address" name="contactAddress" rules={[{ required: true }]}>
                <Input size="large" disabled />
              </Form.Item>
            </Col>
          </Row>
        </div>
      ),
    },
  ];

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        propertyName, province, city, location, price, bedrooms, bathrooms,
        floorSize, headline, video, referenceNote, descriptionEnglish, size,
        contactName, contactEmail, contactNumber, contactAddress, rentDuration, priceType
      }}
      onValuesChange={handleValuesChange}
      className="lg:p-10 p-5 bg-dark2/10"
    >
      <DashboardHeader title="Update Property" description="We are glad to see you again!" />
      <Steps current={currentStep}>
        {sections.map((section, index) => (
          <Steps.Step key={index} title={section.title} />
        ))}
      </Steps>
      <div className="mt-5">{sections[currentStep].content}</div>
      <div className="flex justify-between mt-4">
        {currentStep > 0 && (
          <Button
            type="default"
            size="large"
            onClick={handlePreviousStep}
          >
            Previous
          </Button>
        )}
        {currentStep < sections.length - 1 && (
          <Button
            className="bg-blue-500 text-white"
            type="primary"
            size="large"
            onClick={handleNextStep}
          >
            Next
          </Button>
        )}
        {currentStep === sections.length - 1 && (
          <Button
            className="bg-blue-500 text-white"
            type="primary"
            size="large"
            onClick={handleUpdateButton}
          >
            Update
          </Button>
        )}
      </div>
    </Form>
  );
};

export default UpdateProperty;

