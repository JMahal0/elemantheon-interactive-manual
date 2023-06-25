import React from "react";
import Image from "next/image";
import Dropdown from "../Dropdown";
import Link from "next/link";

const ChoosingElementsBasics = () => {
    return (
        <Dropdown sectionTitle="Choosing Elements" paragraphsJsx={<>
            <ul className="list-disc">
            <li>
                There can be 2 to 6 players in a game
            </li>
            <li>
                Each player chooses who they want to play as:
            </li>
            <li className="flex">
                <span className="m-3">God of Fire </span>
                <Image width={50} height={50} alt="fire icon" src={"/images/fire icon.png"} />
            </li>
            <li className="flex">
                <span className="m-3">God of Water </span>
                <Image width={40} height={40} alt="water icon" src={"/images/water icon.png"} />
            </li>
            <li className="flex">
                <span className="m-3">God of Air </span>
                <Image width={40} height={40} alt="air icon" src={"/images/air icon.png"} />
            </li>
            <li className="flex">
                <span className="m-3">God of Land </span>
                <Image width={50} height={50} alt="land icon" src={"/images/land icon.png"} />
            </li>
            <li className="flex">
                <span className="m-3">God of Thunder </span>
                <Image width={30} height={30} alt="thunder icon" src={"/images/thunder icon.png"} />
            </li>
            <li className="flex">
                <span className="m-3">God of Metal </span>
                <Image width={50} height={50} alt="metal icon" src={"/images/metal icon.png"} />
            </li>
            <li>
                Different elements have different abilities that give them different advantages
                <Link className="text-blue-600 visited:text-purple-600" href="ElementInfo">{" Element Info >"}</Link>
            </li>
            <li>
                Take the Avatar piece, heart piece, and player spawn card that has your element icon
                {/* // add images of a spawn card (God of Fire's Player Spawn card) */}
            </li>
            <li>
                The God of Water player also gets the special Flood card
                {/* //Add image of the flood card */}
            </li>
            <li>
                The God of Metal player also gets the special Robot token
                {/* //Add image of the robot token */}
            </li>
            </ul>
        </>} />
    );
}

export default ChoosingElementsBasics;