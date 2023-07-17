// React 의 useContex 훅을 사용
// AuthContext의 state 및 dispatch 함수용
import { useContext } from "react";
import { AuthContext } from "../context/AuthContect";
// 가져오는 커스텀 훅 정의
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};
