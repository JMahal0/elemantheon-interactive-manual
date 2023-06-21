import React, { useState} from "react";
import Image from "next/image";

const AirMovement = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState<HTMLElement | null>(null);
    const [characterLocation, setCharacterLocation] = useState({x: 0, y: 1});
    const [isWarningVisible, setIsWarningVisible] = useState(false);
    
    const unReachableLocations = [
        [[{x: 3, y: 2}], [], [], [{x: 0, y: 2}]],
        [[], [], [], []],
        [[{x: 3, y: 0}], [], [], [{x: 0, y: 0}]]
    ];

    const onTileClick = (event: React.MouseEvent<HTMLDivElement>, x: number, y: number) => {
        if (!isSelected || !selectedCharacter) {
            return;
        }

        // logic dealing with speed costs
        if (unReachableLocations[characterLocation.y][characterLocation.x]?.some(point => point.x === x && point.y === y)) {
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
    }

    const onPlayerClick = (event: React.MouseEvent<HTMLElement>) => {
        setSelectedCharacter(event.currentTarget);
        setIsSelected(true);
    }

    return (
        <>
            <div className="text-center font-semibold">Practice Moving as Air</div>
            <div>Click on Air and then click on the tile you want to move to.</div>

            <div className="max-w-sm mx-auto my-2 p-1 bg-slate-800 rounded-lg relative">
                <div className="flex">
                    <Image width={50} height={50} alt="lake tile" src={"/images/lake tile.png"} onClick={(e) => onTileClick(e, 0,0)} />
                    <Image width={50} height={50} alt="desert tile" src={"/images/desert tile.png"} onClick={(e) => onTileClick(e, 1,0)} />
                    <Image width={50} height={50} alt="desert tile" src={"/images/desert tile.png"} onClick={(e) => onTileClick(e, 2,0)} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} onClick={(e) => onTileClick(e, 3,0)} />
                </div>
                <div className="flex">
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} onClick={(e) => onTileClick(e, 0,1)} />
                    <Image width={50} height={50} alt="lake tile" src={"/images/lake tile.png"} onClick={(e) => onTileClick(e, 1,1)} />
                    <Image width={50} height={50} alt="desert tile" src={"/images/desert tile.png"} onClick={(e) => onTileClick(e, 2,1)} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} onClick={(e) => onTileClick(e, 3,1)} />
                </div>
                <div className="flex">
                    <Image width={50} height={50} alt="lake tile" src={"/images/lake tile.png"} onClick={(e) => onTileClick(e, 0,2)} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} onClick={(e) => onTileClick(e, 1,2)} />
                    <Image width={50} height={50} alt="lake tile" src={"/images/lake tile.png"} onClick={(e) => onTileClick(e, 2,2)} />
                    <Image width={50} height={50} alt="field tile" src={"/images/field tile.png"} onClick={(e) => onTileClick(e, 3,2)} />
                </div>

                <Image width={25} height={25} alt="air icon" src={"/images/air icon.png"} className="absolute top-[65px] left-[15px] z-10" onClick={onPlayerClick} />
                {isWarningVisible && <div className="text-center text-red-500">You can't reach there from where you started</div>}
            </div>
        </>
    );

};

export default AirMovement;