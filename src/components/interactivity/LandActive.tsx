import React, { useState} from "react";
import Image from "next/image";

const LandActive = () => {
    const [isUseActiveButtonVisible, setIsUseActiveButtonVisible] = useState(true);
    const [followerNumber, setFollowerNumber] = useState(1);
    const [isSwapActive, setIsSwapActive] = useState(false);

    const onUseActiveAbilityClick = () => {
        setFollowerNumber(followerNumber - 1);
        if (followerNumber - 1 == 0) {
            setIsUseActiveButtonVisible(false);
            setIsSwapActive(true);
        }
    }

    const onResetClick = () => {
        setIsUseActiveButtonVisible(true);
        setFollowerNumber(1);
        setIsSwapActive(false);
    }

    return (
        <>
            <div className="text-center font-semibold">Divine Tectonics Demo</div>
            <div>Click the Use Active Ability button to see how two map cards are swapped</div>
            <div>In this demo, the cards the top-left and top-right cards are swapped and then the top-right card is rotated 180 degrees</div>
            <div>In the game, you can swap any 2 cards and rotate them any way you like.</div>
            <div>Notice how the number of followers decreases and that you need a follwer to use the Active Ability.</div>
            <div>You can click the Reset button to restart the demo.</div>

            <div className="max-w-sm mx-auto my-2 p-1 bg-slate-800 rounded-lg relative">
                <div className="flex">
                    {!isSwapActive && <>
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                    </>}
                    {isSwapActive && <>
                    <Image width={50} height={50} alt="lake tile" src={"/images/lake tile.png"} />
                    <Image width={50} height={50} alt="desert tile" src={"/images/desert tile.png"} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                    </>}                    
                </div>
                <div className="flex">
                    {!isSwapActive && <>
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                    <Image width={50} height={50} alt="desert tile" src={"/images/desert tile.png"} />
                    <Image width={50} height={50} alt="desert tile" src={"/images/desert tile.png"} />
                    <Image width={50} height={50} alt="lake tile" src={"/images/lake tile.png"} />
                    </>}
                    {isSwapActive && <>
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                    <Image width={50} height={50} alt="desert tile" src={"/images/desert tile.png"} />
                    </>}                    
                </div>
                <div className="flex">
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                    <Image width={50} height={50} alt="lake tile" src={"/images/lake tile.png"} />
                    <Image width={50} height={50} alt="lake tile" src={"/images/lake tile.png"} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                </div>
                {isUseActiveButtonVisible && <button className="bg-amber-50 p-1 rounded-xl shadow-lg mt-1" onClick={onUseActiveAbilityClick}>Use Active Ability</button>}
                <div className="text-white">Land Health: 6</div>
                <div className="text-white">Land Followers: {followerNumber}</div>

                {!isSwapActive && <Image width={20} height={20} alt="land icon" src={"/images/land icon.png"} className="absolute top-[65px] left-[115px] z-10" />}
                {isSwapActive && <Image width={20} height={20} alt="land icon" src={"/images/land icon.png"} className="absolute top-[15px] left-[65px] z-10" />}
                <button className="bg-amber-50 p-1 rounded-xl shadow-lg mt-1" onClick={onResetClick}>Reset</button>
            </div>
        </>
    );

};

export default LandActive;