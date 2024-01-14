import { Divider } from "antd";

const Details = ({ p }) => {
  return (
    <div>
      <h1 className="text-2xl">Details</h1>
      <div className="grid grid-cols-2 gap-x-5">
        <div>
          <p className="text-sm text-dark2">Property Type</p>
          <p className="text-sm text-dark font-[500]">{p.propertyType}</p>
        </div>
        <div>
          <p className="text-sm text-dark2">Furnish Type</p>
          <p className="text-sm text-dark font-[500]">{p.furnishType}</p>
        </div>
        <Divider />
        <Divider />
        <div>
          <p className="text-sm text-dark2">Furnish Objects</p>
          <p className="text-sm text-dark font-[500]">
            {p.furnishObjects.map((obj) => (
              <span key={obj}>{obj}, </span>
            ))}
          </p>
        </div>
        <div>
          <p className="text-sm text-dark2">Facing Front Door</p>
          <p className="text-sm text-dark font-[500]">{p.facingFrontDoor}</p>
        </div>
        <Divider />
        <Divider />
        <div>
          <p className="text-sm text-dark2">Availability For Live Tour</p>
          <p className="text-sm text-dark font-[500]">
            {p.availabilityForLiveTour}
          </p>
        </div>
        <div>
          <p className="text-sm text-dark2">Listed On</p>
          <p className="text-sm text-dark font-[500]">{p.date}</p>
        </div>
        <Divider />
        <Divider />
        <div>
          <p className="text-sm text-dark2">Unit Features</p>
          <p className="text-sm text-dark font-[500]">
            {p.unitFeatures.map((obj) => (
              <span key={obj}>{obj}, </span>
            ))}
          </p>
        </div>
        <div>
          <p className="text-sm text-dark2">Listing Type</p>
          <p className="text-sm text-dark font-[500]">{p.listingType}</p>
        </div>

        <Divider />
        <Divider />
      </div>
    </div>
  );
};

export default Details;
