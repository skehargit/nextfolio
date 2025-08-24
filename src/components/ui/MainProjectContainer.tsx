import React from "react";

const MainProjectContainer = () => {
  return (
    <div className="h-full x-border p-2 pb-4">
      <div className="h-[200px] s-border rounded-lg"></div>
      <div>
        <h2 className="font-sharpie-bold text-xl p-1">Project Name</h2>
        <p className="p-1 line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          quod.
        </p>
      </div>
    </div>
  );
};

export default MainProjectContainer;
