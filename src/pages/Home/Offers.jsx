import varifiedAgets from "../../assets/VerifiledAgent.svg";
import Button from "../../components/Button";
import SmallContainer from "../../shared/SmallContainer";
import beginHome from "../../assets/begin.jpg";

const Offers = () => {
  return (
    <SmallContainer extraClasses="sm:mt-28 mt-0 sm:p-10 p-5">
      <div className="md:flex gap-5">
        <div className="md:flex-1">
          <h1 className="text-2xl mb-2 font-semibold">
            We&lsquo;ll See You Home
          </h1>
          <div className="sm:grid flex flex-col gap-5 grid-cols-2">
            <div className="flex text-white bg-danger p-5 col-span-2 items-center justify-between">
              <div className="overflow-hidden">
                <h2 className="text-2xl mb-5 line-clamp-2">
                  Buy, sell, rent with confidence & the right agents
                </h2>
                <Button small extraClasses="text-danger bg-white">
                  Verified Agents
                </Button>
              </div>
              <img className="w-24" src={varifiedAgets} alt="agents" />
            </div>
            <div className="flex text-white bg-dark p-5 items-center justify-between">
              <div>
                <h2 className="lg:text-lg mb-5 text-md line-clamp-3">
                  Check out hot deals from TH’s leading property developers
                </h2>
                <Button small extraClasses="text-white bg-danger">
                  Easy Own
                </Button>
              </div>
            </div>
            <div className="flex text-dark bg-danger/40 p-5 items-center justify-between">
              <div>
                <h2 className="lg:text-lg mb-5 text-md">
                  Thailand Property Market Outlook 2023
                </h2>
                <Button small extraClasses="text-white bg-danger">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex-1 md:mt-0 mt-5 flex flex-col">
          <h1 className="text-2xl mb-2 font-semibold">
            Begin Your Home Journey ashik
          </h1>
          <img
            src={beginHome}
            alt="begin_home"
            className="flex-1 object-cover"
          />
        </div>
      </div>
    </SmallContainer>
  );
};

export default Offers;
