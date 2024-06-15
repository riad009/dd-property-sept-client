import React, { useEffect, useState } from "react";
import DashboardHeader from "./DashboardHeader";
import axios from "axios";
import { Form, Input, Button, Row, Col, Select, Upload } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";

const { Option } = Select;

const UpdateProperty = () => {
  const [form] = Form.useForm();
  const [propertyData, setPropertyData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isModified, setIsModified] = useState(false);
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
    form.setFieldsValue(propertyData);
    setIsModified(false);
  }, [propertyData, form]);

  const handleUpdateButton = async () => {
    setIsLoading(true);
    const values = form.getFieldsValue();
    const formData = new FormData();

    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        formData.append(key, values[key]);
      }
    }

    // Append cover photo file if uploaded
    if (values.coverPhoto?.fileList?.length) {
      formData.append('coverImage', values.coverPhoto.fileList[0].originFileObj);
    }

    // Append other photos files if uploaded
    if (values.otherPhotos?.fileList?.length) {
      values.otherPhotos.fileList.forEach(file => {
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
        alert(res.data.message);
      }
    } catch (error) {
      console.error("Error updating property:", error.response || error.message);
      setIsLoading(false);
    }
  };

  const handleValuesChange = () => {
    setIsModified(true);
  };

  if (isLoading) {
    return <Loader />;
  }

  const {
    propertyName, province, city, location, listingType, price, bedrooms,
    bathrooms, floorSize, headline, video, coverImage = [], imageUrls = [], referenceNote,
    descriptionEnglish, size, propertyType, rentDuration, contactName, contactEmail,
    contactNumber, contactAddress, priceType
  } = propertyData;

  const cover = coverImage.map((url, index) => ({
    uid: `${-index}`,
    name: `cover_photo${index}.png`,
    status: 'done',
    url,
  }));

  const images = imageUrls.map((url, index) => ({
    uid: `${-index}`,
    name: `other_photo${index}.png`,
    status: 'done',
    url,
  }));

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

      {/* Location Section */}
      <div className="mt-5">
        <div className="bg-white p-10 rounded-lg">
          <h1 className="mb-5 font-semibold text-2xl">Update Location</h1>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Name of the property" name="propertyName" rules={[{ required: true }]}>
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Province" name="province" rules={[{ required: true }]}>
                <Input size="large" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="City" name="city" rules={[{ required: true }]}>
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Location" name="location" rules={[{ required: true }]}>
                <Input size="large" />
              </Form.Item>
            </Col>
          </Row>
        </div>
      </div>

      {/* Details Section */}
      <div className="mt-5">
        <div className="bg-white p-10 rounded-lg">
          <h1 className="mb-5 font-semibold text-2xl">Update Details</h1>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Price" name="price" rules={[{ required: true }]}>
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              {listingType === "forSale" || propertyType === "Land" ? (
                <Form.Item label={priceType} name="priceType" rules={[{ required: true }]}>
                  <Input size="large" disabled />
                </Form.Item>
              ) : (
                <Form.Item label="Type" name="rentDuration" rules={[{ required: true }]}>
                  <Select size="large" placeholder="Select Type">
                    <Option value="Daily">Daily</Option>
                    <Option value="Monthly">Monthly</Option>
                    <Option value="Yearly">Yearly</Option>
                  </Select>
                </Form.Item>
              )}
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Bedrooms" name="bedrooms" rules={[{ required: true }]}>
                <Select size="large" placeholder="Select Bedrooms">
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
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Floor Size" name="floorSize" rules={[{ required: true }]}>
                <Input size="large" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Reference Note" name="referenceNote" rules={[{ required: true }]}>
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Headline" name="headline" rules={[{ required: true }]}>
                <Input size="large" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24}>
              <Form.Item label="Description" name="descriptionEnglish" rules={[{ required: true }]}>
                <Input.TextArea size="large" rows={4} />
              </Form.Item>
            </Col>
          </Row>
        </div>
      </div>

      {/* Media Section */}
      <div className="mt-5">
        <div className="bg-white p-10 rounded-lg">
          <h1 className="mb-5 font-semibold text-2xl">Update Listing: Media</h1>
          <Form.Item
            name="coverPhoto"
            label="Add Cover Photo"
          >
            <Upload
              listType="picture-card"
              maxCount={1}
              beforeUpload={() => false}
              defaultFileList={cover}
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload Cover Image</div>
              </div>
            </Upload>
          </Form.Item>

          <Form.Item
            name="otherPhotos"
            label="Add Photos"
          >
            <Upload
              listType="picture-card"
              multiple
              maxCount={10}
              beforeUpload={() => false}
              defaultFileList={images}
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload Image</div>
              </div>
            </Upload>
          </Form.Item>

          <Form.Item
            name="video"
            label="Add Video"
            rules={[
              {
                type: 'url',
                message: 'Please enter a valid URL',
              },
            ]}
          >
            <Input placeholder="Provide a video link from YouTube" />
          </Form.Item>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="mt-5">
        <div className="bg-white p-10 rounded-lg">
          <h1 className="mb-5 font-semibold text-2xl">Update Your Contact Information</h1>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Your name" name="contactName" rules={[{ required: true }]}>
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Your Email" name="contactEmail" rules={[{ required: true }]}>
                <Input size="large" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Your number" name="contactNumber" rules={[{ required: true }]}>
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Your address" name="contactAddress" rules={[{ required: true }]}>
                <Input size="large" />
              </Form.Item>
            </Col>
          </Row>
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          type="primary"
          size="large"
          onClick={handleUpdateButton}
          disabled={!isModified}
          className="bg-green-400 text-black py-2 px-4 rounded-lg mt-4 w-full"
        >
          Update
        </Button>
      </div>
    </Form>
  );
};

export default UpdateProperty;
