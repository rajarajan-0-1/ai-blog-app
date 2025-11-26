import React from 'react'
import { Outlet } from 'react-router-dom'
import favicon from '../../assets/favicon.svg'
import { FaDoorOpen } from 'react-icons/fa'
import Sidebar from '../../components/admin/Sidebar'
import { useAppContext } from '../../context/AppContext'

const Layout = () => {

  const { axios, setToken, navigate } = useAppContext();

const logout = () => {
  // remove token from local storage
  localStorage.removeItem("token");

  // remove auth header
  axios.defaults.headers.common["Authorization"] = null;

  // remove token from context
  setToken(null);

  // redirect to login/home
  navigate("/");
};


  return (
    <>
      <div className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200">
        
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

        <button
          onClick={logout}
          className="flex items-center gap-2 text-sm px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full cursor-pointer transition-all duration-200"
        >
          <FaDoorOpen className="text-lg" />
          Logout
        </button>
      </div>
      <div className='flex h-[ calc (100vh-70px) ]' >
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
