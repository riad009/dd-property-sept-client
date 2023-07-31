import varifiedAgets from "../../assets/VerifiledAgent.svg";
import Button from "../../components/Button";
import SmallContainer from "../../shared/SmallContainer";

const Offers = () => {
  return (
    <SmallContainer extraClasses="sm:mt-40 mt-0 p-2">
      <div className="flex">
        <div className="w-1/2">
          <h1 className="text-2xl mb-2">We'll See You Home</h1>
          <div className="grid gap-2 grid-cols-2">
            <div className="flex text-white bg-danger px-5 py-8 col-span-2 items-center justify-between">
              <div>
                <h2 className="text-2xl mb-5">
                  Buy, sell, rent with confidence & the right agents
                </h2>
                <Button small extraClasses="text-dark bg-white">
                  Verified Agents
                </Button>
              </div>
              <img className="w-24" src={varifiedAgets} alt="agents" />
            </div>
            <div className="flex text-white bg-dark p-5 items-center justify-between">
              <div>
                <h2 className="text-2xl mb-5">
                  Check out hot deals from TH’s leading property developers
                </h2>
                <Button small extraClasses="text-dark bg-white">
                  Verified Agents
                </Button>
              </div>
            </div>
            <div className="flex text-white bg-dark p-5 items-center justify-between">
              <div>
                <h2 className="text-2xl mb-5">
                  Check out hot deals from THis leading property developers
                </h2>
                <Button small extraClasses="text-dark bg-white">
                  Verified Agents
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </SmallContainer>
  );
};

export default Offers;
