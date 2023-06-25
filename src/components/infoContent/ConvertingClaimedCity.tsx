import React from "react";
import Dropdown from "../Dropdown";

const ConvertingClaimedCity = () => {
    return (
        <Dropdown sectionTitle="Converting a Claimed City" paragraphsJsx={<>
            <ul className="list-disc">
            <li>
                Roll a 6 sided die (D6) and add your follower converting bonus to get the total offense number
            </li>
            <li>
                Next, the player that currently owns the city rolls a D6
            </li>
            <li>
                Add the defender&apos;s D6 value and city defense and follower defense bonus to get the total defense number
            </li>
            <li>
                If the total offense number is bigger than the total defense, then you successfully converted the city and the defending followers go back to the defending player
            </li>
            <li>
                If there is a tie or the total defense is higher, then you fail and lose 1 Health
            </li>
            <li>
                If you die from failing to convert, just take your Avatar off the map and wait to reincarnate on your next turn
            </li>
            </ul>
        </>} />
    );
}

export default ConvertingClaimedCity;