import React from "react";
import Dropdown from "../Dropdown";

const TurnOrder = () => {
    return (
        <Dropdown sectionTitle="Turn Order" paragraphsJsx={<>
            <ul className="list-disc">
                <li>
                    First, you will determine the turn order for choosing elements and setting up the map
                </li>
                <li>
                    All players roll the die and the player that gets the highest number goes first during the setup
                </li>
                <li>
                    If there is a tie, have the tied players roll to get the highest amongst themselves until there is only one with the highest number
                </li>
                <li>
                    Go counter-clockwise for the next player until all players have had a turn
                </li>

                <li>
                    After setup is finished, the turn order for playing the game is the reverse of the setup turn order
                </li>
                <li>
                    Ex: The first player to choose their element has the last turn during the game, the second player to choose has the second to last turn during the game, etc.
                </li>
            </ul>
        </>} />
    );
};

export default TurnOrder;