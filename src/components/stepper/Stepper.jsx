import React, { useContext, useEffect, useState } from "react";
import { Button, message, Steps } from "antd";

import { FormProvider, useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

const Stepper = ({ steps, submitHandler, navigateLink }) => {
  const { propertyData, setPropertyData, user } = useContext(AuthContext);

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

  let requiredFields;

  if (propertyData?.propertyType !== "Land") {
    requiredFields = [
      "propertyName",
      "propertyType",
      "price",
      "bedrooms",
      "bathrooms",
      "size",
      "floorSize",
      "referenceNote",
      "headline",
      "descriptionEnglish",
      "video",
      "latLng",
      "province",
      "city",
      "location",
      "listingType",
      "coverImage",
      "imageUrls",
      "contactName",
      "contactEmail",
      "contactNumber",
    ];
  } else {
    requiredFields = [
      "propertyName",
      "propertyType",
      "price",
      "size",
      "referenceNote",
      "headline",
      "descriptionEnglish",
      "video",
      "latLng",
      "province",
      "city",
      "location",
      "listingType",
      "coverImage",
      "imageUrls",
      "contactName",
      "contactEmail",
      "contactNumber",
    ];
  }

  const handleSubmitForm = async (data) => {
    if (current === steps.length - 1) {
      data.priceType = "THB";
      data.email = user?.email;
      data.isVerified = false;
      if (propertyData?.propertyType === "Land") {
        delete data.floorSize;
      }

      const combinedObject = {
        ...data,
        ...propertyData,
      };

      console.log({ combinedObject, data, propertyData });

      const validateForm = () => {
        for (const key of requiredFields) {
          const value = combinedObject[key];

          if (key === "latLng") {
            if (
              value === undefined ||
              value === null ||
              value.lat === undefined ||
              value.lng === undefined
            ) {
              console.log({ key, value });
              message.error(`Please fill out all Required Fields to proceed!`);
              return false;
            }
          } else if (
            value === "" ||
            value === null ||
            value === undefined ||
            (Array.isArray(value) && value.length === 0)
          ) {
            console.log({ key, value });
            message.error(`Please fill out all Required Fields to proceed!`);
            return false;
          }
        }

        return true;
      };

      if (validateForm()) {
        console.log(combinedObject)
        // try {
        //   const response = await axios.post("/post/property", combinedObject);
        //   console.log(response.data);
        //   if (response?.status === 200) {
        //     message.success("Property Listing Successfully!");
        //     submitHandler(data);
        //     reset();
        //     setPropertyData({
        //       latLng: {
        //         lat: 13.736717,
        //         lng: 100.523186,
        //       },
        //     });
        //     navigate("/dashboard/my-properties");
        //   }
        // } catch (error) {
        //   console.log(error);
        // }
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
