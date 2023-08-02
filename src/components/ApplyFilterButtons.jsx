import Button from "./Button";

const ApplyFilterButtons = ({ clearClickEvent, filterClickEvent }) => {
  return (
    <div className="text-dark flex justify-between items-center p-5 text-sm">
      <h6 onClick={clearClickEvent}>Clear</h6>
      <Button
        clickEvent={filterClickEvent}
        extraClasses="bg-dark hover:bg-dark/90 text-white"
      >
        Apply Filter
      </Button>
    </div>
  );
};

export default ApplyFilterButtons;
