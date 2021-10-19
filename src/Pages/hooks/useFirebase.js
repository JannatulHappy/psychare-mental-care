import initializeAuthentication from "../Firebase/firebase.init";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => {
        setError(err);
      });
  };

  const handleUserRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleUserLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    error,
    user,
    signInWithGoogle,
    handleLogout,
    handleUserRegister,
    handleUserLogin,
  };
};

export default useFirebase;
