import classNames from "classnames";

import { type FlexShrink, getFlexShrink } from "@/utils/flexShrink";
import { type FlexSize, getFlexSize } from "@/utils/flexSize";
import { type MinWidth, getMinWidth } from "@/utils/minWidth";

export type FlexAndGridOptions = {
  flex?: FlexSize;
  flexShrink?: FlexShrink;
  minWidth?: MinWidth;
};

type GetFlexAndGridOptionsProps = {
  [key: string]: unknown;
} & FlexAndGridOptions;

export const getFlexAndGridOptions = ({
  flex,
  flexShrink,
  minWidth
}: GetFlexAndGridOptionsProps) => {
  return classNames(getFlexSize(flex), getFlexShrink(flexShrink), getMinWidth(minWidth));
};
