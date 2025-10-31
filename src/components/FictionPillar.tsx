import Em from "@/components/ui/Em";
import SmallCaps from "@/components/ui/SmallCaps";
import StrongEm from "@/components/ui/StrongEm";
import Text from "@/components/ui/Text";

import Halt from "@/svgs/game_icons/Halt";
import HeatHaze from "@/svgs/game_icons/HeatHaze";
import SheikahEye from "@/svgs/game_icons/SheikahEye";
import SoundWaves from "@/svgs/game_icons/SoundWaves";

type FictionPillarProps = {
  title: string;
  wants: string;
  doesntWant: string;
  sight: string;
  sound: string;
  smell: string;
  embody: string;
};

const FictionPillar = ({
  title,
  wants,
  doesntWant,
  sight,
  sound,
  smell,
  embody
}: FictionPillarProps) => {
  return (
    <div className="bg-panel-1">
      <div className="rounded-t-sm border-x border-t border-muted px-4 pt-2">
        <div className="font-heading text-xl font-bold">
          <SmallCaps>{title}</SmallCaps>
        </div>
      </div>
      <div className="space-y-1 border-x border-b border-muted px-4 pt-2 pb-4">
        <Text size="small">
          <StrongEm>Wants</StrongEm> <Em>{wants}</Em>
        </Text>
        <Text size="small">
          <StrongEm>Doesn't want</StrongEm> <Em>{doesntWant}</Em>
        </Text>
      </div>
      <div className="space-y-1 border-x border-b border-muted p-4 text-sm">
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
      <div className="flex rounded-b-sm border-x border-b border-muted p-4 text-sm">
        <div className="flex-none">
          <Halt size="large" />
        </div>
        <div className="ml-2 flex-1">
          <Em>{embody}</Em>
        </div>
      </div>
    </div>
  );
};

export default FictionPillar;
