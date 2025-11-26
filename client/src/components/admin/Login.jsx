import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const Login = () => {
  const { axios, setToken } = useAppContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/admin/login', { email, password });

      if (data.success) {
        setToken(data.token);
        localStorage.setItem('token', data.token);
        axios.defaults.headers.common['Authorization'] = data.token;
      } else {
      toast.error(data.message);
      }
    } catch (error) {
        toast.error(error.message);
    }

  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-sm p-6 max-md:m-6 border border-blue-200 shadow-xl shadow-blue-100 rounded-lg bg-white">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full py-6 text-center">
            <h1 className="text-3xl font-bold">
              <span className="text-blue-600">Admin</span> Login
            </h1>
            <p className="font-light mt-2 text-gray-600">
              Enter your credentials to access the admin panel
            </p>
          </div>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col mb-6">
              <label className="text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="email"
                required
                placeholder="Your email id"
                className="border-b-2 border-gray-300 p-2 outline-none focus:border-blue-600 transition-all"
              />
            </div>

            <div className="flex flex-col mb-6">
              <label className="text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                required
                placeholder="Your password"
                className="border-b-2 border-gray-300 p-2 outline-none focus:border-blue-600 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 font-medium bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
