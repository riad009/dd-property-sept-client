import {
  MdFavoriteBorder,
  MdHome,
  MdMessage,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import DashCard from "../../components/cards/DashCard";
//import { useAuth } from "../../providers/AuthProvider";
import DashboardHeader from "./DashboardHeader";

const activites = [
  {
    type: "properties",
    notification: "Your Listing Shanto Villa has been approved",
  },
  {
    type: "properties",
    notification: "Congratulations! Your Listing Sunny Haven is now live.",
  },
  {
    type: "properties",
    notification: "Great news! Your Listing Ocean Breeze has been featured.",
  },
  {
    type: "properties",
    notification:
      "Update: Your Listing Tranquil Retreat has received a new inquiry.",
  },
  {
    type: "properties",
    notification:
      "Attention: Your Listing Enchanted Woods requires some additional information.",
  },
  {
    type: "properties",
    notification:
      "Reminder: Your Listing Mountain View is scheduled for a photo shoot.",
  },
];

const Dashboard = () => {
  // const { currentUser } = useAuth();

  return (
    <div className="min-h-[90vh] p-5 md:p-10 bg-dark2/5">
      <DashboardHeader
        // title={`Howdy, ${currentUser?.name?.split(" ")[0]}`}
        description={"We are glad to see you again"}
      />

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 my-10">
        <DashCard
          icon={<MdHome />}
          bgColor={"bg-dark2/10"}
          number={36}
          title="All Properties"
        />
        <DashCard
          icon={<MdOutlineRemoveRedEye />}
          bgColor={"bg-danger/10 text-danger"}
          number={36}
          title="Total Views"
        />
        <DashCard
          icon={<MdMessage />}
          bgColor={"bg-sky-100 text-sky-600"}
          number={36}
          title="Total Visitor Reviews"
        />
        <DashCard
          icon={<MdFavoriteBorder />}
          bgColor={"bg-orange-100 text-orange-600"}
          number={36}
          title="Total Favorites"
        />
      </div>
      <div className="lg:flex lg:flex-row gap-5">
        <div className="lg:w-4/6 bg-white rounded-md p-5">View Statistics</div>
        <div className="flex-1 bg-white rounded-md p-5 lg:mt-0 mt-5">
          <h1>Recent Activities</h1>
          <div className="flex flex-col gap-3 py-5">
            {activites.map((activity, index) => (
              <div key={index} className="flex gap-2 items-center">
                <MdHome className="text-danger bg-danger/10 w-8 h-8 text-5xl rounded-full p-1" />
                <p className="flex-1">{activity.notification}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
