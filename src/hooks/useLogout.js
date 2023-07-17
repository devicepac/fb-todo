import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { appAuth } from "../firebase/config";
import { signOut } from "firebase/auth";

// FB 로그아웃
export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const logout = () => {
    setError(null);
    setIsPending(false);
    // FB 로그아웃 API
    signOut(appAuth)
      .then(() => {
        // Sign-out successful.
        dispatch({ type: "logout" });
      })
      .catch(err => {
        console.log(err);
        // An error happened.
      });
  };

  return { error, isPending, logout };
};
