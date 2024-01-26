import { useFormik } from 'formik';
import React, { useState } from 'react';
import { AccountDetails } from '../../Validation/UserValid';


const PersonalDetails = ({ onNext, formData }) => {
  const inputFields = [
    { id: 'fullname', type:'text' , label: 'Full Name', name:'fullname' , placeholder: 'Your fullname' },
    { id: 'phone', type:'number' , label: 'Phone', name:'phone' , placeholder: 'Your phone number' },
    // { id: 'address', type:'' , label: 'Address', name:'address' , placeholder: 'Your address' },
    { id: 'pincode', type:'number' , label: 'Pincode', name:'pincode' , placeholder: 'Valid pincode' },
    { id: 'postOffice', type:'text' , label: 'Post Office', name:'postOffice' , placeholder: 'PostOffice' },
    { id: 'district', type:'text' , label: 'district', name:'district' , placeholder: 'District' },
    { id: 'state', type:'text' , label: 'state', name:'state' , placeholder: 'state' },    
  ];


  const formik = useFormik({
    initialValues:{
      fullname: formData.fullname || "",
      phone: formData.phone || "",
      pincode: formData.pincode || "",
      postOffice: formData.postOffice || "",
      district: formData.district || "",
      state: formData.state || "",
    },
    validationSchema:AccountDetails,
    onSubmit:(values)=>{
      onNext({ personalDetails: values });
    }
  })

  return (
    <div className="sm:container sm:w-[800px]  sm:p-8">
      <h1 className="text-3xl font-bold mb-8">Account Details</h1>

      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {inputFields.map((field) => (
            <div key={field.id} className="mb-4">
              <label htmlFor={field.id} className="block text-gray-700 text-sm font-bold mb-2">
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                name={field.name}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder={field.placeholder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[field.name]}
              />
              {formik.touched[field.name] && formik.errors[field.name] ? (
                <div className="text-red-500 mt-2 text-sm">{formik.errors[field.name]}</div>
              ) : null}
            </div>
          ))}
        </div>

        <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2">
          next
        </button>
      </form>
    </div>
  );
};

export default PersonalDetails;
