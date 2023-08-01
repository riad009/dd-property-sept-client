import SmallContainer from "../../shared/SmallContainer";
import askGuru from "../../assets/ask-guru.svg";
import Button from "../../components/Button";
import TrendingCategory from "../../components/TrendingCategory";

const AskGuru = () => {
  return (
    <div className="sm:p-16 p-5">
      <SmallContainer>
        <div className="bg-dark2/10 sm:w-3/4 sm:mx-auto md:mx-0 md:w-1/2 text-center p-5 rounded">
          <img className="w-1/3 mx-auto" src={askGuru} alt="ask" />
          <h1 className="text-xl font-semibold my-3">Ask Guru</h1>
          <p className="text-sm">
            Make confident property decisions with advice from our PropertyGuru
            community of experts
          </p>
          <div className="flex justify-center gap-3 my-3">
            <Button extraClasses="text-white bg-dark">Ask a Question</Button>
            <Button extraClasses="border border-dark bg-white">
              Browse Questions
            </Button>
          </div>
          <p className="text-sm">Trending Categories</p>
          <div className="grid grid-cols-2 justify-items-center gap-3 text-sm my-3">
            <TrendingCategory title="Home Buying" />
            <TrendingCategory title="Home Buying" />
            <TrendingCategory title="Home Buying" />
            <TrendingCategory title="Home Buying" />
          </div>
        </div>
      </SmallContainer>
    </div>
  );
};

export default AskGuru;
