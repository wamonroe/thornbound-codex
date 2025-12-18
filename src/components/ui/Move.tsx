import { type ReactNode } from "react";

import SmallCaps from "~/components/ui/SmallCaps";

type MoveProps = {
  children: ReactNode;
};

const Move = ({ children }: MoveProps) => {
  return (
    <span className="font-light">
      <SmallCaps>{children}</SmallCaps>
    </span>
  );
};

export default Move;
