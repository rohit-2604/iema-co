import { Bell, CircleUserRound, Copy, Factory, Settings } from 'lucide-react';
import React from 'react';

export default function Header() {
  return (
    <div className="bg-[#f5f8fc] p-2">
      <div className="flex items-center justify-between">
        {/* Title and Breadcrumb */}
        <div className="flex-1">
          <h1 className="text-2xl font-inter font-bold tracking-wider text-gray-900">CO Metrics Dashboard</h1>
          <div className="flex items-center gap-6 text-sm text-gray-600 mt-4">
           
            <div className="flex items-center gap-6 text-sm text-gray-600 mt-4 w-full">
  


</div>
          </div>
          
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Date Time */}
          <div className="text-right">
            <div className="text-sm font-semibold text-gray-900">04 OCT 2023 | 14:32:05</div>
              <div className="ml-auto mt-1">
    <div className="flex items-center gap-3 border-gray-200">
      
      <div className="text-sm font-semibold text-gray-900 bg-gray-100 flex px-3 py-1 rounded gap-2">
        
        <div className="flex items-center gap-2">
          <Factory className="w-5 h-5" />
          Bhilai Steel Plant
        </div>

        <div className="text-xs text-gray-500 ml-5 flex items-center gap-1">
          Bhilai_main_entrance
          <Copy className="w-3 h-3" />
        </div>

      </div>
    </div>
  </div>
          </div>

          {/* Notification Bell */}
          {/* <button className="relative text-gray-600 hover:text-gray-900 transition">
            <span className="text-xl"><Bell /></span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button> */}

          {/* Settings */}
          {/* <button className="text-gray-600 hover:text-gray-900 transition">
            <span className="text-xl"><Settings /></span>
          </button> */}

          {/* User Profile */}
          {/* <button className="text-gray-600 hover:text-gray-900 transition">
            <span className="text-xl"><CircleUserRound /></span>
          </button> */}

          {/* Location and ID */}
          {/*  */}
        </div>
      </div>
    </div>
  );
}
