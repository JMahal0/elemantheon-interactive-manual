import React, { useState} from "react";
import Image from "next/image";

const ThunderActive = () => {
    const [isAttackButtonVisible, setIsAttackButtonVisible] = useState(false);
    const [enemyHealth, setEnemyHealth] = useState(6);
    const [isEnemyVisible, setIsEnemyVisible] = useState(true);

    const [isUseActiveButtonVisible, setIsUseActiveButtonVisible] = useState(true);
    const [followerNumber, setFollowerNumber] = useState(2);

    const onResetClick = () => {
        if (typeof window !== 'undefined') {
            window.location.reload();
        }
    }

    const onAttackClick = () => {
        setEnemyHealth(enemyHealth - 2);
        if (enemyHealth - 2 <= 0) {
            setIsEnemyVisible(false);
            setIsAttackButtonVisible(false);
        }
    }

    const onUseActiveAbilityClick = () => {
        setFollowerNumber(followerNumber - 1);
        setEnemyHealth(enemyHealth - 1);
        if (followerNumber - 1 == 0) {
            setIsUseActiveButtonVisible(false);
        }
        if (enemyHealth - 1 <= 0) {
            setIsEnemyVisible(false);
            setIsAttackButtonVisible(false);
        }

    }

    return (
        <>
            <div className="text-center font-semibold">Thunderstruck Demo</div>
            <div>Click the Use Active Ability button to damage Air for 1 Health</div>
            <div>Notice how you can use the Active Ability regardless of how far away you are from the target</div>
            <div>Notice how the number of followers decreases and that you need a follower to use the Active Ability.</div>
            <div>You can click the Reset button to restart the demo.</div>
            <div>In the game you can only use your Active Ability once per turn, but this demo lets you see multiple.</div>

            <div className="max-w-sm mx-auto my-2 p-1 bg-slate-800 rounded-lg relative">
                <div className="flex">
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                </div>
                <div className="flex">
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                    <Image width={50} height={50} alt="desert tile" src={"/images/desert tile.png"} />
                    <Image width={50} height={50} alt="desert tile" src={"/images/desert tile.png"} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                </div>
                <div className="flex">
                    <Image width={50} height={50} alt="lake tile" src={"/images/lake tile.png"} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                    <Image width={50} height={50} alt="lake tile" src={"/images/lake tile.png"} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} />
                </div>
                {isAttackButtonVisible && <button className="bg-amber-50 p-1 rounded-xl shadow-lg mt-1" onClick={onAttackClick}>Attack</button>}
                {isUseActiveButtonVisible && <button className="bg-amber-50 p-1 rounded-xl shadow-lg mt-1" onClick={onUseActiveAbilityClick}>Use Active Ability</button>}
                <div className="text-white">Thunder Health: 6</div>
                <div className="text-white">Thunder Followers: {followerNumber}</div>
                <div className="text-white">Air Health: {enemyHealth}</div>

                <Image width={20} height={20} alt="thunder icon" src={"/images/thunder icon.png"} className="absolute top-[65px] left-[15px] z-10" />
                {isEnemyVisible && <Image width={25} height={25} alt="air icon" src={"/images/air icon.png"} className="absolute top-[115px] left-[165px] z-10" />}
                <button className="bg-amber-50 p-1 rounded-xl shadow-lg mt-1" onClick={onResetClick}>Reset</button>
            </div>
        </>
    );

};

export default ThunderActive;