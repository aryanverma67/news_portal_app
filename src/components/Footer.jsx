// Footer.js

import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaNewspaper,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1520px]  mt-5 m-auto px-4 py-2 bg-[#24262b]">
      <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        {/* Column 1 - About Us */}
        <div>
          <div className="flex items-center">
            <FaNewspaper className="w-8 h-7" />

            <h1 className="text-3xl text-blue-600 font-bold rounded-2xl px-2 py-1">
              News
              <span className="text-2xl text-gray-900 ml-3 font-semibold">
                Portal
              </span>
            </h1>
          </div>
          <p className="text-sm mt-6 mb-3">
            Stay updated with the latest news from around the globe. Our mission is to provide timely and accurate news coverage.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            {/* Social Media Icons */}
            <FaFacebookSquare
              className="cursor-pointer hover:text-orange-600"
              size={30}
            />
            <FaInstagram
              className="cursor-pointer hover:text-orange-600"
              size={30}
            />
            <FaTwitterSquare
              className="cursor-pointer hover:text-orange-600"
              size={30}
            />
            <FaGithubSquare
              className="cursor-pointer hover:text-orange-600"
              size={30}
            />
            <FaDribbbleSquare
              className="cursor-pointer hover:text-orange-600"
              size={30}
            />
          </div>
        </div>

        {/* Columns 2 and 3 - Company, Customer Service, Resources */}
        <div className="lg:col-span-2 flex justify-between mt-6">
          {/* Company */}
          <div>
            <h6 className="font-medium text-[#9b9b9b] hover:scale-125 transition-all">
              Company
            </h6>
            <ul>
              <li className="py-2 text-sm hover:text-orange-600">About Us</li>
              <li className="py-2 text-sm hover:text-orange-600">Careers</li>
              <li className="py-2 text-sm hover:text-orange-600">Blog</li>
              <li className="py-2 text-sm hover:text-orange-600">Press</li>
            </ul>
          </div>
          {/* Customer Service */}
          <div>
            <h6 className="font-medium text-[#9b9b9b] hover:scale-125 transition-all">
              Customer Service
            </h6>
            <ul>
              <li className="py-2 text-sm hover:text-orange-600">Help Center</li>
              <li className="py-2 text-sm hover:text-orange-600">Returns</li>
              <li className="py-2 text-sm hover:text-orange-600">Shipping</li>
              <li className="py-2 text-sm hover:text-orange-600">Contact Us</li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h6 className="font-medium text-[#9b9b9b] hover:scale-125 transition-all">
              Resources
            </h6>
            <ul>
              <li className="py-2 text-sm hover:text-orange-600">FAQ</li>
              <li className="py-2 text-sm hover:text-orange-600">Terms of Service</li>
              <li className="py-2 text-sm hover:text-orange-600">Privacy Policy</li>
              <li className="py-2 text-sm hover:text-orange-600">Sitemap</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
