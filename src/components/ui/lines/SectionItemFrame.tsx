import React from "react";
// it is for education and experience section 
export default function SectionItemFrame({
  children,
  isFirst = false,
  isLast = false,
}: {
  children: React.ReactNode;
  isFirst?: boolean;
  isLast?: boolean;
}) {
  const topPad = isFirst ? "p-2" : "px-2 py-1";
  const bottomPad = isLast ? "p-2" : "px-2 py-1";
  return (
    <div className="max-w-3xl w-full x-border mx-auto">
      <BorderRow variant="top" padClass={topPad} />
      <div className="p-4 mx-4 x-border">{children}</div>
      <BorderRow variant="bottom" padClass={bottomPad} />
    </div>
  );
}

function BorderRow({
  variant,
  padClass,
}: {
  variant: "top" | "bottom";
  padClass: string;
}) {
  const borderClass = variant === "top" ? "b-border" : "t-border";
  return (
    <div className={`${borderClass} flex justify-between items-center`}>
      <div className={`${padClass} r-border`}></div>
      <div className={`${padClass} l-border`}></div>
    </div>
  );
}
