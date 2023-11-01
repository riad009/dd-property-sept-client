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

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const auth = getAuth();

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [name, setname] = useState('riad');
  const [currentUser, setCurrentUser] = useState(null);

  // TODO1: remove setLoading function
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      // getUsersData from Database if not found save to database
      if (user) {
        await axios
          .get(`http://localhost:4000/users/${user.email}`)
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
                role: "student",
              };
              axios
                .post(`$http://localhost:4000/user`, newUser)
                console.log('newUser')
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
          .post(`http://localhost:4000/jwt`, {
            email: user.email,
          })
          .then((response) => {
            localStorage.setItem("access_token", response.data.token);
          });
      } else {
        localStorage.removeItem("access_token");
      }
      setLoading(false);
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
