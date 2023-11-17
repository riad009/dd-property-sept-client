import { Divider } from "antd";

const Details = ({p}) => {
  return (
    <div>
      <h1 className="text-2xl">Details</h1>
      <div className="grid grid-cols-2 gap-x-5">
        <div>
          <p className="text-sm text-dark2">Property Type</p>
          <p className="text-sm text-dark font-[500]">{p.propertyType}</p>
        </div>
        <div>
          <p className="text-sm text-dark2">Developer</p>
          <p className="text-sm text-dark font-[500]">
            {p.developer}
          </p>
        </div>
        <Divider />
        <Divider />
        <div>
          <p className="text-sm text-dark2">Tenure</p>
          <p className="text-sm text-dark font-[500]">{p.tenure}</p>
        </div>
        <div>
          <p className="text-sm text-dark2">Completion Year</p>
          <p className="text-sm text-dark font-[500]">{p.yearBuild}</p>
        </div>
        <Divider />
        <Divider />
        <div>
          <p className="text-sm text-dark2">Listing ID</p>
          <p className="text-sm text-dark font-[500]">{p.propertyId}</p>
        </div>
        <div>
          <p className="text-sm text-dark2">Listed On</p>
          <p className="text-sm text-dark font-[500]">{p.date}</p>
        </div>
        <Divider />
        <Divider />
      </div>
    </div>
  );
};

export default Details;
