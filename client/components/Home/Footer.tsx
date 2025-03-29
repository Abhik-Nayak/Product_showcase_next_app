import React from 'react'
import { FaDribbble, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-950'>
      <div className='w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
        {/* 1st part */}
        <div>
          <div className='text-white font-bold text-3xl'>LOGO</div>
          <p className='mt-5 font-semibold text-gray-300 text-sm'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error numquam vitae sit hic doloribus, possimus voluptate expedita ea nostrum enim ullam sed tenetur necessitatibus. Ab obcaecati eveniet asperiores inventore consectetur.
          </p>
          {/* Social Links */}
          <div className='flex items-center text-white space-x-4 mt-6'>
            <div className='w-8 h-8 bg-blue-700 flex items-center justify-center flex-col rounded-full'>
              <FaTwitter />
            </div>
            <div className='w-8 h-8 bg-blue-700 flex items-center justify-center flex-col rounded-full'>
              <FaFacebookF />
            </div>
            <div className='w-8 h-8 bg-blue-700 flex items-center justify-center flex-col rounded-full'>
              <FaDribbble />
            </div>
            <div className='w-8 h-8 bg-blue-700 flex items-center justify-center flex-col rounded-full'>
              <FaYoutube />
            </div>
          </div>
        </div>
        {/* 2nd part */}
        <div className='space-y-5'>
          <h1 className='text-lg text-white font-bold'>Company</h1>
          <p className='text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm'>
            About Us
          </p>
          <p className='text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm'>
            Services
          </p>
          <p className='text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm'>
            Our Customers
          </p>
          <p className='text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm'>
            Portfolio
          </p>
          <p className='text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm'>
            Blogs
          </p>
        </div>
        {/* 3rd part */}
        <div className='space-y-5'>
          <h1 className='text-lg text-white font-bold'>Company</h1>
          <p className='text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm'>
            Legal information
          </p>
          <p className='text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm'>
            Privcy Policy
          </p>
          <p className='text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm'>
            Term & Conditions
          </p>
          <p className='text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm'>
            Report Abuse
          </p>
        </div>
        {/* 4th part */}
        <div>
          <h1 className='text-lg text-white font-bold'>Get in Touch</h1>
          <div className='mt-6'>
            <h1 className='text-sm text-white'>Our Mobile Number</h1>
            <h1 className='text-base font-bold text-white mt-1'>+128902 203812</h1>
          </div>
          <div className='mt-6'>
            <h1 className='text-sm text-white'>Address</h1>
            <h1 className='text-base font-bold text-white mt-1'>Bhubaneswar,Odisha,India</h1>
          </div>
        </div>

      </div>
      {/* Bottom part */}
      <div className='mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
        <p className='text-center md:text-left'>
          Copyright @ 2025 Abhik. All rights reserved
        </p>
        <div className='flex items-center space-x-4 mt-4 md:mt-0'>
          <span>Social : </span>
          <span className='text-gray-500 hover:text-gray-800'>
            <FaFacebookF />
          </span>
          <span className='text-gray-500 hover:text-gray-800'>
            <FaTwitter />
          </span>
          <span className='text-gray-500 hover:text-gray-800'>
            <FaDribbble />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer