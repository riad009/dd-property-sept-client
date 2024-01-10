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

  const [current, setCurrent] = useState(
    !!getFromLocalStorage("step")
      ? Number(JSON.parse(getFromLocalStorage("step")).step)
      : 0
  );

  useEffect(() => {
    setToLocalStorage("step", JSON.stringify({ step: current }));
  }, [current]);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const methods = useForm();

  const { handleSubmit, reset } = methods;

  const handleSubmitForm = async (data) => {
    data.email = user?.email;
    data.listingType = listingType;
    data.furnishType = furnishValue;
    data.furnishObjects = furnishObjects;
    data.unitFeatures = unitFeatures;
    data.images = imageUrls;
    data.videos = videoUrls;
    data.availabilityForLiveTour = availabilityForLiveTour;

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
        setToLocalStorage("step", JSON.stringify({ step: 0 }));
        navigate("/dashboard/my-properties");
      }
    } catch (error) {
      console.log(error);
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
          <div className="flex justify-end">
            <div style={{ marginTop: 24 }}>
              {current < steps.length - 1 && (
                <Button
                  className="bg-blue-500"
                  type="primary"
                  onClick={() => next()}
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
              {current > 0 && (
                <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                  Previous
                </Button>
              )}
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Stepper;
