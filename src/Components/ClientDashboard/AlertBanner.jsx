import { CircleAlert } from 'lucide-react';
import React from 'react';

export default function AlertBanner() {
  return (
    <div className="bg-red-50 border border-red-300 rounded-lg p-2 flex items-center justify-between">
      <div className="flex items-center gap-2 p-2">
        <div className="text-2xl "><CircleAlert className='text-red-500' /></div>
        <div className="flex-1 font-inter">
          <p className="text-[16px]  text-red-700">
            <span className="text-red-600">CRITICAL:</span> Zone B - Furnace Level CO reading at{' '}
            <span className="font-bold">89 ppm</span>. Exceeds OSHA 8-hr TWA limit of 50 ppm.
          </p>
        </div>
      </div>
      <div className=" bg-[#BA1A1A38] rounded px-4 py-2 font-jetbrains text-center">
        <p className="text-sm font-bold text-[#e94545]">ZONE-B Furnace</p>
      </div>
    </div>
  );
}
