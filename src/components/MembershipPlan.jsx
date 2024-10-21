import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MembershipPlan = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      const response = await axios.get('/packages');
      setPlans(response.data.reverse());
    };
    fetchPlans();
  }, []);

  return (
    <section className='bg-white'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-md text-center mb-8 lg:mb-12'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900'>
            Choose your perfect plan
          </h2>
        </div>
        <div className='space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0'>
          {plans?.map((plan, index) => (
            <div
              key={index}
              className='flex flex-col justify-between p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow'
            >
              <div>
                <h3 className='mb-4 text-2xl font-semibold'>{plan.name}</h3>
                <p className='font-light text-gray-500 sm:text-lg'>
                  Best option for personal use &amp; for your next project.
                </p>
                <div className='flex justify-center items-baseline my-8'>
                  <span className='mr-2 text-2xl font-extrabold'>
                    {plan.price} THB / {plan.priceDuration}
                  </span>
                </div>
                <ul role='list' className='mb-8 space-y-4 text-left'>
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className='flex items-center space-x-3'>
                      <svg
                        className='flex-shrink-0 w-5 h-5 text-green-500'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href='#'
                className='mt-auto text-orange-500 border border-orange-500 bg-transparent hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipPlan;
