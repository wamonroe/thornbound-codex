import classNames from "classnames";

import ChallengeSuspense from "@/components/ChallengeSuspense";
import Line from "@/components/ui/Line";
import Muted from "@/components/ui/Muted";
import SmallCaps from "@/components/ui/SmallCaps";
import Table from "@/components/ui/Table";
import Text from "@/components/ui/Text";

import CrossedSwords from "@/svgs/rpg_awesome/CrossedSwords";

type BattlegroundThreat = {
  name: string;
  poolSize?: number;
};

type BattleGroundEnemy = {
  name: string;
  tier: string;
  role: string;
  count?: number;
  poolSize?: number;
  isChallenge?: boolean;
};

type BattlegroundProps = {
  title: string;
  features?: string[];
  threats?: BattlegroundThreat[];
  enemies?: BattleGroundEnemy[];
};

const Threat = ({ threat }: { threat: BattlegroundThreat }) => {
  return (
    <div>
      {threat.poolSize ? `${threat.poolSize}d` : <ChallengeSuspense size="small" />} {threat.name}
    </div>
  );
};

const Enemy = ({ enemy }: { enemy: BattleGroundEnemy }) => {
  const prefix = [
    enemy.count && enemy.count,
    enemy.poolSize && `${enemy.poolSize}d`,
    enemy.isChallenge && "|"
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Text size="small">
      {prefix} {enemy.name}{" "}
      <Muted>
        ({enemy.tier} {enemy.role})
      </Muted>
    </Text>
  );
};

const Battleground = ({ title, features, threats, enemies }: BattlegroundProps) => {
  const hasFeatures = features && features.length > 0;
  const hasThreats = threats && threats.length > 0;
  const hasEnemys = enemies && enemies.length > 0;

  const containerCss = classNames("text-sm");

  return (
    <div className={containerCss}>
      <div className="flex w-full items-center justify-between rounded-t text-solid-color bg-solid px-4 py-1 font-bold">
        <div>
          <SmallCaps>{title}</SmallCaps>
        </div>
        <CrossedSwords />
      </div>
      <div className="rounded-b bg-panel-1">
        {(hasFeatures || hasThreats) && (
          <div className="p-2">
            <Table cellPadding="tight" variant="blank">
              <Table.Body>
                {hasFeatures && (
                  <Table.Row>
                    <Table.HeaderCell verticalAlign="top" smallCaps>
                      Features
                    </Table.HeaderCell>
                    <Table.Cell>
                      <em>{features.join(", ")}</em>
                    </Table.Cell>
                  </Table.Row>
                )}
                {hasThreats && (
                  <Table.Row>
                    <Table.HeaderCell verticalAlign="top" smallCaps>
                      Threats
                    </Table.HeaderCell>
                    <Table.Cell>
                      {threats.map((threat) => (
                        <Threat threat={threat} key={threat.name} />
                      ))}
                    </Table.Cell>
                  </Table.Row>
                )}
              </Table.Body>
            </Table>
          </div>
        )}
        {(hasFeatures || hasThreats) && hasEnemys && (
          <div className="px-4">
            <Line color="muted" />
          </div>
        )}
        {hasEnemys && (
          <div className="flex flex-col space-y-1 px-4 py-2">
            {enemies.map((enemy) => (
              <Enemy enemy={enemy} key={enemy.name} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Battleground;
