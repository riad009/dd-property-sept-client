import React from "react";
import ProfileInput from "../ProfileInput";

const LocationStep = () => {
  return (
    <div className="lg:p-10 p-5 bg-white rounded-lg">
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
        <ProfileInput
          label="Address"
          // value={address}
          // onChange={(e) => setAddress(e.target.value)}
        />
        <ProfileInput
          label="District"
          // value={district}
          // onChange={(e) => setdistrict(e.target.value)}
        />
        <ProfileInput
          label="City"
          // value={city}
          // onChange={(e) => setCity(e.target.value)}
        />
        <ProfileInput
          label="Neighborhood"
          // value={neighborhood}
          // onChange={(e) => setNeighborhood(e.target.value)}
        />
        <ProfileInput
          label="Zip"
          // value={zip}
          // onChange={(e) => setZip(e.target.value)}
        />
        <ProfileInput
          label="Country"
          // value={country}
          // onChange={(e) => setCountry(e.target.value)}
        />
        <ProfileInput
          label="Google Map Street View"
          // value={googleMapStreetView}
          // onChange={(e) => setGoogleMapStreetView(e.target.value)}
        />
      </div>
    </div>
  );
};

export default LocationStep;
