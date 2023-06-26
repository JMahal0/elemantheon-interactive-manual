import React from "react";
import Image from "next/image";
import Dropdown from "../Dropdown";

const AttackingBasics = () => {
    return (
        <Dropdown sectionTitle="Attacking Another Avatar" paragraphsJsx={<>
            <ul className="list-disc">
            <li>
                If you are on a tile next to another player, you can attack the other Avatar to reduce their Health by 2.
            </li>
            <li>
                If the attacked Avatar&apos; falls below 1, this is a kill
            </li>
            <li>
                The killer God gains 2 followers and can steal either one city or one follower from the killed player
            </li>
            <li>
                The killed player removes their Avatar from the map and will reincarnate on the start of their next turn
            </li>
            </ul>
        </>} />
    );
}

export default AttackingBasics;