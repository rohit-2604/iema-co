import React from 'react';

export default function RecentEvents() {
  const events = [
    {
      type: 'CRITICAL SPIKE',
      time: '14:10:45',
      title: 'North Wing: CO spike detected at Sector 4',
      sensor: 'SENSOR-94',
      value: '45.2 PPM'
    },
    {
      type: 'MAINTENANCE',
      time: '13:55:12',
      title: 'East Storage: Sensor calibration required',
      sensor: 'SENSOR-12',
      value: 'Battery Low'
    },
    {
      type: 'SYSTEM CHECK',
      time: '13:30:00',
      title: 'Global: Automated system diagnostic complete',
      sensor: 'All protocols nominal',
      value: ''
    }
  ];

  return (
    <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm tracking-wider">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-inter text-gray-900">Recent Events</h3>
        <p className="text-sm font-inter text-gray-600">Latest system logs & alerts</p>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {events.map((event, idx) => (
          <div key={idx} className="border-l-4 font-inter border-red-500 pl-4 hover:bg-gray-50 transition rounded-r">
            <div className="flex items-start justify-between mb-2">
              <span className={`text-xs font-bold px-2  rounded ${
                event.type === 'CRITICAL SPIKE' 
                  ? 'bg-red-100 text-red-700'
                  : event.type === 'MAINTENANCE'
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-green-100 text-green-700'
              }`}>
                {event.type}
              </span>
              <span className="text-xs text-gray-500 font-semibold">{event.time}</span>
            </div>
            <p className="text-sm font-semibold text-gray-900 mb-2">{event.title}</p>
            <div className="text-xs text-gray-600">
              <p>Sensor ID: <span className="font-mono font-semibold">{event.sensor}</span></p>
              {event.value && <p>{event.value}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* View Full Audit Log */}
      <button className="w-full mt-4 text-blue-600 font-bold font-inter  text-xs uppercase hover:text-blue-800 transition tracking-wider">
        VIEW FULL AUDIT LOG →
      </button>
    </div>
  );
}
