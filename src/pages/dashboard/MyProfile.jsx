import React, { useCallback, useContext, useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import ProfileInput from "../../components/ProfileInput";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState("");
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');


  const [skype, setSkype] = useState("");
  const [website, setWebsite] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");
  const [googleplus, setGoogleplus] = useState("");
  const [youtube, setYoutube] = useState("");
  const [pinterest, setPinterest] = useState("");
  const [vimeo, setVimeo] = useState("");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [userId, setUserId] = useState(null);

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
  const { user, setUser } = useContext(AuthContext);

  const handleUpdateProfile = useCallback(async () => {
    let formData = {
      name: username,
      email,
      phone: phone,
      address: address,
    };

    try {
      const response = await axios.put(`/update-profile/${userId}`, formData);
      if (response.status === 200) {
        alert(response.data.message);
        formData = {
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone,
          address: response.data.address
        }

        console.log({ user })
        console.log(response.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  }, [username, email, phone, address, userId, setUser, user]);

  useEffect(() => {
    if (user) {
      console.log('User object:', user);
      setUsername(user.name || '');
      setEmail(user.email || '');
      setPhone(user.phone || '');
      setAddress(user.address || '');
      setUserId(user._id);
    }
  }, [user]);
  return (
    <div className="p-10 bg-gray-100">
      {/* Profile Picture */}
      <div className="w-full bg-white p-8 rounded-lg">
        <h1 className="font-semibold mb-5 text-danger">User Info</h1>
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
          <ProfileInput
            label="Username"
            value={username}
            required={true}
            onChange={(e) => setUsername(e.target.value)}
          />
          <ProfileInput
            label="Email"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />

          <ProfileInput
            label="Phone"
            value={phone}
            required={true}
            onChange={(e) => setPhone(e.target.value)}
          />
          <ProfileInput
            label="Address"
            value={address}
            required={true}
            onChange={(e) => setAddress(e.target.value)}
          />


          {/* <div className="mt-4 md:col-span-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="aboutMe"
            >
              About Me
            </label>
            <textarea
              id="aboutMe"
              className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
            ></textarea>
          </div> */}
        </div>
        {/* Update Profile Button */}
        <button
          className="bg-danger text-white py-2 px-4 rounded-lg mt-4"
          onClick={handleUpdateProfile}
        >
          Update Profile
        </button>
      </div>
      <div className="p-10 bg-white mt-5 rounded-lg">
        <h1 className="font-semibold mb-5 text-danger">Social Media</h1>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
          <ProfileInput
            label="Skype"
            value={skype}
            onChange={(e) => setSkype(e.target.value)}
          />
          <ProfileInput
            label="Website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
          <ProfileInput
            label="Facebook"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
          <ProfileInput
            label="Twitter"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
          <ProfileInput
            label="LinkedIn"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
          <ProfileInput
            label="Instagram"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
          <ProfileInput
            label="Google+"
            value={googleplus}
            onChange={(e) => setGoogleplus(e.target.value)}
          />
          <ProfileInput
            label="YouTube"
            value={youtube}
            onChange={(e) => setYoutube(e.target.value)}
          />
          <ProfileInput
            label="Pinterest"
            value={pinterest}
            onChange={(e) => setPinterest(e.target.value)}
          />
          <ProfileInput
            label="Vimeo"
            value={vimeo}
            onChange={(e) => setVimeo(e.target.value)}
          />
          <button
            className="bg-danger text-white py-2 px-4 rounded-lg mt-4"
            onClick={() => { }}
          >
            Update Social Media
          </button>
        </div>
      </div>
      <div className="p-10 bg-white mt-5">
        <h1 className="font-semibold mb-5 text-danger">Change Password</h1>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
          <ProfileInput
            label="Old Password"
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <ProfileInput
            label="New Password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <ProfileInput
            label="Confirm New Password"
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />

          {/* Address and About Me sections ... */}
        </div>

        <button
          className="bg-danger text-white py-2 px-4 rounded-lg mt-4"
          onClick={() => { }}
        >
          Change Password
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
