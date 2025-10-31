import CoreTalent from "@/components/CoreTalent";
import FictionPillar from "@/components/FictionPillar";
import MonsterRole from "@/components/MonsterRole";
import Path from "@/components/Path";
import Page from "@/components/app/Page";
import Em from "@/components/ui/Em";
import Heading from "@/components/ui/Heading";
import Line from "@/components/ui/Line";
import List from "@/components/ui/List";
import Panel from "@/components/ui/Panel";
import Section from "@/components/ui/Section";
import Strong from "@/components/ui/Strong";
import StrongEm from "@/components/ui/StrongEm";
import Table from "@/components/ui/Table";
import Text from "@/components/ui/Text";

const Chapter07 = () => {
  return (
    <Page bookTitle="Grimwild Community Edition" title="Extras" pretitle="Chapter 7:">
      <Heading level={2}>FLAVORS OF FANTASY</Heading>
      <Text>
        With a few quick rules tweaks, you can shift the base assumptions of <Em>Grimwild</Em> over
        to other genres of fantasy, or just more to your table's liking.
      </Text>
      <Section title="Grimdark" titleVariant="solid">
        <Text italic>
          Bleak, brutal, and unforgiving. A world of moral ambiguity, harsh realities, and the
          constant threat of ruin.
        </Text>
        <List variant="unordered">
          <List.Item>PCs can't cast potent spells.</List.Item>
          <List.Item>Make a 1d story roll when dropped.</List.Item>
          <List.Item>Marks only clear on rest, not when rolled.</List.Item>
          <List.Item>Vex responses are random.</List.Item>
          <List.Item>PC bonds are rolled randomly.</List.Item>
          <List.Item>
            Each PC has a <Em>4d Supplies</Em> resource pool.
          </List.Item>
        </List>
      </Section>
      <Section title="Low Fantasy" titleVariant="solid">
        <Text italic>
          Grounded, often more cynical or realistic. Small-scale conflicts, limited or absent magic.
        </Text>
        <List variant="unordered">
          <List.Item>PCs can't cast potent spells.</List.Item>
          <List.Item>Make a 1d story roll when dropped.</List.Item>
          <List.Item>Emphasis placed on vigilance, especially hint.</List.Item>
          <List.Item>Social fallout from vex responses increased.</List.Item>
          <List.Item>Carry 4 + Brawn items. Small, 1/2 slot. Big, 2+ slots.</List.Item>
        </List>
      </Section>
      <Section title="Swords & Sorcery" titleVariant="solid">
        <Text italic>
          Adventurous, action-packed, and often pulpy. Glory, treasure hunting, and survival in
          dangerous worlds.
        </Text>
        <List variant="unordered">
          <List.Item>No spellcasting PCs allowed.</List.Item>
          <List.Item>Make a 1d story roll when dropped.</List.Item>
          <List.Item>Clear marks and harm after any intense scene.</List.Item>
          <List.Item>
            Vex happens more often, but social fallout from vex responses is lessened.
          </List.Item>
          <List.Item>
            Each PC has a <Em>4d Renown</Em> campaign timer.
          </List.Item>
        </List>
      </Section>
      <Section title="Heroic Fantasy" titleVariant="solid">
        <Text italic>
          Inspirational and adventurous, with a focus on self-discovery and the hero's journey.
        </Text>
        <List variant="unordered">
          <List.Item>
            Default <Em>Grimwild</Em> rules.
          </List.Item>
        </List>
      </Section>
      <Section title="Noblebright" titleVariant="solid">
        <Text italic>
          Optimistic, hopeful, and virtuous. Good triumphs over evil, and the world can be made
          better.
        </Text>
        <List variant="unordered">
          <List.Item>PCs begin at 2nd level with 1 minor arcana.</List.Item>
          <List.Item>Make a 3d story roll when dropped.</List.Item>
          <List.Item>PCs only die when the player agrees.</List.Item>
          <List.Item>Default damage is a mark, not harm.</List.Item>
          <List.Item>Rattled clears after any intense scene.</List.Item>
          <List.Item>Social fallout from vex responses heightened.</List.Item>
        </List>
      </Section>
      <Section title="High Fantasy" titleVariant="solid">
        <Text italic>
          Epic and grand, often with a sense of wonder. Cosmic conflicts, destinies, and large-scale
          battles.
        </Text>
        <List variant="unordered">
          <List.Item>PCs begin at 3rd level with 2 minor arcana or 1 major arcana.</List.Item>
          <List.Item>Mooks and toughs require no roll to take out.</List.Item>
        </List>
      </Section>
      <Section title="Cozy Fantasy" titleVariant="solid">
        <Text italic>
          Wholesome, heartwarming, and low-stakes. Focused on friendship, personal growth, and
          simple joys in a magical world.
        </Text>
        <List variant="unordered">
          <List.Item>Default is tame stakes. Normal must be declared.</List.Item>
          <List.Item>Default damage is a mark, not harm.</List.Item>
          <List.Item>
            XP only earned if one of your bonds changed or arcs finished that session.
          </List.Item>
        </List>
      </Section>
      <Heading level={2}>GM TOOLS</Heading>
      <Text>
        GM Tools are extensions of the GM Toolkit—optional extras to enhance your game. They might
        not be for every GM, but you may find them useful. Experiment with these ideas and see if
        they stick in your repertoire!
      </Text>
      <Heading level={3}>FICTION PILLARS</Heading>
      <Text>
        Fiction pillars is a method of preparation that lets you create ready-made blocks of
        fiction, giving you a sturdier foundation than pure off-the-cuff improvisation. These
        “pillars” serve as anchors for the improv storytelling that unfolds during a session,
        helping you maintain consistency and confidence in your game.
      </Text>
      <Text>
        Moxie works well with little to no prep, but for those who see prep as play, or who want an
        extra layer of confidence at the table, fiction pillars are an excellent way to offload some
        of the pressure of in-the-moment creativity.
      </Text>
      <Text>
        Before a session, imagine and detail 7 elements that might possibly come up in that session.
        These can be key NPCs, important locations, items, encounters, or events. Anything works.
      </Text>
      <Text>
        During play, we can sprinkle in these pillars to act as reinforced parts of the fiction to
        hang the rest of our fiction off of. They reside more vividly in our mind. You can keep any
        unused ones and repurpose them for later sessions.
      </Text>
      <Text>
        Choose all <StrongEm>7 elements</StrongEm> first. Add <StrongEm>sensory details</StrongEm>
        —sights, sounds, and smells. Define what each <StrongEm>wants</StrongEm> to happen, or its
        pull on the story for nonsentient elements. Then set what it{" "}
        <StrongEm>doesn't want</StrongEm>. Note one way to <StrongEm>embody</StrongEm> it at the
        table as the GM, like a behavior or sound effect. Keep everything short—just a few words (as
        below) per detail. Skip any steps you draw a blank on and make final notes if you have
        anything left to add.
      </Text>
      <FictionPillar
        title="Harvest Festival"
        wants="everyone to leave with full bellies"
        doesntWant="arguments about winter or toil"
        sight="vibrant banners, overflowing carts, bonfires at dusk"
        sound="laughter and music, creak of carts, rustle of leaves"
        smell="roasted corn, spiced cider, damp post-harvest soil"
        embody="bite an apple, play a flute, raise a mug"
      />
      <Text>
        The key is that you activate your imagination beforehand so the pillars feel more vivid and
        real.
      </Text>
      <Heading level={3}>TOKEN INITIATIVE</Heading>
      <Text>
        Token initiative allows you to strike a balance between the normally free-flowing scenes of
        Moxie and a structured turn system. In this approach, there's no set turn order. Instead,
        players are given tokens to represent the “camera time” they have to act within a scene.{" "}
        <StrongEm>At the start of an intense moment, give each player 2 tokens</StrongEm>.
      </Text>
      <Text>
        Each major beat requires a player to <StrongEm>spend a token</StrongEm> before it begins,
        often an action roll. Play goes around until all are out of tokens, then players regain
        their tokens and it begins again. Everyone is ensured the same amount of screen time.
      </Text>
      <Text>
        As the GM, you can also take tokens. They have no mechanical meaning, but they do serve to
        remind you to interject with moments of the world moving. These aren't spending suspense or
        impact moves, just story moves or other descriptions that help bring the scene to life.
      </Text>
      <Heading level={3}>ENEMY TACTICS</Heading>
      <Text>
        Make sure each enemy role brings a unique dynamic to a combat. To help, you can use the
        templates below as a simple basis for traits and moves, or even assign them alongside a
        monster entry. These are broken up in finer detail than monster entries, with three traits
        split into two strengths (+) and one weakness (-) as well as three moves split into one
        offensive ⚔, one defensive 🛡, and one utility ✨. Additionally, each role features a d6
        table with creative ideas for how to spend suspense in response to common worst-case
        scenarios that role encounters.
      </Text>
      <MonsterRole
        id="blaster"
        name="blaster"
        description="Ranged devastators who unleash overwhelming power from afar, raining chaos on the battlefield. However, they crumble when the fight gets too close."
        strengths={["Devastating power", "Wide impact"]}
        weakness="Fragile under fire"
        offensiveMove="Barrage"
        defensiveMove="Shockwave"
        utilityMove="Shock and Awe"
        wants="to save their biggest hit for the greatest impact"
        doesntWant="to lose targeting as enemies scatter"
        tableTitle="Last Ditch Defenses"
        tableRows={[
          "**Unleashes** a sudden shockwave to clear space.",
          "Scrambles to **higher ground**.",
          "**Detonates** an explosive burst in all directions.",
          "Drags their enemy into **mutual destruction**.",
          "**Goes all in** with their full power in a final strike.",
          "**Fires wildly** to distract and disorient."
        ]}
      />
      <MonsterRole
        id="brute"
        name="brute"
        description="Towering aggressors built for destruction, their sheer force overwhelms defenses. Each strike shakes the ground, leaving few standing in their path."
        strengths={["Unstoppable force", "Towering resilience"]}
        weakness="Slow to react"
        offensiveMove="Crushing Blow"
        defensiveMove="Ground Slam"
        utilityMove="Intimidating Roar"
        wants="to break lines and sow fear"
        doesntWant="to be brought to a standstill"
        tableTitle="When Challenged or Taunted"
        tableRows={[
          "**Bellows** a deafening roar and charges.",
          "**Hurls** a massive object with crushing force.",
          "**Stomps**, sending foes stumbling.",
          "Slams fists together, **daring enemies** to approach.",
          "**Mocks** with a booming, guttural laugh.",
          "**Rips up** the ground, scattering debris."
        ]}
      />
      <h4>LURKER</h4>
      <blockquote>
        <Text>[!monster]</Text>
        <Text>
          Stealthy stalkers who strike from concealment, waiting patiently for the perfect moment to
          attack. However, they falter when exposed or in prolonged fights.
        </Text>
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                ➕ <Em>Perfectly silent</Em>
              </Table.Cell>
              <Table.Cell>
                ⚔ <Strong>AMbUSH</Strong>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                ➕ <Em>Watchful</Em>
              </Table.Cell>
              <Table.Cell>
                🛡 <Strong>VANISH</Strong>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                ➖ <Em>Fragile when revealed</Em>
              </Table.Cell>
              <Table.Cell>
                ✨ <Strong>MISDIRECT</Strong>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Text>
          <Em>
            <Strong>Wants</Strong>
          </Em>{" "}
          to only have to strike once.
          <Em>
            <Strong>Doesn't want</Strong>
          </Em>{" "}
          to have to risk their own neck.
        </Text>
        <h4>WHEN THEIR COVER IS BLOWN (🎲)</h4>
        <List variant="ordered">
          <List.Item>Strikes quickly to silence the nearest threat.</List.Item>
          <List.Item>Flees into the shadows, looking for new cover.</List.Item>
          <List.Item>Throws debris or objects to create a distraction.</List.Item>
          <List.Item>Slinks behind an ally or stronger creature.</List.Item>
          <List.Item>Unleashes a flurry of wild attacks.</List.Item>
          <List.Item>Abandons the fight entirely, escaping to safety.</List.Item>
        </List>
      </blockquote>
      <h4>MARKSMAN</h4>
      <blockquote>
        <Text>[!monster]</Text>
        <Text>
          Precise sharpshooters who excel at picking off targets from a distance. However, they are
          vulnerable when caught in melee or forced to move quickly.
        </Text>
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                ➕ <Em>Lethal precision</Em>
              </Table.Cell>
              <Table.Cell>
                ⚔ <Strong>PIERCING SHOT</Strong>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                ➕ <Em>Exceptional range</Em>
              </Table.Cell>
              <Table.Cell>
                🛡 <Strong>TAKE COVER</Strong>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                ➖ <Em>Panics close up</Em>
              </Table.Cell>
              <Table.Cell>
                ✨ <Strong>SPOT WEAKNESS</Strong>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Text>
          <Em>
            <Strong>Wants</Strong>
          </Em>{" "}
          to focus completely on the key threat.
          <Em>
            <Strong>Doesn't want</Strong>
          </Em>{" "}
          to shoot into chaotic situations.
        </Text>
        <h4>WHEN UNDER PRESSURE (🎲)</h4>
        <List variant="ordered">
          <List.Item>Focuses on the closest threat for a critical shot.</List.Item>
          <List.Item>Dives into cover to avoid incoming attacks.</List.Item>
          <List.Item>Signals allies to draw enemy attention.</List.Item>
          <List.Item>Shifts to higher ground for a better vantage point.</List.Item>
          <List.Item>Takes a rapid, less accurate shot to disrupt foes.</List.Item>
          <List.Item>Retreats to reposition for the next attack.</List.Item>
        </List>
      </blockquote>
      <h4>MARAUDER</h4>
      <blockquote>
        <Text>[!monster]</Text>
        <Text>
          Brutal raiders who thrive in chaos, striking quickly and ruthlessly to overwhelm their
          foes. However, they falter when their momentum is broken.
        </Text>
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                ➕ <Em>Relentless aggression</Em>
              </Table.Cell>
              <Table.Cell>
                ⚔ <Strong>CRAZY FRENZY</Strong>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                ➕ <Em>Unpredictable</Em>
              </Table.Cell>
              <Table.Cell>
                🛡 <Strong>MAD DASH</Strong>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                ➖ <Em>Impulsive</Em>
              </Table.Cell>
              <Table.Cell>
                ✨ <Strong>WREAK HAVOC</Strong>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Text>
          <Em>
            <Strong>Wants</Strong>
          </Em>{" "}
          to throw the battlefield into chaos.
          <Em>
            <Strong>Doesn't want</Strong>
          </Em>{" "}
          to face organized resistance.
        </Text>
        <h4>WHEN THEIR ATTACK STALLS (🎲)</h4>
        <List variant="ordered">
          <List.Item>Charges forward recklessly, ignoring safety.</List.Item>
          <List.Item>Lashes out at the closest enemy in frustration.</List.Item>
          <List.Item>Circles their foes, looking for a weak spot.</List.Item>
          <List.Item>Rallies allies with a furious battle cry.</List.Item>
          <List.Item>Retreats momentarily to regain momentum.</List.Item>
          <List.Item>Smashes the environment to create new chaos.</List.Item>
        </List>
      </blockquote>
      <h4>OVERSEER</h4>
      <blockquote>
        <Text>[!monster]</Text>
        <Text>
          Commanding tacticians who direct allies, manipulating the battlefield to their advantage.
          However, they struggle when isolated or overwhelmed.
        </Text>
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                ➕ <Em>Strategic leadership</Em>
              </Table.Cell>
              <Table.Cell>
                ⚔ <Strong>UNLEASH HELL!</Strong>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                ➕ <Em>Unwavering authority</Em>
              </Table.Cell>
              <Table.Cell>
                🛡 <Strong>RALLY TO ME!</Strong>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                ➖ <Em>Relies on subordinates</Em>
              </Table.Cell>
              <Table.Cell>
                ✨ <Strong>MAKE IT SO!</Strong>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Text>
          <Em>
            <Strong>Wants</Strong>
          </Em>{" "}
          to control the flow of battle.
          <Em>
            <Strong>Doesn't want</Strong>
          </Em>{" "}
          to watch their forces fall apart.
        </Text>
        <h4>WHEN THEIR PLANS UNRAVEL (🎲)</h4>
        <List variant="ordered">
          <List.Item>Calls for reinforcements with an urgent shout.</List.Item>
          <List.Item>Focuses on eliminating the biggest threat.</List.Item>
          <List.Item>Blames an ally, sowing discord to regain control.</List.Item>
          <List.Item>Directs allies to hold the line while they regroup.</List.Item>
          <List.Item>Retreats to a safer vantage point to reassess.</List.Item>
          <List.Item>Sacrifices an ally to buy time or ensure survival.</List.Item>
        </List>
      </blockquote>
      <h4>PREDATOR</h4>
      <blockquote>
        <Text>[!monster]</Text>
        <Text>
          Persistent hunters who stalk their prey, waiting for the perfect moment to strike.
          However, they falter if their prey is tenacious.
        </Text>
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                ➕ <Em>Relentless pursuit</Em>
              </Table.Cell>
              <Table.Cell>
                ⚔ <Strong>AMBUSH</Strong>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                ➕ <Em>Overwhelming strike</Em>
              </Table.Cell>
              <Table.Cell>
                🛡 <Strong>EVASIVE LEAP</Strong>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                ➖ <Em>Overcommits to attacks</Em>
              </Table.Cell>
              <Table.Cell>
                ✨ <Strong>TRACK DOWN</Strong>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Text>
          <Em>
            <Strong>Wants</Strong>
          </Em>{" "}
          to toy with their prey before the kill.
          <Em>
            <Strong>Doesn't want</Strong>
          </Em>{" "}
          to lose sight of their quarry.
        </Text>
        <h4>WHEN PREY SLIPS AWAY (🎲)</h4>
        <List variant="ordered">
          <List.Item>Leaps to cut off the target's escape.</List.Item>
          <List.Item>Refuses to give up no matter what.</List.Item>
          <List.Item>Roars, forcing a mistake.</List.Item>
          <List.Item>Circles, creating a trap to regain control.</List.Item>
          <List.Item>Strikes wildly in frustration, hitting all around.</List.Item>
          <List.Item>Vanishes, retreating to wait for another chance.</List.Item>
        </List>
      </blockquote>
      <h4>PROTECTOR</h4>
      <blockquote>
        <Text>[!monster]</Text>
        <Text>
          Unyielding guardians who shield their allies and endure attacks meant for others. However,
          they struggle when separated from those they protect.
        </Text>
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                ➕ <Em>Unwavering resilience</Em>
              </Table.Cell>
              <Table.Cell>
                ⚔ <Strong>SETUP ALLY</Strong>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                ➕ <Em>Exceptional tactics</Em>
              </Table.Cell>
              <Table.Cell>
                🛡 <Strong>INTERPOSE</Strong>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                ➖ <Em>Limited offense</Em>
              </Table.Cell>
              <Table.Cell>
                ✨ <Strong>RALLY CRY</Strong>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Text>
          <Em>
            <Strong>Wants</Strong>
          </Em>{" "}
          to take a hit meant for whom they protect.
          <Em>
            <Strong>Doesn't want</Strong>
          </Em>{" "}
          to lose any piece of their defensive toolkit.
        </Text>
        <h4>WHEN AN ALLY IS IN DANGER (🎲)</h4>
        <List variant="ordered">
          <List.Item>Steps in to block an incoming attack.</List.Item>
          <List.Item>Draws enemy attention with a loud challenge.</List.Item>
          <List.Item>Shoves the ally out of harm's way.</List.Item>
          <List.Item>Counters with a heavy blow to create space.</List.Item>
          <List.Item>Raises a protective barrier to buy time.</List.Item>
          <List.Item>Sacrifices their position to shield the ally.</List.Item>
        </List>
      </blockquote>
      <h4>SKIRMISHER</h4>
      <blockquote>
        <Text>[!monster]</Text>
        <Text>
          Agile combatants who excel at hit-and-run tactics, harassing their foes and striking from
          unexpected angles. However, they falter when pinned down.
        </Text>
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                ➕ <Em>Exceptional mobility</Em>
              </Table.Cell>
              <Table.Cell>
                ⚔ <Strong>STRIKE &amp; MOVE</Strong>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                ➕ <Em>Quick reflexes</Em>
              </Table.Cell>
              <Table.Cell>
                🛡 <Strong>DODGING ROLL</Strong>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                ➖ <Em>Fragile</Em>
              </Table.Cell>
              <Table.Cell>
                ✨ <Strong>FORCE BACK</Strong>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Text>
          <Em>
            <Strong>Wants</Strong>
          </Em>{" "}
          to frustrate the hell out of their foes.
          <Em>
            <Strong>Doesn't want</Strong>
          </Em>{" "}
          to face anything faster than them.
        </Text>
        <h4>WHEN THEY LOSE THE ADVANTAGE (🎲)</h4>
        <List variant="ordered">
          <List.Item>Retreats quickly to regroup and reassess.</List.Item>
          <List.Item>Strikes recklessly, hoping to create an opening.</List.Item>
          <List.Item>Dodges wildly to avoid being hit.</List.Item>
          <List.Item>Circles, searching for a weak point to exploit.</List.Item>
          <List.Item>Taunts, trying to bait enemies into a mistake.</List.Item>
          <List.Item>Disengages, vanishing into the fray.</List.Item>
        </List>
      </blockquote>
      <h4>SWARMER</h4>
      <blockquote>
        <Text>[!monster]</Text>
        <Text>
          Relentless attackers who overwhelm their enemies with sheer numbers, striking from all
          sides to wear them down. However, they falter when isolated.
        </Text>
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                ➕ <Em>Neverending attacks</Em>
              </Table.Cell>
              <Table.Cell>
                ⚔ <Strong>SWARM, SWARM!</Strong>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                ➕ <Em>Overwhelming numbers</Em>
              </Table.Cell>
              <Table.Cell>
                🛡 <Strong>SCATTER!</Strong>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                ➖ <Em>Weak individually</Em>
              </Table.Cell>
              <Table.Cell>
                ✨ <Strong>SURROUND 'EM!</Strong>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Text>
          <Em>
            <Strong>Wants</Strong>
          </Em>{" "}
          to give enemies no room at all to think.
          <Em>
            <Strong>Doesn't want</Strong>
          </Em>{" "}
          to be separated from each other even a bit.
        </Text>
        <h4>WHEN THEIR NUMBERS THIN (🎲)</h4>
        <List variant="ordered">
          <List.Item>Presses harder, with reckless desperation.</List.Item>
          <List.Item>Retreats momentarily to regroup.</List.Item>
          <List.Item>Calls for reinforcement with frantic signals.</List.Item>
          <List.Item>Regroups, pulling forces into defensive cluster.</List.Item>
          <List.Item>Scatters, trying to avoid further losses.</List.Item>
          <List.Item>Breaks, abandoning the fight entirely.</List.Item>
        </List>
      </blockquote>
      <h4>TACTICIAN</h4>
      <blockquote>
        <Text>[!monster]</Text>
        <Text>
          Clever strategists who manipulate the battlefield, exploiting every weakness they find.
          However, they struggle when their plans fall apart.
        </Text>
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                ➕ <Em>Always prepared</Em>
              </Table.Cell>
              <Table.Cell>
                ⚔ <Strong>FLANKING STRIKE</Strong>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                ➕ <Em>Good under pressure</Em>
              </Table.Cell>
              <Table.Cell>
                🛡 <Strong>TACTICAL RETREAT</Strong>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                ➖ <Em>Trusts in their plans</Em>
              </Table.Cell>
              <Table.Cell>
                ✨ <Strong>CREATE WEAKNESS</Strong>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Text>
          <Em>
            <Strong>Wants</Strong>
          </Em>{" "}
          to outthink their foes.
          <Em>
            <Strong>Doesn't want</Strong>
          </Em>{" "}
          to be outmaneuvered.
        </Text>
        <h4>WHEN A PLAN FAILS (🎲)</h4>
        <List variant="ordered">
          <List.Item>Redirects allies to regroup and recover.</List.Item>
          <List.Item>Focuses on a single target to salvage the situation.</List.Item>
          <List.Item>Orders a retreat to reevaluate the fight.</List.Item>
          <List.Item>Shifts their attention to a new opportunity.</List.Item>
          <List.Item>Sacrifices weaker assets to regain momentum.</List.Item>
          <List.Item>Lashes out in frustration, acting recklessly.</List.Item>
        </List>
      </blockquote>
      <h4>TRICKSTER</h4>
      <blockquote>
        <Text>[!monster]</Text>
        <Text>
          Cunning deceivers who thrive on confusion, turning the tide of battle with guile. However,
          they crumble when their tricks are exposed or fail.
        </Text>
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                ➕ <Em>Master of deception</Em>
              </Table.Cell>
              <Table.Cell>
                ⚔ <Strong>DECEPTIVE STRIKE</Strong>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                ➕ <Em>Quick, unpredictable</Em>
              </Table.Cell>
              <Table.Cell>
                🛡 <Strong>BAIT AND SWITCH</Strong>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                ➖ <Em>Fragile</Em>
              </Table.Cell>
              <Table.Cell>
                ✨ <Strong>SNATCH WEAPON</Strong>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Text>
          <Em>
            <Strong>Wants</Strong>
          </Em>{" "}
          their foes to react rashly or overthink the situation.
          <Em>
            <Strong>Doesn't want</Strong>
          </Em>{" "}
          to be ignored.
        </Text>
        <h4>WHEN THEIR TRICKS FAIL (🎲)</h4>
        <List variant="ordered">
          <List.Item>Feigns weakness to lure enemies closer.</List.Item>
          <List.Item>Dodges frantically, hoping to regain control.</List.Item>
          <List.Item>Mocks enemies to draw attention away.</List.Item>
          <List.Item>Escapes, leaving a decoy in their place.</List.Item>
          <List.Item>Reverses their position, surprising the opponent.</List.Item>
          <List.Item>Lashes out in desperation to cover the failure.</List.Item>
        </List>
      </blockquote>
      <Heading level={2}>CHARACTER OPTIONS</Heading>
      <Text>
        Great characters are defined by the details. Adding meaningful details gives more to build
        upon, providing hooks for development and collaboration. Details should inspire creativity
        without being overly prescriptive. Aim to create opportunities for collaboration and bring
        vividness to your PC.
      </Text>
      <Heading level={3}>GROUP-BUILDING QUESTIONS</Heading>
      <Text>
        <StrongEm>During session zero</StrongEm> after you've introduced your characters, or at
        interesting moments in a campaign, ask one of the following questions to the person on your
        right and left. Keep the questions leading and <StrongEm>juicy</StrongEm>, to give something
        interesting for you both to latch onto. You can also use these questions to delve into
        details about their character that you're interested in hearing more about.
      </Text>
      <Section title="Questions About Shared History">
        <List variant="unordered" italic>
          <List.Item>
            What secret did I tell you that you've never dared to share with anyone else?
          </List.Item>
          <List.Item>
            When we first met, what mistake did I make that still embarrasses me?
          </List.Item>
          <List.Item>What did we steal together, and how did it bring us closer?</List.Item>
          <List.Item>When did I save you from something, and what did it cost me?</List.Item>
          <List.Item>
            What moment made you decide you could trust me, even if you didn't want to?
          </List.Item>
        </List>
      </Section>
      <Section title="Questions About Feelings and Impressions">
        <List variant="unordered" italic>
          <List.Item>
            What's something about me that annoys you, but you'd miss if I were gone?
          </List.Item>
          <List.Item>
            What's a time I surprised you by being braver or softer than you expected?
          </List.Item>
          <List.Item>
            What's a rumor about me you half believe, but you're too afraid to ask if it's true?
          </List.Item>
          <List.Item>When have I pushed you away, and how did it hurt?</List.Item>
          <List.Item>What do you envy about me, even if you'd never admit it out loud?</List.Item>
        </List>
      </Section>
      <Section title="Questions About Tensions or Challenges">
        <List variant="unordered" italic>
          <List.Item>What's a lie I told you that you're still pretending to believe?</List.Item>
          <List.Item>What's a promise I broke that you haven't forgiven me for?</List.Item>
          <List.Item>When have I let you down, and how did you learn to work around me?</List.Item>
          <List.Item>What's something dangerous you think I'm hiding from the group?</List.Item>
          <List.Item>What about me makes you feel like you're walking on thin ice?</List.Item>
        </List>
      </Section>
      <Section title="Questions About Shared Futures">
        <List variant="unordered" italic>
          <List.Item>
            What's a dream I have that you think is foolish, but you still want to help me achieve?
          </List.Item>
          <List.Item>What do you hope I'll never find out about your plans?</List.Item>
          <List.Item>
            What do you think our journey will turn me into, and does that scare you?
          </List.Item>
          <List.Item>When this is all over, where do you imagine us going together?</List.Item>
          <List.Item>What's something you think we'll regret, but we'll do it anyway?</List.Item>
        </List>
      </Section>
      <Text italic>
        <Strong>Note</Strong>: Swapping “you” and “I” in most of these questions is possible—flip it
        around if it's more interesting!
      </Text>
      <Heading level={3}>DISTINCTIVE FEATURES</Heading>
      <Text>
        Choosing three very great distinctive features helps cement your character not only in your
        mind, but also in the shared imagination space at the table. You can come back to your
        features again and again during scenes to add them in to paint the scene. Be open to change
        as well over time.
      </Text>
      <Section title="Age">
        <Panel border>
          <Table cellPadding="tight" textSize="small" fullWidth>
            <Table.Body>
              <Table.Row>
                <Table.Cell>upstart youth</Table.Cell>
                <Table.Cell>all grown up</Table.Cell>
                <Table.Cell>gray</Table.Cell>
                <Table.Cell>fresh faced</Table.Cell>
                <Table.Cell>greenhorn</Table.Cell>
                <Table.Cell>precocious</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>experienced</Table.Cell>
                <Table.Cell>brashful youth</Table.Cell>
                <Table.Cell>wizened</Table.Cell>
                <Table.Cell>hale &amp; hearty</Table.Cell>
                <Table.Cell>vigorous</Table.Cell>
                <Table.Cell>coming of age</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>sober</Table.Cell>
                <Table.Cell>prime of life</Table.Cell>
                <Table.Cell>young pup</Table.Cell>
                <Table.Cell>over the hill</Table.Cell>
                <Table.Cell>youthful</Table.Cell>
                <Table.Cell>withered</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>grizzled</Table.Cell>
                <Table.Cell>old &amp; leathery</Table.Cell>
                <Table.Cell>adult</Table.Cell>
                <Table.Cell>childlike</Table.Cell>
                <Table.Cell>timeworn</Table.Cell>
                <Table.Cell>spry</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>eager youth</Table.Cell>
                <Table.Cell>fledgling</Table.Cell>
                <Table.Cell>cagey old-timer</Table.Cell>
                <Table.Cell>seasoned</Table.Cell>
                <Table.Cell>ageless</Table.Cell>
                <Table.Cell>sage</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>near the end</Table.Cell>
                <Table.Cell>on borrowed time</Table.Cell>
                <Table.Cell>young &amp; beautiful</Table.Cell>
                <Table.Cell>distinguished</Table.Cell>
                <Table.Cell>doddering</Table.Cell>
                <Table.Cell>wrinkled</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel>
      </Section>
      <Section title="Clothing">
        <Panel border>
          <Table cellPadding="tight" textSize="small" fullWidth>
            <Table.Body>
              <Table.Row>
                <Table.Cell>ill-fitting</Table.Cell>
                <Table.Cell>pristine</Table.Cell>
                <Table.Cell>tight</Table.Cell>
                <Table.Cell>finely-tailored</Table.Cell>
                <Table.Cell>frayed</Table.Cell>
                <Table.Cell>ceremonial</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>loose-fitting</Table.Cell>
                <Table.Cell>dirty</Table.Cell>
                <Table.Cell>flowing</Table.Cell>
                <Table.Cell>threadbare</Table.Cell>
                <Table.Cell>coarse</Table.Cell>
                <Table.Cell>fancy</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>outrageous</Table.Cell>
                <Table.Cell>comfortable</Table.Cell>
                <Table.Cell>stained</Table.Cell>
                <Table.Cell>patched</Table.Cell>
                <Table.Cell>fashionable</Table.Cell>
                <Table.Cell>exotic</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>faded</Table.Cell>
                <Table.Cell>patchwork</Table.Cell>
                <Table.Cell>austere</Table.Cell>
                <Table.Cell>well-worn</Table.Cell>
                <Table.Cell>grass-stained</Table.Cell>
                <Table.Cell>strange</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>plain</Table.Cell>
                <Table.Cell>flamboyant</Table.Cell>
                <Table.Cell>mottled</Table.Cell>
                <Table.Cell>weathered</Table.Cell>
                <Table.Cell>dusty</Table.Cell>
                <Table.Cell>practical</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>elaborate</Table.Cell>
                <Table.Cell>crumpled</Table.Cell>
                <Table.Cell>out-of-place</Table.Cell>
                <Table.Cell>rugged</Table.Cell>
                <Table.Cell>billowing</Table.Cell>
                <Table.Cell>secondhand</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel>
      </Section>
      <Section title="Voice">
        <Panel border>
          <Table cellPadding="tight" textSize="small" fullWidth>
            <Table.Body>
              <Table.Row>
                <Table.Cell>lilting</Table.Cell>
                <Table.Cell>clear</Table.Cell>
                <Table.Cell>gravelly</Table.Cell>
                <Table.Cell>pleasant</Table.Cell>
                <Table.Cell>commanding</Table.Cell>
                <Table.Cell>piercing</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>melodious</Table.Cell>
                <Table.Cell>resonant</Table.Cell>
                <Table.Cell>hearty</Table.Cell>
                <Table.Cell>sharp</Table.Cell>
                <Table.Cell>raspy</Table.Cell>
                <Table.Cell>murmuring</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>soft</Table.Cell>
                <Table.Cell>rumbling</Table.Cell>
                <Table.Cell>measured</Table.Cell>
                <Table.Cell>well-spoken</Table.Cell>
                <Table.Cell>soothing</Table.Cell>
                <Table.Cell>shrill</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>crackling</Table.Cell>
                <Table.Cell>calm</Table.Cell>
                <Table.Cell>barking</Table.Cell>
                <Table.Cell>confident</Table.Cell>
                <Table.Cell>nasally</Table.Cell>
                <Table.Cell>velvety</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>whispering</Table.Cell>
                <Table.Cell>booming</Table.Cell>
                <Table.Cell>growling</Table.Cell>
                <Table.Cell>earnest</Table.Cell>
                <Table.Cell>pompous</Table.Cell>
                <Table.Cell>monotone</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>roaring</Table.Cell>
                <Table.Cell>carries</Table.Cell>
                <Table.Cell>sing-song</Table.Cell>
                <Table.Cell>quiet</Table.Cell>
                <Table.Cell>breathy</Table.Cell>
                <Table.Cell>hoarse</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel>
      </Section>
      <Section title="Body">
        <Panel border>
          <Table cellPadding="tight" textSize="small" fullWidth>
            <Table.Body>
              <Table.Row>
                <Table.Cell>curvy</Table.Cell>
                <Table.Cell>heavyset</Table.Cell>
                <Table.Cell>thick</Table.Cell>
                <Table.Cell>sturdy</Table.Cell>
                <Table.Cell>well-fed</Table.Cell>
                <Table.Cell>lanky</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>strapping</Table.Cell>
                <Table.Cell>gangly</Table.Cell>
                <Table.Cell>giant</Table.Cell>
                <Table.Cell>lean</Table.Cell>
                <Table.Cell>long-legged</Table.Cell>
                <Table.Cell>flabby</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>rail-thin</Table.Cell>
                <Table.Cell>broad</Table.Cell>
                <Table.Cell>ripped</Table.Cell>
                <Table.Cell>athletic</Table.Cell>
                <Table.Cell>petite</Table.Cell>
                <Table.Cell>muscular</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>solid</Table.Cell>
                <Table.Cell>scrawny</Table.Cell>
                <Table.Cell>stocky</Table.Cell>
                <Table.Cell>hard</Table.Cell>
                <Table.Cell>fit</Table.Cell>
                <Table.Cell>ravaged</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>willowy</Table.Cell>
                <Table.Cell>sinewy</Table.Cell>
                <Table.Cell>wiry</Table.Cell>
                <Table.Cell>bony</Table.Cell>
                <Table.Cell>thin</Table.Cell>
                <Table.Cell>gaunt</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>lithe</Table.Cell>
                <Table.Cell>slender</Table.Cell>
                <Table.Cell>compact</Table.Cell>
                <Table.Cell>slim</Table.Cell>
                <Table.Cell>towering</Table.Cell>
                <Table.Cell>sharp</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel>
      </Section>
      <Section title="Eyes">
        <Panel border>
          <Table cellPadding="tight" textSize="small" fullWidth>
            <Table.Body>
              <Table.Row>
                <Table.Cell>tormented</Table.Cell>
                <Table.Cell>joyous</Table.Cell>
                <Table.Cell>hard</Table.Cell>
                <Table.Cell>glowing</Table.Cell>
                <Table.Cell>stern</Table.Cell>
                <Table.Cell>calculating</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>haunted</Table.Cell>
                <Table.Cell>kind</Table.Cell>
                <Table.Cell>dead</Table.Cell>
                <Table.Cell>animal</Table.Cell>
                <Table.Cell>piercing</Table.Cell>
                <Table.Cell>brooding</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>questioning</Table.Cell>
                <Table.Cell>sharp</Table.Cell>
                <Table.Cell>eager</Table.Cell>
                <Table.Cell>shifty</Table.Cell>
                <Table.Cell>gentle</Table.Cell>
                <Table.Cell>lifeless</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>shrouded</Table.Cell>
                <Table.Cell>sad</Table.Cell>
                <Table.Cell>smouldering</Table.Cell>
                <Table.Cell>cunning</Table.Cell>
                <Table.Cell>hollow</Table.Cell>
                <Table.Cell>weary</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>knowing</Table.Cell>
                <Table.Cell>wise</Table.Cell>
                <Table.Cell>warm</Table.Cell>
                <Table.Cell>wild</Table.Cell>
                <Table.Cell>sparkling</Table.Cell>
                <Table.Cell>bright</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>fiery</Table.Cell>
                <Table.Cell>haunting</Table.Cell>
                <Table.Cell>searing</Table.Cell>
                <Table.Cell>soulful</Table.Cell>
                <Table.Cell>glassy</Table.Cell>
                <Table.Cell>unreadable</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel>
      </Section>
      <Heading level={3}>THIEVES' CANT</Heading>
      <Text>
        Thieves' Cant is a secret code of speech, symbols, and gestures used by rogues and criminals
        to communicate plans, warnings, opportunities, or deals in plain sight. It is a perfect
        excuse for anyone with a thiefy background to spend story to learn info on a place!
      </Text>
      <Text>INSERT RECREATION OF THIEVES CANT HERE FROM MATTHER KESSLER</Text>
      <Text>HOW TO USE</Text>
      <List variant="unordered">
        <List.Item>Stack symbols vertically</List.Item>
        <List.Item>Read from bottom to top</List.Item>
      </List>
      <Text>
        Note: The Thieves' Cant guide was created by Matthew Kessler and included in the original
        book of Grimwild with permission.
      </Text>
      <Path id="artificer" name="Artificer" also={["Inventor", "Mechanist", "Tinkerer"]}>
        <Text italic>
          You shape the world with your creations, blending ingenuity, technology, and just a touch
          of magic to forge wonders from the mundane.
        </Text>
      </Path>
      <CoreTalent name="Ingenuity" growth="Every 2 levels, gain a new minor and major arcana.">
        <Text>
          You harness the power of creativity. Begin play with <StrongEm>1 minor arcana</StrongEm>{" "}
          and <StrongEm>1 major arcana</StrongEm>, chosen from those on <Em>pg. 150</Em> onwards or
          work with the GM to create your own arcana. You do not have talents—instead choose a
          <StrongEm>gadget</StrongEm> from your path list or reflavor a non-path talent as a gadget.
          Others can use your gadgets but take +1t and must always roll to use them.
        </Text>
        <Text>
          When given time, you can pull off{" "}
          <StrongEm>potent feats of mechanical ingenuity</StrongEm> like{" "}
          <Em>crafting a temporary device without proper materials</Em> or{" "}
          <Em>combining arcana and gadgets for wild effects</Em>. You can{" "}
          <Strong>push yourself</Strong> to do it on the spot.
        </Text>
        <Text>
          <StrongEm>Engineering</StrongEm>: Take +1d at creating, repairing, or destroying
          mechanisms and arcana.
        </Text>
      </CoreTalent>
      <Section title="Making Ip Gadgets" description="Advice">
        <Text>
          Reflavor your arcana, toss in some magitech buzzwords that almost make sense, and use them
          to sound like you know what you're talking about—perfect for baffling the less inventive.
        </Text>
        <Panel
          title="Magitechnobabble"
          description="Roll 1 on each table, smash them together, and ramble on."
          border
        >
          <Panel.Row>
            <Table cellPadding="tight" textSize="small" italic fullWidth>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>alche-</Table.Cell>
                  <Table.Cell>tink-</Table.Cell>
                  <Table.Cell>zapp-</Table.Cell>
                  <Table.Cell>blun-</Table.Cell>
                  <Table.Cell>fum-</Table.Cell>
                  <Table.Cell>dab-</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>fizzi-</Table.Cell>
                  <Table.Cell>glim-</Table.Cell>
                  <Table.Cell>boond-</Table.Cell>
                  <Table.Cell>gogg-</Table.Cell>
                  <Table.Cell>sput-</Table.Cell>
                  <Table.Cell>splin-</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>clank-</Table.Cell>
                  <Table.Cell>cogg-</Table.Cell>
                  <Table.Cell>whim-</Table.Cell>
                  <Table.Cell>phliz-</Table.Cell>
                  <Table.Cell>miz-</Table.Cell>
                  <Table.Cell>bung-</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>spro-</Table.Cell>
                  <Table.Cell>flib-</Table.Cell>
                  <Table.Cell>chym-</Table.Cell>
                  <Table.Cell>zind-</Table.Cell>
                  <Table.Cell>cran-</Table.Cell>
                  <Table.Cell>rat-</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>mag-</Table.Cell>
                  <Table.Cell>quib-</Table.Cell>
                  <Table.Cell>wob-</Table.Cell>
                  <Table.Cell>bogg-</Table.Cell>
                  <Table.Cell>jig-</Table.Cell>
                  <Table.Cell>quab-</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>whizz-</Table.Cell>
                  <Table.Cell>griz-</Table.Cell>
                  <Table.Cell>scran-</Table.Cell>
                  <Table.Cell>quirk-</Table.Cell>
                  <Table.Cell>wiz-</Table.Cell>
                  <Table.Cell>jang-</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Panel.Row>
          <Panel.Row>
            <Table cellPadding="tight" textSize="small" italic fullWidth>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>-nic</Table.Cell>
                  <Table.Cell>-crank</Table.Cell>
                  <Table.Cell>-nar</Table.Cell>
                  <Table.Cell>-tome</Table.Cell>
                  <Table.Cell>-nox</Table.Cell>
                  <Table.Cell>-lash</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>-tor</Table.Cell>
                  <Table.Cell>-mage</Table.Cell>
                  <Table.Cell>-gram</Table.Cell>
                  <Table.Cell>-phage</Table.Cell>
                  <Table.Cell>-press</Table.Cell>
                  <Table.Cell>-hinge</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>-al</Table.Cell>
                  <Table.Cell>-flux</Table.Cell>
                  <Table.Cell>-plex</Table.Cell>
                  <Table.Cell>-tron</Table.Cell>
                  <Table.Cell>-scope</Table.Cell>
                  <Table.Cell>-ring</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>-con</Table.Cell>
                  <Table.Cell>-bolt</Table.Cell>
                  <Table.Cell>-lock</Table.Cell>
                  <Table.Cell>-spark</Table.Cell>
                  <Table.Cell>-spire</Table.Cell>
                  <Table.Cell>-shift</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>-fuse</Table.Cell>
                  <Table.Cell>-meter</Table.Cell>
                  <Table.Cell>-gear</Table.Cell>
                  <Table.Cell>-lume</Table.Cell>
                  <Table.Cell>-turn</Table.Cell>
                  <Table.Cell>-stone</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>-matic</Table.Cell>
                  <Table.Cell>-ator</Table.Cell>
                  <Table.Cell>-cog</Table.Cell>
                  <Table.Cell>-craft</Table.Cell>
                  <Table.Cell>-drum</Table.Cell>
                  <Table.Cell>-knob</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Panel.Row>
        </Panel>
        <Text>IT'S A</Text>
        <List variant="ordered">
          <List.Item>metal</List.Item>
          <List.Item>wood</List.Item>
          <List.Item>crystal</List.Item>
          <List.Item>cloth</List.Item>
          <List.Item>glass</List.Item>
          <List.Item>stone</List.Item>
        </List>
        <Text>GADGET POWERED BY</Text>
        <List variant="ordered">
          <List.Item>clockwork</List.Item>
          <List.Item>burnables</List.Item>
          <List.Item>steam</List.Item>
          <List.Item>sunshine</List.Item>
          <List.Item>kinetics</List.Item>
          <List.Item>lightning</List.Item>
        </List>
        <Text>THAT</Text>
        <List variant="ordered">
          <List.Item>explodes</List.Item>
          <List.Item>scans</List.Item>
          <List.Item>builds</List.Item>
          <List.Item>destroys</List.Item>
          <List.Item>moves</List.Item>
          <List.Item>protects</List.Item>
        </List>
        <Text>BUT IS</Text>
        <List variant="ordered">
          <List.Item>noisy</List.Item>
          <List.Item>fragile</List.Item>
          <List.Item>glowing</List.Item>
          <List.Item>smelly</List.Item>
          <List.Item>unstable</List.Item>
          <List.Item>fidgety</List.Item>
        </List>
      </Section>
      <Text>MAKING UP GADGETS [ADVICE]</Text>

      <h4>ARTIFICER GADGETS</h4>
      <Text>ANCHORSHOT</Text>
      <Text>
        You have a hook, harpoon, and rope contraption that anchors large monsters to the ground.
        With it, you have potency to hinder the movement of anything elephant-sized or larger. When
        hit, the target becomes 4d Tethered. It anchors to the ground so you can leave it.
      </Text>
      <Text>AUTOMATONS</Text>
      <Text>
        You have three small helpers you created. Each has a different descriptor, an adjective that
        determines what tasks they can do. Each session, each has a 2d power pool you roll to
        perform tasks. When assisting, they roll 1d of their pool. They can follow simple commands,
        without which they will simply search for you.
      </Text>
      <Text>DOUBLE-BARRELED BLUNDERBUSS</Text>
      <Text>
        You have a firearm that fires specialized, crafted ammo. You get one shot of each per
        session. When you shoot, choose the ammo: blast core—drill shot—inferno shot—scatter
        shot—shrapnel burst—tangler shot. Each shot has a secondary or collateral effect related to
        the type. You can fire two ammo types at the same time for a potent shot.
      </Text>
      <Text>GRENADES</Text>
      <Text>
        Each session, you have a 4d Grenades resource pool. You have access to the following bombs:
        choking—flashbang—glue—smoke—stink. Bombs can affect multiple targets or an area even
        without potency. You can drop 1 and roll the pool to have a potent grenade.
      </Text>
      <Text>MECHANICAL MOUNT</Text>
      <Text>
        You have a small mechanical vehicle, like a steamwork spider or smoke-belching cart. It has
        three features: all-terrain—armored—burrowing—grappling hook—submergible—turbo boost. You
        can activate each perk once per session to pull off a potent feat of piloting. It also has
        one drawback: conspicuous—horrifying—slow—unreliable.
      </Text>
      <Text>STEAMHAMMER</Text>
      <Text>
        You have a large steam-infused warhammer. Each session, you have a 6d Steamhammer power
        pool. You can roll the pool to pull off potent feats of pulverizing force. You can also not
        expend its steam to use it as a normal warhammer.
      </Text>
      <Text>SWIFTWING</Text>
      <Text>
        You have highly maneuverable wings that allow you to glide (not fly). You gain a 3d resource
        pool while aloft, or 4d if you have extreme height or speed. You must roll the pool as bonus
        dice with any physical roll made while aloft, including defenses. At 0d, you coast back to
        the ground.
      </Text>
      <Line />
      <Text>
        Note: If a gadget or arcana is ever lost, you can re-create one of them during any downtime.
        They take effort, but you remember the schematics.
      </Text>
      <Heading level={3}>PSION</Heading>
      <Text>ALSO: Mentalist, Seer, Telepath</Text>
      <Text>
        You unlock the limitless power of the mind, bending thought, will, and reality through focus
        and discipline.
      </Text>
      <blockquote>
        <Text>AWAKENED MIND (CORE TALENT)</Text>
        <Text>
          You have spellcasting ability. Choose 2 bastions below, which act as touchstones for your
          psionic magic. You roll two stats combined to cast, forming the roll by adding the
          bastion's key stats (below) and subtracting two (3 Brawn and 2 Wits = 3d).
        </Text>
        <Text>
          Each session, you have 8 power points. Spend 1 power point to cast a spell. You can
          augment it by spending 1 or more points to: cast a potent spell—take +1d (max once) on the
          roll—ignore thorns from damage—add another of your bastions as a touchstone.
        </Text>
        <Line />
        <Text>
          GROWTH: Every 2 levels, learn a new bastion and gain 2 power points per session.
        </Text>
      </blockquote>
      <Text>BASTIONS</Text>
      <Text>
        Within your mind lie bastions of psionic power. As you grow stronger, you break down their
        walls, unlocking your true potential. These powers take shape as visions, psychic phenomena,
        and even physical manifestations in the form of ectoplasm—pure essence of creation.
      </Text>
      <Text>BIODYNAMICS • Altering and enhancing your own body.</Text>
      <List variant="unordered">
        <List.Item>Key Stat: Brawn + Agility.</List.Item>
        <List.Item>
          Power: Heal your broken arm. Hold your breath for hours. Run faster than a horse.
        </List.Item>
      </List>
      <Text>CLAIRSENTIENCE • Gaining knowledge and visions from the collective unconscious.</Text>
      <List variant="unordered">
        <List.Item>Key Stat: Wits + Presence.</List.Item>
        <List.Item>
          Power: Sense a hidden truth. See into someone's dreams. Find the way home.
        </List.Item>
      </List>
      <Text>METACREATION • Creating objects from ectoplasm, pure mental energy.</Text>
      <List variant="unordered">
        <List.Item>Key Stat: Brawn + Presence.</List.Item>
        <List.Item>
          Power: Forge a glowing sword. Build a bridge of thought. Shape armor from pure will.
        </List.Item>
      </List>
      <Text>PSYCHOKINESIS • Manipulating energy and force.</Text>
      <List variant="unordered">
        <List.Item>Key Stat: Brawn + Wits.</List.Item>
        <List.Item>
          Power: Shatter a boulder. Push an enemy back. Lift a heavy object with your mind.
        </List.Item>
      </List>
      <Text>TELEPATHY • Mind-to-mind communication, manipulation, and control.</Text>
      <List variant="unordered">
        <List.Item>Key Stat: Wits + Presence.</List.Item>
        <List.Item>
          Power: Read someone's surface thoughts. Calm an angry mob. Implant a fleeting suggestion.
        </List.Item>
      </List>
      <Text>TRANSPOSITION • Movement and manipulation of space.</Text>
      <List variant="unordered">
        <List.Item>Key Stat: Agility + Wits.</List.Item>
        <List.Item>
          Power: Teleport across a room. Switch places with an ally. Freeze someone in place.
        </List.Item>
      </List>
      <h4>PSION TALENTS</h4>
      <Text>DISTURBED MIND</Text>
      <Text>
        Your presence is highly disturbing to others. The GM judges an NPC's response, or you can
        spend story to set it: agitated—fractured—paranoid—repulsed. Once per session when you would
        take vex, a nearby sentient creature—even an ally—must instead take a vex response.
      </Text>
      <Text>MIND SEED</Text>
      <Text>
        When you plant thoughts or alter memories in someone's head, you can always choose to have
        them take effect exactly when you want them to. You can decide this at any time later. Once
        per session, you can use this for an interrupt.
      </Text>
      <Text>MIND THIEF</Text>
      <Text>
        On a critical on a bastion roll, refund the power points spent and gain 3 power points. This
        causes mental collateral damage around you: confusion—hallucinations— headaches— panic. One
        time only, you can make this a ritual-level effect, affecting all within miles.
      </Text>
      <Text>PSYCHIC WARRIOR</Text>
      <Text>
        On a perfect with a feat of martial prowess, spend no power points and take +1d on an
        immediate follow-up with a bastion. You can't follow-up with a bastion you just used.
      </Text>
      <Text>READER</Text>
      <Text>
        You gain 1 story per session and can spend story when you first meet someone to know their
        foremost surface thought—they are like an open book to you. If you follow-up on it, it
        counts as a setup.
      </Text>
      <Text>TUMULTUOUS MIND</Text>
      <Text>
        You can spend 2 power points to gain potency on any Wits or Presence defense roll.
        Regardless of the roll, if the attacker is sentient, you can interrupt their next impact
        move.
      </Text>
      <Text>WILDER</Text>
      <Text>
        Your powers are inherently chaotic, either by nature or nurture, and you struggle to control
        them. Take +1d, but also +1t, on all psionic bastion rolls. You can never ignore thorns from
        any source, including by using your core talent. On a critical, regain the power points you
        just spent.
      </Text>
      <Heading level={2}>VARIOUS ARCANA</Heading>
      <Text>
        Arcana are items imbued with magical power, covered on pg. 23. Below are some example arcana
        to use with your campaigns or look at as a basis for crafting your own. Their power and
        purpose lie in their magnitude, descriptions, touchstones, and limitations, which govern
        their usage. They are not limited to only their descriptions, but when outside of them, each
        of their touchstones must be applied. If a roll is ever needed and not supplied, use a
        relevant stat or make a story roll.
      </Text>
      <Heading level={3}>MINOR ARCANA</Heading>
      <Text>
        Minor arcana are capable of casting cantrips or performing magic just shy of a full spell's
        power. Despite their limited abilities, they remain rare—few mages bother to create them
        unless driven by personal passion or experimentation. Their value lies not in their power,
        but in their utility.
      </Text>
      <Text>RING OF VIPERS</Text>
      <Text>The poisonous viper on the ring will uncoil and become a real viper.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: viper—venom—whispers</List.Item>
        <List.Item>Limitations: 4d power pool, refreshed by being bitten by the viper.</List.Item>
      </List>
      <Text>JAR OF FLUTTERING MISCHIEF</Text>
      <Text>Releases butterfly swarms to distract and tickle someone nearby.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: butterflies—distraction—playfulness</List.Item>
        <List.Item>
          Limitations: 4d power pool, replenished by hearing a child's hearty laughter.
        </List.Item>
      </List>
      <Text>MINER'S ASSISTANT</Text>
      <Text>Burns brighter the deeper you go.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: light—depth—guidance</List.Item>
        <List.Item>
          Limitations: If a powerful creature lurks nearby, leads you to its new owner.
        </List.Item>
      </List>
      <Text>HORN OF REVELRY</Text>
      <Text>Draws people to you who want to share stories. If you listen, they cheer up.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: charisma—revelry—festivity</List.Item>
        <List.Item>Limitations: Spend spark to use.</List.Item>
      </List>
      <Text>RING OF PIERCING GAZE</Text>
      <Text>Peer through fog, smoke, or walls.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: perception—clarity—connection</List.Item>
        <List.Item>Limitations: If you see something sentient, it can also see you.</List.Item>
      </List>
      <Text>SPIDERHEART WAND</Text>
      <Text>Calls normal spiders to weave normal webs wherever you point.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: spiders—web—control</List.Item>
        <List.Item>Limitations: 4d power pool, replenished by eating silk-wrapped bugs.</List.Item>
      </List>
      <Text>GILDED SPECTACLES</Text>
      <Text>Reveals the best qualities and talents in everyone.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: insight—exaggeration—appreciation</List.Item>
        <List.Item>Limitations: Spend spark to use. Exaggerates those qualities.</List.Item>
      </List>
      <Text>MAP OF PIRATE'S FOLLY</Text>
      <Text>Reveals the location of a treasure, which may or may not be real.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: maps—treasure—deception</List.Item>
        <List.Item>
          Limitations: Must loudly declare in public that you're on a treasure hunt.
        </List.Item>
      </List>
      <Text>FANGBOUND LEDGER</Text>
      <Text>Bites anyone but its owner.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: secrets—protection—temptation</List.Item>
        <List.Item>Limitations: If not written into, reveals its secrets to passers-by.</List.Item>
      </List>
      <Text>BAG O' TEETH</Text>
      <Text>Place a tooth in the bag. One time later, create an illusion of that creature.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: illusions—teeth—memory</List.Item>
        <List.Item>Limitations: Only 1 tooth ever per creature type.</List.Item>
      </List>
      <Text>MUSIC BOX OF ECHOING MEMORIES</Text>
      <Text>Plays soft melodies that evoke fleeting, bittersweet memories.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: music—memory—nostalgia</List.Item>
        <List.Item>Limitations: 4d power pool, refreshed by genuine bittersweet tears.</List.Item>
      </List>
      <Text>STAFF OF DISILLUSIONMENT</Text>
      <Text>Glows brightly red when an illusion is present nearby.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: perception—focus—truth</List.Item>
        <List.Item>Limitations: None.</List.Item>
      </List>
      <Text>BATFRIEND PENDANT</Text>
      <Text>Warns of approaching intruders while outdoors at night.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: bats—vigilance—companionship</List.Item>
        <List.Item>Limitations: Only works outdoors at night.</List.Item>
      </List>
      <Text>MIRROR OF PERFECT REFLECTIONS</Text>
      <Text>Shows a fleeting glimpse of the viewer's best self.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: reflection—insight—hope</List.Item>
        <List.Item>Limitations: Take rattled when used, knowing that's not you now.</List.Item>
      </List>
      <Text>FEAR'S END</Text>
      <Text>When flown over a ship, appears as the viewer's home nation's flag.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: flag—trickery—hope</List.Item>
        <List.Item>
          Limitations: Displays an enemy nation's flag to those with evil hearts.
        </List.Item>
      </List>
      <Text>PICK ME UP TEAPOT</Text>
      <Text>Brews warm tea that removes all fatigue you might feel.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: rejuvenation—comfort—excess</List.Item>
        <List.Item>Limitations: Defense roll against vexed when drank—it can overdo it.</List.Item>
      </List>
      <Text>STEADYHAND DAGGER</Text>
      <Text>Ignore thorns from rattled when using this dagger.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: courage—precision—malice</List.Item>
        <List.Item>Limitations: Will leap to your hand if you take vex.</List.Item>
      </List>
      <Text>TWIGBOW</Text>
      <Text>Always supplies its wielder with arrows when among nature.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: nature—arrows—resourcefulness</List.Item>
        <List.Item>Limitations: Only works near trees.</List.Item>
      </List>
      <Text>WIDOW'S REVENGE</Text>
      <Text>When you are dropped, the spider climbs off and attacks your killer.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: spider—venom—command</List.Item>
        <List.Item>
          Limitations: If killed, the spider is gone forever. It also despises murder.
        </List.Item>
      </List>
      <Text>CHITTERFANG</Text>
      <Text>Vibrates like insect wings, striking with an unsettling hum.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: insect—precision—resonance</List.Item>
        <List.Item>
          Limitations: Loses power when the living bug on the hilt occasionally leaves.
        </List.Item>
      </List>
      <Text>EVERFLAME</Text>
      <Text>Burns endlessly, no matter what you do to extinguish it.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: fire—light—perseverance.</List.Item>
        <List.Item>Limitations: You're always stuck carrying a flaming object.</List.Item>
      </List>
      <Text>SEEKER'S COMPASS</Text>
      <Text>Ask it “Where can I find ~?” and it will tell you. You always believe it.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: guidance—trust—hope</List.Item>
        <List.Item>
          Limitations: 4d power pool, rolled as a story roll. Replenished at 0d.
        </List.Item>
      </List>
      <Heading level={3}>MAJOR ARCANA</Heading>
      <Text>
        Major arcana wield the power to cast full spell-level effects, shaping the course of events
        with their magic. They are significant artifacts, rare and revered, often serving as the
        cornerstone of a mage's work or a key element in a grand design. Their presence in the world
        carries weight and can only be gained by taking them from powerful foes or finding them in
        dangerous locales.
      </Text>
      <Text>CIRCLET OF PRIMAL RESTORATION</Text>
      <Text>Regrows a lost limb over the course of one horribly painful hour.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: healing—regrowth—sacrifice</List.Item>
        <List.Item>Limitations: Take rattled when used.</List.Item>
      </List>
      <Text>MAGEBANE BRACERS</Text>
      <Text>Always roll Brawn on defense rolls against magical attacks.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: resilience—anti-magic—shield</List.Item>
        <List.Item>
          Limitations: 8d Shatters, rolled on a messy. At 0d, messy becomes grim.
        </List.Item>
      </List>
      <Text>RING OF DRACONIC MIRAGE</Text>
      <Text>Summons an illusory dragon that soars overhead.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: dragon—illusion—awe</List.Item>
        <List.Item>Limitations: Usable once per session. The dragon acts unpredictably.</List.Item>
      </List>
      <Text>BLABBERMOUTH KEY</Text>
      <Text>Answers a question about a lock's owner, but subsequent ones are half-truths.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: keys—locks—truths</List.Item>
        <List.Item>
          Limitations: 4d resource pool, replenished by telling it a well-kept secret.
        </List.Item>
      </List>
      <Text>BOX OF SPIRITBINDING</Text>
      <Text>Holds a ghost you can summon. If empty, you can trap a spirit inside.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: ghosts—binding—horrifying</List.Item>
        <List.Item>Limitations: 4d Ghost Escapes, rolled with each use.</List.Item>
      </List>
      <Text>BASILISK EYE CHARM</Text>
      <Text>Turns someone to stone with a gaze and grants immunity to petrification.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: petrification—gaze—protection</List.Item>
        <List.Item>Limitations: 4d power pool, replenished when it hits 0d.</List.Item>
      </List>
      <Text>DISTURBING COUNSELOR</Text>
      <Text>Offers guidance on statecraft and reveals political secrets.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: wisdom—secrets—statecraft</List.Item>
        <List.Item>
          Limitations: 4d power pool, replenished by feeding its unnerving vices.
        </List.Item>
      </List>
      <Text>POISONHEART PENDANT</Text>
      <Text>Twists relationships into spite and obsession, entangling emotions in toxicity.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: corruption—emotion—obsession</List.Item>
        <List.Item>Limitations: Only works on the one wearing it.</List.Item>
      </List>
      <Text>FELL AXE</Text>
      <Text>Killing something with this axe ensures they can never be brought back.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: necromancy—violence—death</List.Item>
        <List.Item>Limitations: Demands you kill any you wield this against.</List.Item>
      </List>
      <Text>RING OF BRIGHTNESS</Text>
      <Text>Channels a beam of blinding, burning light.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: light—intensity—beam</List.Item>
        <List.Item>Limitations: 8d power pool. Cannot be replenished.</List.Item>
      </List>
      <Text>VERDANT SHIELD</Text>
      <Text>When struck, releases life energy causing plants to grow and ensnare foes.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: reaction—verdancy—entanglement</List.Item>
        <List.Item>Limitations: Push yourself to use it. It uses your own life energy.</List.Item>
      </List>
      <Text>CODEX OF FLESH</Text>
      <Text>Turns into and acts like anyone who writes their name inside for 1 day.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: transformation—identity—knowledge</List.Item>
        <List.Item>Limitations: Can mimic each person once. Destroyed if seen by them.</List.Item>
      </List>
      <Text>WISDOM OF ECHOING SOULS</Text>
      <Text>Contains faint impressions of previous owners. Gives three wises.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: wisdom—history—guidance</List.Item>
        <List.Item>Limitations: Spend spark to use it. Occasionally demands a favor.</List.Item>
      </List>
      <Text>WAVEWALKER CHARM</Text>
      <Text>Lets the bearer stride across water as if it were solid ground.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: freedom—water—grace</List.Item>
        <List.Item>Limitations: 4d Sink, triggered by any action roll while using.</List.Item>
      </List>
      <Text>CRYSTALSHARD SPRIG</Text>
      <Text>Fires crystal shards that encase targets.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: crystal—entrapment—precision</List.Item>
        <List.Item>Limitations: 4d power pool, replenished each session.</List.Item>
      </List>
      <Text>DANCING SHOES</Text>
      <Text>Lets you dance with flawless grace, granting potency for 4d Runs Out.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: grace—beauty—dancing</List.Item>
        <List.Item>Limitations: Spend spark to use them.</List.Item>
      </List>
      <Text>WAND OF STARLIGHT BLADES</Text>
      <Text>Sends out shimmering tendrils of light, cutting through darkness and foes.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: light—cutting—precision</List.Item>
        <List.Item>
          Limitations: 8d power pool, replenished on a cloudless, moonless night.
        </List.Item>
      </List>
      <Text>SHADOWCLEAVE AXE</Text>
      <Text>Drains light from the air, creating an aura of shadows.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: shadows—cleaving—weight</List.Item>
        <List.Item>
          Limitations: 4d resource pool, replenished by killing two+ foes in one strike.
        </List.Item>
      </List>
      <Text>IVYBINDING EARRINGS</Text>
      <Text>Ivy tendrils restrain the wearer when a command is spoken.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: nature—binding—trickery</List.Item>
        <List.Item>Limitations: The wearer must be able to hear the command.</List.Item>
      </List>
      <Text>ORB OF FATEFUL WHISPERS</Text>
      <Text>Predicts outcomes of decisions when asked a non-secret yes/no question.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: foresight—risk—trickery</List.Item>
        <List.Item>Limitations: Defense roll against taking bloodied.</List.Item>
      </List>
      <Text>FORESTWALK CHARM</Text>
      <Text>Allows you to move through dense foliage as effortlessly as walking a street.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: nature—movement—ease</List.Item>
        <List.Item>Limitations: None.</List.Item>
      </List>
      <Text>EVERBLOODY SWORD</Text>
      <Text>Ignores thorns from difficulty in battle against foes not already bleeding.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: blood—sharpness—sacrifice</List.Item>
        <List.Item>
          Limitations: When not bloodied after wielding this in a fight, take bloodied.
        </List.Item>
      </List>
      <Text>PORTALSCOPE</Text>
      <Text>Instantly teleports you safely to a place you can see through it.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: teleportation—vision—escape</List.Item>
        <List.Item>Limitations: Single use, then reverts to a mundane spyglass.</List.Item>
      </List>
      <Heading level={3}>MYTHIC ARCANA</Heading>
      <Text>
        Mythic arcana are the pinnacle of magical craftsmanship, capable of unleashing spell and
        ritual-level effects with devastating power. These artifacts transcend ordinary magic, often
        embodying ancient forces or acting as the focus of world-shaping events. They are singular,
        legendary items—rarely created and even more rarely found. Their use can carry immense
        consequences.
      </Text>
      <Text>MASK OF THE NAMELESS</Text>
      <Text>Erases your identity from the minds of all.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: anonymity—face—oblivion</List.Item>
        <List.Item>
          Limitations: Only usable three times. Randomly temporary or permanent.
        </List.Item>
      </List>
      <Text>PENDANT OF FORGOTTEN SECRETS</Text>
      <Text>Whispers a forgotten secret from someone's past when you meet them.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: memory—intrigue—encounter</List.Item>
        <List.Item>Limitations: Steals a memory from them, leaving them troubled.</List.Item>
      </List>
      <Text>KEY TO FREEDOM</Text>
      <Text>Locates anyone, unlocking all doors in its path, and teleports them to safety.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: discovery—freedom—key</List.Item>
        <List.Item>Limitations: Located person becomes its new owner.</List.Item>
      </List>
      <Text>RING OF GOOD FORTUNE</Text>
      <Text>Adds up to 3 points to any of your own story rolls.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: luck—balance—timing</List.Item>
        <List.Item>
          Limitations: Holds 3 points, replenished by taking 3 points from a story roll.
        </List.Item>
      </List>
      <Text>DIMENSION SHARD</Text>
      <Text>Holds a small, town-sized refuge dimension where time flows differently.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: refuge—time—change</List.Item>
        <List.Item>
          Limitations: Time passes 10 times faster or slower inside, chosen randomly.
        </List.Item>
      </List>
      <Text>SOULREAVER</Text>
      <Text>Stores the souls of slain worthy foes to unleash devastating final blows.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: souls—death—finality</List.Item>
        <List.Item>
          Limitations: Each kill banks 1d (3d), spendable to take +1d in a fight.
        </List.Item>
      </List>
      <Text>SHIP IN A BOTTLE</Text>
      <Text>Transforms into a full-sized ship crewed by sailors for seven days.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: transformation—voyage—ship</List.Item>
        <List.Item>
          Limitations: Must reach a port within 7 days. Crew requires shore time.
        </List.Item>
      </List>
      <Text>WAND OF LANDSLIDES</Text>
      <Text>Commands stone and soil to rise or fall at your will.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: earth—control—colossal</List.Item>
        <List.Item>
          Limitations: Roll Brawn to use it. Destabilizes the tectonics in the region.
        </List.Item>
      </List>
      <Text>ORB OF WORLDS</Text>
      <Text>Reveals visions of distant realms and planes of existence.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: visions—realms—distant</List.Item>
        <List.Item>Limitations: Take rattled when used.</List.Item>
      </List>
      <Text>VERMINSKULL RING</Text>
      <Text>Commands vermin to devour, reveal secrets, or retrieve valuables.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: vermin—command—swarm</List.Item>
        <List.Item>Limitations: 8d power pool, refreshed by feeding one of your fingers.</List.Item>
      </List>
      <Text>HEARTHOLDER LOCKET</Text>
      <Text>Teleports the one you hold dearest directly to you.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: love—teleportation—openness</List.Item>
        <List.Item>Limitations: Only works if their feelings for you are mutual.</List.Item>
      </List>
      <Text>HOMUNCULUS SEED</Text>
      <Text>Grows a living copy of someone, complete with their memories.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: replication—life—mystery</List.Item>
        <List.Item>Limitations: Must be planted and grow for a year and a day.</List.Item>
      </List>
      <Text>JAR OF BOUND POWER</Text>
      <Text>Holds a terrible force disguised as a harmless fairy.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: malevolence—containment—destruction</List.Item>
        <List.Item>
          Limitations: Shatters violently if mishandled, unleashing its full power.
        </List.Item>
      </List>
      <Text>GATEWAY PENDANT</Text>
      <Text>Opens a portal to a place the wielder cherishes deeply.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: portal—memory—longing</List.Item>
        <List.Item>Limitations: When you arrive, all memories of that place are lost.</List.Item>
      </List>
      <Text>SPIDERCHANGE CIRCLET</Text>
      <Text>Transforms you into a spider, gaining limbs, fangs, webber, and instincts.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: transformation—instincts—spider</List.Item>
        <List.Item>Limitations: Only activates when it decides it's needed.</List.Item>
      </List>
      <Text>AEGISWING BLADE</Text>
      <Text>Fights alongside you as a trusted ally, as if a level 1 fighter with Bulwark.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: flight—protection—loyalty</List.Item>
        <List.Item>Limitations: If it is destroyed, you die.</List.Item>
      </List>
      <Text>SHEPHERD'S CROOK OF THE LOST</Text>
      <Text>Draws wanderers and the forsaken to your side.</Text>
      <List variant="unordered">
        <List.Item>Touchstones: guidance—connection—burden</List.Item>
        <List.Item>Limitations: None, except the weight of those who find you.</List.Item>
      </List>
      <Heading level={3}>RANDOM POTIONS</Heading>
      <Text>
        Roll d66, then choose two words below the potion to smash together as touchstones. Roll 1d8
        on the list just below to add a magic technique to its touchstones.
      </Text>
      <Text>
        D8: attack—creation—defense—enhancement—hindrance—influence—transformation—traversal
      </Text>
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Cell>withering</Table.Cell>
            <Table.Cell>flaming</Table.Cell>
            <Table.Cell>oozing</Table.Cell>
            <Table.Cell>befuddling</Table.Cell>
            <Table.Cell>majestic</Table.Cell>
            <Table.Cell>piercing</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>fungus</Table.Cell>
            <Table.Cell>fire</Table.Cell>
            <Table.Cell>oil</Table.Cell>
            <Table.Cell>hex</Table.Cell>
            <Table.Cell>spirit</Table.Cell>
            <Table.Cell>bone</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>servant</Table.Cell>
            <Table.Cell>cascade</Table.Cell>
            <Table.Cell>bubble</Table.Cell>
            <Table.Cell>whispers</Table.Cell>
            <Table.Cell>aura</Table.Cell>
            <Table.Cell>mask</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>cryptic</Table.Cell>
            <Table.Cell>shadowy</Table.Cell>
            <Table.Cell>shimmering</Table.Cell>
            <Table.Cell>hungry</Table.Cell>
            <Table.Cell>venomous</Table.Cell>
            <Table.Cell>terrible</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>light</Table.Cell>
            <Table.Cell>doom</Table.Cell>
            <Table.Cell>air</Table.Cell>
            <Table.Cell>blight</Table.Cell>
            <Table.Cell>vine</Table.Cell>
            <Table.Cell>flesh</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>disk</Table.Cell>
            <Table.Cell>skull</Table.Cell>
            <Table.Cell>pillar</Table.Cell>
            <Table.Cell>ring</Table.Cell>
            <Table.Cell>claw</Table.Cell>
            <Table.Cell>guide</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Cell>wrathful</Table.Cell>
            <Table.Cell>ferocious</Table.Cell>
            <Table.Cell>primal</Table.Cell>
            <Table.Cell>robust</Table.Cell>
            <Table.Cell>screaming</Table.Cell>
            <Table.Cell>seeping</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>ash</Table.Cell>
            <Table.Cell>slime</Table.Cell>
            <Table.Cell>crystal</Table.Cell>
            <Table.Cell>body</Table.Cell>
            <Table.Cell>thorn</Table.Cell>
            <Table.Cell>pain</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>chains</Table.Cell>
            <Table.Cell>swarm</Table.Cell>
            <Table.Cell>word</Table.Cell>
            <Table.Cell>fire</Table.Cell>
            <Table.Cell>fang</Table.Cell>
            <Table.Cell>bubble</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>phantom</Table.Cell>
            <Table.Cell>frenzied</Table.Cell>
            <Table.Cell>shielding</Table.Cell>
            <Table.Cell>grasping</Table.Cell>
            <Table.Cell>charming</Table.Cell>
            <Table.Cell>silent</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>mist</Table.Cell>
            <Table.Cell>vermin</Table.Cell>
            <Table.Cell>earth</Table.Cell>
            <Table.Cell>eye</Table.Cell>
            <Table.Cell>feeling</Table.Cell>
            <Table.Cell>lightning</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>eye</Table.Cell>
            <Table.Cell>web</Table.Cell>
            <Table.Cell>hand</Table.Cell>
            <Table.Cell>gate</Table.Cell>
            <Table.Cell>heart</Table.Cell>
            <Table.Cell>dark</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Cell>dream</Table.Cell>
            <Table.Cell>slow</Table.Cell>
            <Table.Cell>curious</Table.Cell>
            <Table.Cell>prismatic</Table.Cell>
            <Table.Cell>blight</Table.Cell>
            <Table.Cell>binding</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>smoke</Table.Cell>
            <Table.Cell>sight</Table.Cell>
            <Table.Cell>death</Table.Cell>
            <Table.Cell>stasis</Table.Cell>
            <Table.Cell>energy</Table.Cell>
            <Table.Cell>sound</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>beacon</Table.Cell>
            <Table.Cell>swirl</Table.Cell>
            <Table.Cell>crown</Table.Cell>
            <Table.Cell>vase</Table.Cell>
            <Table.Cell>ray</Table.Cell>
            <Table.Cell>chalice</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>jovial</Table.Cell>
            <Table.Cell>unseen</Table.Cell>
            <Table.Cell>sickening</Table.Cell>
            <Table.Cell>curious</Table.Cell>
            <Table.Cell>mesmerising</Table.Cell>
            <Table.Cell>thunderous</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>water</Table.Cell>
            <Table.Cell>wood</Table.Cell>
            <Table.Cell>worm</Table.Cell>
            <Table.Cell>lore</Table.Cell>
            <Table.Cell>mind</Table.Cell>
            <Table.Cell>terror</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>needle</Table.Cell>
            <Table.Cell>leaf</Table.Cell>
            <Table.Cell>viscera</Table.Cell>
            <Table.Cell>hide</Table.Cell>
            <Table.Cell>sphere</Table.Cell>
            <Table.Cell>spirit</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Heading level={2}>SOLO PLAY</Heading>
      <Text>
        Just as Grimwild assumes knowledge of roleplaying games in general, it also assumes
        knowledge about solo and duet style play. If unfamiliar, there are plenty of resources
        online to figure it out.
      </Text>
      <Text>
        The base rules for Grimwild are already very well-suited for solo RPGs. There are plenty of
        difficulty changes on pg. 137 as well for you to adjust the game, but let's look at why
        Grimwild works out of the box.
      </Text>
      <Text>
        The roll resolution system brings both the PC's actions and the world into one single roll.
        This cuts down on the need for back-and-forth dice rolls. One roll can convey a lot—it lets
        you play out a beat, a sequence of beats, or even an entire scene based on the results. The
        thorns, setups, and assists are rolled separately as well, giving you important information
        on what to narrate in the scene.
      </Text>
      <Text>
        Montages zoom out even further. Playing solo, you know very well what you do and don't want
        to play out in detail—you can set the perfect scope for the story you want to play out.
        Montage rolls can perfectly fill those times and connect the story together seamlessly.
      </Text>
      <Text>
        Challenges zoom in even further. When there's something you really want to see play out, lay
        it out as a challenge. The prep exercise for it will help you paint the scene to come, as
        well as putting yourself in the GM's perspective for enough time to view the story
        objectively. Then play it out and see what happens.
      </Text>
      <Text>
        GM moves are structured, intuitive guidance for the world. Baked right into the moves is
        advice and principles on how the world, as a cinematic entity, should operate. When in
        doubt, it gives you 15 different scenarios to look at for how to move forward. Suspense also
        helps reminds you that the world has teeth so you don't get too wrapped up in your own
        character.
      </Text>
      <Text>
        Crucibles are a perfect source of outside inspiration. They allow you to disclaim
        decision-making and go where they point you. Your mind will gravitate towards what sounds
        the most fun while you're rolling them. It jumpstarts your creativity.
      </Text>
      <Text>
        Story arcs give you a clear way to create purpose for your character. Just set an arc, then
        work towards hitting it. The ideas are all typical character tropes and can be taken in many
        different directions. When your character accomplishes or outgrows one, just set another
        that's more important to them.
      </Text>
      <Text>
        Advancement is done on a per-session basis, simple for solo play. However, you can also
        split this up into smaller bursts. Solo roleplaying sometimes takes the form of micro-play,
        so 2 hours worth of total play is a good marker for one XP.
      </Text>
      <Text>
        The exploration system is perfectly suited for solo play. It's designed to surprise a group
        of players and bring their ideas into a somewhat cohesive whole. The canon-less setting of
        Grimwild thrives on spontaneity, making it simple to weave together a randomly generated
        story without too much mental gymnastics.
      </Text>
      <Text>
        Monster blocks, combined with the tactics blocks, make combats dynamic. They come with
        plenty of ideas to bring to bear during a fight. Their wants and doesn't wants will
        naturally drive you towards following through with them logically. The additional table at
        the bottom allows you to add some extra randomness to each on the fly.
      </Text>
      <Text>
        Story kits work differently than with a group and GM, but just as well. You just don't
        answer the questions, change some of the Mix It Up details to randomize them, and away you
        go. There's an entire structure for you to play off of, with a limited amount of concrete
        foundation leaving huge swathes of gray area in between to fill with your own imagination.
      </Text>
      <Text>
        The story roll captures everything. When unsure what happens next, assess the likelihood,
        ask, and roll. Grimwild's design fosters flow and progress from top to bottom, ideal for
        solo play.
      </Text>
      <Heading level={3}>SOLO PARTY MODE</Heading>
      <Text>
        In Grimwild, solo play is clear with the rules as written, but you can also play as a party.
        In this mode, your primary character, the PC, remains the main focus of the story, while the
        other three party members are simplified secondary characters. This approach lets you create
        the social dynamics of an adventuring party without overwhelming complexity.
      </Text>
      <Text>
        The main PC is created as normal, while the secondary party members are streamlined. They
        have:
      </Text>
      <List variant="unordered">
        <List.Item>A single talent and don't advance.</List.Item>
        <List.Item>Simplified harm, with no marks.</List.Item>
        <List.Item>One positive trait and desire along with a negative one.</List.Item>
        <List.Item>No character arcs.</List.Item>
        <List.Item>No spark or story.</List.Item>
        <List.Item>Only backgrounds listed, no wises.</List.Item>
        <List.Item>Only bonds with the PC.</List.Item>
      </List>
      <Text>
        This simplicity keeps their power level lower than the main PC, shaping the story while
        keeping gameplay manageable. You only need to remember a few talents, roll their stats, and
        use them as supporting NPCs in your roleplay.
      </Text>
      <Text>
        This system allows you to balance personal character arcs with a broader group dynamic. It
        also opens up opportunities for group conflicts or challenges, pushing the story in
        unexpected and engaging directions.
      </Text>
      <Text>
        You can copy the sheet on this page to use for each secondary character or even just as a
        single sidekick. You can also download the sheet in US letter size with 3 character blocks
        on it at odditypress.com.
      </Text>
      <Heading level={2}>DESIGNER NOTES</Heading>
      <Text>
        In finishing this book, I had a bit more to say, so the following are a random collection of
        thoughts on Grimwild, and the gameplay and design process of this game from myself, J.D.
        Maxwell. These are long and a bit self-indulgent, but it really made me feel better getting
        these last thoughts in.
      </Text>
      <Heading level={3}>THE RULES AS A NET</Heading>
      <Text>
        Throughout the game, you'll find a steady mix of narrativist and gamist mechanics. You'll
        see me pushing towards adding story, to be followed up with fun fiddly bits to play with.
        During character creation and party setup, the game leans heavily into those narrative
        elements. We're not bogged down with detailed tracking—gear is abstracted, skills
        represented through Vantages, and simple stats give us quick resolution. The focus here is
        on moving the story forward rather than digging into simulationist depth. But later, as the
        rules around adventuring kick in, the gamist elements come into play. Manipulating dice
        pools, adding thorns, assisting—these are mechanics designed to elegantly capture the
        fiction and break down towards simplicity.
      </Text>
      <blockquote>
        <Text>
          “The game thrives on fiction. The rules don't push the story forward on their own—they
          depend on the fiction to drive the game.”
        </Text>
      </blockquote>
      <Text>
        The rules act like a layer of nets sitting under the story, just waiting to catch it. As we
        describe what's happening at the table, the rules get out of your way. They're not demanding
        you to do anything, they're just sitting underneath and waiting. Then when we hit a point
        where we don't know what comes next or how something turns out, they're there for us. They
        catch the fiction as it falls, spin up their mechanisms, help us along the way, and push us
        right back into the story.
      </Text>
      <Text>
        At the very top of this layer of nets are specific rules. Talents are a great example of
        this. If a fighter has the Bulwark talent and rolls a messy that would normally lead to them
        getting bloodied, Bulwark steps in. It catches the fiction first, overrides the general
        rules (later nets), and tells us what happens.
      </Text>
      <Text>
        The layers then go from specific to less specific. The real elegance of it lies in what's at
        the very bottom—the story roll. It's the catch-all when nothing else fits. If you don't know
        what rule to use, or don't want to stop and look something up, you can always just make a
        story roll. It keeps the game flowing.
      </Text>
      <blockquote>
        <Text>
          It means you can't engage with the mechanics until you describe what your character is
          doing in the fiction. The mechanics can't do anything until you've given them some
          fiction.
        </Text>
      </blockquote>
      <Text>
        The game thrives on fiction. The rules don't push the story forward on their own—they depend
        on the fiction to drive the game. There's that great phrase from Apocalypse World: “To do
        it, do it.” It means you can't engage with the mechanics until you describe what your
        character is doing in the fiction. The mechanics can't do anything until you've given them
        some fiction.
      </Text>
      <Text>
        That applies in Grimwild, too—this is the very nature of fiction-first and narrative gaming.
        But here's my addition on that phrase: don't do all of it until after the roll, after the
        mechanics. Before the roll, the player describes their intentions and how they're going
        about it, but leaves room for the dice to decide what happens and picks up narration again
        after the roll.
      </Text>
      <Text>
        This is a key part of the game. The GM isn't there to dictate how the action plays out after
        the roll; they work with the player to do that, and the dice give you guidelines on where
        the story can go. It's up to the player to follow through on their earlier setup and bring
        it to life in the fiction. So while I love “to do it, do it”, I'd tweak it slightly: Do it,
        but don't finish doing it until after the roll.
      </Text>
      <Heading level={3}>STARTING A CAMPAIGN</Heading>
      <Text>
        At the very start of the first session—after the players have come up with their characters
        and figured out the general concept of the party, but before they've nailed down any bonds—I
        like to go around the table and dig into their characters. I'll start with one player and
        ask, “Tell us about your character. What do they look like?” As they talk, I'm jotting down
        notes—mostly just to help me remember names and key details. I also make sure to tell them,
        “While I'm taking notes, talk to the group, not to me.” This establishes quickly that this
        game isn't a 1-on-1 conversation.
      </Text>
      <Text>
        As they explain, I'll ask follow-up questions. If they say something like, “She's a wiry
        woman with rough hands,” I'll jump in: “Rough hands? What's that about? Years of hard work?”
        I try to find those little things they seem to care about—maybe they already have an idea,
        or maybe they don't, but it's fun for them to think about. We talk about their traits: who
        they are, who they aren't, what they desire, and what they don't. Honestly, the stuff the
        PCs aren't and don't desire are often the most interesting. Like, if they want power but
        don't care about wealth, I'll ask, “Why not wealth? That's often tied to power? Did
        something happen to make them averse to gathering wealth? Are they even aware they don't
        care about it?” These kinds of questions are open-ended and a bit leading—hitting them with
        a question that doesn't fit can spur them into giving an answer that does fit. And if they
        don't really have an answer? Let it go. It's obviously not important to their character
        concept.
      </Text>
      <blockquote>
        <Text>
          While they're talking, I'm keeping an eye out for connections—little dots we can use to
          draw lines between characters and drill deeper with questions.
        </Text>
      </blockquote>
      <Text>
        Once they've said their piece and run out of steam, I move on to the next player and do the
        same thing. While they're talking, I'm keeping an eye out for connections—little dots we can
        use to draw lines between characters and drill deeper with questions. Maybe two of them both
        want power, but it's not the same kind of power. Or one avoids wealth, and the other craves
        it. These differences and similarities can help explain why they're adventuring together—or
        make you wonder why they would be. That's where you can nudge them with a question: “Is this
        the kind of power that overlaps, or are you stepping on each other's toes?”
      </Text>
      <blockquote>
        <Text>
          I pick one per player to dig a little bit deeper on—“How long's that complex rivalry been
          going on for? When did they recently get the better of you?”
        </Text>
      </blockquote>
      <Text>
        This should all be a big group conversation, moving the spotlight around. As the GM, point
        it at players, but watch for creativity waning and shift focus when needed. Come back to
        them later. Players can pass or grab the spotlight when they have something to contribute,
        otherwise, let the discussion flow naturally. On pg. 142, you'll find questions to help
        connect characters. Players can share these, but the GM will likely ask the most, steering
        the conversation while others develop their ideas.
      </Text>
      <Text>
        At the end of this whole back-and-forth, I ask the players about their bonds. Some might've
        already written them out, but this is their chance to tweak or rethink them now that they've
        heard about the other characters in detail. It's usually pretty organic—bonds tend to pop up
        naturally during the conversation. I pick one bond per player to dig a little bit deeper
        on—“How long's that complex rivalry been going on for? When did they recently get the better
        of you?”
      </Text>
      <Text>
        One of my favorite parts is asking about their last adventure: “What was the last thing you
        all did together?” A spark from the character discussion—an item, goal, or moment—kicks
        things off, and we build a quick montage from there. This is why you make characters
        together and leave open spaces. In 30-45 minutes, they've created a shared history full of
        dots we can connect as we move along. It already feels like they've been adventuring
        together for some time.
      </Text>
      <Heading level={3}>THE ROLE OF THE DICE</Heading>
      <Text>
        Something I get asked a lot is why thorns are d8s, and what the thought process behind
        including them is. They ask, “Why not just use d6s?” or “Why not just reduce the number of
        base dice to represent difficulty?” There's a few reasons for this, and it's all tied to the
        dice system as a whole, so I'll break it down here.
      </Text>
      <Text>
        When I first designed thorns, they used a matching mechanic—if a thorn matched one of your
        base dice, that die got knocked out, and 7s and 8s trumped your dice no matter what, causing
        a failure. It worked on paper well enough, but was clunky at the table. It took way too long
        to parse, slowing things down, and killing the flow. Flow is everything in Moxie. However
        what I did like about it was the 7s and 8s beating any other dice. That felt right!
      </Text>
      <blockquote>
        <Text>
          When parsing the dice, the higher results pull the eye quickly too, letting their presence
          be known before figuring out the rest of the roll.
        </Text>
      </blockquote>
      <Text>
        So now you might be wondering why thorns are d8s instead of d4s. After all, the odds of
        rolling a 7-8 on a d8 are the same as 4 on a d4. First off, d4s are just awful to roll.
        They're hard to pick up. They feel awkward in your hand. They're just unsatisfying all
        around. On the other hand, d8s feel great. They stand out visually from the d6 base dice and
        it's a nice bonus that their jagged edges look like a thorn, too. When parsing the dice, the
        higher results pull the eye quickly too, letting their presence be known before figuring out
        the rest of the roll. Multiple 4s being rolled would just slow that parsing down again. And
        of course, there's the idea of the 7-8 beating 6 and under, reinforcing the idea of thorns
        overriding results.
      </Text>
      <Text>
        So why not just cut dice? They're separate because they give us more narrative clarity. If a
        perfect is cut to a messy by a thorn, we know the thorn caused whatever bad thing happened!
        But if the roll was messy to start with, and the thorn didn't cut, it's clear the issue
        wasn't from whatever added that thorn. This is great when interpreting results. The more
        information we have, the better the picture we paint with our narration is.
      </Text>
      <Text>
        Imagine if there's a really strong wind and you take +1t while trying to shoot a goblin with
        your bow. If the thorn cuts, we know the wind caused that problem. If not, we can guess it
        was just a miss, the goblin was jukey, or some other factor—but it wasn't the wind.
      </Text>
      <blockquote>
        <Text>
          If a player's assisting you, they roll that +1d instead of just adding it to your pool.
          This way, we get to see how much of the outcome was from your effort and how much was from
          theirs.
        </Text>
      </blockquote>
      <Text>
        This same thing holds true for assists, setups, and outside assistance. If a player's
        assisting you, they roll that +1d instead of just adding it to your pool. This way, we get
        to see how much of the outcome was from your effort and how much was from theirs. All of
        this adds extra layers to each beat.
      </Text>
      <Text>
        The actual act of rolling the dice as well matters with how this all feels. Here's a
        tip—when multiple people are rolling, make sure the main player rolls first. This keeps the
        focus on them and we get their outcome first. Then let other dice go, feeling like they're
        adding to the action, not taking it over.
      </Text>
      <Text>
        In the end, the dice system is designed to be easy to parse, satisfying to roll, and give us
        some extra information when other dice are in play. It all flows together, helping the dice
        tell the story without getting in the way.
      </Text>
      <Heading level={3}>VIGILANCE &amp; PERCEPTION CHECKS</Heading>
      <Text>
        When you first come across the rules for vigilance, it probably feels a bit jarring. It
        stands apart from the rest of the game by relying more on player skill than character skill.
        That was an intentional choice though, and one meant to grab your attention.
      </Text>
      <Text>
        The problem, as I see it, is an overcautiousness with players. Adventurers are naturally
        wary, sure. They face traps and monsters regularly. But when the players, not the
        characters, spend time poking every nook, prodding every surface, and hesitating at every
        step, it grinds the cinematic flow of the game to a halt. That style might fit some games
        and the experience they're going for, but Grimwild isn't built for it. Grimwild's built to
        flow.
      </Text>
      <Text>
        The rules already address how unexpected dangers affect the PCs. Impact moves handle
        surprises and talents can interrupt those moves, giving a framework without requiring excess
        caution. By the rules, there's nothing a player can make their PC do to be extra
        cautious—the GM can hit at any time, as long as it's logical. We give that authority, of
        deciding just how cautious a PC is right then or whether they've made a mistake, over to the
        GM, a sacrifice of player agency made to keep the game flowing smoothly.
      </Text>
      <blockquote>
        <Text>
          By the rules, there's nothing a player can make their PC do to be extra cautious—the GM
          can hit at any time, as long as it's logical.
        </Text>
      </blockquote>
      <Text>
        Vigilance complements this removal of simulationism by injecting it right when it matters.
        It leans into cinematic reactions and player engagement. Vigilance: hint is tied right to
        player skill. Players listen to the GM's and other players' descriptions, weigh the
        situation, and react as best they can. They keep their character in mind, but it's largely a
        player guessing game, a simulationist mechanic right in the middle of the game's narrativist
        core. So why include it? Because it's fun and creates memorable scenes. Because it's
        cinematic. It captures moments of tension and immediacy, letting players respond viscerally
        both as themselves and through their characters.
      </Text>
      <Text>
        This approach has two main benefits. First, it sparks that genuine player reaction. That's
        the good stuff, and injects it right into the fiction. Second, it encourages players to
        focus on the details at the table. OSR games excel at this level of focus—players are locked
        into the fiction, absorbing everything, because if they miss something, it could spell their
        doom. Vigilance: hint brings a big chunk of that magic into Grimwild.
      </Text>
      <Text>
        So here's the key point: there are no perception checks in the game. The GM decides what
        characters notice, based on their knowledge of the character, situation, and story. This
        trust in the GM fosters a better flowing story. Instead of rolling to notice things, players
        focus on the fiction and what they'll get to add to it next. They enjoy the scenes and set
        up great moments. If you want to play a highly observant character, there are talents to
        represent that.
      </Text>
      <blockquote>
        <Text>
          It's a simulationist mechanic, which puts it at odds with the narrativist core of the
          game. So why include it? Because it's fun, and creates great scenes.
        </Text>
      </blockquote>
      <Text>
        This blend—narrativist with a tiny bit of simulationist in there at just the right
        spot—makes Vigilance unique. It breaks from the core mechanics just enough to really mean
        something while keeping the focus on the fiction. The result, or at least I think, is a
        system that rewards you for really paying attention to the fiction and thinking on how you
        can add to it, to stay engaged even when other people are describing things, all while
        producing cinematic moments. And best of all, it avoids that absolutely terrible habit of
        rolling to see if you see something.
      </Text>
      <Heading level={3}>STORY AND WHY IT MATTERS</Heading>
      <Text>
        The narrative currency in Grimwild, which I decided to call story because it's as clear as
        day as to what it does, exists because the game belongs to everyone at the table. Of course
        the world largely resides in the GM's mind, especially things offscreen, but it's fun to get
        in there and add details to the fiction. I wanted everyone to have that ability, that
        freedom, so they help craft the scenes they really want to play out. And here's the
        thing—while I love GMing games, I'm most excited about being a player. That's how I view the
        game, through that player lens. I'm always thinking about what I want to be doing as a
        player. In the end, I made this game for me and just hope others will like it, and nothing
        gets me more excited than being able to add details to the fiction and then play off of them
        to make a cool scene.
      </Text>
      <blockquote>
        <Text>
          That's how I view the game, through that player lens. I'm always thinking about what I
          want to be doing as a player.
        </Text>
      </blockquote>
      <Text>
        Some players, especially coming from a traditional gaming background, can struggle a bit
        with story at first. If you're GMing, nudge them a bit to use it. Remind them that they get
        it for free each session and it replenishes—it's use it or lose it. For GMs too, it can be
        hard. Remember that you can always say no, and that you can also disclaim decision making by
        turning it into a story roll instead. Every GM will have different lines as to what's okay
        and what's not.
      </Text>
      <Text>
        So here's the thing, though—this kind of player-driven storytelling already exists in every
        RPG, just in a less formal way. If you walk into a tavern in most games, you might say, “I
        go up to the counter and order an ale.” You assume the bar has ale, even if the GM hasn't
        explicitly told you. What story does is creating a system for adding larger details, to make
        everyone feel comfortable with doing so, and to provide some concrete limitations on it so
        players don't push and pull the narrative to death. It's as much a tool for limiting
        contributions as it is for promoting them.
      </Text>
      <Text>
        This all ties directly into your character's backstory, traits, and story arcs. It creates
        more fluid, player-driven scenes where, instead of just asking the GM, “Is there a dice game
        in the tavern?” when you want to explore your “Feed Vices” story arc, you just spend a point
        of story and say, “There's a dice game, and I'm jumping in with our shiny new treasure as
        the stakes.” By spending story, you're not just asking for something—you're saying, “This is
        important to me. I want it to matter in this scene.”
      </Text>
      <Text>
        The GM decides how to respond. Maybe they just go with it, or maybe they want to add some
        nuance, like rolling for the gamblers to see how tough the competition is. On a perfect,
        these fellas know the game well. On a critical, they're sharks looking for their next
        sucker—but either way, the story becomes about the thing the player cares about. And since
        you only get two points per session, you balance those story spends, waiting to make sure
        it'll impact the scene in a way that's satisfying while at the same time, there's no reason
        to hoard them—they refresh each session.
      </Text>
      <blockquote>
        <Text>
          By spending story, you're not just asking for something—you're saying, “This is important
          to me. I want it to matter in this scene.”
        </Text>
      </blockquote>
      <Text>
        Story keeps the narrative flowing. When we set our story arcs, they expand our vantage. We
        can spend story to create scenarios to play out those arcs. We also let the group know when
        we set an arc—this gives them a chance to buy in on your character doing that. If you choose
        “Feed Vices,” and then gamble away the party's treasure, the group's already had a chance to
        talk about whether that kind of thing is okay. They knew you were going down a dark path.
        They also have a chance here to quarrel with you to stop you from following through!
        Suddenly, the story shifts into something cinematic—a moment you'd see in a movie—and it all
        flows naturally because the system is built for it.
      </Text>
      <Heading level={3}>BUYING INTO QUARRELS</Heading>
      <Text>
        The quarrel mechanic might be a bit contentious, so I want to address it here at the end. I
        know that some players won't like the idea of giving up their agency to the dice—I've seen
        it in playtesting. They'll want to be convinced, in-character and out, to take a different
        path. But here's the problem: when two PCs are at odds, the story needs a resolution to keep
        moving forward. Both players naturally see their character as being in the right, and feel
        their character would never back down. In real life, disagreements like this could play out
        over minutes, hours, or even days. Why waste precious game time at the table watching two
        players argue about what their characters would or wouldn't do?
      </Text>
      <blockquote>
        <Text>
          In my experience, arguing about something your characters are contentious about rarely
          (dare I say never?) feels satisfying.
        </Text>
      </blockquote>
      <Text>
        There's also the issue of social dynamics. Some players are going to be better at convincing
        people, or more comfortable being assertive, while others might give in just to avoid
        conflict. This means one player could end up consistently losing these disagreements—not
        because their character would back down, but because they, as a player, don't want to ruffle
        feathers or stall the game. In my experience, players arguing what their characters are
        contentious about rarely (dare I say never?) feels satisfying. One side inevitably feels bad
        about how it played out, or someone bends just to keep things moving.
      </Text>
      <Text>
        Quarrels solve this by letting characters be stubborn and stand their ground without bogging
        the game down. They provide a quick resolution, are very simple without a lot of mechanical
        heft, and give the “winning” side narrative control over what happens next and the “losing”
        side the last word. The quotes on “winning” are important there—neither side really wins or
        loses. Both get a chance to add more fun narration to the game! The story moves in the
        direction the winner wants, but the losing side still gets to respond—and they even get the
        final word on the situation to set the tone on how things might play out moving forward.
        They decide whether their character agrees, begrudgingly goes along, or outright resents it.
      </Text>
      <Text>
        Think about how this plays out in TV shows and movies. You often see characters who are tied
        together by the plot or personal bonds come to a major disagreement. One side inevitably
        “wins,” but the tension lingers, and maybe there are some hard feelings or sharp words
        exchanged. The story moves forward because it has to. That's what the quarrel mechanic is
        designed to emulate.
      </Text>
      <blockquote>
        <Text>
          The most important thing about quarrels, though, is player buy-in. A quarrel can't happen
          unless all at the table agree to it.
        </Text>
      </blockquote>
      <Text>
        The roll itself is simple: both players roll 2d. This keeps things fair, with no character
        stats or approaches involved, because the assumption is that both sides are doing their
        absolute best to convince the other. It's 2d instead of 1d so that others can assist and add
        a bit to it, but not as much as the main person pushing the point. There's no mechanical
        consequences tied to the roll, either, unless they're specifically agreed to beforehand. If
        the quarrel leads to a physical fight, for example, the game doesn't punish the characters
        by inflicting wounds or conditions—because making players mechanically weaker for
        interacting with each other isn't fun and nobody would do it.
      </Text>
      <Text>
        The most important thing about quarrels, though, is player buy-in. A quarrel can't happen
        unless all at the table agree to it. If someone doesn't want to quarrel about some decision,
        the group needs to rethink the scenario together and come up with a solution. At this point,
        the game and story have hit an actual roadblock and out-of-character conversation is
        necessary. Quarrels pull double-duty here—they let players signal that they don't really
        care about something, but they also let them signal that they really do care about
        something. My advice to those skeptical is this: just try it.
      </Text>
    </Page>
  );
};

export default Chapter07;
