import React, { useRef } from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const Header = () => {
  const {setInput, input} = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  const onClear = () => {
    setInput('');
    inputRef.current.value='';
  };

  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
      <div className='text-center mt-20 mb-8'>
        <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5
            mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm
            text-primary transform transition duration-500 hover:scale-105 animate-bounce'>
          <p className='animate-pulse'>New: AI feature integrated</p>
          <img src={assets.star_icon} className='w-2.5 animate-spin-slow' alt="" />
        </div>
        <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700'>
            Your own <span className='text-blue-700'>blogging</span> <br />platform.
        </h1>
        <p className='my-6 sm:my-8 max-w-2x1 m-auto max-sm:text-xs
            text-gray-500'>This is your space to think out loud, to share what matters,
            and to write without filters. Whether it's one word or a thousand, your
            story starts right here. 
        </p>

        <form onSubmit={onSubmitHandler} className="flex items-center justify-center gap-3 w-full max-w-lg mx-auto mt-10">
            <input 
                ref={inputRef}
                type="text" 
                placeholder="Search for blogs..." 
                required
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none 
                        focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm
                        text-gray-700 placeholder-gray-400 transition-all duration-300"
            />
            
            <button 
                type="submit" 
                className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium 
                        hover:bg-blue-700 active:scale-95 transition-all duration-200
                        shadow-md hover:shadow-lg"
            >
                Search  
            </button>
        </form>

      </div>
      <div className="text-center">
        {input && (
          <button
            onClick={onClear}
            className="border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer"
          >
            Clear Search
          </button>
        )}
      </div>

      <img 
        src={assets.gradientBackground} 
        alt="" 
        className='absolute -top-50 -z-1 opacity-50 animate-fadeIn' 
      />
    </div>
  );
}

export default Header;
