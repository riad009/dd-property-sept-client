const Facilities = ({ property }) => {
  return (
    <div id="facilities">
      <h1 className="text-2xl font-semibold">Facilities and Amenities</h1>
      <div className="sm:grid flex flex-col grid-cols-2 gap-3 mt-5">
        {Array.isArray(property.amenities) && property.amenities.length > 0 ? (
          property.amenities.map((f, index) => (
            <h1 className="font-[450] text-xl" key={index}>
              {f}
            </h1>
          ))
        ) : (
          <p>This property does not have any amenities.</p>
        )}
      </div>
    </div>
  );
};

export default Facilities;
