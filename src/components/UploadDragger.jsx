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
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const UploadDragger = () => {
  const { imageUrls, setImageUrls } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleChange = async ({ fileList }) => {
    if (fileList?.length > 10 || imageUrls?.length > 10) {
      messageApi.destroy();
      return messageApi.open({
        type: "error",
        content: "You can't upload more than 4 images!",
      });
    }
    setLoading(true);
    setError("");

    const exceededFiles = [];
    let latestExceededFiles = [];

    const promises = fileList.map(async (file) => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }

      const fileSizeInMB = file.size / (1024 * 1024);
      if (fileSizeInMB > 10) {
        exceededFiles.push(file);
        return null;
      }
      setError("");
      return file;
    });

    const updatedImageList = (await Promise.all(promises)).filter(Boolean);
    latestExceededFiles = exceededFiles.slice(-1);

    if (latestExceededFiles?.length > 0) {
      console.log({ latestExceededFiles });
      const exceededFileNames = latestExceededFiles
        ?.map((file) => file?.name)
        .join(", ");
      setError(
        `File Size Exceeded for: ${exceededFileNames}. All files must be under 10MB`
      );
      setLoading(false);
      return;
    }

    if (updatedImageList.length > 0) {
      setError("");
      const formData = new FormData();
      updatedImageList.forEach((file) => {
        formData.append("files", file.originFileObj);
      });

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

        setImageUrls(response?.data?.urls);
        setLoading(false);
      } catch (error) {
        setLoading(false);

        console.error("API request failed:", error);
      }
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>
        Upload Image
        {imageUrls?.length > 0 && (
          <p className={cn(imageUrls?.length === 10 && "text-red-600")}>
            {imageUrls?.length}/10
          </p>
        )}
      </div>
    </div>
  );

  const onRemove = (file) => {
    const updatedFileList = imageUrls?.filter((item) => item !== file);
    setImageUrls(updatedFileList);
  };
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
          multiple
          showUploadList={false}
          disabled={loading}
        >
          {imageUrls?.length >= 4 ? null : uploadButton}
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
        <div className="mt-6">
          {imageUrls?.length > 0 && (
            <>
              <div className="flex flex-col md:flex-row items-center flex-wrap gap-4">
                {imageUrls?.map((file, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <Image key={index} src={file} width={250} height={150} />
                    <Button
                      type="danger"
                      className="text-red-600"
                      icon={<DeleteOutlined className="text-red-600" />}
                      onClick={() => onRemove(file)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
export default UploadDragger;
