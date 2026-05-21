import React from 'react';

export default function Sidebar() {
  return (
    <div className="w-48 bg-gradient-to-b from-blue-900 to-blue-950 text-white flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-blue-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold">CO</span>
          </div>
          <span className="font-bold text-sm">CO MONITOR</span>
        </div>
      </div>

      {/* Asset Monitor */}
      <div className="px-6 py-4 border-b border-blue-800">
        <div className="text-xs font-semibold text-blue-300 mb-1">ASSET MONITOR</div>
        <div className="text-sm font-mono">ID: IND-8842-CO</div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4">
        <div className="space-y-2">
          <NavItem icon="📊" label="OVERVIEW" active />
          <NavItem icon="📡" label="SENSORS" />
          <NavItem icon="📈" label="REPORTS" />
          <NavItem icon="⚙️" label="SETTINGS" />
        </div>
      </nav>

      {/* Emergency Shutdown */}
      <div className="p-3 m-3">
        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded transition">
          EMERGENCY SHUTDOWN
        </button>
      </div>

      {/* Help Center */}
      <div className="px-6 py-4 border-t border-blue-800">
        <button className="text-blue-300 hover:text-white text-sm font-semibold flex items-center gap-2 w-full">
          <span>❓</span>
          <span>HELP CENTER</span>
        </button>
      </div>

      {/* Cityscape Background */}
      <div className="h-24 bg-gradient-to-t from-blue-800 to-transparent opacity-30 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 text-blue-900 text-xs leading-none">
          ▮▮▯ ▯▮▯ ▮▮▯ ▯▮▮▮
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-3 rounded transition ${
        active
          ? 'bg-blue-500 text-white'
          : 'text-blue-200 hover:bg-blue-800'
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span className="text-xs font-semibold">{label}</span>
    </button>
  );
}
