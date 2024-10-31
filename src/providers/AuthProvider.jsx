import React, { createContext, useContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  FacebookAuthProvider,
} from "firebase/auth";
import app from "../firebase";
import axios from "axios";
const auth = getAuth(app);
const auth2 = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
// Create the UserContext
export const AuthContext = createContext();

export const baseURL = "https://dd-property-sept-server.vercel.app";
// export const baseURL = "http://localhost:5003";

axios.defaults.baseURL = baseURL;
5;

// Create a UserContextProvider component
export const AuthProvider = ({ children }) => {
  // You can initialize your global data here
  const [isLoading, setIsLoading] = useState(true);

  const [userRefetch, setUserRefetch] = useState(false);

  const [propertyData, setPropertyData] = useState({
    latLng: {
      lat: 13.736717,
      lng: 100.523186,
    },
  });

  const [videoUrls, setVideoUrls] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [coverImage, setCoverImage] = useState("");
  const [listingType, setListingType] = useState("");
  const [location, setLocation] = useState("");
  const [furnishValue, setFurnishValue] = useState("");
  const [furnishObjects, setFurnishObjects] = useState([]);
  const [unitFeatures, setUnitFeatures] = useState([]);
  const [availabilityForLiveTour, setAvailabilityForLiveTour] = useState("");

  const [searchvalue, setsearchvalue] = useState("");

  const [category, setcategory] = useState("");

  const [bedrooms, setbedrooms] = useState("");

  const [pricefilter, setpricefilter] = useState({
    minPrice: "",
    maxPrice: "",
  });
  const [bedroomsSelected, setBedroomsSelected] = useState("");
  const [propertyUpdateId, setPropertyid] = useState("");

  console.log({ searchvalue });

  const handleSearchvalue = (newData) => {
    setsearchvalue((prev) => ({
      ...prev,
      ...newData,
    }));
  };
  const handleCategory = (newData) => {
    setcategory(newData);
  };
  const handlebedrooms = (newData) => {
    // new data is
    console.log(newData);
    setbedrooms(newData);
  };

  const handlePropertyid = (newData) => {
    setPropertyid(newData);
  };

  const handlePrice = (newData) => {
    setpricefilter(newData);
  };

  //firebase------------------------------

  const [user, setUser] = useState({});

  // useEffect(() => {
  //   const gettoken = async () => {
  //     const token = await auth?.currentUser?.getIdToken();
  //     console.log({ token });
  //   };
  //   gettoken();
  // }, []);

  console.log({ user });

  const [loading, setLoading] = useState(true);

  const logInWithGoogle = () => {
    // setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logInWithFacebook = () => {
    // setIsLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  //registration pop
  const providerLogin = (provider) => {
    setUser(user);
    return signInWithPopup(auth, provider);
  };
  //login button
  const creatUser = (email, password) => {
    setUser(user);
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login - create new  user
  const creatNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth2, email, password);
  };

  //login button
  const login = (email, password) => {
    setUser(user);
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //reset
  const reset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //send verification
  const verification = (email) => {
    return sendEmailVerification(email);
  };

  const logout = () => {
    return signOut(auth);
  };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     setLoading(false);
  //     //   setLoading(false);

  //     return () => {
  //       unsubscribe();
  //     };
  //   });
  // }, []);

  useEffect(() => {
    const handleBackButton = () => {
      handlebedrooms();
      handleSearchvalue();
      handlePrice();
      handlePropertyid();
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  const token = localStorage.getItem("accessToken");
  useEffect(() => {
    const getProfile = async () => {
      setIsLoading(true);

      try {
        const promise = await axios.get(`/user-profile`, {
          headers: {
            authorization: `${token}`,
          },
        });

        console.log("useruser", promise.data.data);
        setUser(promise.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        if (error.response.data.message === "Invalid Token!") {
          localStorage.removeItem("accessToken");
        }
      }
    };

    getProfile();
  }, [token, userRefetch]);

  const authInfo = {
    bedroomsSelected,
    setBedroomsSelected,
    setpricefilter,
    propertyUpdateId,
    handlePropertyid,
    pricefilter,
    handlePrice,
    bedrooms,
    handlebedrooms,
    searchvalue,
    handleSearchvalue,
    category,
    handleCategory,
    logout,

    user,
    loading,
    providerLogin,
    creatUser,
    login,
    creatNewUser,
    reset,
    verification,
    imageUrls,
    videoUrls,
    setVideoUrls,
    setImageUrls,
    listingType,
    setListingType,
    location,
    setLocation,
    furnishValue,
    furnishObjects,
    setFurnishObjects,
    unitFeatures,
    setUnitFeatures,
    setFurnishValue,
    availabilityForLiveTour,
    setAvailabilityForLiveTour,
    coverImage,
    setCoverImage,
    propertyData,
    setPropertyData,
    isLoading,
    userRefetch,
    setUserRefetch,
    logInWithGoogle,
    setUser,
    logInWithFacebook,
  };

  //firebase-------------------------------
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

// Custom hook to easily access the UserContext
export const useUserContext = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
