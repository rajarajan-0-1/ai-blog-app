import React from 'react'
import { assets } from "../assets/assets"
// import { useNavigate } from 'react-router-dom'
import favicon from "../assets/favicon.svg";
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
  // const navigate = useNavigate();
    const { navigate, token } = useAppContext();


  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32">
      {/* --- Logo --- */}
      <div 
        onClick={() => navigate('/')} 
        className="flex items-center gap-2 cursor-pointer"
      >
        <img 
          src={favicon} 
          alt="MindScribe AI Logo" 
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
        <span className="text-lg sm:text-xl font-semibold text-gray-800">
          MindScribe <span className="text-blue-600">AI</span>
        </span>
      </div>

      {/* --- Login Button --- */}
      <button
        onClick={() => navigate('/admin')}
        className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-2.5 transition-all duration-200"
      >
        {/* Login  */}
        { token ? 'Dashboard' : 'Login'}
        <img src={assets.arrow} alt="arrow" className="w-3" />
      </button>
    </div>
  );
};

export default Navbar;
