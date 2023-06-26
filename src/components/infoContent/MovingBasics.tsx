import React from "react";
import Image from "next/image";
import Dropdown from "../Dropdown";

const MovingBasics = () => {
    return (
        <Dropdown sectionTitle="Moving Basics" paragraphsJsx={<>
            <ul className="list-disc">
            <li>
                All gods have 4 Speed
            </li>
            <li>
                You can move to any tile that takes 4 or less Speed to get to from your current tile
            </li>
            <li>
                If a tile takes more than 4 Speed to reach then it will take more than 1 turn to get there
            </li>
            <li>
                Each tile has a number in an arrow and this is the cost to enter that tile
            </li>
            <li className="flex">
                <span className="m-3">Green tiles cost 1 Speed</span>
                <Image width={75} height={75} alt="field tile" src={"/images/field tile.png"} />
            </li>
            <li className="flex">
                <span className="m-3">Brown tiles cost 2 Speed</span>
                <Image width={75} height={75} alt="desert tile" src={"/images/desert tile.png"} />
            </li>
            <li className="flex">
                <span className="m-3">Blue tiles cost 4 Speed</span>
                <Image width={75} height={75} alt="lake tile" src={"/images/lake tile.png"} />
            </li>
            <li className="flex">
                <span className="m-3">Gray tiles cost 1 Speed</span>
                <Image width={75} height={75} alt="city1 tile" src={"/images/city1 tile.png"} />
            </li>
            <li>
                You can move through a tile that another player is on, but you cannot stop there
            </li>
            <li>
                You can move through another player&apos;s spawn tile, but you cannot stop there
            </li>
            <li>
                For example, the God of Fire can through 1 green and 1 brown tile to stop on a city tile because the total Speed cost of this path is 4.
                {/* // Need an image to descibe this */}
            </li>
            </ul>
        </>} />
    );
}

export default MovingBasics;