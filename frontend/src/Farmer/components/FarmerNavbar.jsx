import React from "react";
import Logo from "@/assets/Logo.png";
import { Button } from "@/components/ui/button";

const FarmerNavbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-sm bg-white">
      
      
      <div className="flex items-center gap-2">
        <img
          src={Logo}
          alt="AgriHub Farmer Portal Logo"
          className="w-32 h-auto object-contain"
        />
      </div>

      
      <h2 className="text-xl font-semibold text-gray-800">
        Farmer Name
      </h2>

      
      <Button variant="destructive" className="px-5 hover:bg-red-800">
        Logout
      </Button>

    </nav>
  );
};

export default FarmerNavbar;
