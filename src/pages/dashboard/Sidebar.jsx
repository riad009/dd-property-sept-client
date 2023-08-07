import { BiPackage } from "react-icons/bi";
import Brand from "../../components/Brand";
import {
  MdAddBox,
  MdFavorite,
  MdHome,
  MdLogout,
  MdMessage,
  MdReviews,
  MdSearch,
  MdSpaceDashboard,
  MdVerifiedUser,
} from "react-icons/md";
import { Link } from "react-router-dom";

const sidebarItems = {
  main: [
    {
      route: "Dashboard",
      path: "/dashboard",
      icon: <MdSpaceDashboard />,
    },
    {
      route: "Create Listing",
      path: "create-listing",
      icon: <MdAddBox />,
      role: "user",
    },
    {
      route: "Message",
      path: "message",
      icon: <MdMessage />,
      role: "user",
    },
  ],
  manageListings: [
    {
      route: "My Properties",
      path: "my-properties",
      icon: <MdHome />,
      role: "user",
      children: [
        {
          route: "General Elements",
          path: "general-elements",
          icon: <MdReviews />,
          role: "user",
        },
        {
          route: "Advanced Elements",
          path: "advanced-elements",
          icon: <MdReviews />,
          role: "user",
        },
        {
          route: "Editors",
          path: "editors",
          icon: <MdReviews />,
          role: "user",
        },
      ],
    },
    {
      route: "Reviews",
      path: "reviews",
      icon: <MdReviews />,
      role: "user",
      children: [
        {
          route: "My Reviews",
          path: "my-reviews",
          icon: <MdReviews />,
          role: "user",
        },
        {
          route: "Visitors Reviews",
          path: "visitors-reviews",
          icon: <MdReviews />,
          role: "user",
        },
      ],
    },
    {
      route: "My Favorites",
      path: "my-favorites",
      icon: <MdFavorite />,
      role: "user",
    },
    {
      route: "Saved Search",
      path: "saved-search",
      icon: <MdSearch />,
      role: "user",
    },
  ],
  manageAccount: [
    {
      route: "My package",
      path: "my-package",
      icon: <BiPackage />,
    },
    {
      route: "My Profile",
      path: "my-profile",
      icon: <MdVerifiedUser />,
      role: "user",
    },
    {
      route: "Logout",
      path: "#",
      icon: <MdLogout />,
      role: "user",
    },
  ],
};

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className="fixed md:w-80 w-12 bg-slate-950 h-screen text-white">
      <div className="h-20 flex items-center justify-center bg-slate-800">
        <Brand center white />
      </div>
      <div className="md:p-5 py-10">
        <h1 className="hidden md:block mb-2 text-dark3/50">Menu</h1>
        <div className="flex flex-col gap-2">
          {sidebarItems.main.map((item) => (
            <Link
              className="flex p-3 gap-2 hover:bg-slate-800 items-center"
              key={item.route}
            >
              <div>{item.icon}</div>
              <div className="hidden md:inline">{item.route}</div>
            </Link>
          ))}
        </div>
        <h1 className="hidden md:block mt-10 mb-2 text-dark3/50">
          Manage Listings
        </h1>
        <div className="flex flex-col gap-2">
          {sidebarItems.manageListings.map((item) => (
            <Link
              className="flex p-3 gap-2 hover:bg-slate-800 items-center"
              key={item.route}
            >
              <div>{item.icon}</div>
              <div className="hidden md:inline">{item.route}</div>
            </Link>
          ))}
        </div>
        <h1 className="hidden md:block mt-10 mb-2 text-dark3/50">
          Manage Account
        </h1>
        <div className="flex flex-col gap-2">
          {sidebarItems.manageAccount.map((item) => (
            <Link
              className="flex p-3 gap-2 hover:bg-slate-800 items-center"
              key={item.route}
            >
              <div>{item.icon}</div>
              <div className="hidden md:inline">{item.route}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
