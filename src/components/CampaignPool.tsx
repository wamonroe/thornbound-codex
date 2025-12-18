import classNames from "classnames";

import ReferenceList, { type ReferenceItem } from "~/components/ReferenceList";
import Line from "~/components/ui/Line";
import Muted from "~/components/ui/Muted";
import SmallCaps from "~/components/ui/SmallCaps";
import Text from "~/components/ui/Text";

type CampaignPoolTrait =
  | string
  | {
      name: string;
      description?: string;
    };
type CampaignPoolPool = {
  name: string;
  size: number;
};
type CampaignPoolProps = {
  name: string;
  traits?: CampaignPoolTrait[];
  pools?: CampaignPoolPool[];
  references?: ReferenceItem[];
};

const CampaignPoolTrait = ({ trait }: { trait: CampaignPoolTrait }) => {
  if (typeof trait === "string") {
    return (
      <Text size="small">
        <em>{trait}</em>
      </Text>
    );
  } else {
    return (
      <Text size="small">
        <em>
          {trait.name}
          {trait.description && (
            <>
              {" "}
              <Muted>({trait.description})</Muted>
            </>
          )}
        </em>
      </Text>
    );
  }
};

const CampaignPool = ({ name, traits, pools, references }: CampaignPoolProps) => {
  const hasTraits = traits && traits.length > 0;
  const hasPools = pools && pools.length > 0;
  const hasReferences = references && references.length > 0;

  const containerCss = classNames("text-sm");

  return (
    <div className={containerCss}>
      <div className="rounded-t-sm text-solid-color bg-solid px-4 py-1 font-bold">
        <SmallCaps>{name}</SmallCaps>
      </div>
      {hasReferences && (
        <ReferenceList
          className="space-y-1 bg-panel-3 px-4 py-1 text-sm italic"
          references={references}
        />
      )}
      <div className="rounded-b-sm bg-panel-1 px-4 py-2">
        {hasTraits && (
          <div>
            {traits.map((trait, index) => (
              <CampaignPoolTrait key={index} trait={trait} />
            ))}
          </div>
        )}
        {hasTraits && hasPools && <Line color="muted" />}
        {hasPools && (
          <div>
            {pools.map((pool) => (
              <Text key={pool.name} size="small">
                <strong>
                  <em>
                    {pool.size}d {pool.name}
                  </em>
                </strong>
              </Text>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CampaignPool;
