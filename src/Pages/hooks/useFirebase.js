import initializeAuthentication from "../Firebase/firebase.init";

import {
  getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  
} from "firebase/auth";

import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
  // imported needed things
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [name, setName] = useState();
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsloading] = useState(true);
// sign in google
  const signInWithGoogle = () => {
    setIsloading(true)
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
      setIsloading(false)
    });
  }, []);
// logout
  const handleLogout = () => {
    setIsloading(true)
        signOut(auth).then(() => {
            setUser({});
            setError('')
        }).catch((error) => {
            const errMsg = error.message;
            setError(errMsg)
        }).finally(() => setIsloading(false))
  };
// sign in user
const createUserWithEmailPassword = () => {
  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          setUser(user);
          setError('Account Creating Success, please login..');
          getName();
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(`${errorCode}` - `${errorMessage}`)
      });
}

// login user
const loginWithEmailPassword = () => {
  signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          setUser(user);
          setError('')
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(`${errorCode}` - `${errorMessage}`)
      });
}
// for showing name
const getName = () => {
  updateProfile(auth.currentUser, {displayName:name})
  .then((result) => {
      // Profile updated!
      // ...
    }).catch((error) => {
      setError('something went wrong')
    });
}
  return {
    user,
    error,signInWithGoogle,
    handleLogout,
    createUserWithEmailPassword,
    setEmail,
    setPassword,
    loginWithEmailPassword,
    setName,
    isLoading,
    setIsloading
  };
};

export default useFirebase;

