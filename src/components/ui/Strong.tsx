import classNames from "classnames";
import { type ReactNode } from "react";

import SmallCaps from "~/components/ui/SmallCaps";
import { type MutuallyExclusiveBooleanProps } from "~/utils/customTypes";

export type StrongProps = {
  children: ReactNode;
} & MutuallyExclusiveBooleanProps<"allCaps" | "smallCaps">;

const Strong = ({ allCaps, smallCaps, children }: StrongProps) => {
  const strongCss = classNames({
    uppercase: allCaps
  });

  return (
    <strong className={strongCss}>
      {smallCaps ? <SmallCaps>{children}</SmallCaps> : children}
    </strong>
  );
};

export default Strong;
