import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { auth, googleProvider, facebookProvider } from "./firebase";
import { signInWithRedirect, signInWithPopup } from "firebase/auth";
const Login = () => {
  return (
    <div className="bg-sky-600 w-full h-screen flex justify-center items-center">
      <div className="login-card bg-white min-w-[25%] max-w-[40%] h-[30%] rounded-3xl">
        <div className="cart-container w-full h-full flex flex-col justify-center items-center gap-4">
          <h1 className="text-3xl font-bold">Welcome to WebChat!</h1>
          <div
            onClick={() => {
              signInWithRedirect(auth, googleProvider);
            }}
            className="authMethod bg-sky-400 flex items-center cursor-pointer gap-3 h-11 w-[50%] rounded-lg justify-center"
          >
            <GoogleOutlined className="text-2xl flex items-center text-white" />
            <p className="text-white">Sign In With Google</p>
          </div>

          <div
            onClick={() => {
              signInWithPopup(auth, facebookProvider);
            }}
            className="authMethod bg-blue-600 flex items-center cursor-pointer gap-3 h-11 w-[55%] rounded-lg justify-center"
          >
            <FacebookOutlined className="text-2xl flex items-center text-white" />
            <p className="text-white">Sign In With Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
