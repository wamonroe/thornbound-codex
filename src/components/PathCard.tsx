import classNames from "classnames";
import { type ReactNode } from "react";

type PathCardProps = {
  name: string;
  description: string;
  icon: ReactNode;
};

const PathCard = ({ name, description, icon }: PathCardProps) => {
  return (
    <div className="flex flex-col pt-4">
      <div className="relative flex flex-1 flex-col space-y-2 rounded-md border border-muted bg-panel-1 px-2 pt-6 pb-2 shadow">
        <div className="absolute -top-4 left-1/2 flex h-8 w-9/12 -translate-x-1/2 items-center justify-center rounded-md border border-muted bg-panel-3 font-bold shadow">
          <div className="font-bold uppercase">{name}</div>
        </div>
        <div className={classNames("flex items-center justify-center")}>{icon}</div>
        <div className="text-center text-sm uppercase">{description}</div>
      </div>
    </div>
  );
};

export default PathCard;
