import { Info } from 'lucide-react';
import React from 'react';

export default function MetricsCard({
  icon,
  title,
  value,
  unit,
  subtitle,
  status,
  trend,
  time,
  percentage
}) {
  return (
    <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm hover:shadow-md transition">
      
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3">

          {/* ICON */}
          <div className="w-9 h-9 flex items-center justify-center">
            <img
              src={getIcon(icon)}
              alt={icon}
              className="w-10 h-10 object-contain"
            />
          </div>

          <div className="flex-1">
            <p className="text-base font-inter text-gray-600 font-medium">{title}</p>

            {status && (
              <p className="text-xs text-green-600 font-semibold mt-1">
                ● {status}
              </p>
            )}
          </div>
        </div>

        <button className="text-gray-400 hover:text-gray-600">
        <Info />
        </button>
      </div>

      {/* Main Value */}
      <div className="mb-2">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold font-poppins text-gray-900">
            {value}
          </span>

          {unit && (
            <span className="text-sm  font-poppins font-semibold text-gray-600">
              {unit}
            </span>
          )}

          {subtitle && (
            <span className="text-sm font-semibold font-poppins text-gray-600">
              {subtitle}
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-600">
        {trend && (
          <p className="text-blue-600 font-semibold font-poppins">{trend}</p>
        )}

        {time && (
          <p className="text-red-600 font-semibold">{time}</p>
        )}

        {percentage && (
          <p className="text-green-600 font-semibold">{percentage}</p>
        )}
      </div>
    </div>
  );
}

function getIcon(iconName) {
  const icons = {
    cloud: "/cloud.png",
    clock: "/clock.png",
    "calendar": "/calender.png",
    graph: "/graph.png",
    sensor: "/sensors.png"
  };

  return icons[iconName] || "/default.png";
}