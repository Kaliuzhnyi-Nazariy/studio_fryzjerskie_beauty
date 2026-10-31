import React from "react";

const HeaderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-5 md:px-10 flex items-center justify-between">
      {children}
    </div>
  );
};

export default HeaderLayout;
