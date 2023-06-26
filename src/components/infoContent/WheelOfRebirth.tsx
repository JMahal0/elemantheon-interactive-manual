import React from "react";
import Dropdown from "../Dropdown";
import Image from "next/image";

const WheelOfRebirth = () => {
    return (
        <Dropdown sectionTitle="The Wheel of Rebirth" paragraphsJsx={<>
            <ul className="list-disc">
            <li>
                The Wheel of Rebirth is separate from the game map
                <Image width={250} height={250} alt="wheel of rebirth" src={"/images/wheel of rebirth.png"} />
            </li>
            <li>
                We use it to show how much Health each player has
            </li>
            <li>
                All Avatars start with 6 Health, so each player puts their heart piece on the 6 of the Wheel of Rebirth
            </li>
            <li>
                As Avatars lose Health during the game, move their heart pieces on the Wheel of Rebirth to show the new amount
            </li>
            <li>
                Notice how outer ring goes up to 12
            </li>
            <li>
                Move the turn counter piece along the outer ring to show which turn it is
            </li>
            </ul>
        </>} />
    );
}

export default WheelOfRebirth;