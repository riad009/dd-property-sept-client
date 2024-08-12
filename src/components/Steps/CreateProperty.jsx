import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Select,
  Upload,
  Steps,
  Radio,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import DashboardHeader from "./../../pages/dashboard/DashboardHeader";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import AutocompleteInput from "./AutoCompleate";
import MapLoaction from "./MapLoaction";
import { defaultProperType } from "../../constants/footerItem";

const { Option } = Select;

const CreateProperty = () => {
  const [form] = Form.useForm();
  const [propertyData, setPropertyData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isModified, setIsModified] = useState(false);
  const [savedFormValues, setSavedFormValues] = useState({});
  const [listingType, setListingType] = useState("forSale");
  const [propertyType, setPropertyType] = useState("");
  const [map, setMap] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 13.736717,
    lng: 100.523186,
  });
  const { user } = useContext(AuthContext);
  console.log({ selectedLocation });

  useEffect(() => {
    if (Object.keys(propertyData).length) {
      form.setFieldsValue(propertyData);
    }
  }, [propertyData, form]);
  const handlePlaceChanged = (name, place, newLocation) => {
    console.log(`Updating form field ${name} with value`, place.name);
    form.setFieldsValue({ [name]: place.name });
    setSelectedLocation(newLocation);
    if (map) {
      map.panTo(newLocation);
    }
  };

  const handleNextStep = () => {
    setSavedFormValues((prevValues) => ({
      ...prevValues,
      ...form.getFieldsValue(),
    }));
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setSavedFormValues((prevValues) => ({
      ...prevValues,
      ...form.getFieldsValue(),
    }));
    setCurrentStep(currentStep - 1);
  };
  const [fileList, setFileList] = useState([]);

  const handleChange = ({ fileList }) => {
    setFileList(fileList);
  };
  const navigate = useNavigate();
  const handleUpdateButton = async () => {
    setIsLoading(true);
    // Collect form values
    const values = { ...savedFormValues, ...form.getFieldsValue() };

    const formData = new FormData();

    for (const key in values) {
      if (values.hasOwnProperty(key) && values[key] !== undefined) {
        if (Array.isArray(values[key])) {
          values[key].forEach((item) => formData.append(key, item));
        } else {
          formData.append(key, values[key]);
        }
      }
    }
    console.log({ values });
    formData.append("email", user.email);
    const latLng = {
      lat: selectedLocation.lat,
      lng: selectedLocation.lng,
    };

    const jsonLatLng = JSON.stringify(latLng);

    formData.append("latLng", jsonLatLng);
    // Append files to FormData
    if (fileList.length) {
      formData.append("coverImage", fileList[0].originFileObj);
      fileList.slice(1).forEach((file) => {
        formData.append("imageUrls", file.originFileObj);
      });
    }

    try {
      // Send POST request to create property
      const res = await axios.post(`/create/property`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 201) {
        setIsLoading(false);
        // alert(res.data.message);
        navigate("/dashboard/my-properties");
        formData.reset();

        setCurrentStep(0);
      }
    } catch (error) {
      console.error(
        "Error creating property:",
        error.response || error.message
      );
      formData.reset();
      setIsLoading(false);
      alert("Error creating property. Please try again."); // Show error message
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

  const handleListingTypeChange = (e) => {
    setListingType(e.target.value);
  };

  if (isLoading) {
    return <Loader />;
  }

  const handleValuesChange = () => {
    setIsModified(true);
  };
  const handlePropertyTypeChange = (value) => {
    console.log("propertyType", value);
    setPropertyType(value);
  };
  const sections = [
    {
      title: "Create Location",
      content: (
        <div className="bg-white p-10 rounded-lg">
          <h1 className="mb-5 font-semibold text-2xl">Update Location</h1>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                label="Name of the property"
                name="propertyName"
                rules={[{ required: true }]}
              >
                <Input size="large" placeholder="Please enter property name" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                label="Province"
                name="province"
                rules={[{ required: true }]}
              >
                <AutocompleteInput
                  name="province"
                  onPlaceChanged={handlePlaceChanged}
                  placeholder="Please Enter province"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="City" name="city" rules={[{ required: true }]}>
                <AutocompleteInput
                  name="city"
                  onPlaceChanged={handlePlaceChanged}
                  placeholder="Please Enter city"
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                label="Location"
                name="location"
                rules={[{ required: true }]}
              >
                <AutocompleteInput
                  name="location"
                  onPlaceChanged={handlePlaceChanged}
                  placeholder="Please Enter location"
                />
              </Form.Item>
            </Col>
          </Row>
          <div>
            <MapLoaction location={selectedLocation} setMap={setMap} />
          </div>
        </div>
      ),
    },
    {
      title: "Create Details",
      content: (
        <div className="bg-white p-10 rounded-lg">
          <h1 className="mb-5 font-semibold text-2xl">
            Enter Property Details
          </h1>

          <Form.Item
            label="Listing Type"
            name="listingType"
            rules={[{ required: true }]}
          >
            <Radio.Group
              buttonStyle="solid"
              size="large"
              value={listingType}
              onChange={handleListingTypeChange}
              style={{ display: "flex", gap: "10px" }}
              required
            >
              <Radio.Button value="forSale">For Sale</Radio.Button>
              <Radio.Button value="forRent">For Rent</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Property Type"
            name="propertyType"
            rules={[{ required: true }]}
          >
            <Select
              size="large"
              placeholder="Select Property Type"
              value={propertyType}
              onChange={handlePropertyTypeChange}
              required
            >
              {defaultProperType.map((type) => (
                <Option key={type} value={type}>
                  {type}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Row gutter={16}>
            {listingType === "forRent" ? (
              <>
                {propertyType !== "land" && (
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label="Daily Price (THB)"
                      name="dailyPrice"
                      rules={[{ required: true }]}
                    >
                      <Input size="large" />
                    </Form.Item>
                  </Col>
                )}
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="Monthly Price (THB)"
                    name="monthlyPrice"
                    rules={[{ required: true }]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="Yearly Price (THB)"
                    name="yearlyPrice"
                    rules={[{ required: true }]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </Col>
              </>
            ) : (
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Price (THB)"
                  name="price"
                  rules={[{ required: true }]}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
            )}

            <Col xs={24} sm={12}>
              <Form.Item
                label={
                  listingType === "forRent" || propertyType === "land"
                    ? "Land Size m²"
                    : "Size m²"
                }
                name="size"
                rules={[{ required: true }]}
              >
                <Input size="large" required />
              </Form.Item>
            </Col>

            {propertyType !== "land" && (
              <Col xs={24} sm={12}>
                <Form.Item
                  label={"House Size m²"}
                  name="floorSize"
                  rules={[{ required: true }]}
                >
                  <Input size="large" required />
                </Form.Item>
              </Col>
            )}

            <Col xs={24} sm={12}>
              <Form.Item
                label="Headline"
                name="headline"
                rules={[{ required: true }]}
              >
                <Input size="large" required />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            {/* <Col xs={24} sm={12}>
              <Form.Item
                label="Reference Note"
                name="referenceNote"
                rules={[{ required: true }]}
              >
                <Input size="large" required />
              </Form.Item>
            </Col> */}
          </Row>
          <Row gutter={16}>
            <Col xs={24}>
              <Form.Item
                label="Description"
                name="descriptionEnglish"
                rules={[{ required: true }]}
              >
                <Input.TextArea size="large" rows={4} required />
              </Form.Item>
            </Col>
          </Row>
        </div>
      ),
    },
    {
      title: "Create Media",
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
                <div
                  onClick={() => handleImageClick(currFileList.indexOf(file))}
                >
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
                showUploadList={{
                  showPreviewIcon: false,
                  showRemoveIcon: false,
                }}
                itemRender={(originNode) => (
                  <div onClick={() => handleImageClick(0)}>{originNode}</div>
                )}
              />
            </Form.Item>
          )}

          {/* {fileList.length > 1 && (
            <Form.Item label="Other Photos">
              <Upload
                listType="picture-card"
                fileList={fileList.slice(1)}
                showUploadList={{
                  showPreviewIcon: false,
                  showRemoveIcon: false,
                }}
                itemRender={(originNode, file) => (
                  <div onClick={() => handleImageClick(fileList.indexOf(file))}>
                    {originNode}
                  </div>
                )}
              />
            </Form.Item>
          )} */}

          <Form.Item
            name="video"
            label="Add Video"
            rules={[
              {
                type: "url",
                message: "Please enter a valid URL",
              },
              { required: true },
            ]}
          >
            <Input placeholder="Provide a video link from YouTube" />
          </Form.Item>
        </div>
      ),
    },
    // {
    //   title: "Contact Information",
    //   content: (
    //     <div className="bg-white p-10 rounded-lg">
    //       <h1 className="mb-5 font-semibold text-2xl">
    //         Update Your Contact Information
    //       </h1>
    //       {user.phone && user.address ? (
    //         <></>
    //       ) : (
    //         <div>
    //           <p className="text-rose-500">
    //             Please Updete your Profile nad Provide - Username,Email,Phone
    //             and Address to create Property.{" "}
    //           </p>
    //           <Link
    //             className="text-sky-600 underline"
    //             to="/dashboard/my-profile"
    //           >
    //             Click Here-Update Profile
    //           </Link>
    //         </div>
    //       )}
    //       <Row gutter={16}>
    //         <Col xs={24} sm={12}>
    //           <Form.Item
    //             label="Your name"
    //             name="contactName"
    //             rules={[{ required: true }]}
    //           >
    //             <Input size="large" disabled />
    //           </Form.Item>
    //         </Col>
    //         <Col xs={24} sm={12}>
    //           <Form.Item
    //             label="Your Email"
    //             name="contactEmail"
    //             rules={[{ required: true }]}
    //           >
    //             <Input size="large" disabled />
    //           </Form.Item>
    //         </Col>
    //       </Row>
    //       <Row gutter={16}>
    //         <Col xs={24} sm={12}>
    //           <Form.Item
    //             label="Your number"
    //             name="contactNumber"
    //             rules={[{ required: true }]}
    //           >
    //             <Input size="large" disabled />
    //           </Form.Item>
    //         </Col>
    //         <Col xs={24} sm={12}>
    //           <Form.Item
    //             label="Your address"
    //             name="contactAddress"
    //             rules={[{ required: true }]}
    //           >
    //             <Input size="large" disabled />
    //           </Form.Item>
    //         </Col>
    //       </Row>
    //     </div>
    //   ),
    // },
  ];

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        contactName: user?.name || "",
        contactEmail: user?.email || "",
        contactNumber: user?.phone || "",
        contactAddress: user?.address || "",
        priceType: "THB",
        bathrooms: "1",
        bedrooms: "1",
        listingType: "forSale",
        propertyType: propertyType || "condo",
      }}
      onValuesChange={handleValuesChange}
      className="lg:p-10 p-5 bg-dark2/10"
    >
      <DashboardHeader
        title="Create Property"
        description="We are glad to see you again!"
      />
      <Steps current={currentStep}>
        {sections.map((section, index) => (
          <Steps.Step key={index} title={section.title} />
        ))}
      </Steps>
      <div className="mt-5">{sections[currentStep].content}</div>
      <div
        className={`flex ${
          currentStep > 0 ? "justify-between" : "justify-end"
        } justify-end mt-4`}
      >
        {currentStep > 0 && (
          <Button type="default" size="large" onClick={handlePreviousStep}>
            Previous
          </Button>
        )}
        {currentStep < sections.length - 1 && (
          <Button
            className="bg-blue-500 text-white"
            type="primary"
            size="large"
            onClick={handleNextStep}
            htmlType="submit"
          >
            Next
          </Button>
        )}
        {currentStep === sections.length - 1 && (
          <Button
            className="bg-blue-500 text-white"
            type="primary"
            size="large"
            disabled={!(user.phone && user.address)}
            onClick={handleUpdateButton}
          >
            Create
          </Button>
        )}
      </div>
    </Form>
  );
};

export default CreateProperty;
