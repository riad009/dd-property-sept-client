import noBrochure from "../../assets/no-brochure.svg";
import Button from "../../components/Button";

const Brochure = () => {
  return (
    <div className="bg-dark2/5 rounded-lg p-5 flex items-center justify-between sm:mt-20 mt-5">
      <div>
        <h1 className="text-sm">Project brochure currently unavailable</h1>
        <Button extraClasses="border border-dark bg-white mt-5">
          Request Brochure
        </Button>
      </div>
      <img src={noBrochure} alt="no-brochure" />
    </div>
  );
};

export default Brochure;
