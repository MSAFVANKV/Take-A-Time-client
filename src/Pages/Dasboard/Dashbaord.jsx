import axios from "axios";
import React, { useEffect, useState } from "react";
import { userDetails } from "../../Constant/ServerApi";

function Dashbaord() {
  const [showWelcome, setWelcome] = useState(true);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(userDetails);
        const data = response.data;

        if (data && data.user) {
          // Check if data.user is an array or not
          const userDataArray = Array.isArray(data.user) ? data.user : [data.user];
  
          console.log(userDataArray, "data.username");
          setUserData(userDataArray);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);
  // =======================================================
  useEffect(() => {
    let interval;
    if (showWelcome) {
      setTimeout(() => {
        setWelcome(false);
      }, 5000);
    }
    return () => {
      clearTimeout(interval);
    };
  }, [showWelcome]);
  useEffect(() => {});
  return (
    <div>
      {showWelcome  && (
        <div className="flex w-[100%] h-[100vh] fixed bg-slate-950 justify-center items-center">
      
      {/* <div className="flex justify-center items-center" >
              <p className="text-[2rem] text-white capitalize">welcome {userData}</p>
            </div> */}
        </div>
      )}

      {userData && (
        <div className="flex w-[100%] h-[250px] bg-slate-500">
          {userData.map((user) => (
            <div className="flex justify-center items-center" key={user._id}>
              <p className="text-[2rem] text-center">{user.username}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashbaord;
