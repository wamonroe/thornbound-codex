import classNames from "classnames";
import { type ReactNode } from "react";

import ChallengeSuspense from "~/components/ChallengeSuspense";
import ReferenceList, { type ReferenceItem } from "~/components/ReferenceList";
import Line from "~/components/ui/Line";
import SmallCaps from "~/components/ui/SmallCaps";
import Strong from "~/components/ui/Strong";
import { type DepthValue, getDepth } from "~/utils/depth";
import { type TextSize, getTextSize } from "~/utils/textSize";

type WidthSize = "small" | "medium" | "large" | "full";
type ChallengeProps = {
  title: string;
  poolSize?: 4 | 6 | 8;
  textSize?: TextSize;
  width?: WidthSize;
  traits?: string[];
  moves?: string[];
  failState?: string;
  depth?: DepthValue;
  noSuspense?: boolean;
  references?: ReferenceItem[];
};

const Challenge = ({
  title,
  poolSize,
  textSize,
  width = "full",
  traits = [],
  moves = [],
  failState,
  depth = 1,
  noSuspense,
  references = []
}: ChallengeProps) => {
  const hasTraits = traits.length > 0;
  const hasMoves = moves.length > 0;
  const hasPanels = references.length > 0;

  const containerCss = classNames("text-sm", getTextSize(textSize), {
    "w-full": width === "full",
    "w-xs": width === "large",
    "w-64": width === "medium",
    "w-56": width === "small"
  });
  const referencesCss = classNames(
    "space-y-1 bg-panel-3 px-4 py-1 text-sm italic",
    getDepth(depth + 1)
  );
  const contentCss = classNames("space-y-2 rounded-b-sm bg-panel-1 px-2 py-2", getDepth(depth));

  return (
    <div className={containerCss}>
      <div className="relative rounded-t-sm text-solid-color bg-solid px-4 py-1 font-bold">
        {poolSize && <SmallCaps>{poolSize}d | </SmallCaps>}
        <SmallCaps>{title}</SmallCaps>
        {!noSuspense && (
          <div className="absolute right-1 -bottom-3">
            <ChallengeSuspense />
          </div>
        )}
      </div>
      {hasPanels && <ReferenceList className={referencesCss} references={references} />}

      <div className={contentCss}>
        {hasTraits && (
          <ul className="space-y-1">
            {traits.map((trait, index) => (
              <ChallengeItem variant="trait" key={`${trait}-${index}`}>
                <em>{trait}</em>
              </ChallengeItem>
            ))}
          </ul>
        )}
        {hasTraits && (hasMoves || failState) && <Line color="muted" />}
        {hasMoves && (
          <ul className="space-y-1">
            {moves.map((move, index) => (
              <ChallengeItem variant="move" key={`${move}-${index}`}>
                <Strong smallCaps>{move}</Strong>
              </ChallengeItem>
            ))}
          </ul>
        )}
        {hasMoves && failState && <Line color="muted" />}
        {failState && (
          <ul className="space-y-1">
            <ChallengeItem variant="fail">
              <strong>
                <em>{failState}</em>
              </strong>
            </ChallengeItem>
          </ul>
        )}
      </div>
    </div>
  );
};

type ChallengeItemVariants = "trait" | "move" | "fail";
type ChallengeItemProps = {
  variant: ChallengeItemVariants;
  children: ReactNode;
};

const challengeItemIcons: Record<ChallengeItemVariants, ReactNode> = {
  trait: "✱",
  move: "◉",
  fail: "✘"
};

const ChallengeItem = ({ variant, children }: ChallengeItemProps) => {
  const icon = challengeItemIcons[variant];
  return (
    <li className="flex">
      <div className="w-6 flex-none text-center">{icon}</div>
      <div className="flex-1">{children}</div>
    </li>
  );
};

export default Challenge;
