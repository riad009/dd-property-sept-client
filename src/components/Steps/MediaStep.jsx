import { Button, Upload } from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import UploadDragger from "../UploadDragger";
import { useEffect } from "react";
const { Dragger } = Upload;

const MediaStep = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, {});
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

      <div className="max-w-[800px]">
        <div>
          <p
            style={{
              fontSize: "24px",
              marginBottom: "10px",
            }}
            className="inline-flex items-center gap-2 font-medium"
          >
            Add Photos <span className="text-red-600 text-sm">(Required*)</span>
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
            Add Videos
          </p>
          <p
            style={{
              fontSize: "16px",
              marginBottom: "14px",
            }}
            className=""
          >
            +5% listing quality score by adding a video. File types must be
            .divx, .3gp, .mp4, .avi, .webm, .mov, .flv, or .htm (up to 50MB
            each).
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
          <hr className="my-12" />
        </div>
      </div>
    </div>
  );
};

export default MediaStep;
