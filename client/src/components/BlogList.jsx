import React, { useState } from 'react';
import {  blogCategories } from '../assets/assets';
import BlogCard from './BlogCard';
import { useAppContext } from '../context/AppContext';

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const { blogs, input } = useAppContext();

  // --- Filter blogs based on search input ---
  const filteredBlogs = () => {
    if (input === '') {
      return blogs;
    }

    return blogs.filter((blog) =>
      blog.title.toLowerCase().includes(input.toLowerCase()) ||
      blog.category.toLowerCase().includes(input.toLowerCase())
    );
  };

  return (
    <div className="px-4 sm:px-16 xl:px-24">

      {/* --- Category Tabs --- */}
      <div className="flex justify-center gap-4 sm:gap-8 my-10">
        {blogCategories.map((item) => (
          <button
            key={item}
            onClick={() => setMenu(item)}
            className={`px-4 py-2 rounded-full transition-all duration-300 cursor-pointer
              ${
                menu === item
                  ? 'text-white bg-blue-600 shadow-md'
                  : 'text-gray-500 hover:text-white hover:bg-blue-400/50'
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* --- Blog Cards Grid --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40">
        {filteredBlogs()
          .filter((blog) => (menu === "All" ? true : blog.category === menu))
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      </div>

    </div>
  );
};

export default BlogList;
