import { Children, type ReactElement, type ReactNode, cloneElement, isValidElement } from "react";

import Strong from "~/components/ui/Strong";

type StepListItemProps = {
  number?: number;
  children: ReactNode;
};

const StepListItem = ({ number, children }: StepListItemProps) => {
  return (
    <li className="relative min-h-10 rounded-sm border border-base bg-panel-1 py-1 pr-2 pl-7">
      {number !== undefined && (
        <div className="absolute top-1/2 -left-4 flex size-8 -translate-y-1/2 items-center justify-center rounded-sm bg-panel-3">
          <Strong>{number}</Strong>
        </div>
      )}
      {children}
    </li>
  );
};
StepListItem.displayName = "StepListItem";

type StepListProps = {
  children: ReactNode;
};

const StepList = ({ children }: StepListProps) => {
  const items = Children.toArray(children).map((child, idx) =>
    isValidElement(child) && (child.type as { displayName?: string }).displayName === "StepListItem"
      ? cloneElement(child as ReactElement<StepListItemProps>, {
          number: idx + 1,
          key: (child as ReactElement).key ?? idx
        })
      : child
  );
  return <ol className="space-y-4 px-6">{items}</ol>;
};

StepList.Item = StepListItem;
export default StepList;
