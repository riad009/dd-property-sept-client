import DetailsStep from "../../components/Steps/DetailsStep";
import LocationStep from "../../components/Steps/LocationStep";
import MediaStep from "../../components/Steps/MediaStep";

import Stepper from "../../components/stepper/Stepper";
import SummaryStep from "../../components/Steps/SummaryStep";
import StepperLand from "../../components/stepper/StepperLand";

const CreateListingLand = () => {
  const steps = [
    {
      title: "Location",
      content: <LocationStep />,
    },
    {
      title: "Details",
      content: <DetailsStep />,
    },

    {
      title: "Media",
      content: <MediaStep />,
    },
    {
      title: "Summary",
      content: <SummaryStep />,
    },

    // {
    //   title: "Property Details",
    //   content: <PropertyDetails />,
    // },
  ];

  const handleStudentSubmit = (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StepperLand
      submitHandler={(value) => handleStudentSubmit(value)}
      steps={steps}
    />
  );
};

export default CreateListingLand;
