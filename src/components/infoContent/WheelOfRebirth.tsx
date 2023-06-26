import React from "react";
import Dropdown from "../Dropdown";

const WheelOfRebirth = () => {
    return (
        <Dropdown sectionTitle="The Wheel of Rebirth" paragraphsJsx={<>
            <ul className="list-disc">
            <li>
                The Wheel of Rebirth is separate from the game map
                {/* // image of Wheel of rebirth */}
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
            </ul>
        </>} />
    );
}

export default WheelOfRebirth;