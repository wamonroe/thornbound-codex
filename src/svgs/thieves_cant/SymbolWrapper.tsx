import classNames from "classnames";
import React, { type FC, type ReactNode } from "react";

type SymbolWrapperProps = {
  size?: "md" | "lg";
  children: ReactNode;
};

const SymbolWrapper: FC<SymbolWrapperProps> = ({ size = "md", children }) => {
  return (
    <div
      className={classNames("flex items-center justify-center", {
        "max-h-7 w-7": size === "md",
        "max-h-12 w-12": size === "lg"
      })}
    >
      {children}
    </div>
  );
};

export default SymbolWrapper;
