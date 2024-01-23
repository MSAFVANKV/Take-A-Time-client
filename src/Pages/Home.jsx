import React from 'react'

import bus_time_1 from '../assets/images/bust_time1.jpeg';
import States from './States/States';


function Home() {
  return (
  <>
    <section className='sm:h-[100vh] h-[60vh]'>
      {/* <h1 className='my-10 font-semibold text-[3rem] text-center'>Find You'r place</h1> */}
      <div className="bustime sm:flex w-[100%] my-10">
        <div className="bustime__image flex justify-center  sm:w-[50%]">
          <img src={bus_time_1} alt="" className='w-[70%] rounded-full'/>
        </div>
        <div className="bustime__quote flex justify-center top-0 flex-col items-center sm:w-[50%]">
          <h1 className='text-[2rem]'>Hi I am 'TAT'</h1>
          <span>
            <p>I am Here to help you to find the time </p>
          </span>
        </div>
      </div>
    </section>

    <section className='text-center'>
      <h1>Choose you'r Place</h1>
    <div className="flex flex-wrap justify-center sm:my-10 gap-2 ">
    <States district="Thiruvananthapuram"/>
    <States district="Kollam"/>
    <States district="Pathanamthitta"/>
    <States district="Alappuzha"/>
    <States district="Kottayam"/>
    <States district="Idukki"/>
    <States district="Ernakulam"/>
    <States district="Thrissur"/>
    <States district="Palakkad"/>
    <States district="Malappuram"/>
    <States district="Kozhikode"/>
    <States district="Wayanad"/>
    <States district="Kannur"/>
    <States district="Kasaragod"/>
    </div>

    </section>

    
    </>
  )
}

export default Home