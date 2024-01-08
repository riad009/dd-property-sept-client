import React, { createContext, useContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase";
import axios from "axios";
const auth = getAuth(app);
const auth2 = getAuth(app);

// Create the UserContext
export const AuthContext = createContext();

// Create a UserContextProvider component
export const AuthProvider = ({ children }) => {
  // You can initialize your global data here

  const [searchvalue, setsearchvalue] = useState("");

  const [category, setcategory] = useState("");

  const [bedrooms, setbedrooms] = useState("");

  const [pricefilter, setpricefilter] = useState("");

  const [propertyUpdateId, setPropertyid] = useState("");

  const handleSearchvalue = (newData) => {
    setsearchvalue(newData);
  };
  const handleCategory = (newData) => {
    setcategory(newData);
  };
  const handlebedrooms = (newData) => {
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

  useEffect(() => {
    const gettoken = async () => {
      const token = await auth?.currentUser?.getIdToken();
      console.log({ token });
    };
    gettoken();
  }, []);

  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      //   setLoading(false);

      return () => {
        unsubscribe();
      };
    });
  }, []);

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

  const authInfo = {
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
    logout,
    user,
    loading,
    providerLogin,
    creatUser,
    login,
    creatNewUser,
    reset,
    verification,
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
