import React from "react";
import Dropdown from "../Dropdown";

const FollowerBonusBasics = () => {
    return (
        <Dropdown sectionTitle="Follower Bonuses" paragraphsJsx={<>
            <ul className="list-disc">
            <li>
                When you have followers, they are either defending one of your cities (they are on the city) or they are with you (not on the map)
            </li>
            <li>
                When you have followers with you, they make it easier to convert other cities
            </li>
            <li>
                1 follower with you gives +2 converting bonus
            </li>
            <li>
                2 followers with you give +4 converting bonus
            </li>
            <li>
                3 followers with you give +6 converting bonus
            </li>
            <li>
                The God of Thunder&apos;s Passive Ability gives a stronger converting bonus
            </li>
            <li>
                1 follower gives the God of Thunder +3 converting bonus
            </li>
            <li>
                2 followers give the God of Thunder +6 converting bonus
            </li>
            <li>
                The maximum converting bonus allowed is +6, even if you have more followers
            </li>
            <li>
                When you have followers in one of your cities, it makes that city harder for other players to convert
                {/* // FAQ Do the followers in unclaimed cities give defense bonuses? No. */}
            </li>
            <li>
                1 follower in a city gives that city +2 defense bonus
            </li>
            <li>
                2 followers in a city gives that city +4 defense bonus
            </li>
            <li>
                3 followers in a city gives that city +6 defense bonus
            </li>
            <li>
                The God of Metal&apos;s Passive Ability gives a stronger defense bonus
            </li>
            <li>
                1 follower gives the God of Metal&apos;s city +3 defense bonus
            </li>
            <li>
                2 followers give the God of Metal&apos;s city +6 defense bonus
            </li>
            <li>
                The maximum defense bonus allowed is +6, even if you have more followers
            </li>
            
            </ul>
        </>} />
    );
}

export default FollowerBonusBasics;