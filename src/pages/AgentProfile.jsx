import { Link, useParams } from "react-router-dom";
import banner from "../assets/greyBanner.svg";
import SmallContainer from "../shared/SmallContainer";
import Share from "../components/Share";
import Button from "../components/Button";
import Verified from "../components/Verified";

const AgentProfile = () => {
  const { id: agentId } = useParams();

  const agentInfo = {
    id: 1,
    name: "Krittawan Talomkham",
    title: "Freelance Real Estate Agent",
    image: "https://th1-cdn.pgimgs.com/agent/15414137/APHO.116034286.V300.jpg",
    status: "verified",
    company_logo:
      "https://th2-cdn.pgimgs.com/agency/30/CLOGO.68060144.V120.jpg",
    phoneNumber: "+66 89 937 5511",
  };

  return (
    <div>
      <img
        className="w-full h-80 object-cover"
        src={banner}
        alt="grey_banner"
      />
      <SmallContainer>
        <div className="-mt-28 flex items-center p-10">
          <div className="relative">
            <img
              className="h-40 border-4 border-white object-cover w-40 rounded-full"
              src={agentInfo.image}
              alt=""
            />
            <div className="absolute bottom-0 left-1/2 trasnform -translate-x-1/2">
              <Verified />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="font-semibold text-3xl mb-5">{agentInfo.name}</h1>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  className="w-16"
                  src={agentInfo.company_logo}
                  alt="company_logo"
                />
                <h1 className="text-2xl">{agentInfo.title}</h1>
              </div>
              <div className="flex items-center gap-2">
                <Share />
                <Link
                  className="rounded py-1 px-4 bg-danger text-white"
                  to="#contactSection"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SmallContainer>
    </div>
  );
};

export default AgentProfile;
