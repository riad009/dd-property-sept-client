import Search from "antd/es/input/Search";
import img1 from "../../assets/banner1.jpg";
import DashboardHeader from "./DashboardHeader";
import { Pagination, Select } from "antd";
import { MdDelete } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";

const MyFavorites = () => {
  const [allProperties, setAllProperties] = useState([]);
  const [userFavorites, setUserFavorites] = useState({});
  const { user } = useContext(AuthContext);
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchAllProperties = async () => {
      try {
        const response = await axios.get(
          "https://dd-property-sept-server.vercel.app/get/allProperties"
        ); // Replace with your actual endpoint

        setAllProperties(response?.data);
      } catch (error) {
        console.error("Error fetching all properties:", error);
      }
    };

    fetchAllProperties();
  }, []);

  useEffect(() => {
    // Fetch user favorites
    const fetchUserFavorites = async () => {
      try {
        const response = await axios.get(
          `https://dd-property-sept-server.vercel.app/get/favourites/${user?.email}`
        );

        setUserFavorites(response?.data.favorites);
      } catch (error) {
        console.error("Error fetching user favorites:", error);
      }
    };

    if (user?.email) {
      fetchUserFavorites();
    }
  }, [user?.email]);

  // Filter user favorites from all properties
  const userFavoriteProperties = allProperties?.filter((property) =>
    userFavorites?.includes(property._id)
  );

  return (
    <div className="p-10">
      <div className="lg:flex items-center justify-between">
        <DashboardHeader
          title={"My Properties"}
          description={"We are glad to see you again"}
        />
        <div className="flex items-center gap-3 lg:mt-0 mt-3">
          <Search placeholder="Search" allowClear />
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            // onChange={handleChange}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </div>
      </div>
      <table className="md:w-full min-w-[600px] mt-5">
        {userFavoriteProperties?.map((property) => (
          <tr className="border" key={property?._id}>
            <td className="p-2 flex gap-3 items-center">
              <img
                className="w-40 inline rounded-lg"
                src={property?.mainImg}
                alt="cover"
              />
              <div>
                <h1 className="font-semibold">{property?.propertyTitle}</h1>
                <p className="text-xs">Address: {property?.address}</p>
                <p className="text-danger font-semibold">{property?.price}</p>
              </div>
            </td>
            <td>
              <div className="flex gap-2 text-danger">
                <MdDelete className="bg-danger/10 p-1 text-2xl rounded-md" />
              </div>
            </td>
          </tr>
        ))}
      </table>
      <Pagination
        className="mt-5 mx-auto w-fit"
        defaultCurrent={1}
        total={50}
      />
    </div>
  );
};

export default MyFavorites;
