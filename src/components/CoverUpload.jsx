import React, { useContext, useState } from "react";
import {
  PlusOutlined,
  LoadingOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Button, Image, Modal, Spin, Upload, message } from "antd";
import { AuthContext } from "../providers/AuthProvider";
import { cn } from "../utils/cn";
import axios from "axios";

const CoverUpload = () => {
  const { coverImage, setCoverImage } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleChange = async ({ fileList }) => {
    console.log(fileList);
    setError("");
    setLoading(true);
    const formData = new FormData();

    formData.append("files", fileList[0].originFileObj);

    try {
      const response = await axios.post(
        "https://dd-property-sept-server.vercel.app/upload",
        // "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response?.data);
      setCoverImage(response?.data?.urls);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.error("API request failed:", error);
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload Cover Image</div>
    </div>
  );

  return (
    <>
      {contextHolder}
      <div className="mt-3 mb-3">
        <Upload
          beforeUpload={() => false}
          listType="picture-card"
          accept="image/*"
          fileList={[]}
          onChange={handleChange}
          showUploadList={false}
          disabled={loading}
        >
          {uploadButton}
        </Upload>

        {error && <p className="text-xs text-red-600 py-2">{error}</p>}
      </div>

      {loading ? (
        <div className="flex items-center gap-x-4 ">
          <p className="text-xs text-gray-600">
            Please wait a moment. Image uploading...
          </p>
          <Spin
            indicator={
              <LoadingOutlined
                style={{
                  fontSize: 18,
                }}
                spin
              />
            }
          />
        </div>
      ) : (
        <>
          {coverImage && (
            <div className="mt-6">
              <Image src={coverImage} width={250} height={150} />
            </div>
          )}
        </>
      )}
    </>
  );
};
export default CoverUpload;
