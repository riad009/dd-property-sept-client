import { Divider } from "antd";

const Details = ({property}) => {
  console.log(property)
  const {propertyType}=property;
  const {propertyId,completionYear}=property?.detailInformation ||{};
  return (
    <div>
      <h1 className="text-2xl">Details</h1>
      <div className="grid grid-cols-2 gap-x-5">
        <div>
          <p className="text-sm text-dark2">Property Type</p>
          <p className="text-sm text-dark font-[500]">{propertyType} For Sale</p>
        </div>
        <Divider />
        <div>
          <p className="text-sm text-dark2">Completion Year</p>
          <p className="text-sm text-dark font-[500]">{completionYear}</p>
        </div>
        <div>
          <p className="text-sm text-dark2">Listing ID</p>
          <p className="text-sm text-dark font-[500]">{propertyId}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
