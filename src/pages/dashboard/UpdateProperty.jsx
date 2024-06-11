import React from "react";

import DashboardHeader from "./DashboardHeader";

import axios from "axios";
import { Form, Input } from "antd";
import { useParams } from "react-router-dom";

const UpdateProperty = () => {
  const [form] = Form.useForm();

  const { id } = useParams();

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
      <div className="mt-5">
        <div className="bg-white p-10 rounded-lg">
          <h1 className="mb-5 font-semibold text-2xl">Location</h1>

          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row gap-4">
              <Form.Item
                label="Name of the property"
                name="propertyName"
                className="w-full"
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item label="Province" name="province" className="w-full">
                <Input size="large" />
              </Form.Item>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <Form.Item label="City" name="city" className="w-full">
                <Input size="large" />
              </Form.Item>
              <Form.Item label="Location" name="location" className="w-full">
                <Input size="large" />
              </Form.Item>
            </div>
          </div>
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
