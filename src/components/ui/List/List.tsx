import classNames from "classnames";
import type { ReactNode } from "react";

import ListContext, { type ListContextProps } from "~/components/ui/List/ListContext";
import { type ListColumnsValue, getListColumns } from "~/utils/listColumns";
import { type SpacingSize, getSpacingSize } from "~/utils/spacing";

type ListTag = "ul" | "ol";
type ListProps = {
  spacing?: SpacingSize;
  variant?: "unordered" | "ordered" | "blank";
  children: ReactNode;
  columns?: ListColumnsValue;
} & ListContextProps;

const List = ({
  children,
  variant = "unordered",
  spacing = "xs",
  columns,
  ...contextProps
}: ListProps) => {
  const Tag: ListTag = variant === "ordered" ? "ol" : "ul";

  const tagCss = classNames(getSpacingSize(spacing), getListColumns(columns), {
    "list-disc": variant === "unordered",
    "list-decimal": variant === "ordered",
    "pl-6": variant !== "blank"
  });

  return (
    <ListContext.Provider value={contextProps}>
      <Tag className={tagCss}>{children}</Tag>
    </ListContext.Provider>
  );
};

export default List;
