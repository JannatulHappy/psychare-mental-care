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
  // imported needed things
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
// sign in google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
// onAuth sate change
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
// logout
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => {
        setError(err);
      });
  };
// sign in user
  const handleUserRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
// login user
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
    setEmail,
    setPassword,
    signInWithGoogle,
    handleLogout,
    handleUserRegister,
    handleUserLogin,
  };
};

export default useFirebase;
