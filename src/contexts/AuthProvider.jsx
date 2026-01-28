import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "../firebase";
import AuthContext from "./AuthContext";

export function AuthProvider() {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, [auth]);

  // signup
  async function signup(email, password, username) {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    console.log("ppppppppppppppppppp");

    // update profile
    await updateProfile(cred.user, {
      displayName: username,
    });
    console.log("LLLLLLLLLLLLLLLLLLL");
    //const user = auth.currentUser;
    setCurrentUser({
      ...cred.user,
    });
  }

  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    const auth = getAuth();
    signOut(auth);
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && <Outlet />}
    </AuthContext.Provider>
  );
}
