import React from "react";
import logo from "../Components/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-20">
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center flex flex-col justify-center items-center mb-8">
          Contact us anytime between 10:00 AM &amp; 07:00 PM on all days!
        </div>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <img src={logo} alt="Logo" className="h-20 w-auto mx-auto lg:mx-0" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center flex flex-col lg:flex-row justify-between items-center ">
          <div className="lg:text-left flex flex-col items-center lg:flex-row lg:items-start pt-6">
            <div>
              <p className="mb-2">JustBooks is an online books and</p>
              <p className="mb-2">magazine rental service.</p>
              <p className="mb-2">We have over 10 lakh books and</p>
              <p className="mb-2">2 lakh happy customers.</p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:items-start ">
            <div className="mr-4">
            <p className="mb-4 border-b border-white" >Contact Information</p>
              <p className="mb-2">Email: contact@readHub.com</p>
              <p className="mb-2">Phone: +1234567890</p>
              <p className="mb-2 style">Address</p>
              <p className="mb-2">Thrissur</p>
              <p className="mb-2">Kerala, India</p>
            
            </div>
            
              
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
