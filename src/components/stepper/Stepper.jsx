import React, { useContext, useEffect, useState } from "react";
import { Button, message, Steps } from "antd";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../utils/local-storage";
import { FormProvider, useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

const Stepper = ({ steps, submitHandler, navigateLink }) => {
  const {
    furnishObjects,
    unitFeatures,
    furnishValue, //type
    availabilityForLiveTour,
    imageUrls,
    videoUrls,
    listingType,
    user,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   setToLocalStorage("step", JSON.stringify({ step: current }));
  // }, [current]);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const methods = useForm();

  const { handleSubmit, reset } = methods;

  const allFields = {
    availabilityForLiveTour: "",
    bathrooms: "",
    bedrooms: "",
    descriptionEnglish: "",
    descriptionThai: "",
    email: "",
    facingFrontDoor: "",
    floorPosition: "",
    floorSize: "",
    furnishObjects: "",
    furnishType: "",
    headline: "",
    images: "",
    listingPrice: "",
    listingType: "",
    location: "",
    maidrooms: "",
    postalCode: "",
    priceType: "",
    propertyType: "",
    referenceNote: "",
    unitFeatures: "",
    videos: "",
  };

  const handleSubmitForm = async (data) => {
    if (current === steps.length - 1) {
      data.email = user?.email;
      data.listingType = listingType;
      data.furnishType = furnishValue;
      data.furnishObjects = furnishObjects;
      data.unitFeatures = unitFeatures;
      data.images = imageUrls;
      data.videos = videoUrls;
      data.availabilityForLiveTour = availabilityForLiveTour;

      console.log({ data });

      const validateForm = () => {
        const requiredFields = [
          "bathrooms",
          "bedrooms",
          "descriptionEnglish",
          "descriptionThai",
          "floorSize",
          "headline",
          "images",
          "listingPrice",
          "listingType",
          "location",
          "maidrooms",
          "postalCode",
          "priceType",
          "propertyType",
          "referenceNote",
        ];

        for (const key of requiredFields) {
          const value = allFields[key];

          if (
            value === "" ||
            value === null ||
            value === undefined ||
            (Array.isArray(value) && value.length === 0)
          ) {
            // alert(`${key} is required`);
            message.error(`Please fill out all Required Fields to proceed!`);
            return false;
          }
        }

        return true;
      };

      if (validateForm()) {
        try {
          const response = await axios.post(
            "https://dd-property-sept-server.vercel.app/post/property",
            data
          );
          console.log(response.data);
          if (response?.status === 200) {
            message.success("Property Listing Successfully!");
            submitHandler(data);
            reset();

            navigate("/dashboard/my-properties");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("failed");
      }
    } else if (current < steps.length - 1) {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="lg:p-10 p-5  bg-dark2/10">
      <div>
        <Steps
          current={current}
          items={items}
          style={{
            marginBottom: "20px",
          }}
        />
      </div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div>{steps[current].content}</div>
          <div>
            <div
              style={{ marginTop: 24 }}
              className="flex items-center justify-between"
            >
              <div>
                {current > 0 && (
                  <p
                    onClick={() => prev()}
                    className="inline-flex items-center cursor-pointer text-orange-700"
                  >
                    <IoChevronBack /> Back
                  </p>
                )}
              </div>
              <div>
                {current < steps.length - 1 && (
                  <Button
                    className="bg-blue-500"
                    type="primary"
                    htmlType="submit"
                    // onClick={() => next()}
                  >
                    Next
                  </Button>
                )}
                {current === steps.length - 1 && (
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="bg-green-500"
                  >
                    Done
                  </Button>
                )}
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Stepper;
