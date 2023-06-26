import React, { useState } from "react";
import Dropdown from "../Dropdown";
import Image from "next/image";

const MapSetupBasics = () => {
    const [numPlayers, setNumPlayers] = useState("");
    const handleNumPlayersChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setNumPlayers(event.target.value);
    }

    return (
        <Dropdown sectionTitle="Map Setup" paragraphsJsx={<>
            <ul className="list-disc">
            <li>
                The map is different depending on the number of players
            </li>

            <p>How many players do you have?
            <select className="ml-2 p-1 rounded-lg" value={numPlayers} onChange={handleNumPlayersChange}>
                <option value="">Pick an option</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            </p>

            {numPlayers === '2' &&
            <>
                <p>
                    Get 17 W, 3 C1, 2 C2, 1 C3, and 2 PS cards and arrange them link this
                </p>
                <table className="map-diagram mx-auto">
                    <tbody>
                    <tr><td>PS</td><td>W</td><td>W</td><td>W</td><td>C2</td></tr>
                    <tr><td>W</td><td>W</td><td>W</td><td>C1</td><td>W</td></tr>
                    <tr><td>C1</td><td>W</td><td>C3</td><td>W</td><td>W</td></tr>
                    <tr><td>W</td><td>W</td><td>W</td><td>W</td><td>W</td></tr>
                    <tr><td>C2</td><td>W</td><td>C1</td><td>W</td><td>PS</td></tr>
                    </tbody>
                </table>
            </>
            }

            {numPlayers === '3' &&
            <>
                <p>
                    Get 21 W, 4 C1, 3 C2, 1 C3, and 3 PS cards and arrange them link this
                </p>
                <table className="map-diagram mx-auto">
                    <tbody>
                    <tr><td className="empty-cell"></td><td>C1</td><td>PS</td><td>W</td><td>C1</td><td className="empty-cell"></td></tr>
                    <tr><td>W</td><td>W</td><td>W</td><td>W</td><td>W</td><td>W</td></tr>
                    <tr><td>W</td><td>C2</td><td>W</td><td>W</td><td>C2</td><td>W</td></tr>
                    <tr><td>W</td><td>W</td><td>W</td><td>C3</td><td>W</td><td>W</td></tr>
                    <tr><td>PS</td><td>W</td><td>C2</td><td>W</td><td>W</td><td>PS</td></tr>
                    <tr><td className="empty-cell"></td><td>C1</td><td>W</td><td>W</td><td>C1</td><td className="empty-cell"></td></tr>
                    </tbody>
                </table>
            </>
            }

            {numPlayers === '4' &&
            <>
                <p>
                    Get 24 W, 4 C1, 3 C2, 2 C3, 1 C4, and 4 PS cards and arrange them like this
                </p>
                <table className="map-diagram mx-auto">
                    <tbody>
                    <tr><td className="empty-cell"></td><td>PS</td><td>W</td><td>C3</td><td>W</td><td>PS</td><td className="empty-cell"></td></tr>
                    <tr><td>C1</td><td>W</td><td>W</td><td>C2</td><td>W</td><td>W</td><td>C1</td></tr>
                    <tr><td>W</td><td>W</td><td>W</td><td>C4</td><td>W</td><td>W</td><td>W</td></tr>
                    <tr><td>W</td><td>C2</td><td>W</td><td>W</td><td>W</td><td>C2</td><td>W</td></tr>
                    <tr><td>C1</td><td>W</td><td>W</td><td>W</td><td>W</td><td>W</td><td>C1</td></tr>
                    <tr><td className="empty-cell"></td><td>PS</td><td>W</td><td>C3</td><td>W</td><td>PS</td><td className="empty-cell"></td></tr>
                    </tbody>
                </table>
            </>
            }

            {numPlayers === '5' &&
            <>
                <p>
                    Get 28 W, 5 C1, 4 C2, 2 C3, 1 C4, and 5 PS cards and arrange them link this
                </p>
                <table className="map-diagram mx-auto">
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
            </>
            }

            {numPlayers === '6' &&
            <>
                <p>
                    Get 32 W, 5 C1, 4 C2, 3 C3, 2 C4, and 6 PS cards and arrange them like this
                </p>
                <table className="map-diagram mx-auto">
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
            </>
            }
            {numPlayers !== "" && <>
                <li>
                    Put the W cards and city cards down first
                </li>
                <li>
                    Put 1 follower token on all the size-1 cities and 2 follower on all the other cities
                </li>
                <li>
                    Then take turns placing your spawn card on the remaining spaces in the map
                    {/* // FAQ How do we decide who goes first? Everyone rolls the dice and the person that rolls the highest goes first. If there is tie, then the youngest in the tie goes first. Then go clockwise for the next person until everyone has a turn. */}
                </li>
                <li>
                    Finally, put your Avatar piece on your spawn card on the tile that has your element icon
                    {/* //add an image of the spawn tile (God of Air's starting tile) */}
                </li>
                <li>
                    ex: God of Air&apos;s Spawn tile
                    <Image width={75} height={75} alt="spawn tile" src={"/images/spawn tile.png"} />
                </li>

            </> }
            </ul>
        </>}/>
    );
};

export default MapSetupBasics;