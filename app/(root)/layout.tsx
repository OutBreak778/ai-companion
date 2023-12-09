import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";
const RootLayout = async ({ children }: { children: React.ReactNode }) => {


  return (
    <div className="h-full">
      <Navbar />
      <div className="hidden md:flex mt-14 w-24 flex-col fixed inset-y-0">
        <Sidebar />
      </div>
      <main className="md:pl-24 pt-14 h-full">
        {children}
        </main>
    </div>
  );
};

export default RootLayout;
