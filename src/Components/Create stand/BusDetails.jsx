import React from 'react'

function BusDetails() {
  return (
    <div className="container min-w-[800px] p-8">
    <h1 className="text-3xl font-bold mb-8">Bus Details</h1>
   <div className="flex flex-row gap-5">
      
    <div className="mb-4 flex-1">
      <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
        Stand Name
      </label>
      <input
        type="text"
        id="address"
        name="address"
        className="w-full border border-gray-300 rounded-md p-2"
        placeholder="Your address"
      />
    </div>

    <div className="mb-4 flex-1">
      <label htmlFor="busName" className="block text-gray-700 text-sm font-bold mb-2">
        Bus Name
      </label>
      <input
        type="text"
        id="busName"
        name="busName"
        className="w-full border border-gray-300 rounded-md p-2"
        placeholder="Your bus name"
      />
    </div>

    <div className="mb-4 flex-1">
      <label htmlFor="ownerName" className="block text-gray-700 text-sm font-bold mb-2">
        Owner Name
      </label>
      <input
        type="text"
        id="ownerName"
        name="ownerName"
        className="w-full border border-gray-300 rounded-md p-2"
        placeholder="Your owner name"
      />
    </div>
   </div>
    
  </div>
  )
}

export default BusDetails