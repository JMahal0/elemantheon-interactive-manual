import React from "react";
import Image from "next/image";
import Dropdown from "../Dropdown";

const TilesCardsBasics = () => {
    return (
        <Dropdown sectionTitle="Tiles and Cards" paragraphsJsx={<>
            <ul className="list-disc">
            <li>
                The game&apos;s map is made of cards
            </li>
            <li>
                Each card has 4 tiles on the front
            </li>
            <li>
                There are 4 types of tiles
            </li>
            <li className="flex">
                <span className="m-3">Green (grasslands)</span>
                <Image width={75} height={75} alt="field tile" src={"/images/field tile.png"} />
            </li>
            <li className="flex">
                <span className="m-3">Brown (deserts)</span>
                <Image width={75} height={75} alt="desert tile" src={"/images/desert tile.png"} />
            </li>
            <li className="flex">
                <span className="m-3">Blue (lakes)</span>
                <Image width={75} height={75} alt="lake tile" src={"/images/lake tile.png"} />
            </li>
            <li className="flex">
                <span className="m-3">Gray (cities)</span>
                <Image width={75} height={75} alt="city1 tile" src={"/images/city1 tile.png"} />
            </li>
            <li>
                There are 6 types of cards
            </li>
            <li>
                Player Spawn (PS) cards have an element icon
                <Image width={150} height={150} alt="spawn card" src={"/images/spawn card.png"} />
            </li>
            <li>
                City 1 (C1) cards have 1 gray city tile
                <Image width={150} height={150} alt="size 1 city card" src={"/images/city1 card.png"} />
            </li>
            <li>
                City 2 (C2) cards have 2 gray city tiles
                <Image width={150} height={150} alt="size 2 city card" src={"/images/city2 card.png"} />
            </li>
            <li>
                City 3 (C3) cards have 3 gray city tiles
                <Image width={150} height={150} alt="size 3 city card" src={"/images/city3 card.png"} />
            </li>
            <li>
                City 4 (C4) cards have 4 gray city tiles
                <Image width={150} height={150} alt="size 4 city card" src={"/images/city4 tile.png"} />
            </li>
            <li>
                The rest are Wilderness (W) cards. They do not have any gray city tiles or element icons
                <Image width={150} height={150} alt="wilderness card" src={"/images/wilderness card.png"} />
            </li>


            </ul>
        </>} />
    );
}

export default TilesCardsBasics;