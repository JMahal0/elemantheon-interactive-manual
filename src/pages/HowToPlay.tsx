import { type NextPage } from "next";
import HeadTag from "../components/HeadTag";
import ContentSection from "../components/ContentSection";
import Link from "next/link";
import NavBar from "~/components/NavBar";
import BasicMovement from "~/components/interactivity/BasicMovement";


const HowToPlay: NextPage = () => {

  return (
    <>
      <HeadTag />
      <NavBar />
      <main className="flex justify-center h-screen">
        <div className="h-full w-full">

          <div className="text-4xl text-center font-extrabold py-8">
            How to Play
          </div>

          <ContentSection sectionTitle="On Your Turn" paragraphsJsx={<>
            {/* <ul className="list-disc">During your turn, you can choose to:
              <li>Move on the map //green triangle </li>
              <li>Do any number of free actions //yellow circle </li>
              <li>And do 1 primary action // red octagon</li>
            </ul> */}

            <p>
              During your turn, you can choose to move on the map, do only 1 primary action, and do any number of free actions.
              These can be done in any order.
            </p>
            <p>
              For example, you can do a primary action, then move. You can do a free action, then move, then do a primary action.
              You can use a partial amount of the total, do a free action, then move the remaining amount. 
              However, if you moved at all before doing a primary action, you cannot move any more after.
            </p>
          </>} />

          <ContentSection sectionTitle="Moving" paragraphsJsx={<>
            <p>
              All gods have a Speed of 4.
            </p>
            <p>
              The terrain of the map affects how far you can go on your turn. Each tile has a speed cost shown as a number inside an arrow.
            </p>
            {/* Show an image of the arrow */}
            <p>
              Green field tiles and gray city tiles cost 1 Speed to enter. Brown desert tiles cost 2 Speed to enter. Blue lake tile cost 4 Speed to enter.
            </p>
            <p>
              You can move your Avatar to any tile that is 4 or less Speed away from their current location.
              There are multiple way to get to the same tile, but depending on the terrain, some paths might cost more Speed than others.
            </p>
            <BasicMovement />

            <p>
              The Gods of Water, Air, and Land have Passive Abilities that change how they are affected by terrain.
            </p>
            <p>
              You can move through a tile that another player is currently on but you cannot perform an action or end your turn on an already occupied tile.
              Similarly, you can move through another player&apos;s spawn tile, but you cannot end your turn there.
            </p>

          </>} />

          <ContentSection sectionTitle="Placing and Collecting Defenders" paragraphsJsx={<>
            {/* This should have an interactive part*/}
            <p>
              If you are on your spawn tile or a city tile that you already control, then you can place followers from your hand 
              into one of your cities to be defenders and you can collect defenders already in cities back into your hand.
            </p>
            <p>
              Placing defenders in a city gives the city a defense bonus against other players&apos; attempts to convert it.
              Each defender gives a +2 defense bonus. The God of Metal&apos;s Passive Ability makes each defender give a +3 defense bonus. Followers can give a max defense bonus of +6.
            </p>
            <p className="font-semibold">
              Placing and collecting defenders is a free action.
            </p>
          </>} />

          <ContentSection sectionTitle="Other Free Actions" paragraphsJsx={<>
            <p>
              The Gods of Water and Metal have additional free actions as part of their Elemental Abilities.
            </p>
          </>} />

          <ContentSection sectionTitle="Attacking" paragraphsJsx={<>
            {/* This should have an interactive part*/}
            <p>
              If you are on a tile adjacent (diagonals are not adjacent) to another player, you can attack the other player to reduce their Health by 2.
              The targeted player moves their heart piece on the Wheel of Rebirth to update their Health amount.
            </p>
            <p>
              You kill the targeted player&apos;s Avatar, if their health falls below 1. The killer God gains one follower can steal either one city or one follower from the killed.
              The killed removes their Avatar from the map and waits to be reincarnated on their next turn. 
            </p>
            <p className="font-semibold">
              Attacking is a primary action.
            </p>
          </>} />

          <ContentSection sectionTitle="Attempting to Convert a City" paragraphsJsx={<>
            {/* This should have an interactive part*/}
            <p>
              If you are on a city tile that you do not currently control, you can attempt to convert the city to follow you.
            </p>
            <p>
              Each city has a city defense value depending on its size. This is shown as a number inside a shield.
            </p>            {/* Show an image of the shield */}
            <p>
              When you try to convert an unclaimed city, you roll a standard 6 sided die, aka D6.
              To succeed, the D6 result + Follower Offense Bonus must be higher than the city&apos;s defense.
            </p>
            <p>
              When you try to convert another player&apos;s city, both roll the D6.
              To succeed, the attacker&apos;s D6 result + Follower Offense Bonus must be higher than the city&apos;s defense + the defender&apos;s D6 result + Follower Defense Bonus.
            </p>
              <span className="font-semibold">Follower Offense Bonus:</span> Attacking players get +2 Offense for every follower in their hand. The maximum bonus is +6.
            <p>
            </p>
              <span className="font-semibold">Follower Defense Bonus:</span> Defending players get +2 Defense for every follower in the defending city. The maximum bonus is +6.
            <p>
              The Gods of Thunder and Metal have Passive Abilities that affect their bonuses from followers.
            </p>
            <p>
              If a city that has defenders gets converted, then the defending followers go back into the defending player&apos;s hand.
            </p>
            <p>
              The conversion fails when there is a tie. If the conversion attempt fails, then the attacker loses 1 Health.
            </p>
            <p>
              If you die from failing a conversion, you do not get anything stolen from you. Just take your Avatar off the map and wait to be reincarnated on your next turn.
            </p>

            <p className="font-semibold">
             Attempting to convert a city is a primary action whether it succeeds or fails.
            </p>
          </>} />

          <ContentSection sectionTitle="Using an Active Ability" paragraphsJsx={<>
            <p>
              If you have at least 1 follower in your hand, you can choose to sacrifice 1 follower to perform your God&apos;s Active Ability.
              When you use an Active Ability, discard a follower token from your hand.
            </p>
            <p className="font-semibold">
              Using an Active Ability is a primary action.
            </p>
          </>} />

          <ContentSection sectionTitle="Dying and Reincarnating" paragraphsJsx={<>
            <p>
              If your Avatar&apos;s Health goes below 1, they die and you remove the Avatar piece from the map.
            </p>
            <p>
              At the start of your next turn, your God reincarnates and you put you Avatar piece back on the map. 
              You can choose to place your Avatar on your spawn tile or on any city tile that you currently control.
            {/* This should have an interactive part*/}
            </p>
            <p className="font-semibold">
              Reincarnating is a free action.
            </p>
          </>} />

          <div className="flex p-4 max-w-sm mx-auto mb-8 bg-white rounded-xl shadow-lg">
            <Link className="text-xl font-semibold text-center w-full" href="/ElementalAbilities">{"Next >"}</Link>
          </div>

        </div>
      </main>
    </>
  );
};

export default HowToPlay;
