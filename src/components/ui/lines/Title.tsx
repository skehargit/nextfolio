import React from "react";
import ItalicLine from "./ItalicLine";

const Title = ({ title }: { title: string }) => {
  return (
    <div>
      <ItalicLine />
      <div className="b-border">
        <div className="max-w-3xl  h-[30px] x-border mx-auto ">
          <div className="font-sharpie-bold text-xl px-4">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default Title;
