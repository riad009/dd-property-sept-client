import React from "react";
import ProfileInput from "../ProfileInput";
import { Checkbox } from "antd";

const DetailsStep = () => {
  return (
    <div className="lg:p-10 p-5 bg-white rounded-lg">
      <h1 className="font-semibold mb-5 text-xl">Detailed Information</h1>
      <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <ProfileInput
          label="Property ID"
          // value={propertyId}
          // onChange={(e) => setPropertyId(e.target.value)}
        />
        <ProfileInput
          label="Tenure"
          // value={tenure}
          // onChange={(e) => setTenure(e.target.value)}
        />
        <ProfileInput
          label="Developer"
          // value={developer}
          // onChange={(e) => setDeveloper(e.target.value)}
        />
        <ProfileInput
          label="Area Size"
          // value={areaSize}
          // onChange={(e) => setAreaSize(e.target.value)}
        />
        <ProfileInput
          label="Size Prefix"
          // value={sizePrefix}
          // onChange={(e) => setSizePrefix(e.target.value)}
        />
        <ProfileInput
          label="Land Area"
          // value={landArea}
          // onChange={(e) => setLandArea(e.target.value)}
        />
        <ProfileInput
          label="Land Area Size Postfix"
          // value={landAreaSizePostfix}
          // onChange={(e) => setLandAreaSizePostfix(e.target.value)}
        />
        <ProfileInput
          label="Bedrooms"
          // value={bedrooms}
          // onChange={(e) => setBedrooms(e.target.value)}
        />
        <ProfileInput
          label="Bathrooms"
          // value={bathrooms}
          // onChange={(e) => setBathrooms(e.target.value)}
        />
        <ProfileInput
          label="Garages"
          // value={garages}
          // onChange={(e) => setGarages(e.target.value)}
        />
        <ProfileInput
          label="Garage Size"
          // value={garageSize}
          // onChange={(e) => setGarageSize(e.target.value)}
        />
        <ProfileInput
          label="Year Build"
          // value={yearBuild}
          // onChange={(e) => setYearBuild(e.target.value)}
        />
        <ProfileInput
          label="Video URL"
          // value={videoUrl}
          // onChange={(e) => setVideoUrl(e.target.value)}
        />
        <ProfileInput
          label="360 Degree Virtual Tour"
          // value={virtualTourUrl}
          // onChange={(e) => setVirtualTourUrl(e.target.value)}
        />
      </div>
      <div className="mt-5">
        <h1 className="block text-gray-700 font-bold mb-2">Amenities</h1>
        <Checkbox.Group
          className="md:grid grid-cols-4 gap-5"
          // options={plainOptions}
          // onChange={(value) => setAmenities(value)}
        />
      </div>
    </div>
  );
};

export default DetailsStep;
