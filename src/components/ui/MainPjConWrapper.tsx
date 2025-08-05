import React from "react";

const MainPjConWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="y-border">
      <div className=" w-full mx-auto max-w-3xl ">
        {children}
      </div>
    </div>
  );
};

export default MainPjConWrapper;
