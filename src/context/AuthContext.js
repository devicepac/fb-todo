import { createContext, useReducer } from "react";

// FB 인증 Context 를 생성함
const AuthContext = createContext();

// context 관리 리듀서함수
const authReducer = (state, action) => {
  console.log("리듀서함수 : ", action); // { type: "login", payload: user }
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload };

    case "logout":
      return { ...state, user: null };

    default:
      // 그대로 돌려준다.
      return state;
  }
};

// Context 를 구독(Subscribe) 하도록  Provider 를 생성
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthContextProvider };