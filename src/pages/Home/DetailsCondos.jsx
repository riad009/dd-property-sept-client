import React from 'react';

const DetailsCondos = () => {
    return (
        <div>
              <section
            >

              <div className="relative">
                <img
                  src="https://photos.zillowstatic.com/fp/700731fde9d8bc354c5fea78d8a3a755-p_e.jpg"
                  alt="card_image"
                  className={`${"rounded-t"}`}
                  style={{ height: '200px', width: '300px' }} // Adjust the height and width as needed
                />


                <span
                  className={`absolute -bottom-2 left-0 bg-danger text-white px-2 text-[0.7rem] rounded-r-md`}
                >
                  condo
                </span>

              </div>
              <div className="my-4">
                <p className="text-md font-semibold">{property._id}</p>
                <p className="text-sm text-dark2">{property.count} Listings</p>

              </div>

            </section>
        </div>
    );
};

export default DetailsCondos;