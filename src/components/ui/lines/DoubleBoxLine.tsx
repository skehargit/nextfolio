import React from "react";

const DoubleBoxLine = () => {
  return (
    <div className="w-full">
      <div className=" w-full h-[15px]  gap-4 grid grid-cols-2 mx-auto max-w-3xl ">
        <div className="h-full x-border"></div>
        <div className="h-full x-border"></div>
      </div>
    </div>
  );
};

export default DoubleBoxLine;
