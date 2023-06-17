import { type NextPage } from "next";
import HeadTag from "../components/HeadTag";
import ContentSection from "../components/ContentSection";
import Link from "next/link";
import NavBar from "~/components/NavBar";


const GameSetup: NextPage = () => {

  return (
    <>
      <HeadTag />
      <NavBar />
      <main className="flex justify-center h-screen">
        <div className="h-full w-full">

            <div className="text-4xl text-center font-extrabold py-8">
                Game Setup
            </div>

            <ContentSection sectionTitle="Choosing Elements" paragraphsJsx={<>
                <p>
                    First, all players roll the dice and the player with the highest number goes first.
                    (If there is a tie for first, the tied players re-roll until there is only one person with the highest number.)
                </p>
                <p>
                    Pick which element you will be the god of by taking their correspondng Player Spawn card and Avatar piece.
                </p>
                <p>
                    The person to left goes next, and this repeats until all have chosen their element. This will be the turn order of the game.
                </p>
                <p>
                    The God of Water gets the special Flood card and the God of Metal gets the special Robot token.
                    (If there is no God of Water or God of Metal, these go unused.)
                </p>
            </>} />

            <ContentSection sectionTitle="Map Setup" paragraphsJsx={<>
                <p>
                    Next, we will build the map out of the map cards. Each card has 4 tiles on the front.
                </p>
                <ul className="list-disc">There are 6 types of map cards:
                    <li>Player Spawn (PS)</li>
                    <li>Wilderness (W)</li>
                    <li>Size-1 City (C1)</li>
                    <li>Size-2 City (C2)</li>
                    <li>Size-3 City (C3)</li>
                    <li>Size-4 City (C4)</li>
                </ul>
                <p>
                    A 2-player game uses 17 W, 3 C1, 2 C2, 1 C3, and 2 PS cards.
                </p>
                2-player Map
                <table className="map-diagram">
                    <tbody>
                    <tr><td>PS</td><td>W</td><td>W</td><td>W</td><td>C2</td></tr>
                    <tr><td>W</td><td>W</td><td>W</td><td>C1</td><td>W</td></tr>
                    <tr><td>C1</td><td>W</td><td>C3</td><td>W</td><td>W</td></tr>
                    <tr><td>W</td><td>W</td><td>W</td><td>W</td><td>W</td></tr>
                    <tr><td>C2</td><td>W</td><td>C1</td><td>W</td><td>PS</td></tr>
                    </tbody>
                </table>

                <p>
                    A 3-player game uses 21 W, 4 C1, 3 C2, 1 C3, and 3 PS cards.
                </p>
                3-player Map
                <table className="map-diagram">
                    <tbody>
                    <tr><td className="empty-cell"></td><td>C1</td><td>PS</td><td>W</td><td>C1</td><td className="empty-cell"></td></tr>
                    <tr><td>W</td><td>W</td><td>W</td><td>W</td><td>W</td><td>W</td></tr>
                    <tr><td>W</td><td>C2</td><td>W</td><td>W</td><td>C2</td><td>W</td></tr>
                    <tr><td>W</td><td>W</td><td>W</td><td>C3</td><td>W</td><td>W</td></tr>
                    <tr><td>PS</td><td>W</td><td>C2</td><td>W</td><td>W</td><td>PS</td></tr>
                    <tr><td className="empty-cell"></td><td>C1</td><td>W</td><td>W</td><td>C1</td><td className="empty-cell"></td></tr>
                    </tbody>
                </table>

                <p>
                    A 4-player game uses 24 W, 4 C1, 3 C2, 2 C3, 1 C4, and 4 PS cards.
                </p>
                4-player Map
                <table className="map-diagram">
                    <tbody>
                    <tr><td className="empty-cell"></td><td>PS</td><td>W</td><td>C3</td><td>W</td><td>PS</td><td className="empty-cell"></td></tr>
                    <tr><td>C1</td><td>W</td><td>W</td><td>C2</td><td>W</td><td>W</td><td>C1</td></tr>
                    <tr><td>W</td><td>W</td><td>W</td><td>C4</td><td>W</td><td>W</td><td>W</td></tr>
                    <tr><td>W</td><td>C2</td><td>W</td><td>W</td><td>W</td><td>C2</td><td>W</td></tr>
                    <tr><td>C1</td><td>W</td><td>W</td><td>W</td><td>W</td><td>W</td><td>C1</td></tr>
                    <tr><td className="empty-cell"></td><td>PS</td><td>W</td><td>C3</td><td>W</td><td>PS</td><td className="empty-cell"></td></tr>
                    </tbody>
                </table>

                <p>
                    A 5-player game uses 28 W, 5 C1, 4 C2, 2 C3, 1 C4, and 5 PS cards.
                </p>
                5-player Map
                <table className="map-diagram">
                    <tbody>
                    <tr><td className="empty-cell"></td><td>C1</td><td>W</td><td>PS</td><td>W</td><td>C1</td><td className="empty-cell"></td></tr>
                    <tr><td>W</td><td>W</td><td>W</td><td>W</td><td>W</td><td>W</td><td>W</td></tr>
                    <tr><td>PS</td><td>W</td><td>C2</td><td>W</td><td>C2</td><td>W</td><td>PS</td></tr>
                    <tr><td>W</td><td>C3</td><td>W</td><td>C4</td><td>W</td><td>C3</td><td>W</td></tr>
                    <tr><td>W</td><td>W</td><td>C2</td><td>W</td><td>C2</td><td>W</td><td>W</td></tr>
                    <tr><td>C1</td><td>W</td><td>W</td><td>W</td><td>W</td><td>W</td><td>C1</td></tr>
                    <tr><td className="empty-cell"></td><td>PS</td><td>W</td><td>C1</td><td>W</td><td>PS</td><td className="empty-cell"></td></tr>
                    </tbody>
                </table>

                <p>
                    A 6-player game uses 32 W, 5 C1, 4 C2, 3 C3, 2 C4, and 6 PS cards.
                </p>
                6-player Map
                <table className="map-diagram">
                    <tbody>
                    <tr><td className="empty-cell"></td><td className="empty-cell"></td><td>C1</td><td>W</td><td>W</td><td>PS</td><td className="empty-cell"></td><td className="empty-cell"></td></tr>
                    <tr><td className="empty-cell"></td><td>PS</td><td>W</td><td>W</td><td>C2</td><td>W</td><td>C1</td><td className="empty-cell"></td></tr>
                    <tr><td>W</td><td>W</td><td>W</td><td>C3</td><td>W</td><td>W</td><td>W</td><td>PS</td></tr>
                    <tr><td>W</td><td>C2</td><td>W</td><td>W</td><td>C4</td><td>C3</td><td>W</td><td>W</td></tr>
                    <tr><td>C1</td><td>W</td><td>W</td><td>C4</td><td>W</td><td>W</td><td>C2</td><td>W</td></tr>
                    <tr><td>PS</td><td>W</td><td>C3</td><td>W</td><td>W</td><td>W</td><td>W</td><td>C1</td></tr>
                    <tr><td className="empty-cell"></td><td>W</td><td>W</td><td>C2</td><td>W</td><td>W</td><td>PS</td><td className="empty-cell"></td></tr>
                    <tr><td className="empty-cell"></td><td className="empty-cell"></td><td>PS</td><td>C1</td><td>W</td><td>W</td><td className="empty-cell"></td><td className="empty-cell"></td></tr>
                    </tbody>
                </table>

                <p>
                    First, place the wilderness and city cards. Each card can be rotated randomly.
                </p>
                <p>
                    Place 1 follower token on all size-1 cities and 2 follower tokens on all other cities.
                </p>
                <p>
                    Then, take turns placing your PS card in the remaining spaces in the map. You can place your spawn card in whichever rotation you like.
                </p>
                <p>
                    Finally, place your Avatar piece on your spawn tile, the tile that has your element icon.
                </p>
                <p>
                    All Avatars start with 6 Health so put all players&apos; heart pieces on the 6 on the Wheel of Rebirth.
                    As players get damaged and lose Health, move their heart pieces to the correct place on the Wheel of Rebirth.
                </p>

            </>} />

            <div className="flex p-4 max-w-sm mx-auto mb-8 bg-white rounded-xl shadow-lg">
                <Link className="text-xl font-semibold text-center w-full" href="/GameObjective">{"Next >"}</Link>
            </div>
        </div>
      </main>
    </>
  );
};

export default GameSetup;
