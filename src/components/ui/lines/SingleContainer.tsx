import React from "react";

const SingleContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" y-border">
      <div className="max-w-3xl x-border mx-auto p-4">{children}</div>
    </div>
  );
};

export default SingleContainer;
