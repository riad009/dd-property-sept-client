import TextRed from "../TextRed";

const ConstructionCard = ({ constructor }) => {
  const { image, type, title, createdAt, description, name, company_logo } =
    constructor;

  return (
    <div className="relative shadow-lg bg-white p-2 rounded-xl">
      <img className="rounded-lg" src={company_logo} alt="thumb" />
      <h1 className="my-2 font-semibold">{title}</h1>
      <h1>
        {createdAt
          ? new Date(createdAt).toDateString()
          : new Date().toDateString}
      </h1>
      <h1 className="my-2 text-sm">{description}</h1>
      <hr />
      <div className="py-3 flex justify-between items-center">
        <div className="gap-2 flex items-center">
          <img className="h-8 w-8 rounded-full" src={image} alt="avatar" />
          <h1>{name}</h1>
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
