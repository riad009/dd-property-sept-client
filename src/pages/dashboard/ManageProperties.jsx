import DashboardHeader from './DashboardHeader';
import { Segmented } from 'antd';

import { MdDelete, MdEdit } from 'react-icons/md';
import { useEffect, useState } from 'react';
import {
  AuthContext,
  baseURL,
  useUserContext,
} from '../../providers/AuthProvider';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const ManageProperties = () => {
  const { user } = useContext(AuthContext);

  const [data, setData] = useState([]);

  const [refetch, setrefetch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseURL}/get/emailWise`);
        const result = await response.json();

        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [user?.email, refetch]);

  const handleVerify = async (propertyId) => {
    try {
      const response = await axios.put(`/api/verify/${propertyId}`);
      setrefetch(!refetch);
      alert('verified');
    } catch (error) {
      console.log(error);
    }
  };

  const handleDecline = async (propertyId) => {
    try {
      const response = await axios.put(`/api/decline/${propertyId}`);
      setrefetch(!refetch);
      alert('declined');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='p-10'>
      <div className='lg:flex items-center justify-between'>
        <DashboardHeader
          title={'Manage Properties'}
          description={'We are glad to see you again'}
        />
      </div>
      <table className='md:w-full min-w-[600px] mt-5'>
        <tr className='bg-dark text-white text-left'>
          <th className='p-2'>Image</th>
          <th className='p-2'>Property Name</th>
          <th className='p-2'>Property Type</th>
          <th className='p-2'>Date published</th>
          <th className='p-2'>Status</th>
          <th className='p-2'>Action</th>
        </tr>

        {data?.map((p) => (
          <tr key={p.email} className='border'>
            <td className='p-2'>
              <Link to={`/property/${p._id}`}>
                <img
                  className='w-40 inline rounded-lg'
                  src={p?.coverImage}
                  alt='cover'
                />
              </Link>
            </td>

            <td className='p-2'>{p.propertyName}</td>
            <td className='p-2'>{p.propertyType}</td>
            <td className='p-2'>
              {' '}
              {moment(p.date).format('MMMM Do YYYY, h:mm:ss A')}
            </td>
            <td className='p-2'>
              {p.isVerified ? (
                <button className='font-bold text-green-600'>Verified</button>
              ) : (
                <button className='font-bold text-red-600'>Not verified</button>
              )}
            </td>

            <td>
              <div className='flex gap-2 text-xs'>
                <button
                  className='text-white bg-red-600 px-2 py-1.5 rounded-sm'
                  onClick={() => handleDecline(p?._id)}
                >
                  Decline
                </button>
                <button
                  className='text-white bg-green-600 px-2 py-1.5 rounded-sm'
                  onClick={() => handleVerify(p?._id)}
                >
                  Verify
                </button>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ManageProperties;
