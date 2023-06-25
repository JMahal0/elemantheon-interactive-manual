import React from "react";
import Dropdown from "../Dropdown";

const SpecialMovement = () => {
    return (
        <Dropdown sectionTitle="Special Movement Abilities" paragraphsJsx={<>
            <ul className="list-disc">
            <li>
                The Gods of Water, Air, and Land have Passive Abilities that change Speed costs
            </li>
            <li>
                For Water, blue lake tiles cost 1 Speed
                {/* // Need an image to descibe this */}
            </li>
            <li>
                For Land, brown desert tiles cost 1 Speed
                {/* // Need an image to descibe this */}
            </li>
            <li>
                For Air, all tiles cost 1 Speed
                {/* // Need an image to descibe this */}
            </li>
            </ul>
        </>} />
    );
}

export default SpecialMovement;