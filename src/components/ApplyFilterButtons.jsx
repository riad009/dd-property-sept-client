import Button from "./Button";

const ApplyFilterButtons = ({ clearClickEvent, filterClickEvent}) => {
  return (
    <div className="text-dark flex justify-between items-center p-5 text-sm">
      <button onClick={clearClickEvent}
      >Clear</button>
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
