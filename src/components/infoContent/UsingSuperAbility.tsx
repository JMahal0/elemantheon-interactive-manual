import React from "react";
import Dropdown from "../Dropdown";

const UsingSuperAbility = () => {
    return (
        <Dropdown sectionTitle="Using a Super Ability" paragraphsJsx={<>
            <ul className="list-disc">
            <li>
                If you have at least 1 follower with you (not defending a city), you can choose to sacrifice (discard) 1 follower to perform your Super Ability
            </li>
            <li>
                Each god has a different Super Ability
            </li>
            </ul>
        </>} />
    );
}

export default UsingSuperAbility;