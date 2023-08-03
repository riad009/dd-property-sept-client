import { Divider } from "antd";

const Details = () => {
  return (
    <div>
      <h1 className="text-2xl">Details</h1>
      <div className="grid grid-cols-2 gap-x-5">
        <div>
          <p className="text-sm text-dark2">Property Type</p>
          <p className="text-sm text-dark font-[500]">Townhouse For Sale</p>
        </div>
        <div>
          <p className="text-sm text-dark2">Developer</p>
          <p className="text-sm text-dark font-[500]">
            Peace & Living - พีซแอนด์ลีฟวิ่ง จำกัด (มหาชน)
          </p>
        </div>
        <Divider />
        <Divider />
        <div>
          <p className="text-sm text-dark2">Tenure</p>
          <p className="text-sm text-dark font-[500]">Freehold</p>
        </div>
        <div>
          <p className="text-sm text-dark2">Completion Year</p>
          <p className="text-sm text-dark font-[500]">2025</p>
        </div>
        <Divider />
        <Divider />
        <div>
          <p className="text-sm text-dark2">Listing ID</p>
          <p className="text-sm text-dark font-[500]">10886175</p>
        </div>
        <div>
          <p className="text-sm text-dark2">Listed On</p>
          <p className="text-sm text-dark font-[500]">2 hours ago</p>
        </div>
        <Divider />
        <Divider />
      </div>
    </div>
  );
};

export default Details;
