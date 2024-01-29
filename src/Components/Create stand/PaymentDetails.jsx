import { useFormik } from "formik";
import React from "react";
import { PaymentDetailsValid } from "../../Validation/UserValid";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Paypal from "./Paypal";

function PaymentDetails({ onPrev, formData, finish }) {
  const inputFields = [
    {
      id: "payment",
      label: "Payment",
      name: "payment",
      placeholder: "Payment",
      value:'1$'
    },
  ];

  const initialOptions = {
    clientId:
      "ARrRpbrMk0jTTq236TMKSu6G1NG7HHq4MFGh-H2elOPUXTrsMLisPBo6UYsNAtz6Pn4hetix3z6V1TJf",
    currency: "USD",
    intent: "capture",
  };

  const formik = useFormik({
    initialValues: {
      payment: formData.payment || "",
    },
    validationSchema: PaymentDetailsValid,
    onSubmit: (values) => {
      finish({ paymentDetails: values });
    },
  });

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="sm:container sm:w-[800px]  sm:p-8">
        <h1 className="text-3xl font-bold mb-8">Payment Details :</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex justify-center ">
            <div className="grid grid-cols-1 gap-5 bg-slate-100 p-2 border border-black rounded-lg">
              {inputFields.map((field) => (
                <div key={field.id} className="mb-4">
                  <label
                    htmlFor={field.id}
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    {field.label}
                  </label>
                  <input
                    type="text"
                    id={field.id}
                    name={field.name}
                    className="w-full border text-center  border-none font-bold outline-none rounded-md p-2"
                    placeholder={field.placeholder}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={field.value}
                    readOnly
                  />
                  {formik.touched[field.name] && formik.errors[field.name] ? (
                    <div className="text-red-500 mt-2 text-sm">
                      {formik.errors[field.name]}
                    </div>
                  ) : null}
                </div>
              ))}
              <div className=" ">
                <Paypal />
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button
              className="bg-blue-500 text-white rounded-md px-4 py-2"
              onClick={onPrev}
            >
              Previous
            </button>
            <button
              className="bg-green-500 text-white rounded-md px-4 py-2"
              type="submit"
            >
              Finish
            </button>
          </div>
        </form>
      </div>
    </PayPalScriptProvider>
  );
}

export default PaymentDetails;
