const DashboardHeader = ({ title, description }) => {
  return (
    <div>
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="text-xs">{description}</p>
    </div>
  );
};

export default DashboardHeader;
