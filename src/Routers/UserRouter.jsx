import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";

import { checkpaytmstatus, sessionRoute, userLogout } from "../Constant/ServerApi";

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
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const checkPayment = async () => {
      try {
        const response = await axios.get(checkpaytmstatus, {
          withCredentials: true,
        });
        // console.log(response.data,'response.data.isPaymentCompleted');
        if (response.data && response.data.status === "fulfilled") {
          
          setIsPaymentCompleted(true)
          // alert("payment not completed")
        }
        // setIsPaymentCompleted(response.data.isPaymentCompleted);
      } catch (error) {
        console.error("Error checking payment status:", error);
      }finally {
        // Set loading to false after the payment status is checked
        setIsLoading(false);
      }
    };

    checkPayment();
  }, []);


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
  if (isLoading) {
    // Render loading indicator or placeholder while checking payment status
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header onLogout={handleLogout} isLogin={isLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-stand" element={<SignUp />} />
        <Route path="/login-stand" element={<Login />} />
        <Route path="/create-stand-steps" element={!isPaymentCompleted && isLogin ? <Steps /> : <Navigate to="/create-stand" />} />
        {/* <Route path="/dashboard-stand" element={isPaymentCompleted && isLogin ? <Dashbaord /> :<Navigate to={"/create-stand-steps"} />}/> */}
        <Route
          path="/dashboard-stand"
          element={
            isPaymentCompleted && isLogin ? (
              <Dashbaord />
            ) : (
              <Navigate to="/create-stand-steps" />
            )
          }
        />
      </Routes>
    </>
  );
}

export default UserRouter;
