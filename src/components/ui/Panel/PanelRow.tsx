import classNames from "classnames";
import type { ReactNode } from "react";

import { type PaddingSize, getPaddingSize } from "@/utils/padding";
import { type SpacingSize, getSpacingSize } from "@/utils/spacing";

type PanelRowProps = {
  padding?: PaddingSize;
  spacing?: SpacingSize;
  children: ReactNode;
};

const PanelRow = ({ padding = "md", spacing = "sm", children }: PanelRowProps) => {
  return (
    <div className={classNames("panel-row", getPaddingSize(padding), getSpacingSize(spacing))}>
      {children}
    </div>
  );
};
PanelRow.displayName = "Panel.Row";

export default PanelRow;
