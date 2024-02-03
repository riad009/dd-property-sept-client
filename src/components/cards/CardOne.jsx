import Button from "../Button";

const CardOne = ({
  property,
  image,
  type,
  title,
  text,
  shadow,
  price,
  typeColor = "bg-danger",
  clickEvent,
}) => {
  return (
    <div
      onClick={clickEvent}
      className={`${
        shadow && "md:min-w-min min-w-full shadow bg-white rounded-b"
      } cursor-pointer`}
    >
      <div className="relative">
        <img
          src={property?.coverImage}
          alt="card_image"
          className={`${shadow && "rounded-t"}`}
          style={{ height: "200px", width: "300px" }} // Adjust the height and width as needed
        />

        {!shadow && (
          <span
            className={`absolute -bottom-2 left-0 ${typeColor} text-white px-2 text-[0.7rem] rounded-r-md`}
          >
            {type}
          </span>
        )}
      </div>
      <div className={`${shadow && "px-2 py-3 flex flex-col gap-1"}`}>
        {shadow && (
          <h1>
            <span className="mr-1 ">&#3647;</span>
            {property?.price}
          </h1>
        )}
        {shadow && <h1>{type}</h1>}
        <h6 className={`${shadow ? "mt-0" : "mt-3"} text-lg  font-semibold`}>
          {property?.headline}
        </h6>
        <p className="text-sm text-dark2">
          {property?.location} {property.postalCode}
        </p>
        {shadow && (
          <small className="mt-3 border w-fit border-blue-200 text-[0.7em] px-3 rounded">
            Land
          </small>
        )}
      </div>
    </div>
  );
};

export default CardOne;
