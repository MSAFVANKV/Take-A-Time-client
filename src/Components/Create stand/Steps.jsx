import React, { useState } from "react";
import PersonalDetails  from "./PersonalDetails";
import BusDetails from "./BusDetails";
import PaymentDetails from "./PaymentDetails";

function Steps() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-8">
          {currentStep === 1 && <PersonalDetails />}

          {currentStep === 2 && <BusDetails />}
          {currentStep === 3 && <PaymentDetails />}

          <div className="flex justify-between mt-8">
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
          </div>

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
