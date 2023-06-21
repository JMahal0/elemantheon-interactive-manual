import React, { useState} from "react";
import Image from "next/image";

const WaterActive = () => {
    const [isUseActiveButtonVisible, setIsUseActiveButtonVisible] = useState(true);
    const [isRemoveFloodButtonVisible, setIsRemoveFloodButtonVisible] = useState(false);
    const [followerNumber, setFollowerNumber] = useState(1);
    const [isFloodActive, setIsFloodActive] = useState(false);

    const onUseActiveAbilityClick = () => {
        setFollowerNumber(followerNumber - 1);
        if (followerNumber - 1 == 0) {
            setIsUseActiveButtonVisible(false);
            setIsFloodActive(true);
            setIsRemoveFloodButtonVisible(true);
        }
    }

    const onRemoveFloodClick = () => {
        setIsFloodActive(false);
        setIsRemoveFloodButtonVisible(false);
    }

    const onResetClick = () => {
        setIsUseActiveButtonVisible(true);
        setIsRemoveFloodButtonVisible(false);
        setFollowerNumber(1);
        setIsFloodActive(false);
    }

    return (
        <>
            <div className="text-center font-semibold">As Water, practice placing and removing the Flood</div>
            <div>In this demo, the flood will cover the top-right card. In the game, you can cover any card.</div>

            <div className="max-w-sm mx-auto my-2 p-1 bg-slate-800 rounded-lg relative">
                <div className="flex">
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                    {!isFloodActive && <>
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                    </>}
                    {isFloodActive && <>
                    <Image width={50} height={50} alt="lake tile" src={"/images/lake tile.png"} />
                    <Image width={50} height={50} alt="lake tile" src={"/images/lake tile.png"} />
                    </>}                    
                </div>
                <div className="flex">
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                    <Image width={50} height={50} alt="desert tile" src={"/images/desert tile.png"} />
                    {!isFloodActive && <>
                    <Image width={50} height={50} alt="desert tile" src={"/images/desert tile.png"} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                    </>}
                    {isFloodActive && <>
                    <Image width={50} height={50} alt="lake tile" src={"/images/lake tile.png"} />
                    <Image width={50} height={50} alt="lake tile" src={"/images/lake tile.png"} />
                    </>}                    
                </div>
                <div className="flex">
                    <Image width={50} height={50} alt="lake tile" src={"/images/lake tile.png"} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                    <Image width={50} height={50} alt="lake tile" src={"/images/lake tile.png"} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                </div>
                {isUseActiveButtonVisible && <button className="bg-amber-50 p-1 rounded-xl shadow-lg mt-1" onClick={onUseActiveAbilityClick}>Use Active Ability</button>}
                {isRemoveFloodButtonVisible && <button className="bg-amber-50 p-1 rounded-xl shadow-lg mt-1" onClick={onRemoveFloodClick}>Remove Flood</button>}
                <div className="text-white">Water Health: 6</div>
                <div className="text-white">Water Followers: {followerNumber}</div>

                <Image width={20} height={20} alt="water icon" src={"/images/water icon.png"} className="absolute top-[65px] left-[15px] z-10" />
                <button className="bg-amber-50 p-1 rounded-xl shadow-lg mt-1" onClick={onResetClick}>Reset</button>
            </div>
        </>
    );

};

export default WaterActive;