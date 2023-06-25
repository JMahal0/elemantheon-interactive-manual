import React from "react";
import Dropdown from "../Dropdown";

const PlacingCollectingDefenders = () => {
    return (
        <Dropdown sectionTitle="Placing Defenders" paragraphsJsx={<>
            <ul className="list-disc">
            <li>
                If you are on a city that you control or on your spawn tile, you can place followers into that city or collect followers from that city back to be with you
            </li>
            <li>
                Placing followers as defenders in a city gives the city a defense bonus when other players try to convert it.
            </li>
            <li>
                Each defender gives a +2 defense bonus
            </li>
            <li>
                For the God of Metal, each defender gives a +3 defense bonus
            </li>
            <li>
                The maximum allowed defense bonus is +6
            </li>
            </ul>
        </>} />
    );
}

export default PlacingCollectingDefenders;