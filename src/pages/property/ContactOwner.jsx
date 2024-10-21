import { message } from 'antd';
import { BiPhone } from 'react-icons/bi';
import { MdEmail, MdWhatsapp } from 'react-icons/md';

const ContactOwner = ({ property }) => {
  const owner = property?.owner;
  const isVerified = property?.isVerified;

  return (
    <div className='w-72 sm:sticky top-16 bg-white rounded-lg shadow-md p-4'>
      <div className='flex items-center mb-4'>
        <img
          src={owner?.image}
          alt={owner?.name}
          className='w-12 h-12 rounded-full mr-3'
        />

        <h2 className='font-semibold text-lg'>
          {owner?.name || 'Property Owner'}
        </h2>

        {!isVerified ? (
          <span className='bg-green-500 text-white text-xs px-2 py-1 rounded-full ml-auto'>
            Verified
          </span>
        ) : (
          <span className='bg-red-500 text-white text-xs px-2 py-1 rounded-full ml-auto'>
            Unverified
          </span>
        )}
      </div>

      <a
        href={`mailto:${owner?.email}`}
        className='w-full bg-red-500 text-white py-2 rounded-md mb-3 flex items-center justify-center'
      >
        <MdEmail className='w-5 h-5 mr-2' />
        Email
      </a>

      <div className='mb-3'>
        <p className='text-sm font-semibold mb-2'>Other ways to enquire</p>
        <a
          href={`https://wa.me/${owner?.phone}`}
          className='w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-md mb-2 flex items-center justify-center'
        >
          <MdWhatsapp className='w-5 h-5 mr-2' />
          WhatsApp
        </a>

        <button
          onClick={() => {
            navigator.clipboard.writeText(owner?.phone);
            message.success('Phone number copied to clipboard');
          }}
          className='w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-md mb-2 flex items-center justify-center'
        >
          <BiPhone alt='Phone' className='w-5 h-5 mr-2' />
          Phone Number
        </button>
      </div>

      <div className='text-center text-xs mt-4 text-gray-500'>
        Legal Disclaimer: The advertiser assumes all responsibility for the
        advertisement details
      </div>
    </div>
  );
};

export default ContactOwner;
