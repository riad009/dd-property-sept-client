const MembershipCard = ({ planName, planeFee, planFeatures }) => {
  return (
    <div className="text-center border p-10 rounded-lg md:w-fit w-full">
      <h1 className="text-danger font-bold text-4xl">${planeFee}</h1>
      <p>{planName}</p>

      <div className="my-10 md:text-left">
        {planFeatures?.map((feature, index) => (
          <p key={index}>{feature}</p>
        ))}
      </div>

      <button className="border border-danger hover:bg-danger hover:text-white transition-all duration-200 py-1 px-4 mt-5 rounded-md text-danger">
        Select Package
      </button>
    </div>
  );
};

export default MembershipCard;
