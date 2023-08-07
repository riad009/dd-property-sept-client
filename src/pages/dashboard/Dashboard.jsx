import DashCard from "../../components/cards/DashCard";
import { useAuth } from "../../providers/AuthProvider";

const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div className="dark:bg-slate-900 min-h-[90vh] p-10 bg-dark2/5">
      <h1 className="font-bold text-3xl">
        Howdy, {currentUser.name.split(" ")[0]}
      </h1>
      <p className="text-xs">We are glad to see you again</p>
      <div className="grid grid-cols-4 gap-5 my-10">
        <DashCard />
        <DashCard />
        <DashCard />
        <DashCard />
      </div>
    </div>
  );
};

export default Dashboard;
