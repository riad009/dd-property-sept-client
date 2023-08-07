import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Sidebar from "../pages/dashboard/Sidebar";

export const DashboardLayout = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="lg:flex">
      <Sidebar />
      <div className="ml-80 flex-1">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
