import { useState } from "react";

const sensors = [
  { id: "SENSOR-01", value: 8.2, status: "safe", battery: "full" },
  { id: "SENSOR-02", value: 11.5, status: "safe", battery: "full" },
  { id: "SENSOR-04", value: 45.2, status: "danger", battery: "low" },
  { id: "SENSOR-05", value: 14.0, status: "safe", battery: "full" },
  { id: "SENSOR-09", value: 24.8, status: "warning", battery: "full" },
  { id: "SENSOR-12", value: null, status: "maintenance", battery: "low" },
];

const statusConfig = {
  safe: {
    border: "border-green-400",
    badge: "bg-green-500 text-white",
    valueColor: "text-gray-800",
    label: "SAFE",
  },
  danger: {
    border: "border-red-500",
    badge: "bg-red-500 text-white",
    valueColor: "text-red-500",
    label: "DANGER",
  },
  warning: {
    border: "border-amber-400",
    badge: "bg-amber-400 text-amber-900",
    valueColor: "text-amber-500",
    label: "WARNING",
  },
  maintenance: {
    border: "border-gray-300",
    badge: "bg-gray-100 text-gray-500",
    valueColor: "text-gray-400",
    label: "MAINTENANCE",
  },
};

function BatteryIcon({ level }) {
  const color =
    level === "full"
      ? "text-green-500"
      : level === "mid"
      ? "text-amber-400"
      : "text-red-400";

  return (
    <svg
      className={`w-5 h-5 ${color}`}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      {level === "full" && (
        <>
          <rect x="2" y="7" width="18" height="10" rx="2" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5" />
          <rect x="20" y="10" width="2" height="4" rx="1" fill="currentColor" />
          <rect x="3.5" y="8.5" width="15" height="7" rx="1" fill="currentColor" />
        </>
      )}
      {level === "low" && (
        <>
          <rect x="2" y="7" width="18" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <rect x="20" y="10" width="2" height="4" rx="1" fill="currentColor" />
          <rect x="3.5" y="8.5" width="4" height="7" rx="1" fill="currentColor" />
        </>
      )}
    </svg>
  );
}

function SensorCard({ sensor }) {
  const config = statusConfig[sensor.status];

  return (
    <div
      className={`bg-[#FEFEFE] rounded-xl border-2 ${config.border} p-2 flex flex-col gap-2 min-w-35 shadow-sm font-jetbrains tracking-wider`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-gray-500 tracking-widest">
          {sensor.id}
        </span>
        <BatteryIcon level={sensor.battery} />
      </div>

      <div>
        {sensor.value !== null ? (
          <p className={`text-4xl font-bold ${config.valueColor} leading-none`}>
            {sensor.value.toFixed(1)}
          </p>
        ) : (
          <p className="text-3xl font-bold text-gray-300 leading-none">—</p>
        )}
        <p className="text-[10px] text-gray-400 font-medium mt-1 tracking-widest uppercase">
          {sensor.value !== null ? "Level (PPM)" : "Offline"}
        </p>
      </div>

      <div>
        <span
          className={`inline-block text-[10px] font-bold tracking-widest px-3 py-1 rounded-md uppercase ${config.badge}`}
        >
          {config.label}
        </span>
      </div>
    </div>
  );
}

export default function SensorHealthMatrix() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? sensors
      : sensors.filter((s) => s.status === filter);

  return (
    <div className="rounded-lg font-inter">
      <div className="w-full">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <h2 className="text-lg font-bold text-gray-800 tracking-wider">
            Sensor Health Matrix
          </h2>

          <div className="flex flex-wrap items-center gap-2 font-jetbrains text-sm">
            <button
              onClick={() => setFilter("all")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full border transition ${
                filter === "all"
                  ? "bg-gray-800 text-white border-gray-800"
                  : "text-gray-500 border-gray-200 hover:bg-gray-100"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("safe")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full border transition ${
                filter === "safe"
                  ? "bg-green-500 text-white border-green-500"
                  : "text-gray-500 border-gray-200 hover:bg-gray-100"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Normal
            </button>
            <button
              onClick={() => setFilter("warning")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full border transition ${
                filter === "warning"
                  ? "bg-amber-400 text-white border-amber-400"
                  : "text-gray-500 border-gray-200 hover:bg-gray-100"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
              Warning
            </button>
            <button
              onClick={() => setFilter("danger")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full border transition ${
                filter === "danger"
                  ? "bg-red-500 text-white border-red-500"
                  : "text-gray-500 border-gray-200 hover:bg-gray-100"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
              Danger
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {filtered.map((sensor) => (
            <SensorCard key={sensor.id} sensor={sensor} />
          ))}
        </div>
      </div>
    </div>
  );
}
