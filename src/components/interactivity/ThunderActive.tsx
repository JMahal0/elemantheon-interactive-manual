import React, { useState} from "react";
import Image from "next/image";

const ThunderActive = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState<HTMLElement | null>(null);
    const [characterLocation, setCharacterLocation] = useState({x: 0, y: 1});
    
    const [isWarningVisible, setIsWarningVisible] = useState(false);
    const [warningContent, setWarningContent] = useState("You can't reach there from where you started");
    
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

    const unReachableLocations = [
        [[{x: 0, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}], [{x: 0, y: 2}, {x: 2, y: 2}], [{x: 0, y: 2}, {x: 2, y: 2}], [{x: 0, y: 2}, {x: 2, y: 2}, {x: 1, y: 2}]],
        [[{x: 3, y: 1}, {x: 2, y: 2}, {x: 3, y: 2}], [{x: 0, y: 2}, {x: 2, y: 2}], [{x: 0, y: 2}], [{x: 0, y: 1}, {x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}]],
        [[{x: 3, y: 0}, {x: 2, y: 1}, {x: 3, y: 1}, {x: 2, y: 2}, {x: 3, y: 2}], [{x: 3, y: 0}, {x: 3, y: 1}, {x: 3, y: 2}], [{x: 0, y: 0}, {x: 0, y: 2}], [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 0, y: 2}, {x: 1, y: 2}]]
    ];

    const onTileClick = (event: React.MouseEvent<HTMLDivElement>, x: number, y: number) => {
        if (!isSelected || !selectedCharacter) {
            return;
        }

        if (isEnemyVisible && x === 3 && y === 2) {
            setWarningContent("You can't stop movement on another player's location");
            setIsWarningVisible(true);
            return;
        }

        // logic dealing with speed costs
        if (unReachableLocations[characterLocation.y][characterLocation.x]?.some(point => point.x === x && point.y === y)) {
            setWarningContent("You can't reach there from where you started");
            setIsWarningVisible(true);
            return;
        }

        //move the dude
        const rect = event.currentTarget.getBoundingClientRect();
        let targetLocation = {
            x: 15 + 50*x,
            y: 15 + 50*y,
        };
        selectedCharacter.style.left = `${targetLocation.x}px`;
        selectedCharacter.style.top = `${targetLocation.y}px`;

        setIsSelected(false);
        setSelectedCharacter(null);
        setCharacterLocation({x, y});
        setIsWarningVisible(false);

        //if close enough, show the attack button
        if ((x === 1 && y === 1) || (x === 3 && y === 1) || (x === 2 && y === 0) || (x === 2 && y === 2)) {
            setIsAttackButtonVisible(true);
        } else {
            setIsAttackButtonVisible(false);
        }
    }

    const onPlayerClick = (event: React.MouseEvent<HTMLElement>) => {
        setSelectedCharacter(event.currentTarget);
        setIsSelected(true);
    }

    const onAttackClick = (event: React.MouseEvent<HTMLElement>) => {
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
            <div className="text-center font-semibold">As Thunder, practice attacking Air with your Active Ability</div>

            <div className="max-w-sm mx-auto my-2 p-1 bg-slate-800 rounded-lg relative">
                <div className="flex">
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} onClick={(e) => onTileClick(e, 0,0)} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} onClick={(e) => onTileClick(e, 1,0)} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} onClick={(e) => onTileClick(e, 2,0)} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} onClick={(e) => onTileClick(e, 3,0)} />
                </div>
                <div className="flex">
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} onClick={(e) => onTileClick(e, 0,1)} />
                    <Image width={50} height={50} alt="desert tile" src={"/images/desert tile.png"} onClick={(e) => onTileClick(e, 1,1)} />
                    <Image width={50} height={50} alt="desert tile" src={"/images/desert tile.png"} onClick={(e) => onTileClick(e, 2,1)} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} onClick={(e) => onTileClick(e, 3,1)} />
                </div>
                <div className="flex">
                    <Image width={50} height={50} alt="lake tile" src={"/images/lake tile.png"} onClick={(e) => onTileClick(e, 0,2)} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} onClick={(e) => onTileClick(e, 1,2)} />
                    <Image width={50} height={50} alt="lake tile" src={"/images/lake tile.png"} onClick={(e) => onTileClick(e, 2,2)} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} onClick={(e) => onTileClick(e, 3,2)} />
                </div>
                {isAttackButtonVisible && <button className="bg-amber-50 p-1 rounded-xl shadow-lg mt-1" onClick={onAttackClick}>Attack</button>}
                {isUseActiveButtonVisible && <button className="bg-amber-50 p-1 rounded-xl shadow-lg mt-1" onClick={onUseActiveAbilityClick}>Use Active Ability</button>}
                <div className="text-white">Thunder Health: 6</div>
                <div className="text-white">Thunder Followers: {followerNumber}</div>
                <div className="text-white">Air Health: {enemyHealth}</div>

                <Image width={20} height={20} alt="thunder icon" src={"/images/thunder icon.png"} className="absolute top-[65px] left-[15px] z-10" onClick={onPlayerClick} />
                {isEnemyVisible && <Image width={25} height={25} alt="air icon" src={"/images/air icon.png"} className="absolute top-[115px] left-[165px] z-10" />}
                {isWarningVisible && <div className="text-center text-red-500">{warningContent}</div>}
                <button className="bg-amber-50 p-1 rounded-xl shadow-lg mt-1" onClick={onResetClick}>Reset</button>
            </div>
        </>
    );

};

export default ThunderActive;