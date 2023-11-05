import React, { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "../firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { Triangle } from "react-loader-spinner";

export const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const auth = getAuth();

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [name, setname] = useState('riad');
  const [currentUser, setCurrentUser] = useState(null);

  //signup function
  async function signup(email, password, username) {
    fetch("https://dd-property-server.vercel.app/user/create",{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({email})
      
    })
    .then(res=>res.json())
    .then(async data=>{
      if(data.acknowledged){
        await createUserWithEmailAndPassword(auth, email, password)
        .then(result=>console.log(result));
      }
    })

    // updateProfile
    await updateUserProfile(username);

    const user = auth.currentUser;
  }

  async function updateUserProfile(username) {
    await updateProfile(auth.currentUser, {
      displayName: username,
    });
  }

  //login function
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // signin with google
  async function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider)
    .then(async result=>{
      if(result?.user?.uid){
        console.log(result?.user?.email)
        const email = result?.user?.email || ""
        const res = await fetch(`https://dd-property-server.vercel.app/user/create`,{
          method:"POST",
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({email})
        })
        const data = await res.json()
        console.log(data)
      }
    });
  }

  //logout function
  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    sendPasswordResetEmail(auth, email);
  }

  // monitor user
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(user)=>{
      setCurrentUser(user)
      setLoading(false)
    })
    return ()=> unSubscribe()
  },[])


  const value = {
    currentUser,
    loading,
    setLoading,
    signup,
    login,
    logout,
    googleSignIn,
    updateUserProfile,
    resetPassword,
    name,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading ? (
        children
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <Triangle
            height="80"
            width="80"
            color="red"
            ariaLabel="triangle-loading"
            visible={true}
          />
        </div>
      )}
    </AuthContext.Provider>
  );
}
