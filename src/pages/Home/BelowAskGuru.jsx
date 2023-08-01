import React from "react";
import SmallContainer from "../../shared/SmallContainer";
import image1 from "../../assets/most-properties-red.svg";
import image2 from "../../assets/user-reviews-red.svg";
import image3 from "../../assets/overseas-property-red.svg";
import image4 from "../../assets/latest-launches-red.svg";
import RedImage from "../../components/RedImage";

const BelowAskGuru = () => {
  return (
    <SmallContainer extraClasses="p-10">
      <div className="flex gap-10 md:overflow-x-hidden overflow-x-scroll">
        <RedImage
          image={image1}
          title="Most Properties"
          description={
            <p className="text-xs">
              Either you are looking to{" "}
              <span className="text-danger">Sell, Buy</span> or{" "}
              <span className="text-danger">Rent</span> a Property, our listing
              database is the most comprehensive one that you can find in
              Thailand.
            </p>
          }
        />
        <RedImage
          image={image2}
          title="Most Properties"
          description={
            <p className="text-xs">
              Either you are looking to{" "}
              <span className="text-danger">Sell, Buy</span> or{" "}
              <span className="text-danger">Rent</span> a Property, our listing
              database is the most comprehensive one that you can find in
              Thailand.
            </p>
          }
        />
        <RedImage
          image={image4}
          title="Most Properties"
          description={
            <p className="text-xs">
              Either you are looking to{" "}
              <span className="text-danger">Sell, Buy</span> or{" "}
              <span className="text-danger">Rent</span> a Property, our listing
              database is the most comprehensive one that you can find in
              Thailand.
            </p>
          }
        />
        <RedImage
          image={image3}
          title="Most Properties"
          description={
            <p className="text-xs">
              Either you are looking to{" "}
              <span className="text-danger">Sell, Buy</span> or{" "}
              <span className="text-danger">Rent</span> a Property, our listing
              database is the most comprehensive one that you can find in
              Thailand.
            </p>
          }
        />
      </div>
    </SmallContainer>
  );
};

export default BelowAskGuru;
