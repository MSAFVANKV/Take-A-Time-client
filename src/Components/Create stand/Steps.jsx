import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import RouteDetails from "./RouteDetails";
import PaymentDetails from "./PaymentDetails";
import { uploadProduct } from "../../Redux/AccountDetailsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Steps() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalDetails: {},
    RouteDetails: {},
    paymentDetails: {},
  });
  // const handleNextStep = () => {
  //   setCurrentStep((prevStep) => prevStep + 1);
  // };
  const handleNextStep = (data) => {
    console.log('pre 1',data);

    setFormData((prevData) => ({ ...prevData, ...data }));
    console.log('pre2',data);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (data) => {
    // Combine data from all three steps
    console.log(data,'data');
    setFormData((prevData) => ({ ...prevData, ...data }));
    onSubmit()
   
    //
  };
  const onSubmit = ()  => {
    try {
      dispatch(uploadProduct(formData)).then((value) => {
        if (value.payload.status === "fulfilled") {
          // navigate("/dashboard-stand");
          alert("Successfully Uploaded Product!");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="min-h-screen sm:flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-8">
          {currentStep === 1 && (
            <PersonalDetails
              onNext={handleNextStep}
              formData={formData.personalDetails}
            />
          )}

          {currentStep === 2 && (
            <RouteDetails
              onNext={handleNextStep}
              onPrev={handlePrevStep}
              formData={formData.RouteDetails}
            />
          )}

          {currentStep === 3 && (
            <PaymentDetails
              onPrev={handlePrevStep}
              formData={formData.paymentDetails}
              finish={handleSubmit}
            />
          )}

          {/* <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <button
                className="bg-blue-500 text-white rounded-md px-4 py-2"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Previous
              </button>
            )}

            {currentStep < 3 && (
              <button
                className="bg-blue-500 text-white rounded-md px-4 py-2"
                onClick={handleNextStep}
              >
                Next
              </button>
            )}

            {currentStep === 3 && (
              <button
                className="bg-green-500 text-white rounded-md px-4 py-2"
                onClick={handleNextStep}
              >
                Finish
              </button>
            )}
          </div> */}

          {/* Step indicators */}
          <div className="flex justify-center mt-8">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`flex items-center justify-center rounded-full h-6 w-6 ${
                  step <= currentStep ? "bg-green-500" : "bg-gray-400"
                } mx-2`}
              >
                <span className="text-white">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
