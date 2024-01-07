import { Button, Upload } from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
const { Dragger } = Upload;

const PropertyMedia = () => {
  return (
    <div className="lg:p-10 p-5 bg-white rounded-lg">
      <h1 className="font-semibold mb-5 text-xl">Property Media</h1>
      <div className="w-full">
        <Dragger
        // {...props}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Drag and Drop Images here</p>
        </Dragger>
      </div>
      <h1 className="font-semibold my-5 text-xl">Attachments</h1>
      <div className="w-full">
        <Upload
        // {...fileProps}
        >
          <Button size="large" icon={<UploadOutlined />}>
            Select File
          </Button>
        </Upload>
      </div>
    </div>
  );
};

export default PropertyMedia;
