import classNames from "classnames";
import { type ReactNode } from "react";

import Line from "@/components/ui/Line";

type BookTitleProps = {
  subtitle?: string;
  children: ReactNode;
};

const BookTitle = ({ subtitle, children }: BookTitleProps) => {
  return (
    <>
      <div className={classNames("mt-12 text-center font-heading leading-none")}>
        <div className="text-6xl font-bold uppercase">{children}</div>
        {subtitle && <div className="text-4xl font-light italic">{subtitle}</div>}
      </div>
      <Line color="muted" />
    </>
  );
};

export default BookTitle;
