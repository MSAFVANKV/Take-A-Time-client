import React from 'react'

function States({district}) {
  return (
    <div className={`border-[1px] bg-black text-white rounded-md border-black p-1 cursor-pointer hover:scale-105 active:scale-95 transition-all`}>
        {district}
        
    </div>
  )
}

export default States