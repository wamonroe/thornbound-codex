import BookTitle from "~/components/BookTitle";
import Page from "~/components/app/Page";
import Em from "~/components/ui/Em";
import ExternalLink from "~/components/ui/ExternalLink";
import Line from "~/components/ui/Line";
import Stack from "~/components/ui/Stack";
import Strong from "~/components/ui/Strong";
import Text from "~/components/ui/Text";
import CraftedForGrimwild from "~/svgs/CraftedForGrimwild";
import MadeWithMoxie from "~/svgs/MadeWithMoxie";

const About = () => {
  return (
    <Page>
      <BookTitle subtitle="Core Rulebook">The Thornbound Codex</BookTitle>
      <Text align="center">
        <Strong>The Thornbound Codex: Core Rulebook</Strong> is a community reference derived from
        the Creative Commons-licensed text of <Em>Grimwild</Em>, a cinematic fantasy tabletop
        roleplaying game using the Moxie system by J.D. Maxwell and Oddity Press.
      </Text>
      <Text align="center">
        This fan-supported, non-official project is open licensed under CC BY 4.0, allowing all
        included text to be freely reused for personal or commercial projects.
      </Text>
      <Stack center>
        <CraftedForGrimwild />
        <Text align="center">
          <em>odditypress.com/licensing</em>
        </Text>
      </Stack>
      <Stack center>
        <MadeWithMoxie />
        <Text align="center">
          <ExternalLink href="https://moxietoolkit.com">
            <Em>moxietoolkit.com</Em>
          </ExternalLink>
        </Text>
      </Stack>
      <Line />
      <Text align="center">
        <Em>The Thornbound Codex: Core Rulebook is licensed under CC BY 4.0.</Em>
      </Text>
    </Page>
  );
};

export default About;
