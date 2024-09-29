import Search from 'antd/es/input/Search';
import DashboardHeader from './DashboardHeader';
import { Select } from 'antd';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProvider';
import moment from 'moment';
import { Link } from 'react-router-dom';

const MyFavorites = () => {
  const [userFavorites, setUserFavorites] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchAllProperties = async () => {
      try {
        const response = await axios.get('/get/allProperties');
        const response2 = await axios.get(`/get/favourites/${user?.email}`);

        const userFavoriteProperties = response?.data?.filter((property) =>
          response2?.data.favorites?.includes(property._id)
        );
        console.log({ userFavoriteProperties });
        setUserFavorites(userFavoriteProperties);
      } catch (error) {
        console.error('Error fetching all properties:', error);
      }
    };

    fetchAllProperties();
  }, [user?.email]);

  return (
    <div className='p-10'>
      <div className='lg:flex items-center justify-between'>
        <DashboardHeader
          title={'My Favourites'}
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
        </tr>

        {userFavorites?.reverse()?.map((p) => {
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
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default MyFavorites;
