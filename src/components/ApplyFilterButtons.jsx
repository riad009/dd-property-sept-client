import { Button } from "antd";

const ApplyFilterButtons = ({ clearClickEvent, filterClickEvent }) => {
  return (
    <div className="text-dark flex justify-between items-center p-5 text-sm">
      <h6 onClick={clearClickEvent}>Clear</h6>
      <Button onClick={filterClickEvent} className="bg-dark2 text-white h-10">
        Apply Filter
      </Button>
    </div>
  );
};

export default ApplyFilterButtons;
