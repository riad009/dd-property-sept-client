import { Divider } from 'antd';

const Details = ({ p }) => {
  const date = new Date(p.date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  const makeUppercase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <div>
      <h1 className='text-2xl'>Details</h1>
      <div className='grid grid-cols-2 gap-x-5'>
        <div>
          <p className='text-sm text-dark2 mb-2'>Property Type</p>
          <p className='text-sm text-dark font-[500]'>
            {makeUppercase(p.propertyType)}
          </p>
        </div>
        <div>
          <p className='text-sm text-dark2'>Province</p>
          <p className='text-sm text-dark font-[500]'>{p.province}</p>
        </div>
        <Divider />
        <Divider />
        <div>
          <p className='text-sm text-dark2'>City</p>
          <p className='text-sm text-dark font-[500]'>{p?.city}</p>
        </div>
        <div>
          <p className='text-sm text-dark2'>Address</p>
          <p className='text-sm text-dark font-[500]'>{p.address}</p>
        </div>
        <Divider />
        <Divider />
        {p.rentDuration ? (
          <div>
            <p className='text-sm text-dark2'>Rent duration</p>
            <p className='text-sm text-dark font-[500]'>
              {p.rentDuration || 'N/A'}
            </p>
          </div>
        ) : (
          <></>
        )}
        <div>
          <p className='text-sm text-dark2'>Listing Type</p>
          <p className='text-sm text-dark font-[500]'>
            {p.listingType
              .replace(/([a-z])([A-Z])/g, '$1 $2')
              .replace(/^./, function (str) {
                return str.toUpperCase();
              })}
          </p>
        </div>

        {/* <Divider /> */}
        <div>
          <p className='text-sm text-dark2'>Listed On</p>
          <p className='text-sm text-dark font-[500]'>{formattedDate}</p>
        </div>
        <Divider />
        {/* <div>
          <p className="text-sm text-dark2">Price Type</p>
          <p className="text-sm text-dark font-[500]">{p.priceType}</p>
        </div>  */}

        {/* <Divider /> */}
        <Divider />
      </div>
    </div>
  );
};

export default Details;
