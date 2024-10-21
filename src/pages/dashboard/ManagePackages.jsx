import { useEffect, useState } from 'react';
import { Input, Button, Form, message } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ManagePackages = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      const response = await axios.get('/packages');
      setPlans(response.data.reverse());
    };
    fetchPlans();
  }, []);

  const handleUpdate = async (index, updatedPlan, packageId) => {
    const newPlans = [...plans];
    newPlans[index] = updatedPlan;
    setPlans(newPlans);
    console.log({ updatedPlan, packageId });
    try {
      // Send the updated plan to the backend
      await axios.put(`/packages/${packageId}`, updatedPlan);
      message.success('Package updated successfully');
    } catch (error) {
      message.error('Failed to update package');
      console.error(error);
    }
  };

  return (
    <div className='p-10 bg-dark2/10'>
      <Link
        className=' bg-blue-500 text-white px-4 py-2 rounded-md'
        to='/dashboard/membership'
      >
        View All Packages
      </Link>
      <div className='max-w-3xl mt-5'>
        {plans?.map((plan, index) => (
          <form
            key={plan.id}
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const values = Object.fromEntries(formData.entries());
              handleUpdate(index, { ...plan, ...values }, plan.packageId);
            }}
            className='mb-10'
          >
            <h2 className='text-2xl font-bold'>{plan.name}</h2>

            <div className='mb-2'>
              <label className='block mb-1'>Name</label>
              <Input
                type='text'
                name='name'
                defaultValue={plan.name}
                className='w-full p-2 border border-gray-300 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block mb-1'>Price</label>
              <Input
                type='text'
                name='price'
                defaultValue={plan.price}
                className='w-full p-2 border border-gray-300 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block mb-1'>Price Duration</label>
              <Input
                type='text'
                name='priceDuration'
                defaultValue={plan.priceDuration}
                className='w-full p-2 border border-gray-300 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block mb-1'>Benefits</label>
              <Input
                type='text'
                name='benefits'
                defaultValue={plan.benefits}
                className='w-full p-2 border border-gray-300 rounded'
              />
            </div>
            <button
              type='submit'
              className='bg-blue-500 text-white px-4 py-2 rounded mt-2'
            >
              Update
            </button>
          </form>
        ))}
      </div>
    </div>
  );
};

export default ManagePackages;
