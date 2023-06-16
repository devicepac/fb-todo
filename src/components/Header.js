import React from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../firebase";

const Header = ({
  fbName,
  fbEmail,
  fbUid,
  setFBUid,
  setFBEmail,
  setFBName,
}) => {
  const navigator = useNavigate();
  // fb 로그아웃
  const hadleLogout = () => {
    firebase.auth().signOut();
    console.log("LOGOUT");
    setFBEmail("");
    setFBName("");
    setFBUid("");
    navigator("/");
  };
  return (
    <header className="p-7 bg-blue-500">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-white">
          로고
        </Link>
        <ul className="flex items-center justify-center gap-4">
          <li>
            <Link to="/home" className="text-white hover:text-red-500">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-red-500">
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to={fbUid ? "/todo" : "/login"}
              className="text-white hover:text-red-500"
            >
              TODO
            </Link>
          </li>
        </ul>
        <div className="flex justify-center gap-5">
          {fbUid ? (
            <div className="text-white flex justify-center gap-4">
              {fbName}
              {fbEmail}
              {fbUid}
              <button
                onClick={hadleLogout}
                className="text-white hover:text-red-500"
              >
                LOGOUT
              </button>
              <Link to="/mypage" className="text-white hover:text-red-500">
                마이페이지
              </Link>
            </div>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-red-500">
                LOGIN
              </Link>
              <Link to="/signup" className="text-white hover:text-red-500">
                SIGNUP
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
