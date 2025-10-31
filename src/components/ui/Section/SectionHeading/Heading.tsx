import classNames from "classnames";
import type { ElementType, ReactNode } from "react";

type HeadingProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

const Heading = ({ as: Component = "div", className, children }: HeadingProps) => {
  return (
    <Component
      className={classNames(
        "font-heading text-xl font-bold text-heading-color uppercase",
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Heading;
