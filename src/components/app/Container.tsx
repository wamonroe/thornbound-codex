import classNames from "classnames";
import type { ReactNode } from "react";

import { type SpacingSize, getSpacingSize } from "@/utils/spacing";

type ContainerProps = {
  spacing?: SpacingSize;
  padBottom?: boolean;
  children?: ReactNode;
};

const Container = ({ spacing, padBottom, children }: ContainerProps) => {
  return (
    <div className="flex w-full justify-center">
      <div
        className={classNames("w-full max-w-2xl px-4 sm:px-6 lg:px-8", getSpacingSize(spacing), {
          "pb-10": padBottom
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
