import Sidebar from "@/components/Layout/sidebar";
import React from "react";

interface DashboardLayouProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayouProps> = ({ children }) => {
  return (
    <div className="flex h-screen lg:min-w-[900px]  bg-background">
      <div className="flex flex-1 ">
        <Sidebar />
        <main className="grid sm:flex flex-1 overflow-y-auto border border-border rounded-2xl m-[10px] shadow-sm bg-background">
          {children}
        </main>
      </div>
    </div>
  );
};
export default DashboardLayout;
