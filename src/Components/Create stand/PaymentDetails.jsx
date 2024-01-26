import { useFormik } from "formik";
import React from "react";
import { PaymentDetailsValid } from "../../Validation/UserValid";

function PaymentDetails({ onPrev, formData, finish }) {
  const inputFields = [
    {
      id: "payment",
      label: "Bus Stand Name",
      name: "payment",
      placeholder: "Bus Stand Name",
    },
  ];

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
    <div className="sm:container sm:w-[800px]  sm:p-8">
      <h1 className="text-3xl font-bold mb-8">Payment Details</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
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
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder={field.placeholder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[field.name]}
              />
              {formik.touched[field.name] && formik.errors[field.name] ? (
                <div className="text-red-500 mt-2 text-sm">
                  {formik.errors[field.name]}
                </div>
              ) : null}
            </div>
          ))}
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
  );
}

export default PaymentDetails;
