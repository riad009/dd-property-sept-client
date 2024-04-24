import React from "react";

const MoreDetails = ({ property }) => {
  return (
    <div className="">
      <div className="container mx-auto py-8">
        <div className="bg-white rounded-md overflow-hidden shadow-md">
          <div className="p-6">
            {/* <h2 className="text-3xl font-semibold mb-4">{property.propertyTitle}</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-b-2 border-gray-300 pb-4">
                <div className="mb-4">
                  <span className="font-semibold">Property Type:</span>{" "}
                  {property.propertyType}
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Status:</span>{" "}
                  {property.listingType}
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Location:</span>{" "}
                  {property.location}, {property.postalCode}
                  {property.country}
                </div>

                {property?.type === "property" && (
                  <div className="mb-4">
                    <span className="font-semibold">Bedrooms:</span>{" "}
                    {property.bedrooms} |{" "}
                    <span className="font-semibold">Bathrooms:</span>{" "}
                    {property.bathrooms}
                  </div>
                )}
              </div>
              <div>
                <div className="mb-4">
                  <span className="font-semibold">Price:</span> {property.price}{" "}
                  THB
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Price Type:</span>{" "}
                  {property.priceType} {property.pricePostfix}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
