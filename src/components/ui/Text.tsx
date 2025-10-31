import classNames from "classnames";
import type { ReactNode } from "react";

import Muted from "@/components/ui/Muted";

import { type TextAlign, getTextAlign } from "@/utils/textAlign";
import { type TextSize, getTextSize } from "@/utils/textSize";

export type TextProps = {
  children?: ReactNode;
  align?: TextAlign;
  size?: TextSize;
  muted?: boolean;
  italic?: boolean;
};

const Text = ({ align, size = "medium", muted, italic, children }: TextProps) => {
  const className = classNames(getTextAlign(align), getTextSize(size), { italic: italic });
  return <p className={className}>{muted ? <Muted size={size}>{children}</Muted> : children}</p>;
};

export default Text;
