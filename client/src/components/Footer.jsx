import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import  favicon   from "../assets/favicon.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 mt-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* --- Logo & Description --- */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={favicon} alt="MindScribe AI Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900">MindScribe <span className="text-blue-600">AI</span></span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">Best Sellers</a></li>
            <li><a href="#" className="hover:text-blue-600">Offers & Deals</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
            <li><a href="#" className="hover:text-blue-600">FAQs</a></li>
          </ul>
        </div>

        {/* --- Need Help --- */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Need help?</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600">Delivery Information</a></li>
            <li><a href="#" className="hover:text-blue-600">Return & Refund Policy</a></li>
            <li><a href="#" className="hover:text-blue-600">Payment Methods</a></li>
            <li><a href="#" className="hover:text-blue-600">Track your Order</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
          </ul>
        </div>

        {/* --- Follow Us --- */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
          <div className="flex gap-4 text-gray-600 text-xl">
            <a href="#" className="hover:text-blue-600"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-600"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-600"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-600"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* --- Copyright --- */}
      <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-500">
        Copyright © 2025 <span className="font-semibold text-gray-800">MindScribe AI</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
