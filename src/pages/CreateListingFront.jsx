import React, { useContext } from "react";
import { BiPlusCircle } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const CreateListingFront = () => {
  const { setPropertyData, propertyData } = useContext(AuthContext);
  return (
    <div className="lg:p-10 p-5 bg-dark2/10">
      <div className="bg-white p-10 rounded-lg text-center">
        <div className="flex justify-center">
          <CiViewList className="w-10 h-10 text-gray-500 mb-3" />
        </div>

        <h2 className="font-bold text-xl mb-2 text-gray-800">
          Create Your First Property Listing
        </h2>
        <p className="text-gray-800">
          This is where you create and manage your property listings
        </p>

        <div className="flex gap-2 justify-center">
          <Link
            onClick={() =>
              setPropertyData((prev) => ({ ...prev, type: "property" }))
            }
            to="/dashboard/create-property"
            className="bg-white border-gray-400 shadow-sm border-2 rounded-lg px-5 mt-3 hover:bg-gray-50 transition-all font-bold py-2 inline-flex items-center text-orange-600"
          >
            <BiPlusCircle className="text-lg mr-2" /> Create Property
          </Link>
          <Link
            onClick={() =>
              setPropertyData((prev) => ({ ...prev, type: "land" }))
            }
            to="/dashboard/create-property"
            className="bg-white border-gray-400 shadow-sm border-2 rounded-lg px-5 mt-3 hover:bg-gray-50 transition-all font-bold py-2 inline-flex items-center text-orange-600"
          >
            <BiPlusCircle className="text-lg mr-2" /> Create Land
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateListingFront;
