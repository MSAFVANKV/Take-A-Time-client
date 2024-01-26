import { useFormik } from 'formik';
import React, { useState } from 'react'
import { RouteDetailsValid } from '../../Validation/UserValid';

function RouteDetails({formData, onNext, onPrev}) {
  const inputFields = [
    { id: 'standname', label: 'Bus Stand Name', name:'standname' , placeholder: 'eg: place name' },
    { id: 'standLocation', optional:'optional' , label: 'Bus Stand Location', name:'standLocation' , placeholder: 'eg: https://maps.app.goo.gl/url here' },

    
  ];

  const formik = useFormik({
    initialValues:{
      standname: formData.standname || "",
    },
    validationSchema:RouteDetailsValid,
    onSubmit:(values)=>{
      onNext({ RouteDetails: values });
    }
  })

  return (
    <div className="sm:container sm:w-[800px]  sm:p-8">
      <h1 className="text-3xl font-bold mb-8">Stand Details</h1>
      {/* <iframe width="100%" height="236px" frameborder="0" style={{border:0 }}src="https://maps.google.com/maps?hl=en&amp;q=Transport+Commissinarate+thycaus+trivandrum&amp;t=m&amp;z=14&amp;output=embed"></iframe> */}
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {inputFields.map((field) => (
            <div key={field.id} className="mb-4">
              <label htmlFor={field.id} className="block text-gray-700 text-sm font-bold mb-2">
                {field.label} {field.optional&& <span className='text-gray-400'>{`( ${field.optional} )`}</span> }
              </label>
              <input
                type="text"
                id={field.id}
                name={field.name}
                className="w-full border border-gray-300 rounded-md p-2 "
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

        <div className="flex justify-between mt-8">
        <button className="bg-blue-500 text-white rounded-md px-4 py-2" onClick={onPrev}>
          Previous
        </button>
        <button
          className="bg-blue-500 text-white rounded-md px-4 py-2"
         type='submit'
        >
          Next
        </button>
      </div>
      </form>
    </div>
  );
}

export default RouteDetails