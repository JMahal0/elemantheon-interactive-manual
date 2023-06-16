import { type NextPage } from "next";
import HeadTag from "../components/HeadTag"
import ContentSection from "../components/ContentSection";


const ElementalAbilities: NextPage = () => {

  return (
    <>
      <HeadTag />
      <main className="flex justify-center h-screen">
        <div className="h-full w-full">

          <div className="text-4xl text-center font-extrabold py-8">
            Elemental Abilities
          </div>

          <ContentSection sectionTitle="God of Fire" paragraphsJsx={<>
            <p>
              <span className="font-semibold">Active Ability - Burning Siege:</span> When trying to convert a city, remove the city defense value from the total defense.
            </p>
            <p>
              <span className="font-semibold">Passive Ability - Heat Wave:</span> At the end of your turn you do 1 damage all players on tiles adjacent to you.
            </p>
            <p>
              Similar to Attacking, if you kill any players this way, you gain one follower and can steal either one city or one follower from the deceased.
            </p>
          </>} />

          <ContentSection sectionTitle="God of Water" paragraphsJsx={<>
            <p>
              <span className="font-semibold">Active Ability - The Great Flood:</span> Put the Flood card on any map card you choose. When a city under a flood it is worth 0 points.
              Any followers/defenders that were on a flooded map card die and are discarded.
            </p>
            <p>
              There can only be 1 flood at a time. The flood ends when you die. You can also end the flood at any time as a free action. End the flood by taking the Flood card off the map and back in your hand.
            </p>
            <p>If a city was under a flood, it becomes unclaimed when the flood ends.</p>
            <p>
              <span className="font-semibold">Passive Ability - Water Walker:</span> Lake tiles cost only 1 Speed to enter.
            </p>
          </>} />

          <ContentSection sectionTitle="God of Air" paragraphsJsx={<>
            <p>
              <span className="font-semibold">Active Ability - Howling Headwinds:</span> All other players' Speed gets reduced to 2 until your next turn.
            </p>
            <p>
              <span className="font-semibold">Passive Ability - Free Flight:</span> All tiles cost only 1 Speed to enter.
            </p>
          </>} />

          <ContentSection sectionTitle="God of Land" paragraphsJsx={<>
            <p>
              <span className="font-semibold">Active Ability - Divine Tectonics:</span> Choose any 2 cards on the map and swap them, along with anybody and anything on those cards.
            </p>
            <p>
              <span className="font-semibold">Passive Ability - Shifty Sands:</span> Desert tiles cost only 1 Speed to enter.
            </p>
            <p>
              Additionally, if you attack a player that is standing on a desert tile, they lose 3 Health instead of 2.
            </p>
          </>} />

          <ContentSection sectionTitle="God of Thunder" paragraphsJsx={<>
            <p>
              <span className="font-semibold">Active Ability - Thunderstruck:</span> Attack a player anywhere on the map for 1 damage.
            </p>
            <p>
              Similar to Attacking, if you kill any players this way, you gain one follower and can steal either one city or one follower from the deceased.
            </p>
            <p>
              <span className="font-semibold">Passive Ability - Electrifying Aura:</span> Each follower gives a Follower Offense Bonus of 3, instead of 2.
              The maximum Follower Offense Bonus is still 6.
            </p>
          </>} />

          <ContentSection sectionTitle="God of Metal" paragraphsJsx={<>
            <p>
              <span className="font-semibold">Active Ability - Robotic Disciple:</span> Place the Robot token on your spawn tile or on any city tile that you currently control and the robot heart piece on the 4 on the Wheel of Rebirth.
            </p>
            <p>
              On your turn you can move and perform actions with the Robot in addition to the movement and actions done with your Avatar.
            </p>
            <p>
              There can only be 1 Robot at a time. The Robot can be attacked by other players and has 4 Health. If another player kills the Robot, they do not steal anything from you.
            </p>
            <p>
              When the Robot loses all its Health, return it to your hand because it does not reincarnate. You can also recall the Robot at any time as a free action.
            </p>
            <p>
              <span className="font-semibold">Passive Ability - Steel Fortifications:</span> Each follower gives a Follower Defense Bonus of 3, instead of 2.
              The maximum Follower Defense Bonus is still 6.
            </p>
            <p>
              Additionally, if you attack a player that is standing on a city tile, they lose 3 Health instead of 2.
            </p>

          </>} />

        </div>
      </main>
    </>
  );
};

export default ElementalAbilities;
