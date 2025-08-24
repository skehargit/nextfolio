import React from "react";

const SingleContainer = ({ children,className }: { children: React.ReactNode,className?:string }) => {
  return (
    <div className=" y-border">
      <div className={`max-w-3xl x-border mx-auto p-4 ${className}`}>{children}</div>
    </div>
  );
};

export default SingleContainer;
