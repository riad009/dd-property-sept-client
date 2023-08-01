const RedImage = ({ image, title, description }) => {
  return (
    <div className="md:min-w-[100px] min-w-[400px] text-center">
      <img
        className="w-full md:w-1/3 h-32 mx-auto"
        src={image}
        alt="red_image"
      />
      <h1 className="font-semibold mb-3">{title}</h1>
      {description}
    </div>
  );
};

export default RedImage;
