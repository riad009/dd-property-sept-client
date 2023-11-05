import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Sidebar from "../pages/dashboard/Sidebar";

export const DashboardLayout = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="lg:flex">
      <Sidebar />
      <div className="md:ml-56 lg:ml-80 ml-12 flex-1 transition-all duration-200">
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </div>
  );
};
