import React from "react";
import Image from "next/image";
import Dropdown from "../Dropdown";

const HowToWinBasics = () => {
    return (
        <Dropdown sectionTitle="Points and Winning" paragraphsJsx={<>
            <ul className="list-disc">
            <li>
                You win by having the most points after everyone has finished 12 turns
            </li>
            <li>
                You get points from controlling cities and followers
            </li>
            <li>
                Each city with 1 gray tile (size-1 city) is worth 10 points
                <Image width={75} height={75} alt="size 1 city tile" src={"/images/city1 tile.png"} />
            </li>
            <li>
                Each city with 2 gray tiles (size-2 city) is worth 20 points
                <Image width={150} height={75} alt="size 2 city tile" src={"/images/city2 tile.png"} />
            </li>
            <li>
                Each city with 3 gray tiles (size-3 city) is worth 30 points
                <Image width={150} height={150} alt="size 3 city tile" src={"/images/city3 tile.png"} />
            </li>
            <li>
                Each city with 4 gray tiles (size-4 city) is worth 40 points
                <Image width={150} height={150} alt="size 4 city tile" src={"/images/city4 tile.png"} />
            </li>
            <li>
                Each follower (yellow token) is worth 1 point
            </li>
            </ul>
        </>} />
    );
};

export default HowToWinBasics;