import classNames from "classnames";

import { type BorderColor, getBorderColor } from "@/utils/borderColor";

type LineProps = {
  color?: BorderColor;
};

const Line = ({ color = "base" }: LineProps) => {
  const lineCss = classNames("border-t", getBorderColor(color));

  return <hr className={lineCss} />;
};

export default Line;
