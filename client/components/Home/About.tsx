import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

type Props = {
  imageOrder: string;
  textOrder: string;
  title: string;
  linkText: string;
};

const About = ({ imageOrder, textOrder, title, linkText }: Props) => {
  return (
    <div className="">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
        {/* text content */}
        <div className={`${textOrder}`}>
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            {title}
          </h1>
          {/* List  */}
          <div className="mt-8">
            <div className="flex items-center mb-6 space-x-4">
              <div className="w-6 h-6 flex items-center justify-center flex-col rounded-full bg-blue-600 text-white">
                <FaCheck />
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                5G Connectivity for lightning-fast speeds
              </p>
            </div>
            <div className="flex items-center mb-6 space-x-4">
              <div className="w-6 h-6 flex items-center justify-center flex-col rounded-full bg-blue-600 text-white">
                <FaCheck />
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Experience Unmatched Power with the A18 Bionic Chip
              </p>
            </div>
            <div className="flex items-center mb-6 space-x-4">
              <div className="w-6 h-6 flex items-center justify-center flex-col rounded-full bg-blue-600 text-white">
                <FaCheck />
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                ProMotion XDR Display with 120Hz refresh rate for ultra-smooth
                visuals
              </p>
            </div>
            <div className="flex items-center mb-6 space-x-4">
              <div className="w-6 h-6 flex items-center justify-center flex-col rounded-full bg-blue-600 text-white">
                <FaCheck />
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Advanced Dual-Camera System with Night Mode and ProRAW
              </p>
            </div>
            <div className="flex items-center mb-6 space-x-4">
              <div className="w-6 h-6 flex items-center justify-center flex-col rounded-full bg-blue-600 text-white">
                <FaCheck />
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Ceramic Shield and IP68 water resistance for ultimate durability
              </p>
            </div>
            <div className="flex items-center mb-6 space-x-4">
              <div className="w-6 h-6 flex items-center justify-center flex-col rounded-full bg-blue-600 text-white">
                <FaCheck />
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                MagSafe compatibility for effortless wireless charging
              </p>
            </div>
            <div className="flex items-center mb-6 space-x-4">
              <div className="w-6 h-6 flex items-center justify-center flex-col rounded-full bg-blue-600 text-white">
                <FaCheck />
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Ceramic Shield and IP68 water resistance for ultimate durability
              </p>
            </div>
            {/* link */}
            <p className="font-semibold text-blue-600 cursor-pointer hover:underline w-fit">
              {linkText}
            </p>
          </div>
        </div>
        {/* Image content */}
        <div className={`${imageOrder}`}>
          <Image
            src={`${
              linkText === "Learn More"
                ? "/images/product.webp"
                : "/images/product1.webp"
            }`}
            alt="image"
            width={580}
            height={580}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
