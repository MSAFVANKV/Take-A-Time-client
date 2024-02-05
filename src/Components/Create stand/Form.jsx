// Form.jsx
import React, { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginSchema, SignupSchema } from "../../Validation/UserValid";
import { useNavigate } from "react-router-dom";
import { loginUser, signupUser } from "../../Redux/SignupSlice";

function Form({ formType }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const toastOptions = {
    position: "bottom-right",
    autoClose: "8000",
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },
    validationSchema: formType === "Signup" ? SignupSchema : LoginSchema,
    onSubmit: async (values) => {
      try {
        const response =
          formType === "Signup"
            ? await dispatch(signupUser(values))
            : await dispatch(loginUser(values));
        // console.log(response, "response");

        if (response.payload.login === false && response.payload.msg) {
          // Error case
          toast.error(response.payload.msg, toastOptions);
        } else {
          // Success case
          toast.success(response.payload.msg, toastOptions);
          
          if(formType === "Signup"){
            navigate("/create-stand-steps");
            window.location.reload();
          } else{
            navigate("/dashboard-stand");
            window.location.reload();
            
          }
          
        }
      } catch (error) {
        console.log(error);
        toast.error("An error occurred", toastOptions);
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Your username"
            onChange={formik.handleChange}
          />
        </div>
        {formik.touched.username && formik.errors.username ? (
          <div className="text-red-600">{formik.errors.username}</div>
        ) : null}

         
          {/* Render email input only for Signup form */}
          {formType === "Signup" && (
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Your Email"
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-600">{formik.errors.email}</div>
              ) : null}
            </div>
          )}

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Your Password"
            onChange={formik.handleChange}
          />
        </div>
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-600">{formik.errors.password}</div>
        ) : null}

        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md py-2 transition duration-300 hover:bg-blue-600"
          >
           {
            formType && formType === "Signup" ? "Signup"  : "Go To Stand"
           }
          </button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}

export default Form;
