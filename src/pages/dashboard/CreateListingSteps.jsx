import CreateListingStep from "../../components/Steps/CreateListingStep";
import DetailsStep from "../../components/Steps/DetailsStep";
import LocationStep from "../../components/Steps/LocationStep";
import PropertyDetails from "../../components/Steps/PropertyDetails";
import PropertyMedia from "../../components/Steps/PropertyMedia";
import Stepper from "../../components/stepper/Stepper";

const CreateListingSteps = () => {
  const steps = [
    {
      title: "Create Listing",
      content: <CreateListingStep />,
    },
    {
      title: "Location",
      content: <LocationStep />,
    },
    {
      title: "Details",
      content: <DetailsStep />,
    },
    // {
    //   title: "Property Media",
    //   content: <PropertyMedia />,
    // },
    {
      title: "Property Details",
      content: <PropertyDetails />,
    },
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
