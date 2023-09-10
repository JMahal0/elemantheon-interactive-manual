import React from "react";
import Dropdown from "../Dropdown";

const OnYourTurnBasics = () => {
    return (
        <Dropdown sectionTitle="What to do on your Turn" paragraphsJsx={<>
            <ul className="list-disc">
            <p>
                On your turn you can do many things:
            </p>

            <li>
                You can move your Avatar on the map 
                {/* //FAQ Do I have to move? No. If you don't want to move, that is fine. */}
                {/* //FAQ Can I move before or after doing actions? Either, and then more details */}
            </li>
            <li>
                If you are standing on a city that you do not control, you can try to convert that city
            </li>
            <li>
                If you are standing next to another Avatar, you can attack them
                {/* // FAQ Can you attack diagonally? No. They have to be 1 space left or right or up or down from you */}
            </li>
            <li>
                If you have 1 or more followers with you, you can discard (sacrifice) 1 follower to perform your Super Ability
                {/* // FAQ Who gets the follower you discard when do your Super Ability? Nobody. It goes to the pile of unused follower tokens */}
            </li>
            <li>
                You have to choose between trying to convert a city, attacking another Avatar, or using your Super Ability.
                 You can only do 1 of these 3 actions per turn. The only exception is that Fire can use their Super Ability while they try to convert a city.
            </li>
            <li>
                If you are standing on a city that you control, you can put your followers on that city to defend it from other players
                {/* // FAQ Can you put defenders on any city you own or just the one you are standing in? Just the city you are standing in  */}
            </li>
            <li>
                If your Avatar had died before your current turn, then you start the turn by reincarnating and putting your Avatar piece back on the map
            </li>
            </ul>
        </>} />
    );
}

export default OnYourTurnBasics;