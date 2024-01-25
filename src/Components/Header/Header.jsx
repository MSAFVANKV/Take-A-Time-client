import React from "react";
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo1.jpeg';


function Header({onLogout}) {
  return (
    <header className="sticky top-0 w-[100%] h-[100px] z-[999] bg-white shadow-md flex items-center justify-between px-4 py-3">
      <Link to="/" className="flex flex-col items-center">
        <img src={logo} alt="logo" width='50px' className="rounded-full"/>
        <h1 className="text-[1.5rem] font-bold text-[#8681c7]">Take A Time</h1>
      </Link>
      <nav className="md:block hidden">
        <ul>
          <li></li>
        </ul>
      </nav>
      <Link to="/create-stand">
        <button
          className="p-2 bg-[#8681c7] hover:bg-[#9A98B5] active:scale-90
          transition-all active:shadow-md rounded-lg text-white font-bold capitalize "
        >
          create a stand
        </button>
      </Link>
      <button onClick={onLogout}>logout</button>
    </header>
  );
}

export default Header;
