import { Divider } from "antd";

const Details = ({ p }) => {
  return (
    <div>
      <h1 className="text-2xl">Details</h1>
      <div className="grid grid-cols-2 gap-x-5">
        <div>
          <p className="text-sm text-dark2">Property Type</p>
          <p className="text-sm text-dark font-[500]">{p.type}</p>
        </div>
        <div>
          <p className="text-sm text-dark2">Province</p>
          <p className="text-sm text-dark font-[500]">{p.province}</p>
        </div>
        <Divider />
        <Divider />
        <div>
          <p className="text-sm text-dark2">City</p>
          <p className="text-sm text-dark font-[500]">{p?.city}</p>
        </div>
        <div>
          <p className="text-sm text-dark2">Location</p>
          <p className="text-sm text-dark font-[500]">{p.location}</p>
        </div>
        <Divider />
        <Divider />
        {p.rentDuration ?
          <div>
            <p className="text-sm text-dark2">Rent duration</p>
            <p className="text-sm text-dark font-[500]">
              {p.rentDuration || "N/A"}
            </p>
          </div> : <></>
        }
        <div>
          <p className="text-sm text-dark2">Listing Type</p>
          <p className="text-sm text-dark font-[500]">{p.listingType}</p>
        </div>
        <Divider />
        {/* <Divider />
        <div>
          <p className="text-sm text-dark2">Listed On</p>
          <p className="text-sm text-dark font-[500]">{p.date}</p>
        </div>
        <div>
          <p className="text-sm text-dark2">Price Type</p>
          <p className="text-sm text-dark font-[500]">{p.priceType}</p>
        </div> */}

        {/* <Divider /> */}
        <Divider />
      </div>
    </div>
  );
};

export default Details;
