import React, { useState } from "react";
import { MdAdd } from "react-icons/md";

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [licence, setLicence] = useState("");
  const [taxNumber, setTaxNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [faxNumber, setFaxNumber] = useState("");
  const [mobile, setMobile] = useState("");
  const [language, setLanguage] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [aboutMe, setAboutMe] = useState("");

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateProfile = () => {
    // Perform update profile logic here
  };

  return (
    <div className="p-10 bg-gray-100">
      {/* Profile Picture */}
      <div className="w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="profileImage"
          >
            Profile Picture
          </label>
          <input
            type="file"
            id="profileImage"
            className="hidden"
            accept="image/*"
            onChange={handleProfileImageChange}
          />
          <div className="relative">
            <img
              src={profileImage}
              alt="Profile"
              className="w-40 h-40 rounded-md object-cover"
            />

            <label
              htmlFor="profileImage"
              className="absolute inset-0 flex justify-center items-center bg-danger/10 hover:bg-dark2/10 text-white rounded-md cursor-pointer opacity-75"
            >
              <MdAdd className="text-dark bg-danger/10 p-1 text-4xl" />
            </label>
          </div>
        </div>

        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="position"
            >
              Position
            </label>
            <input
              type="text"
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="licence"
            >
              Licence
            </label>
            <input
              type="text"
              id="licence"
              value={licence}
              onChange={(e) => setLicence(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="taxNumber"
            >
              Tax Number
            </label>
            <input
              type="text"
              id="taxNumber"
              value={taxNumber}
              onChange={(e) => setTaxNumber(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="faxNumber"
            >
              Fax Number
            </label>
            <input
              type="tel"
              id="faxNumber"
              value={faxNumber}
              onChange={(e) => setFaxNumber(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="mobile"
            >
              Mobile
            </label>
            <input
              type="tel"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="language"
            >
              Language
            </label>
            <input
              type="text"
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="companyName"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="md:col-span-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          {/* About Me */}
          <div className="mt-4 md:col-span-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="aboutMe"
            >
              About Me
            </label>
            <textarea
              id="aboutMe"
              className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            ></textarea>
          </div>
        </div>

        {/* Update Profile Button */}
        <button
          className="bg-danger text-white py-2 px-4 rounded-lg mt-4"
          onClick={handleUpdateProfile}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
