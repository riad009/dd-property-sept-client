import { Upload } from "antd";
import React, { useState } from "react";
import ProfileInput from "../ProfileInput";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const PropertyDetails = () => {
  const [planImage, setPlanImage] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <div className="p-10 bg-white mt-5 rounded-lg">
      <h1 className="font-semibold mb-5 text-xl">Property Media</h1>
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
        <ProfileInput
          label="Plan Bedrooms"
          // value={planBedrooms}
          // onChange={(e) => setPlanBedrooms(e.target.value)}
        />
        <ProfileInput
          label="Plan Bathrooms"
          // value={planBathrooms}
          // onChange={(e) => setPlanBathrooms(e.target.value)}
        />
        <ProfileInput
          label="Plan Price"
          // value={planPrice}
          // onChange={(e) => setPlanPrice(e.target.value)}
        />
        <ProfileInput
          label="Price Postfix"
          // value={pricePostfix}
          // onChange={(e) => setPricePostfix(e.target.value)}
        />
        <ProfileInput
          label="Plan Size"
          // value={planSize}
          // onChange={(e) => setPlanSize(e.target.value)}
        />
        <div className="md:col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Plan Image
          </label>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            // beforeUpload={beforeUpload}
            // onChange={handlePlanImageChange}
          >
            {planImage ? (
              <img src={planImage} alt="avatar" style={{ width: "100%" }} />
            ) : (
              <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </div>
            )}
          </Upload>
          <div className="mt-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="planDescription"
            >
              Description
            </label>
            <textarea
              id="planDescription"
              className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              // value={planDescription}
              // onChange={(e) => setPlanDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
