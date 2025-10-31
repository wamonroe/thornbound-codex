import classNames from "classnames";
import type { ReactNode } from "react";

import { hasChildElementOfType } from "@/utils/childElements";
import { type DepthValue } from "@/utils/depth";
import { type FlexAndGridOptions, getFlexAndGridOptions } from "@/utils/flexAndGrid";
import { type PaddingSize, getPaddingSize } from "@/utils/padding";
import { type SpacingSize, getSpacingSize } from "@/utils/spacing";
import { type TextSize, getTextSize } from "@/utils/textSize";

type VariantType = "blank" | "normal" | "deep";
type PanelProps = {
  title?: string;
  description?: string;
  depth?: DepthValue;
  textSize?: TextSize;
  variant?: VariantType;
  border?: boolean;
  centerTitle?: boolean;
  rowBorders?: boolean;
  titleNormalCaps?: boolean;
  spacing?: SpacingSize;
  padding?: PaddingSize;
  children: ReactNode;
} & FlexAndGridOptions;

const Panel = ({
  title,
  description,
  textSize,
  variant = "normal",
  border,
  centerTitle,
  rowBorders,
  titleNormalCaps,
  spacing = "sm",
  padding = "md",
  children,
  ...flexAndGridOptions
}: PanelProps) => {
  const hasTitle = typeof title !== "undefined";
  const hasPanelRows = hasChildElementOfType(children, "Panel.Row");

  const containerCss = classNames(
    "flex shrink-0 flex-col",
    getTextSize(textSize),
    getFlexAndGridOptions(flexAndGridOptions),
    {
      "border-b-2": border,
      "border-t-2": !hasTitle && border
    }
  );
  const titleCss = classNames("rounded-t-sm text-solid-color bg-solid px-4 py-1", {
    "flex justify-center": centerTitle
  });
  const contentCss = classNames(
    "flex-1",
    !hasPanelRows && getSpacingSize(spacing),
    !hasPanelRows && getPaddingSize(padding),
    {
      "border-x border-b border-muted": variant === "blank",
      "bg-panel-1": variant === "normal",
      "bg-panel-2": variant === "deep",
      "rounded-t-sm": !hasTitle && !border,
      "rounded-b-sm": !border,
      "[&>.panel-row:nth-child(even)]:bg-panel-row-alt": hasPanelRows,
      "[&>.panel-row:last-child]:rounded-b-sm": hasPanelRows && !border,
      "[&>.panel-row:not(:last-child)]:border-b [&>.panel-row:not(:last-child)]:border-muted":
        hasPanelRows && rowBorders
    }
  );

  return (
    <div className={containerCss}>
      {hasTitle && (
        <div className={titleCss}>
          <div className="flex w-full flex-wrap items-baseline justify-between">
            <div className={classNames("text-base font-bold", { uppercase: !titleNormalCaps })}>
              {title}
            </div>
            <div className="ml-2 text-sm font-medium">
              <em>{description}</em>
            </div>
          </div>
        </div>
      )}
      <div className={contentCss}>{children}</div>
    </div>
  );
};

export default Panel;
