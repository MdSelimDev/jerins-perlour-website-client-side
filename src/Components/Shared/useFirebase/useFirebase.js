import React, { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import initializeAuthentication from "../../FirebaseConfig/Firebase.initialize";
import axios from "axios";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(true);
  const [service, setService] = useState([]);

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const HandleGoogleSignIn = () => {
    setLoader(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {})
      .catch((error) => {
        setError(error.message);
        console.log(error.message, error.code);
      })
      .finally(() => setLoader(false));
  };

  const HandleRegisterUser = (email, password, name, navigate) => {
    setLoader(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            console.log(error.message);
          });
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.code, error.message);
      })
      .finally(() => setLoader(false));
  };

  const HandleLogInEmailAndPassword = (email, password, navigate) => {
    setLoader(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      })
      .finally(() => setLoader(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoader(false);
    });
    return () => unsubscribed;
  }, [auth]);

  const HandleLogOut = () => {
    setLoader(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setLoader(false));
  };

  useEffect(() => {
    setLoader(true);
    axios
      .get("https://jerins-perlour-server.up.railway.app/service")
      .then((result) => {
        setService(result.data);
      })
      .catch((error) => {
        console.log(error.message, error.code);
      })
      .finally(() => setLoader(false));
  }, []);

  return {
    HandleGoogleSignIn,
    user,
    HandleRegisterUser,
    error,
    setError,
    HandleLogOut,
    HandleLogInEmailAndPassword,
    loader,
    service,
  };
};

export default useFirebase;
