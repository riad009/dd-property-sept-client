import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import SingleProperty from './pages/property/SingleProperty';
import { AuthProvider, baseURL } from './providers/AuthProvider';
import Dashboard from './pages/dashboard/Dashboard';
import PrivateRoute from './shared/PrivateRoute';
import { DashboardLayout } from './layouts/DashboardLayout';
import TermsCondition from './pages/TermsCondition';
import FindConstruction from './pages/FindConstruction';
import FindAgent from './pages/FindAgent';
import AgentProfile from './pages/AgentProfile';
import PropertyForSale from './pages/PropertyForSale';
import MyProperties from './pages/dashboard/MyProperties';
import MyReviews from './pages/dashboard/MyReviews';
import MyFavorites from './pages/dashboard/MyFavorites';
import ProfilePage from './pages/dashboard/MyProfile';
import MyPackage from './pages/dashboard/MyPackage';

import Membership from './pages/Membership';
import UpdateProperty from './pages/dashboard/UpdateProperty';

import CreateListingFront from './pages/CreateListingFront';

import ManageProperties from './pages/dashboard/ManageProperties';
import AdminRoute from './shared/AdminRoute';
import CreateProperty from './components/Steps/CreateProperty';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/terms-and-conditions',
        element: <TermsCondition />,
      },
      {
        path: '/find-construction',
        element: <FindConstruction />,
      },
      {
        path: '/find-agent',
        element: <FindAgent />,
      },
      {
        path: '/membership',
        element: <Membership />,
      },
      {
        path: '/agent/:id',
        element: <AgentProfile />,
      },
      {
        path: '/property-for-sale',
        element: <PropertyForSale />,
      },

      // {
      //   path: "/property-for-sale/:id/:id2",
      //   element: <PropertyForSale />,
      //   loader:({params})=>fetch(`https://dd-property-sept-server.vercel.app/get/categoryproperty/${params.id}/${params.id2}`)
      // },

      {
        path: '/property/projects/:name/:location/:province/:city/:listingType/:id',
        element: <SingleProperty />,

        loader: ({ params }) =>
          fetch(`${baseURL}/get/property/idWise/${params.id}`),
      },
    ],
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: 'create-listing',
        element: (
          <PrivateRoute>
            {/* <CreateListing /> */}
            {/* <CreateListingSteps /> */}
            <CreateListingFront />
          </PrivateRoute>
        ),
      },
      {
        path: 'create-property',
        element: (
          <PrivateRoute>
            {/* <CreateListing /> */}
            {/* <CreateListingSteps /> */}
            <CreateProperty />
          </PrivateRoute>
        ),
      },
      // {
      //   path: "create-land",
      //   element: (
      //     <PrivateRoute>
      //       {/* <CreateListing /> */}
      //       <CreateListingLand />
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: 'update/:id',
        element: (
          <PrivateRoute>
            <UpdateProperty></UpdateProperty>
          </PrivateRoute>
        ),
      },
      {
        path: 'my-properties',
        element: (
          <PrivateRoute>
            <MyProperties />
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-properties',
        element: (
          <AdminRoute>
            <ManageProperties />
          </AdminRoute>
        ),
      },
      {
        path: 'membership',
        element: (
          <PrivateRoute>
            <Membership />
          </PrivateRoute>
        ),
      },
      {
        path: 'reviews',
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: 'my-favorites',
        element: (
          <PrivateRoute>
            <MyFavorites />
          </PrivateRoute>
        ),
      },
      {
        path: 'my-profile',
        element: (
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        ),
      },
      {
        path: 'my-package',
        element: (
          <PrivateRoute>
            <MyPackage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

const App = () => (
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

export default App;
