import classNames from "classnames";

import { type IconSizeValue, getIconSize } from "@/utils/iconSize";

type DiceFourProps = {
  size?: IconSizeValue;
};

const DiceFour = ({ size }: DiceFourProps) => {
  const svgCss = classNames(getIconSize(size));
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 613 613"
      fill="currentColor"
      stroke="currentColor"
      className={svgCss}
    >
      <path d="M522.949 43.024H89.051c-25.416 0-46.02 20.604-46.02 46.02v433.898c0 25.416 20.604 46.02 46.02 46.02h433.898c25.416 0 46.02-20.604 46.02-46.02V89.044c0-25.416-20.604-46.02-46.02-46.02M145.828 525.93c-33.008 0-59.766-26.758-59.766-59.766s26.758-59.766 59.766-59.766 59.766 26.758 59.766 59.766-26.758 59.766-59.766 59.766m0-320.344c-33.008 0-59.766-26.758-59.766-59.766s26.758-59.766 59.766-59.766 59.766 26.758 59.766 59.766-26.758 59.766-59.766 59.766M466.172 525.93c-33.008 0-59.766-26.758-59.766-59.766s26.758-59.766 59.766-59.766 59.766 26.758 59.766 59.766c-.001 33.008-26.759 59.766-59.766 59.766m0-320.344c-33.008 0-59.766-26.758-59.766-59.766s26.758-59.766 59.766-59.766 59.766 26.758 59.766 59.766c-.001 33.008-26.759 59.766-59.766 59.766" />
    </svg>
  );
};

export default DiceFour;
