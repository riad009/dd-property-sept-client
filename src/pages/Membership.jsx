import MembershipCard from "../components/cards/MembershipCard";
import SmallContainer from "../shared/SmallContainer";

const Membership = () => {
  return (
    <div className="">
      <div className="md:p-20 p-5 text-center bg-danger/10 text-danger md:text-4xl text-2xl font-bold">
        Membership
      </div>
      <SmallContainer extraClasses="flex flex-wrap md:flex-row flex-col justify-center gap-5 items-center md:p-20 p-5">
        <MembershipCard
          planName={"Standard Plan"}
          planeFee={59}
          planFeatures={[
            "50 Property Listing",
            "60 Days Availability",
            "20 Featured Property",
            "Limited Support",
          ]}
        />
        <MembershipCard
          planName={"Standard Plan"}
          planeFee={59}
          planFeatures={[
            "50 Property Listing",
            "60 Days Availability",
            "20 Featured Property",
            "Limited Support",
          ]}
        />
        <MembershipCard
          planName={"Standard Plan"}
          planeFee={59}
          planFeatures={[
            "50 Property Listing",
            "60 Days Availability",
            "20 Featured Property",
            "Limited Support",
          ]}
        />
      </SmallContainer>
    </div>
  );
};

export default Membership;
