import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import SingleProperty from "./pages/property/SingleProperty";
import { AuthProvider } from "./providers/AuthProvider";
import Dashboard from "./pages/dashboard/Dashboard";
import PrivateRoute from "./shared/PrivateRoute";
import { DashboardLayout } from "./layouts/DashboardLayout";

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
    ],
  },
]);

const App = () => (
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

export default App;
