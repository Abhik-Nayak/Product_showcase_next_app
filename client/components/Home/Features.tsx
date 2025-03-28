import React from "react";
import { FaFingerprint } from "react-icons/fa";
import { HiOutlineChat } from "react-icons/hi";
import { IoAppsOutline, IoWifiOutline } from "react-icons/io5";
import { MdNotifications, MdOutlineTouchApp } from "react-icons/md";


const featureData = [
  {
    title: "Touch to buy",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ipsum eveniet atque, quis voluptas at ducimus id tenetur molestias nisi alias, dolore praesentium nihil nam quasi voluptate harum quaerat hic?",
    icon: <MdOutlineTouchApp className="w-12 h-12 text-blue-600 mx-auto" />,
  },
  {
    title: "Secure Data",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ipsum eveniet atque, quis voluptas at ducimus id tenetur molestias nisi alias, dolore praesentium nihil nam quasi voluptate harum quaerat hic?",
    icon: <FaFingerprint className="w-12 h-12 text-blue-600 mx-auto" />,
  },
  {
    title: "Instant Chat",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ipsum eveniet atque, quis voluptas at ducimus id tenetur molestias nisi alias, dolore praesentium nihil nam quasi voluptate harum quaerat hic?",
    icon: <HiOutlineChat className="w-12 h-12 text-blue-600 mx-auto" />,
  },
  {
    title: "Live Notification",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ipsum eveniet atque, quis voluptas at ducimus id tenetur molestias nisi alias, dolore praesentium nihil nam quasi voluptate harum quaerat hic?",
    icon: <MdNotifications className="w-12 h-12 text-blue-600 mx-auto" />,
  },
  {
    title: "Wifi Support",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ipsum eveniet atque, quis voluptas at ducimus id tenetur molestias nisi alias, dolore praesentium nihil nam quasi voluptate harum quaerat hic?",
    icon: <IoWifiOutline className="w-12 h-12 text-blue-600 mx-auto" />,
  },
  {
    title: "App Watch",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ipsum eveniet atque, quis voluptas at ducimus id tenetur molestias nisi alias, dolore praesentium nihil nam quasi voluptate harum quaerat hic?",
    icon: <IoAppsOutline className="w-12 h-12 text-blue-600 mx-auto" />,
  },
];

const Features = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {featureData.map((feature, index) => {
          return (
            <div key={index} className="text-center mx-auto">
              {/* Icon */}
              <div className="mx-auto text-center">{feature.icon}</div>
              {/* Title */}
              <h1 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h1>
              {/* description */}
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
