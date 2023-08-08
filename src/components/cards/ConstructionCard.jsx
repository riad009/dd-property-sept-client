import TextRed from "../TextRed";

const ConstructionCard = ({ construction }) => {
  const { image, type, title, date, description, sellerName, sellerImage } =
    construction;
  return (
    <div className="relative shadow-lg bg-white p-2 rounded-xl">
      <img className="rounded-lg" src={image} alt="thumb" />
      <h1 className="my-2 font-semibold">{title}</h1>
      <h1>{date}</h1>
      <h1 className="my-2 text-sm">{description}</h1>
      <hr />
      <div className="py-3 flex justify-between items-center">
        <div className="gap-2 flex items-center">
          <img
            className="h-8 w-8 rounded-full"
            src={sellerImage}
            alt="avatar"
          />
          <h1>{sellerName}</h1>
        </div>
        <TextRed>Read More {">"}</TextRed>
      </div>
      <h1 className="absolute top-5 left-5 bg-danger text-white py-1 px-3 rounded-md">
        {type}
      </h1>
    </div>
  );
};

export default ConstructionCard;
