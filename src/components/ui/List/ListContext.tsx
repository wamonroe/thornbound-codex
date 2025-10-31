import { createContext } from "react";

import { type TextSize } from "@/utils/textSize";

export type ListContextProps = {
  italic?: boolean;
  muted?: boolean;
  textSize?: TextSize;
};

const ListContext = createContext<ListContextProps>({});

export default ListContext;
