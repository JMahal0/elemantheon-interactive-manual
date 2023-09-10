import React, { useState } from "react";
import Dropdown from "../Dropdown";

const GettingFollowers = () => {
    const [numPlayers, setNumPlayers] = useState("");
    const handleNumPlayersChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setNumPlayers(event.target.value);
    }

    return (
        <Dropdown sectionTitle="Spawning Followers" paragraphsJsx={<>
            <ul className="list-disc">
                <li>
                    A certain number of followers spawn on to the map at the start of turn 2, 5, 8, & 11
                </li>
                <li>
                    These followers join the first God that walks on the tile they spawn on
                </li>
                <li>
                    They do not move if unclaimed and multiple can be on the same tile if 
                </li>
                <p>
                    Select how many players you have to see the map of where the followers spawn
                </p>
                <select className="ml-2 p-1 rounded-lg" value={numPlayers} onChange={handleNumPlayersChange}>
                    <option value="">Pick an option</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>

                {numPlayers !== '' && <>
                <li>
                    Place a follower on each card where an F is.
                </li>
                <li>
                    Roll the dice to see which tile within the card the follower spawns on. 1 is top left, 2 is top right, 3 is bottom left, 4 is bottom right, reroll a 5 or 6.
                </li>
                </>
                }

                {numPlayers === '2' &&
                <>
                    <table className="map-diagram mx-auto">
                        <tbody>
                        <tr><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td>F</td><td className="invisible">no</td></tr>
                        <tr><td className="invisible">no</td><td>F</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td></tr>
                        <tr><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td></tr>
                        <tr><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td>F</td><td className="invisible">no</td></tr>
                        <tr><td className="invisible">no</td><td>F</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td></tr>
                        </tbody>
                    </table>
                </>
                }

                {numPlayers === '3' &&
                <>
                    <table className="map-diagram mx-auto">
                        <tbody>
                        <tr><td className="empty-cell"></td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="empty-cell"></td></tr>
                        <tr><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="visible">F</td><td className="invisible">no</td><td className="invisible">no</td></tr>
                        <tr><td className="visible">F</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="visible">F</td></tr>
                        <tr><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td></tr>
                        <tr><td className="invisible">no</td><td className="visible">F</td><td className="invisible">no</td><td className="invisible">no</td><td className="visible">F</td><td className="invisible">no</td></tr>
                        <tr><td className="empty-cell"></td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="empty-cell"></td></tr>
                        </tbody>
                    </table>
                </>
                }

                {numPlayers === '4' &&
                <>
                    <table className="map-diagram mx-auto">
                        <tbody>
                        <tr><td className="empty-cell"></td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="empty-cell"></td></tr>
                        <tr><td className="invisible">no</td><td className="invisible">no</td><td className="visible">F</td><td className="invisible">no</td><td className="visible">F</td><td className="invisible">no</td><td className="invisible">no</td></tr>
                        <tr><td className="visible">F</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td></tr>
                        <tr><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="visible">F</td></tr>
                        <tr><td className="invisible">no</td><td className="invisible">no</td><td className="visible">F</td><td className="invisible">no</td><td className="visible">F</td><td className="invisible">no</td><td className="invisible">no</td></tr>
                        <tr><td className="empty-cell"></td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="empty-cell"></td></tr>
                        </tbody>
                    </table>
                </>
                }

                {numPlayers === '5' &&
                <>
                    <table className="map-diagram mx-auto">
                        <tbody>
                        <tr><td className="empty-cell"></td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="visible">F</td><td className="invisible">no</td><td className="empty-cell"></td></tr>
                        <tr><td className="invisible">no</td><td className="visible">F</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td></tr>
                        <tr><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="visible">F</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td></tr>
                        <tr><td className="visible">F</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td></tr>
                        <tr><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="visible">F</td></tr>
                        <tr><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="visible">F</td><td className="invisible">no</td></tr>
                        <tr><td className="empty-cell"></td><td className="invisible">no</td><td className="visible">F</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="empty-cell"></td></tr>
                        </tbody>
                    </table>
                </>
                }

                {numPlayers === '6' &&
                <>
                    <table className="map-diagram mx-auto">
                        <tbody>
                        <tr><td className="empty-cell"></td><td className="empty-cell"></td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="empty-cell"></td><td className="empty-cell"></td></tr>
                        <tr><td className="empty-cell"></td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="visible">F</td><td className="invisible">no</td><td className="empty-cell"></td></tr>
                        <tr><td className="invisible">no</td><td className="invisible">no</td><td className="visible">F</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="visible">F</td><td className="invisible">no</td></tr>
                        <tr><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="visible">F</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td></tr>
                        <tr><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="visible">F</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td></tr>
                        <tr><td className="invisible">no</td><td className="visible">F</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="visible">F</td><td className="invisible">no</td><td className="invisible">no</td></tr>
                        <tr><td className="empty-cell"></td><td className="invisible">no</td><td className="visible">F</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="empty-cell"></td></tr>
                        <tr><td className="empty-cell"></td><td className="empty-cell"></td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="invisible">no</td><td className="empty-cell"></td><td className="empty-cell"></td></tr>
                        </tbody>
                    </table>
                </>
                }

            </ul>
        </>} />
    );
};

export default GettingFollowers;