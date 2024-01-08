import CreateListingStep from "../../components/Steps/SummaryStep";
import DetailsStep from "../../components/Steps/DetailsStep";
import LocationStep from "../../components/Steps/LocationStep";
import MediaStep from "../../components/Steps/MediaStep";

import Stepper from "../../components/stepper/Stepper";
import SummaryStep from "../../components/Steps/SummaryStep";

const CreateListingSteps = () => {
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
    <Stepper
      submitHandler={(value) => handleStudentSubmit(value)}
      steps={steps}
    />
  );
};

export default CreateListingSteps;
