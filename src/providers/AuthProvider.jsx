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

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const auth = getAuth();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      if (user) {
        await axios
          .get(`${import.meta.env.VITE_BASE_API_URL}/users/${user.email}`)
          .then(({ data: userData }) => {
            if (userData) {
              setCurrentUser(userData);
            } else {
              const newUser = {
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                address: "",
                gender: "",
                phoneNumber: "",
                role: "user",
              };
              axios
                .post(`${import.meta.env.VITE_BASE_API_URL}/user`, newUser)
                .then((response) => {
                  if (response.status === 200) {
                    setCurrentUser(newUser);
                  }
                });
            }
          });
      } else {
        setCurrentUser(user);
      }

      if (user) {
        axios
          .post(`${import.meta.env.VITE_BASE_API_URL}/jwt`, {
            email: user.email,
          })
          .then((response) => {
            localStorage.setItem("access_token", response.data.token);
          });
      } else {
        localStorage.removeItem("access_token");
      }
    });

    return unsubscribe;
  }, []);

  //signup function
  async function signup(email, password, username) {
    await createUserWithEmailAndPassword(auth, email, password);

    // updateProfile
    await updateUserProfile(username);

    const user = auth.currentUser;

    setCurrentUser({ ...user });
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
    return signInWithPopup(auth, googleAuthProvider);
  }

  //logout function
  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    sendPasswordResetEmail(auth, email);
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
    googleSignIn,
    updateUserProfile,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
