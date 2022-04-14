/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getLoginData } from "../Redux/Action.js";
import "../css/Login.css"
import {useNavigate} from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const handleLogin = () => {
    // api call
    console.log(email, password);
      dispatch(getLoginData({ email, password }));
      navigate("/details")
      
  };

  return (
    <>
      <div className="loginDiv">
        <input
          className="emailinp"
          placeholder="enter email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <input
          className="passwordinp"
          placeholder="enter passwword"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="logbtn" onClick={handleLogin}>
          Login
        </button>
      
      </div>
    </>
  );
};


