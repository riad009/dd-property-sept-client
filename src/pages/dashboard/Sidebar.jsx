import { BiPackage } from 'react-icons/bi';
import Brand from '../../components/Brand';
import {
  MdAddBox,
  MdHome,
  MdLogout,
  MdReviews,
  MdSpaceDashboard,
  MdVerifiedUser,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';

const sidebarItems = {
  main: [
    {
      id: 1,
      route: 'Dashboard',
      path: '/dashboard',
      icon: <MdSpaceDashboard />,
    },
    {
      id: 2,
      route: 'Create Listing',
      path: 'create-listing',
      icon: <MdAddBox />,
      role: ['user', 'agent', 'constructor'],
    },
    {
      id: 3,
      route: 'My Profile',
      path: 'my-profile',
      icon: <MdVerifiedUser />,
      role: ['user', 'agent', 'constructor'],
    },
    // {
    //   id: 3,
    //   route: "Message",
    //   path: "message",
    //   icon: <MdMessage />,
    //   role: "user",
    // },
  ],
  manageListings: [
    {
      id: 4,
      route: 'My Properties',
      path: 'my-properties',
      icon: <MdHome />,
      role: ['user', 'agent', 'constructor'],
      children: [
        {
          route: 'General Elements',
          path: 'general-elements',
          icon: <MdReviews />,
          role: ['user', 'agent', 'constructor'],
        },
        {
          route: 'Advanced Elements',
          path: 'advanced-elements',
          icon: <MdReviews />,
          role: ['user', 'agent', 'constructor'],
        },
        {
          route: 'Editors',
          path: 'editors',
          icon: <MdReviews />,
          role: ['user', 'agent', 'constructor'],
        },
      ],
    },
    {
      id: 5,
      route: 'Manage Properties',
      path: 'manage-properties',
      icon: <MdHome />,
      role: ['admin'],
    },
    {
      id: 6,
      route: 'Reviews',
      path: 'reviews',
      icon: <MdReviews />,
      role: ['user', 'agent', 'constructor'],
      children: [
        {
          route: 'My Reviews',
          path: 'my-reviews',
          icon: <MdReviews />,
          role: ['user', 'agent', 'constructor'],
        },
        {
          route: 'Visitors Reviews',
          path: 'visitors-reviews',
          icon: <MdReviews />,
          role: ['user', 'agent', 'constructor'],
        },
      ],
    },
    // {
    //   id: 7,
    //   route: 'My Favorites',
    //   path: 'my-favorites',
    //   icon: <MdFavorite />,
    //   role: 'user',
    // },
    // {
    //   id: 8,
    //   route: "Saved Search",
    //   path: "saved-search",
    //   icon: <MdSearch />,
    //   role: "user",
    // },
  ],
  manageAccount: [
    {
      id: 9,
      route: 'My package',
      path: 'my-package',
      icon: <BiPackage />,
      role: ['user', 'agent', 'constructor'],
    },
    {
      id: 10,
      route: 'Manage packages',
      path: 'manage-packages',
      icon: <BiPackage />,
      role: ['admin'],
    },
    // {
    //   id: 10,
    //   route: "My Profile",
    //   path: "my-profile",
    //   icon: <MdVerifiedUser />,
    //   role: "user",
    // },
    {
      id: 11,
      route: 'Logout',
      path: '#',
      icon: <MdLogout />,
      role: ['user', 'agent', 'constructor'],
    },
  ],
};

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  console.log({ user });

  return (
    <div className='fixed lg:w-80 md:w-56 w-12 bg-slate-950 h-screen text-white'>
      <div className='h-20 flex items-center justify-center bg-slate-800'>
        <Brand center white />
      </div>
      <div className='md:p-5 py-10'>
        <h1 className='hidden md:block mb-2 text-dark3/50'>Menu</h1>
        <div className='flex flex-col gap-2'>
          {sidebarItems.main.map((item) => (
            <Link
              className='flex p-3 gap-2 hover:bg-slate-800 items-center'
              to={item.path}
              key={item.id}
            >
              <div>{item.icon}</div>
              <div className='hidden md:inline'>{item.route}</div>
            </Link>
          ))}
        </div>
        <h1 className='hidden md:block mt-10 mb-2 text-dark3/50'>
          Manage Listings
        </h1>
        <div className='flex flex-col gap-2'>
          {sidebarItems.manageListings.map(
            (item) =>
              item.role.includes(user?.role) && (
                <Link
                  className='flex p-3 gap-2 hover:bg-slate-800 items-center'
                  to={item.path}
                  key={item.id}
                >
                  <div>{item.icon}</div>
                  <div className='hidden md:inline'>{item.route}</div>
                </Link>
              )
          )}
        </div>
        <h1 className='hidden md:block mt-10 mb-2 text-dark3/50'>
          Manage Account
        </h1>
        <div className='flex flex-col gap-2'>
          {sidebarItems.manageAccount.map(
            (item) =>
              item.role.includes(user?.role) && (
                <Link
                  className='flex p-3 gap-2 hover:bg-slate-800 items-center'
                  to={item.path}
                  key={item.id}
                >
                  <div>{item.icon}</div>
                  <div className='hidden md:inline'>{item.route}</div>
                </Link>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
