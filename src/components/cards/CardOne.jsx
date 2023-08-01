import Button from "../Button";

const CardOne = ({
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
      className={`${shadow && "shadow bg-white rounded-b"} cursor-pointer`}
    >
      <div className="relative">
        <img
          src={image}
          alt="card_image"
          className={`${shadow && "rounded-t"}`}
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
            <span className="mr-1">&#3647;</span>
            {price}
          </h1>
        )}
        {shadow && <h1>{type}</h1>}
        <h6
          className={`${shadow ? "mt-0" : "mt-3"} line-clamp-2 font-semibold`}
        >
          {title}
        </h6>
        <p className="text-xs text-dark2">{text}</p>
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
