import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useReducer } from "react";
import { appAuth } from "../firebase/config";

// FB 인증 Context 를 생성함
// store (은행금고) 라고 합시다
const AuthContext = createContext();

// context 관리 리듀서함수
// action (요청서) 을 처리하는 reducer 함수.
// reducer 함수 형태로 action (요청서)를 처리하는 이유
// 원본(state)을 훼손하지 않고 원하는 데이터 처리 후
// 원본(state)을 변경한다. (불변성 유지)
const authReducer = (state, action) => {
  // console.log("리듀서함수 : ", action); // { type: "login", payload: user }

  // action 은 반드시 형태가 {type:"구분자"}
  // {type: "입금", payload:1000}
  // {type: "출금", payload:1000}
  // {type: "잔고"}

  switch (action.type) {
    case "login":
      return { ...state, user: action.payload };

    case "logout":
      return { ...state, user: null };

    case "isAuthReady":
      return { ...state, user: action.payload, isAuthReady: true };

    case "updateName":
      return { ...state, user: action.payload };

    case "updateEmail":
      return { ...state, user: action.payload };

    case "updatePass":
      return { ...state, user: action.payload };

    case "userDelete":
      return { ...state, user: null };
    default:
      return state; // 그대로 돌려준다.
  }
};

// Context 를 구독(Subscribe) 하도록  Provider 를 생성
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null, // 사용자 정보
    IsAuthReady: false, // 로그인 상태 체크
  });
  // FB 인증 웹브라우저 새로고침 처리
  useEffect(() => {
    onAuthStateChanged(appAuth, user => {
      // if (user) {
      //   // User is signed in, see docs for a list of available properties
      //   // https://firebase.google.com/docs/reference/js/auth.user
      //   const uid = user.uid;
      //   // ...
      // } else {
      //   // User is signed out
      //   // ...
      // }
      // 로그인이 되었는지 아닌지를 파악한다.
      // AuthContext 에 user 정보를 입력한다.
      console.log("onAuthStateChanged : ", user);
      dispatch({ type: "isAuthReady", payload: user });
    });
  }, []);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthContextProvider };
