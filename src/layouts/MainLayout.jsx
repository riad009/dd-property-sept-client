import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  const { pathname } = useLocation();
  console.log({ pathname });

  return (
    <div>
      <Navbar />
      <Outlet />
      {pathname !== "/property-for-sale" && <Footer />}
    </div>
  );
};

export default MainLayout;
