import React from "react";

const SingleContainer = ({ children,className }: { children: React.ReactNode,className?:string }) => {
  return (
    <div className={`w-full max-w-3xl x-border mx-auto p-4 ${className}`}>{children}</div>
  );
};

export default SingleContainer;
