import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { appAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router";

// fb 로그인 커스텀 훅
export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const navigate = useNavigate();

  const login = async (email, password) => {
    console.log("로그인시도", email, password);
    setError(null);
    setIsPending(true);
    try {
      const userCredentail = await signInWithEmailAndPassword(
        appAuth,
        email,
        password,
      );
      const user = userCredentail.user;
      dispatch({ type: "login", payload: user });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return { error, isPending, login };
};
