// import React, { useState } from 'react';
// import { Form, Upload, Input } from 'antd';
// import { PlusOutlined } from '@ant-design/icons';

// const MediaStep = () => {
//   const [fileList, setFileList] = useState([]);

//   const handleChange = ({ fileList }) => setFileList(fileList);

//   const handleImageClick = (index) => {
//     if (index !== 0) {
//       const newFileList = [...fileList];
//       const [clickedImage] = newFileList.splice(index, 1);
//       newFileList.unshift(clickedImage);
//       setFileList(newFileList);
//     }
//   };

//   return (
//     <div className="bg-white p-10 rounded-lg">
//       <h1 className="mb-5 font-semibold text-2xl">Update Listing: Media</h1>
//       <Form.Item label="Add Photos">
//         <Upload
//           listType="picture-card"
//           multiple
//           maxCount={10}
//           beforeUpload={() => false}
//           fileList={fileList}
//           onChange={handleChange}
//           itemRender={(originNode, file, currFileList) => (
//             <div onClick={() => handleImageClick(currFileList.indexOf(file))}>
//               {originNode}
//             </div>
//           )}
//         >
//           {fileList.length >= 10 ? null : (
//             <div>
//               <PlusOutlined />
//               <div style={{ marginTop: 8 }}>Upload Image</div>
//             </div>
//           )}
//         </Upload>
//       </Form.Item>

//       {fileList.length > 0 && (
//         <Form.Item label="Cover Photo">
//           <Upload
//             listType="picture-card"
//             fileList={[fileList[0]]}
//             showUploadList={{ showPreviewIcon: false, showRemoveIcon: false }}
//             itemRender={(originNode) => (
//               <div onClick={() => handleImageClick(0)}>
//                 {originNode}
//               </div>
//             )}
//           />
//         </Form.Item>
//       )}

//       {fileList.length > 1 && (
//         <Form.Item label="Other Photos">
//           <Upload
//             listType="picture-card"
//             fileList={fileList.slice(1)}
//             showUploadList={{ showPreviewIcon: false, showRemoveIcon: false }}
//             itemRender={(originNode, file) => (
//               <div onClick={() => handleImageClick(fileList.indexOf(file))}>
//                 {originNode}
//               </div>
//             )}
//           />
//         </Form.Item>
//       )}

//       <Form.Item
//         name="video"
//         label="Add Video"
//         rules={[
//           {
//             type: 'url',
//             message: 'Please enter a valid URL',
//           },
//           { required: true },
//         ]}
//       >
//         <Input placeholder="Provide a video link from YouTube" />
//       </Form.Item>
//     </div>
//   );
// };

// export default MediaStep;


import { Button, Upload } from "antd";

import UploadDragger from "../UploadDragger";
import { useEffect } from "react";

import CoverUpload from "../CoverUpload";
import FormInput from "../forms/FormInput";

const MediaStep = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="bg-white"
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
      }}
    >
      <p
        style={{
          fontSize: "28px",
          marginBottom: "10px",
        }}
        className="font-semibold"
      >
        Create Listing: Media
      </p>

      <div className="max-w-[1050px]">
        <div>
          <p
            style={{
              fontSize: "24px",
              marginBottom: "10px",
            }}
            className="inline-flex items-center gap-2 font-medium"
          >
            Add Cover Photo{" "}
            <span className="text-red-600 text-sm">(Required*)</span>
          </p>
          <p
            style={{
              fontSize: "16px",
              marginBottom: "14px",
            }}
            className=""
          >
            Your listing performs better by adding quality photos. File types
            must be .jpg, .jpeg, or .png (up to 10MB each).
          </p>
          <CoverUpload />
          <hr className="my-12" />
        </div>
        <div>
          <p
            style={{
              fontSize: "24px",
              marginBottom: "10px",
            }}
            className="inline-flex items-center gap-2 font-medium"
          >
            Add Other Photos{" "}
            <span className="text-red-600 text-sm">(Required*)</span>
          </p>
          <p
            style={{
              fontSize: "16px",
              marginBottom: "14px",
            }}
            className=""
          >
            Your listing performs better by adding quality photos. File types
            must be .jpg, .jpeg, or .png (up to 10MB each).
          </p>
          <UploadDragger />
          <hr className="my-12" />
        </div>
        <div>
          <p
            style={{
              fontSize: "24px",
              marginBottom: "10px",
            }}
            className="inline-flex items-center gap-2 font-medium"
          >
            Add Video
          </p>

          <p
            style={{
              fontSize: "16px",
              marginBottom: "14px",
            }}
            className=""
          >
            Provide a video link from youtube
          </p>
          {/* <VideoUploadDragger /> */}
          <div className="w-full">
            <FormInput
              type="url"
              name="video"
              size="large"
              placeholder="Link"
              required={false}
            />
          </div>
        </div>
        <div>
          {/* <p
            style={{
              fontSize: "24px",
              marginBottom: "10px",
            }}
            className="inline-flex items-center gap-2 font-medium"
          >
            Add Virtual Tours
          </p>
          <p
            style={{
              fontSize: "16px",
              marginBottom: "14px",
            }}
            className=""
          >
            +5% listing quality score by adding a Virtual Tour
          </p>
          <UploadDragger />
          <hr className="my-12" /> */}
        </div>
      </div>
    </div>
  );
};

export default MediaStep;
