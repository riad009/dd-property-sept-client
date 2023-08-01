import SmallContainer from "../../shared/SmallContainer";
import askGuru from "../../assets/ask-guru.svg";

const AskGuru = () => {
  return (
    <div className="p-16">
      <SmallContainer>
        <div className="bg-dark2/10 w-1/2 text-center p-5">
          <img className="w-1/3 mx-auto" src={askGuru} alt="ask" />
          <h1 className="text-xl font-semibold">Ask Guru</h1>
          <p>
            Make confident property decisions with advice from our PropertyGuru
            community of experts
          </p>
        </div>
      </SmallContainer>
    </div>
  );
};

export default AskGuru;
