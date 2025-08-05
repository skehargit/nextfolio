import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <div className="y-border">
      <div className="max-w-3xl  h-[25px] x-border mx-auto">{title}</div>
    </div>
  );
};

export default Title;
