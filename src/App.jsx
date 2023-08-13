import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import SingleProperty from "./pages/property/SingleProperty";
import { AuthProvider } from "./providers/AuthProvider";
import Dashboard from "./pages/dashboard/Dashboard";
import PrivateRoute from "./shared/PrivateRoute";
import { DashboardLayout } from "./layouts/DashboardLayout";
import TermsCondition from "./pages/TermsCondition";
import FindConstruction from "./pages/FindConstruction";
import FindAgent from "./pages/FindAgent";
import AgentProfile from "./pages/AgentProfile";
import PropertyForSale from "./pages/PropertyForSale";
import MyProperties from "./pages/dashboard/MyProperties";
import MyReviews from "./pages/dashboard/MyReviews";
import MyFavorites from "./pages/dashboard/MyFavorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsCondition />,
      },
      {
        path: "/find-construction",
        element: <FindConstruction />,
      },
      {
        path: "/find-agent",
        element: <FindAgent />,
      },
      {
        path: "/agent/:id",
        element: <AgentProfile />,
      },
      {
        path: "/property-for-sale",
        element: <PropertyForSale />,
      },
      {
        path: "/property/projects/:projectName",
        element: <SingleProperty />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "my-properties",
        element: (
          <PrivateRoute>
            <MyProperties />
          </PrivateRoute>
        ),
      },
      {
        path: "reviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "my-favorites",
        element: (
          <PrivateRoute>
            <MyFavorites />
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
