import React from "react";
import Image from "next/image";
import Dropdown from "../Dropdown";

const ConvertingBasics = () => {
    return (
        <Dropdown sectionTitle="Converting Basics" paragraphsJsx={<>
            <ul className="list-disc">
            <li>
                If you are on a city tile that you do not control, then you can try to convert it to follow you
            </li>
            <li>
                You get points from the cities you control at the very end of the game
            </li>
            <li>
                Each city has a number inside a shield
            </li>
            <li>
                This is the defense value of the city
            </li>
            <li>
                Each size-1 city has 2 defense
                <Image width={75} height={75} alt="size 1 city tile" src={"/images/city1 tile.png"} />
            </li>
            <li>
                Each size-2 city has 4 defense
                <Image width={150} height={75} alt="size 2 city tile" src={"/images/city2 tile.png"} />
            </li>
            <li>
                Each size-3 city has 6 defense
                <Image width={150} height={150} alt="size 3 city tile" src={"/images/city3 tile.png"} />
            </li>
            <li>
                Each size-4 city has 8 defense
                <Image width={150} height={150} alt="size 4 city tile" src={"/images/city4 tile.png"} />
            </li>
            </ul>
        </>} />
    );
}

export default ConvertingBasics;