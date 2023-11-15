import React, { createContext, useContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase';
import axios from 'axios';
const auth = getAuth(app)
const auth2 = getAuth(app)

// Create the UserContext
export const AuthContext = createContext();

// Create a UserContextProvider component
export const AuthProvider = ({ children }) => {
  // You can initialize your global data here
  const [projectId, setprojectId] = useState(localStorage.getItem('projectId') || 'context');
  //('projectId',projectId)
  // Update localStorage whenever projectId changes
  useEffect(() => {
    localStorage.setItem('projectId', projectId);
  }, [projectId]);

  const [FullJobData, setJobData] = useState("FullJobData");
  const [file, setfile] = useState("");


  // You can provide functions to update the data as needed
  const projectUpdateId = (newData) => {
    setprojectId(newData);
  };

  const handleJobData = (newData) => {
    setJobData(newData);
  };

  const handlefile = (newData) => {
    setfile(newData);
  };

  //firebase------------------------------

  const [user, setUser] = useState({});

  const [loading, setLoading] = useState(true);

  //registration pop
  const providerLogin = (provider) => {
    setUser(user)
    return signInWithPopup(auth, provider)

  }
  //login button
  const creatUser = (email, password) => {
    setUser(user)
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)

  }
  //login - create new  user
  const creatNewUser = (email, password) => {


    return createUserWithEmailAndPassword(auth2, email, password)

  }

  //login button
  const login = (email, password) => {
    setUser(user)
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  //reset 
  const reset = (email) => {


    return sendPasswordResetEmail(auth, email)
  }

  //send verification
  const verification = (email) => {

    return sendEmailVerification(email)
  }

 
  const logout = () => {

    return signOut(auth)
  }

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, currentUser => {

      setUser(currentUser);
      setLoading(false)
      //   setLoading(false);

      return () => {

        unsubscribe()
      }
    })

  }, [])
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000); // Increment every second (1000 milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, []);
  const userId = user?.email; // Replace with the actual user ID

  const [totalWords, setUserData] = useState(0);
 
  const [words, setWords] = useState();

 



  // Function to update words and save it to localStorage
  const handleWords = (newData) => {
    // const newWords = parseInt(words + newData);
    setWords(newData);
    // Save the updated 'words' to localStorage
  };

  // useEffect(() => {
  //   setWords(userData)
  // }, [words]);

  const authInfo = {totalWords, words, handleWords, projectId, projectUpdateId,logout, FullJobData, handleJobData,logout, handlefile, file, user, loading, providerLogin, creatUser, login, creatNewUser, reset, verification }





  //firebase-------------------------------
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to easily access the UserContext
export const useUserContext = () => {
  return useContext(AuthContext);
};

export default AuthProvider;

