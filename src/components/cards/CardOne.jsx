const CardOne = ({ image, type, title, text }) => {
  return (
    <div>
      <div className="relative">
        <img src={image} alt="card_image" />
        <span className="absolute -bottom-2 left-0 bg-danger text-white px-2 text-[0.7rem] rounded-r-md">
          {type}
        </span>
      </div>
      <h6 className="mt-3 line-clamp-2">{title}</h6>
      <p className="text-xs text-dark2">{text}</p>
    </div>
  );
};

export default CardOne;
