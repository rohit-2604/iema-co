import React from "react";
import Sidebar from "../../Components/ClientDashboard/Sidebar";
import Header from "../../Components/ClientDashboard/DashboardHeader";

const ClientLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f8fc]">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-2">
          {children}
        </main>

      </div>
    </div>
  );
};

export default ClientLayout;