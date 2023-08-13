import React from "react";
import DashboardHeader from "./DashboardHeader";
import img from "../../assets/agent_pic.jpg";
import { MdDelete, MdEdit } from "react-icons/md";

const MyReviews = () => {
  return (
    <div className="md:p-10 p-5 bg-dark2/5">
      <DashboardHeader
        title={"My Reviews"}
        description={"We are glad to see you again"}
      />

      <div className="bg-white p-5 rounded-lg mt-10">
        <h1 className="mb-5">My Reviews</h1>
        <div className="md:flex gap-3 items-center">
          <img
            className="rounded-full w-16 h-16 md:w-24 md:h-24 object-cover"
            src={img}
            alt="avatar"
          />
          <div className="flex-1">
            <h1>
              <span className="text-danger font-semibold">Your Review on </span>
              Villa called archangel
            </h1>
            <p>02/05/2022</p>
            <p className="text-xs mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime et
              temporibus repudiandae incidunt praesentium perferendis,
              voluptatem quae dolorum ad enim.
            </p>
            <div className="flex gap-2 text-danger mt-3">
              <MdEdit className="bg-danger/10 p-1 text-2xl rounded-md" />
              <MdDelete className="bg-danger/10 p-1 text-2xl rounded-md" />
            </div>
          </div>
        </div>
        <div className="mt-5 md:flex gap-3 items-center">
          <img
            className="rounded-full w-16 h-16 md:w-24 md:h-24 object-cover"
            src={img}
            alt="avatar"
          />
          <div className="flex-1">
            <h1>
              <span className="text-danger font-semibold">Your Review on </span>
              Villa called archangel
            </h1>
            <p>02/05/2022</p>
            <p className="text-xs mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime et
              temporibus repudiandae incidunt praesentium perferendis,
              voluptatem quae dolorum ad enim.
            </p>
            <div className="flex gap-2 text-danger mt-3">
              <MdEdit className="bg-danger/10 p-1 text-2xl rounded-md" />
              <MdDelete className="bg-danger/10 p-1 text-2xl rounded-md" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-5 rounded-lg mt-10">
        <h1 className="mb-5">Visitors Reviews</h1>
        <div className="md:flex gap-3 items-center">
          <img
            className="rounded-full w-16 h-16 md:w-24 md:h-24 object-cover"
            src={img}
            alt="avatar"
          />
          <div className="flex-1">
            <h1>
              <span className="text-danger font-semibold">Your Review on </span>
              Villa called archangel
            </h1>
            <p>02/05/2022</p>
            <p className="text-xs mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime et
              temporibus repudiandae incidunt praesentium perferendis,
              voluptatem quae dolorum ad enim.
            </p>
            <div className="flex gap-2 text-danger mt-3">
              <MdEdit className="bg-danger/10 p-1 text-2xl rounded-md" />
              <MdDelete className="bg-danger/10 p-1 text-2xl rounded-md" />
            </div>
          </div>
        </div>
        <div className="mt-5 md:flex gap-3 items-center">
          <img
            className="rounded-full w-16 h-16 md:w-24 md:h-24 object-cover"
            src={img}
            alt="avatar"
          />
          <div className="flex-1">
            <h1>
              <span className="text-danger font-semibold">Your Review on </span>
              Villa called archangel
            </h1>
            <p>02/05/2022</p>
            <p className="text-xs mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime et
              temporibus repudiandae incidunt praesentium perferendis,
              voluptatem quae dolorum ad enim.
            </p>
            <div className="flex gap-2 text-danger mt-3">
              <MdEdit className="bg-danger/10 p-1 text-2xl rounded-md" />
              <MdDelete className="bg-danger/10 p-1 text-2xl rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
