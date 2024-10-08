import DashboardHeader from './DashboardHeader';
import { Pagination, Segmented, Select } from 'antd';

import { MdDelete, MdEdit } from 'react-icons/md';
import { useEffect, useState } from 'react';
import {
  AuthContext,
  baseURL,
  useUserContext,
} from '../../providers/AuthProvider';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';

const MyProperties = () => {
  const { user } = useContext(AuthContext);
  const { handlePropertyid } = useUserContext();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${baseURL}/get/emailWise?email=${user?.email}`
        );
        const result = await response.json();

        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [user?.email]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  console.log({ currentItems });
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //delete code
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${baseURL}/delete/property/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Update the data by refetching or updating the state
        const updatedData = data.filter((item) => item._id !== id);
        setData(updatedData);
      } else {
        console.error('Error deleting property');
      }
    } catch (error) {
      console.error('Error deleting property', error);
    }
  };

  const navigate = useNavigate();

  const handleUpdate = (p) => {
    handlePropertyid(p);
    navigate(`/dashboard/update/${p}`);
  };

  console.log(currentItems.date);

  return (
    <div className='p-10'>
      <div className='lg:flex items-center justify-between'>
        <DashboardHeader
          title={'My Properties'}
          description={'We are glad to see you again'}
        />
      </div>
      <table className='md:w-full min-w-[600px] mt-5'>
        <tr className='bg-dark text-white text-left'>
          <th className='p-2'>Image</th>
          <th className='p-2'>Property name</th>
          <th className='p-2'>Property Type</th>
          <th className='p-2'>Date published</th>
          <th className='p-2'>Province</th>
          <th className='p-2'>City</th>
          <th className='p-2'>Address</th>
          <th className='p-2'>Status</th>

          <th className='p-2'>Action</th>
        </tr>

        {currentItems?.reverse()?.map((p) => {
          return (
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
              <td className='p-2'>{moment(p.date).format('DD.MM.YYYY')}</td>
              <td className='p-2'>{p.province}</td>
              <td className='p-2'>{p.city}</td>
              <td className='p-2'>{p.address}</td>
              <td className='p-2'>
                {p.isVerified ? (
                  <button className='font-bold text-green-600'>Verified</button>
                ) : (
                  <button className='font-bold text-red-600'>
                    Not verified
                  </button>
                )}
              </td>
              {/* <td className="p-2">{p.price} THB</td> */}

              <td>
                <div className='flex gap-2 text-danger'>
                  <Link onClick={() => handleUpdate(p._id)}>
                    {' '}
                    <MdEdit className='bg-danger/10 p-1 text-2xl rounded-md' />
                  </Link>

                  <MdDelete
                    onClick={() => handleDelete(p._id)}
                    className='bg-danger/10 p-1 text-2xl rounded-md'
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
      <Pagination
        className='mt-5 ml-auto w-fit'
        current={currentPage}
        onChange={paginate}
        defaultPageSize={itemsPerPage}
        total={data.length}
      />
    </div>
  );
};

export default MyProperties;
