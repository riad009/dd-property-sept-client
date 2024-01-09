import React, { useState } from "react";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Modal, Upload } from "antd";
import { Player } from "video-react";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const VideoUploadDragger = () => {
  const [videoList, setVideoList] = useState([]);

  const handleChange = async ({ fileList }) => {
    const promises = fileList.map(async (file) => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      return file;
    });

    const updatedVideoList = await Promise.all(promises);
    setVideoList(updatedVideoList);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const onRemove = (file) => {
    const updatedFileList = videoList.filter((item) => item.uid !== file.uid);
    setVideoList(updatedFileList);
  };

  return (
    <>
      <Upload
        className="mt-3 mb-3"
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture-card"
        accept=".mp4"
        onChange={handleChange}
        multiple
        showUploadList={false}
      >
        {videoList.length >= 8 ? null : uploadButton}
      </Upload>

      <div className="mt-6">
        {videoList.length > 0 && (
          <>
            <div className="flex flex-col md:flex-row items-center flex-wrap gap-4">
              {videoList.map((file) => (
                <div key={file.uid} className="flex flex-col items-center">
                  <Player
                    key={file.uid}
                    playsInline
                    src={file.url || file.preview}
                    fluid={false}
                    width={250}
                    height={150}
                  />
                  <Button
                    type="danger"
                    icon={<DeleteOutlined />}
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
    </>
  );
};

export default VideoUploadDragger;
