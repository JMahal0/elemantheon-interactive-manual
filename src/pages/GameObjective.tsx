import { type NextPage } from "next";
import HeadTag from "../components/HeadTag";
import ContentSection from "../components/ContentSection";
import Link from "next/link";
import NavBar from "~/components/NavBar";


const GameObjective: NextPage = () => {

  return (
    <>
      <HeadTag />
      <NavBar />
      <main className="flex justify-center h-screen">
        <div className="h-full w-full">

          <div className="text-4xl text-center font-extrabold py-8">
            Game Objective
          </div>

          <ContentSection sectionTitle="How to Win" paragraphsJsx={<>
            <p>
              You are one of many elemental gods trying to be the supreme ruler of the gods.
              You all decide that the measure of a god's power is their influence and following.
              Thus, you all reincarnate into Avatars in the mortal world and compete to gain the most influence via cities and followers.
            </p>
            <p>
              Each god has 2 special abilities tied to their element. One is passive and is always in effect.
              The other is active and requires a follower to be sacrificed in order to be used.
            </p>
            <p>
              The goal of the game is to have the highest score at the end. You get points from controlling ciites and having followers.
            </p>
            <p>
              The game ends after 12 rounds. A round is completed when all players have competed a turn.
              Remember to keep track of the round number and update it after the last player in the turn order finishes their turn.
            </p>
          </>} />

          <ContentSection sectionTitle="Cities" paragraphsJsx={<>
            <p>
              Convert cities to follow you in order to control them. Be aware, other players can steal your cities and you can steal theirs.
              It is easier to convert unclaimed cities that to do follow any player, than a city controlled by another.
            </p>
            <ul className="list-disc">Each city has a score proportional to their size:
              <li>Size-1 Cities (C1) are worth 10 points</li>
              <li>Size-2 Cities (C2) are worth 20 points</li>
              <li>Size-3 Cities (C3) are worth 30 points</li>
              <li>Size-4 Cities (C4) are worth 40 points</li>
            </ul>
            <p>
              Points are only awarded at the end of the game, so it only matters who is in control at the very end.
            </p>
          </>} />

          <ContentSection sectionTitle="Followers" paragraphsJsx={<>
            <p>
              Followers are represented by the tokens. At the beginning of the game, there are unclaimed followers in unclaimed cities.
              The first player to convert that city collects the followers from that city into their hand.
            </p>
            <p>
              Followers can be placed in a city that a player controls to give that city a defense bonus against other players that would try to convert the city.
            </p>
            <p>
              Followers that are in the player's hand (not defending any city) can give the player an offense bonus for converting other cities.
              They also can be sacrificed in order to use the god's Active Ability.
            </p>
          </>} />

          <div className="flex p-4 max-w-sm mx-auto mb-8 bg-white rounded-xl shadow-lg">
            <Link className="text-xl font-semibold text-center w-full" href="/HowToPlay">{"Next >"}</Link>
          </div>


        </div>
      </main>
    </>
  );
};

export default GameObjective;
