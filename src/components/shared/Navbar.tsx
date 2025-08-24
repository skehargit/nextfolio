import React from "react";
import ThemeToggleButton from "../ui/theme-toggle-button";

const Navbar = () => {
  return (
    <div className="y-border h-12 mt-2">
      <div className="max-w-3xl x-border h-full mx-auto flex justify-between items-center">
        <div className="px-4">
          <div className="font-sharpie-bold text-2xl">SSB</div>
        </div>
        <ThemeToggleButton variant="circle" start="center" />
      </div>
    </div>
  );
};

export default Navbar;
