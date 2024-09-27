import React from 'react';

const ContactDeveloper = ({ owner }) => {
  return (
    <div className='mt-10'>
      <h1 className='text-2xl font-semibold mb-6'>Contact Property Owner</h1>
      <div className='bg-gray-100 p-6 sm:p-8 rounded-lg shadow-md'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          <div className='flex flex-col'>
            <label className='text-gray-600'>Name</label>
            <p className='font-semibold text-lg'>{owner?.name || 'N/A'}</p>
          </div>
          <div className='flex flex-col'>
            <label className='text-gray-600'>Email</label>
            <a
              href={`mailto:${owner?.email}`}
              className='font-semibold text-lg text-blue-600 hover:underline'
            >
              {owner?.email || 'N/A'}
            </a>
          </div>
          <div className='flex flex-col'>
            <label className='text-gray-600'>Mobile number</label>
            <a
              href={`tel:${owner?.phone}`}
              className='font-semibold text-lg text-blue-600 hover:underline'
            >
              {owner?.phone || 'N/A'}
            </a>
          </div>
          <div className='flex flex-col'>
            <label className='text-gray-600'>Address</label>
            <p className='font-semibold text-lg'>{owner?.address || 'N/A'}</p>
          </div>
        </div>
      </div>
      <div className='text-center text-xs mt-4 text-gray-500'>
        Legal Disclaimer: The advertiser assumes all responsibility for the
        advertisement details
      </div>
    </div>
  );
};

export default ContactDeveloper;
