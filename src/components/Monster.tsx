import classNames from "classnames";
import type { ReactNode } from "react";

import Em from "@/components/ui/Em";
import Markdown from "@/components/ui/Markdown";
import SmallCaps from "@/components/ui/SmallCaps";
import Strong from "@/components/ui/Strong";
import StrongEm from "@/components/ui/StrongEm";
import Text from "@/components/ui/Text";

import HeatHaze from "@/svgs/game_icons/HeatHaze";
import SheikahEye from "@/svgs/game_icons/SheikahEye";
import SoundWaves from "@/svgs/game_icons/SoundWaves";
import DiceFive from "@/svgs/rpg_awesome/DiceFive";
import DiceFour from "@/svgs/rpg_awesome/DiceFour";
import DiceOne from "@/svgs/rpg_awesome/DiceOne";
import DiceSix from "@/svgs/rpg_awesome/DiceSix";
import DiceThree from "@/svgs/rpg_awesome/DiceThree";
import DiceTwo from "@/svgs/rpg_awesome/DiceTwo";

import { getSpacingSize } from "@/utils/spacing";

const tableDiceIcon = {
  0: DiceOne,
  1: DiceTwo,
  2: DiceThree,
  3: DiceFour,
  4: DiceFive,
  5: DiceSix
};

type MonsterType =
  | "lurker"
  | "predator"
  | "brute"
  | "marauder"
  | "swarmer"
  | "protector"
  | "overseer"
  | "trickster"
  | "tactician"
  | "skirmisher"
  | "blaster"
  | "marksman";

type MonsterProps = {
  id?: string;
  name: string;
  type: MonsterType;
  colors: string[];
  description: string;
  traits: string[];
  moves: string[];
  wants: string;
  doesntWant: string;
  sight: string;
  sound: string;
  smell: string;
  tableTitle: string;
  tableDescription?: string;
  tableRows: string[][];
  children?: ReactNode;
};

const Monster = ({
  id,
  name,
  type,
  colors,
  description,
  traits,
  moves,
  wants,
  doesntWant,
  sight,
  sound,
  smell,
  tableTitle,
  tableDescription,
  tableRows,
  children
}: MonsterProps) => {
  const hasId = id && id.length > 0;
  const hasChildren = Boolean(children);

  return (
    <div id={id} className={classNames({ "scroll-mt-52 lg:scroll-mt-36": hasId })}>
      <div className="flex items-center justify-between rounded-t-sm border-x border-t border-muted text-solid-color bg-solid px-4 py-1">
        <div className="font-heading text-xl font-bold uppercase">{name}</div>
        <div className="text-sm text-muted-color uppercase">{type}</div>
      </div>
      <div className="flex flex-col border-x border-b border-muted sm:flex-row">
        {colors.slice(0, 3).map((color, index) => (
          <div
            key={`${color}-${index}`}
            className="w-full border-muted py-0.5 text-center text-xs text-muted-color not-last:border-b sm:w-1/3 sm:not-first:border-l sm:not-last:border-b-0"
          >
            {color}
          </div>
        ))}
      </div>
      <div className="border-x border-b border-muted p-4">
        <Text size="small">{description}</Text>
      </div>
      <div className="grid grid-cols-1 items-stretch gap-4 border-x border-b border-muted p-4 sm:grid-cols-2">
        <div className="text-sm">
          {traits.map((trait, index) => (
            <div key={`${trait}-${index}`} className="flex">
              <div className="flex-none">✱</div>
              <div className="ml-2 flex-1">
                <Em>{trait}</Em>
              </div>
            </div>
          ))}
        </div>
        <div className="text-sm">
          {moves.map((move, index) => (
            <div key={`${move}-${index}`} className="flex">
              <div className="flex-none">◉</div>
              <div className="ml-2 flex-1">
                <Strong>
                  <SmallCaps>{move}</SmallCaps>
                </Strong>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-1 border-x border-b border-muted p-4">
        <Text size="small">
          <StrongEm>Wants</StrongEm> <Em>{wants}</Em>
        </Text>
        <Text size="small">
          <StrongEm>Doesn't want</StrongEm> <Em>{doesntWant}</Em>
        </Text>
      </div>
      <div className="space-y-1 border-x border-muted p-4 text-sm">
        <div className="flex">
          <div className="flex-none">
            <SheikahEye size="large" />
          </div>
          <div className="ml-2 flex-1">
            <Em>{sight}</Em>
          </div>
        </div>
        <div className="flex">
          <div className="flex-none">
            <SoundWaves size="large" />
          </div>
          <div className="ml-2 flex-1">
            <Em>{sound}</Em>
          </div>
        </div>
        <div className="flex">
          <div className="flex-none">
            <HeatHaze size="large" />
          </div>
          <div className="ml-2 flex-1">
            <Em>{smell}</Em>
          </div>
        </div>
      </div>
      <div
        className={classNames("border-x border-b border-muted", {
          "rounded-b-sm": !hasChildren
        })}
      >
        <table className="w-full">
          <thead>
            <tr>
              <td colSpan={tableRows.length} className="border-b px-4 py-1">
                <Strong allCaps>{tableTitle}</Strong>
                {tableDescription && (
                  <>
                    {" "}
                    <Strong>({tableDescription})</Strong>
                  </>
                )}
              </td>
            </tr>
          </thead>
          {tableRows.map((row, rowIndex) => {
            const rowKey = `row-${rowIndex}-${row.join("-")}`;
            const DiceIcon = tableDiceIcon[(rowIndex % 6) as keyof typeof tableDiceIcon];

            return (
              <tr key={rowKey} className={rowIndex % 2 === 0 ? undefined : "bg-panel-1"}>
                {row.map((col, colIndex) => {
                  return (
                    <td key={`col-${colIndex}-${col}`} className="px-4 py-1">
                      <div className="flex items-center">
                        <DiceIcon size="medium" />
                        <div className="ml-2 text-sm">
                          <Em>
                            <Markdown>{col}</Markdown>
                          </Em>
                        </div>
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </table>
      </div>
      {hasChildren && (
        <div
          className={classNames(
            "border-x border-b border-muted px-4 pt-8 pb-4",
            getSpacingSize("sm")
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Monster;
