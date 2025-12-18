import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Em from "~/components/ui/Em";
import Markdown from "~/components/ui/Markdown";
import SmallCaps from "~/components/ui/SmallCaps";
import Strong from "~/components/ui/Strong";
import StrongEm from "~/components/ui/StrongEm";
import Text from "~/components/ui/Text";
import DiceFive from "~/svgs/rpg_awesome/DiceFive";
import DiceFour from "~/svgs/rpg_awesome/DiceFour";
import DiceOne from "~/svgs/rpg_awesome/DiceOne";
import DiceSix from "~/svgs/rpg_awesome/DiceSix";
import DiceThree from "~/svgs/rpg_awesome/DiceThree";
import DiceTwo from "~/svgs/rpg_awesome/DiceTwo";

const tableDiceIcon = {
  0: DiceOne,
  1: DiceTwo,
  2: DiceThree,
  3: DiceFour,
  4: DiceFive,
  5: DiceSix
};

export type MonsterType =
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

type MonsterRoleProps = {
  id?: string;
  type: MonsterType;
  description: string;
  strengths: string[];
  weakness: string;
  offensiveMove: string;
  defensiveMove: string;
  utilityMove: string;
  wants: string;
  doesntWant: string;
  tableTitle: string;
  tableRows: string[];
};

const MonsterRole = ({
  id,
  type,
  description,
  strengths,
  weakness,
  offensiveMove,
  defensiveMove,
  utilityMove,
  wants,
  doesntWant,
  tableTitle,
  tableRows
}: MonsterRoleProps) => {
  return (
    <div id={id || type} className="scroll-mt-52 lg:scroll-mt-36">
      <div className="rounded-t-sm border-x border-t border-muted text-solid-color bg-solid px-4 py-1">
        <div className="font-heading text-xl font-bold uppercase">{type}</div>
      </div>
      <div className="border-x border-b border-muted p-4">
        <Text size="small">{description}</Text>
      </div>
      <div className="grid grid-cols-1 items-stretch gap-4 border-x border-b border-muted p-4 sm:grid-cols-2">
        <div className="text-sm">
          {strengths.map((strength, index) => (
            <div key={`${strength}-${index}`} className="flex">
              <div className="flex-none">
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div className="ml-2 flex-1">
                <Em>{strength}</Em>
              </div>
            </div>
          ))}
          <div className="flex">
            <div className="flex-none">
              <FontAwesomeIcon icon={faMinus} />
            </div>
            <div className="ml-2 flex-1">
              <Em>{weakness}</Em>
            </div>
          </div>
        </div>
        <div className="text-sm">
          <div className="flex">
            <div className="flex-none">◉</div>
            <div className="ml-2 flex-1">
              <Strong>
                <SmallCaps>{offensiveMove}</SmallCaps>
              </Strong>
            </div>
          </div>
          <div className="flex">
            <div className="flex-none">◉</div>
            <div className="ml-2 flex-1">
              <Strong>
                <SmallCaps>{defensiveMove}</SmallCaps>
              </Strong>
            </div>
          </div>
          <div className="flex">
            <div className="flex-none">◉</div>
            <div className="ml-2 flex-1">
              <Strong>
                <SmallCaps>{utilityMove}</SmallCaps>
              </Strong>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-1 border-x border-muted p-4">
        <Text size="small">
          <StrongEm>Wants</StrongEm> <Em>{wants}</Em>
        </Text>
        <Text size="small">
          <StrongEm>Doesn't want</StrongEm> <Em>{doesntWant}</Em>
        </Text>
      </div>
      <div className="rounded-b-sm border-x border-b border-muted">
        <table className="w-full">
          <thead>
            <tr>
              <td colSpan={tableRows.length} className="border-b px-4 py-1">
                <Strong allCaps>{tableTitle}</Strong>
              </td>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, rowIndex) => {
              const rowKey = `row-${rowIndex}-${row}`;
              const DiceIcon = tableDiceIcon[(rowIndex % 6) as keyof typeof tableDiceIcon];

              return (
                <tr key={rowKey} className={rowIndex % 2 === 0 ? undefined : "bg-panel-1"}>
                  <td className="px-4 py-1">
                    <div className="flex items-center">
                      <DiceIcon size="medium" />
                      <div className="ml-2 text-sm">
                        <Em>
                          <Markdown>{row}</Markdown>
                        </Em>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MonsterRole;
