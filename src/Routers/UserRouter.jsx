import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";

import { sessionRoute, userLogout } from "../Constant/ServerApi";

// imported Pages
import Home from "../Pages/Home";
import Header from "../Components/Header/Header";
import SignUp from "../Components/Create stand/SignUp";
import Steps from "../Components/Create stand/Steps";
import Login from "../Components/Create stand/Login";
import Dashbaord from "../Pages/Dasboard/Dashbaord";
import { useDispatch } from "react-redux";

function UserRouter() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    axios.get(`${sessionRoute}`, { withCredentials: true }).then((res) => {
      if (res.data.valid) {
        // console.log('session',res.data);
        setLogin(true);
      }
    });
  }, []);

  useEffect(() => {

  },[])
  
  const handleLogout = async () => {
    try {
        await axios.get(`${userLogout}`);
        setLogin(false)
    } catch (error) {
        console.error("Error during logout:", error);
    }
  }

  return (
    <>
      <Header onLogout={handleLogout}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-stand" element={<SignUp />} />
        <Route path="/login-stand" element={<Login />} />
        <Route path="/create-stand-steps" element={ isLogin ? <Steps /> : <SignUp />} />
        <Route path="/dashboard-stand" element={isLogin ? <Dashbaord /> :<Login />}/>
      </Routes>
    </>
  );
}

export default UserRouter;
