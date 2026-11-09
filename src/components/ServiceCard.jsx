import React, { useRef, useState } from "react";

const ServiceCard = ({ service, index }) => {
 return (
  <div className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10">
   <div className="flex items-center gap-10 p-8  transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 realtive">
    <div className="bg-gray-100 dark:bg-white-700 rounded-full">
     <img className="max-w-24 bg-white dark:bg-white-900 rounded-full m-2" src={service.icon} alt="" />
    </div>
    <div className="flex-1">
     <h3 className="font-bold">{service.title}</h3>
     <p className="text-sm mt-2">{service.description}</p>
    </div>
   </div>
  </div>
 );
};

export default ServiceCard;
