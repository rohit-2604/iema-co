import { useState } from 'react';
import Header from '../../../Components/ClientDashboard/DashboardHeader.jsx';
import AlertBanner from '../../../Components/ClientDashboard/AlertBanner.jsx';
import MetricsCard from '../../../Components/ClientDashboard/MetricsCard.jsx';
import TrendChart from '../../../Components/ClientDashboard/TrendChart.jsx';
import RecentEvents from '../../../Components/ClientDashboard/RecentEvents.jsx';
import SensorHealthMatrix from '../../../Components/ClientDashboard/SensorHealthMatrix.jsx';
import ZoneStatus from '../../../Components/ClientDashboard/ZoneStatus.jsx';

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState('24H');

  return (
    <div className="min-h-screen bg-[#f5f8fc]">
      {/* Main Content */}
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 p-2">
          {/* Alert Banner */}
          <AlertBanner />

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-3 mb-2 mt-1">
            <MetricsCard 
              icon="cloud" 
              title="Current CO Level" 
              value="24.6" 
              unit="ppm" 
              status="Normal"
              trend={null}
            />
            <MetricsCard 
              icon="clock" 
              title="24h Average" 
              value="21.3" 
              unit="ppm" 
              trend="8.7% from yesterday"
            />
            <MetricsCard 
              icon="calendar" 
              title="7 days Average" 
              value="19.8" 
              unit="ppm" 
              trend="5.7% from last 7 days"
            />
            <MetricsCard 
              icon="graph" 
              title="Maximum today" 
              value="48.7" 
              unit="ppm" 
              time="9:18 AM"
            />
            <MetricsCard 
              icon="sensor" 
              title="Sensors Online" 
              value="32" 
              subtitle="/ 36" 
              percentage="88.9%"
            />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-2">
            {/* CO Level Trend - spans 2 columns */}
            <div className="xl:col-span-2">
              <TrendChart timeRange={timeRange} setTimeRange={setTimeRange} />
            </div>

            {/* Recent Events */}
            <RecentEvents />
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 mt-2 items-start">
            {/* Sensor Health Matrix - spans 2 columns */}
            <div className="xl:col-span-2 bg-white border border-gray-200 rounded-lg shadow-sm p-3">
              <SensorHealthMatrix />
            </div>

            {/* Zone Status */}
            <ZoneStatus />
          </div>
        </main>
      </div>
    </div>
  );
}
