import React from "react";
import Dropdown from "../Dropdown";

const ConvertingUnclaimedCity = () => {
    return (
        <Dropdown sectionTitle="Converting an Unclaimed City" paragraphsJsx={<>
            <ul className="list-disc">
            <li>
                Roll a 6 sided die (D6) and add your follower converting bonus to get the total offense number
            </li>
            <li>
                If the total offense number is bigger than the city defense, then you successfully converted the city
            </li>
            <li>
                If there is a tie or the city defense is higher, then you fail and lose 1 Health
            </li>
            <li>
                If you die from failing to convert, just take your Avatar off the map and wait to reincarnate on your next turn
            </li>
            </ul>
        </>} />
    );
}

export default ConvertingUnclaimedCity;