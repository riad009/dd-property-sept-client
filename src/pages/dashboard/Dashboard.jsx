import { MdHome, MdMessage, MdVerified } from 'react-icons/md';
import DashCard from '../../components/cards/DashCard';
import DashboardHeader from './DashboardHeader';
import { useContext, useMemo } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const ACTIVITIES = [
  { notification: 'Your Listing Shanto Villa has been approved' },
  { notification: 'Congratulations! Your Listing Sunny Haven is now live.' },
  { notification: 'Great news! Your Listing Ocean Breeze has been featured.' },
  {
    notification:
      'Update: Your Listing Tranquil Retreat has received a new inquiry.',
  },
  {
    notification:
      'Attention: Your Listing Enchanted Woods requires some additional information.',
  },
  {
    notification:
      'Reminder: Your Listing Mountain View is scheduled for a photo shoot.',
  },
];

const Dashboard = () => {
  const { dashboardData } = useContext(AuthContext);

  const dashCards = useMemo(
    () => [
      {
        icon: <MdHome />,
        bgColor: 'bg-dark2/10',
        number: dashboardData.myProperty,
        title: 'My Properties',
      },
      {
        icon: <MdHome />,
        bgColor: 'bg-dark2/10',
        number: dashboardData.allProperty,
        title: 'All Properties',
      },
      {
        icon: <MdVerified />,
        bgColor: 'bg-blue-100 text-blue-600',
        number: dashboardData.verifiedProperties,
        title: 'Total verified properties',
      },
      {
        icon: <MdMessage />,
        bgColor: 'bg-sky-100 text-sky-600',
        number: dashboardData.reviews,
        title: 'Total Reviews',
      },
    ],
    [dashboardData]
  );

  const graphData = useMemo(
    () => [
      {
        name: 'My Properties',
        value: dashboardData.myProperty,
      },
      {
        name: 'All Properties',
        value: dashboardData.allProperty,
      },
      {
        name: 'Verified Properties',
        value: dashboardData.verifiedProperties,
      },
      {
        name: 'Reviews',
        value: dashboardData.reviews,
      },
    ],
    [dashboardData]
  );

  return (
    <div className='min-h-[90vh] p-5 md:p-10 bg-dark2/5'>
      <DashboardHeader description='We are glad to see you again' />

      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 my-10'>
        {dashCards.map((card, index) => (
          <DashCard key={index} {...card} />
        ))}
      </div>

      <div className='flex gap-6'>
        <div className='flex-1 w-full h-[400px]'>
          <ResponsiveContainer>
            <LineChart data={graphData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type='monotone'
                dataKey='value'
                stroke='#8884d8'
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className='lg:flex lg:flex-row gap-5'>
          <div className='flex-1 bg-white rounded-md p-5 lg:mt-0 mt-5'>
            <h1>Recent Activities</h1>
            <div className='flex flex-col gap-3 py-5'>
              {ACTIVITIES.map((activity, index) => (
                <div key={index} className='flex gap-2 items-center'>
                  <MdHome className='text-danger bg-danger/10 w-8 h-8 text-5xl rounded-full p-1' />
                  <p className='flex-1'>{activity.notification}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
