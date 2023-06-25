import React from "react";
import Dropdown from "../Dropdown";

const DyingReincarnating = () => {
    return (
        <Dropdown sectionTitle="Dying and Reincarnating" paragraphsJsx={<>
            <ul className="list-disc">
            <li>
                If your Avatar&apos;s Health goes below 1, they die and you take the Avatar piece off the map
            </li>
            <li>
                At the start of your next turn, your God reincarnates and you put your Avatar piece back on the map
            </li>
            <li>
                You can choose to place your Avatar on your spawn tile or on any city tile that you control
            </li>
            </ul>
        </>} />
    );
}

export default DyingReincarnating;