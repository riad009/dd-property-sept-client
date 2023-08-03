import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import SingleProperty from "./pages/property/SingleProperty";

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
]);

const App = () => <RouterProvider router={router} />;

export default App;
