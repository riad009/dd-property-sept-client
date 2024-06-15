import React, { useEffect, useState } from "react";

import DashboardHeader from "./DashboardHeader";

import axios from "axios";
import { Form, Input, Button, Row, Col, Select } from "antd";
import { useParams } from "react-router-dom";
import FormInput from "../../components/forms/FormInput";

const UpdateProperty = () => {
  const [form] = Form.useForm();
  // get data from server 
  const [propertyData, setPropertyData] = useState();
  const [isLoading, setIsloading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/property/${id}`)
        setPropertyData(response?.data);
        setIsloading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUserData();
  }, [])
  const handleUpdateButton = async (e) => {
    try {
      const response = await axios.put(`/update/property/${id}`);
    } catch (error) {
      if (error.response) {
        console.error("Error Status:", error.response.status);
        console.error("Error Data:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    }
  };
  // destructring property valuses 
  if (isLoading) {
    return <div>Loading</div>
  }
  const { propertyName, province, city, location, listingType, price, bedrooms, bathrooms, floorSize, headline, 
    referenceNote, descriptionEnglish, size, propertyType,rentDuration } = propertyData
  // update
  return (
    <Form
      form={form}
      layout="vertical"
      // initialValues={{
      //   layout: formLayout,
      // }}

      className="lg:p-10 p-5 bg-dark2/10"
    >
      <DashboardHeader
        title={"Update Property"}
        description={"We are glad to see you again!"}
      />
      {/* Location part */}
      <div className="mt-5">
        <div className="bg-white p-10 rounded-lg">
          <h1 className="mb-5 font-semibold text-2xl">Location</h1>

          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row gap-4">
              <Form.Item
                label="Name of the property"
                name="propertyName"
                className="w-full"
                rules={[{ required: true }]}
              >
                <Input size="large" defaultValue={propertyName} />
              </Form.Item>
              <Form.Item label="Province" name="province" className="w-full" rules={[{ required: true }]}>
                <Input size="large" defaultValue={province} />
              </Form.Item>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <Form.Item label="City" name="city" className="w-full" rules={[{ required: true }]}>
                <Input size="large" defaultValue={city} />
              </Form.Item>
              <Form.Item label="Location" name="location" className="w-full" rules={[{ required: true }]}>
                <Input size="large" defaultValue={location} />
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
      {/* Create Listing: Details */}
      <div className="mt-5">
        <div className="bg-white p-10 rounded-lg">
          <h1 className="mb-5 font-semibold text-2xl">Details</h1>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Price" name="price" className="w-full" rules={[{ required: true }]}>
                <Input size="large" defaultValue={price} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              {listingType === "forSale" || propertyType === "Land" ? (
                <Form.Item label="TBH" name="TBH" className="w-full" rules={[{ required: true }]}>
                  <Input size="large" disabled defaultValue="TBH" />
                </Form.Item>
              ) : (
                <Form.Item label="Type" name="type" className="w-full" rules={[{ required: true }]}>
                  <Select size="large" placeholder="Select Type" defaultValue={rentDuration}>
                    <Option value="daily">Daily</Option>
                    <Option value="monthly">Monthly</Option>
                    <Option value="yearly">Yearly</Option>
                  </Select>
                </Form.Item>
              )}
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Bedrooms" name="bedrooms" className="w-full" rules={[{ required: true }]}>
                <Select defaultValue={bedrooms} size="large" placeholder="Select Bedrooms">
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Bathrooms" name="bathrooms" className="w-full" rules={[{ required: true }]}>
                <Select defaultValue={bathrooms} size="large" placeholder="Select Bathrooms">
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Size m²" name="size" className="w-full" rules={[{ required: true }]}>
                <Input size="large" placeholder="Size" defaultValue={size} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Floor Size" name="floorSize" className="w-full" rules={[{ required: true }]}>
                <Input size="large" placeholder="Floor Size" defaultValue={floorSize} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Reference Note" name="referenceNote" className="w-full" rules={[{ required: true }]}>
                <Input size="large" placeholder="Reference Note" defaultValue={referenceNote} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Headline" name="headline" className="w-full" rules={[{ required: true }]}>
                <Input size="large" placeholder="Headline" defaultValue={headline} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24}>
              <Form.Item label="Description" name="description" className="w-full" rules={[{ required: true }]}>
                <Input.TextArea size="large" placeholder="Description" defaultValue={descriptionEnglish} rows={4} />
              </Form.Item>
            </Col>
          </Row>


          
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-green-400 text-black  py-2 px-4 rounded-lg mt-4 w-full"
          onClick={handleUpdateButton}
        >
          Update
        </button>
      </div>
    </Form>
  );
};

export default UpdateProperty;
