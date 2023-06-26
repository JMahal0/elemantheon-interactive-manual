import { type NextPage } from "next";
import HeadTag from "../components/HeadTag";
import NavBar from "~/components/NavBar";
import React from "react";
import ChoosingElementsBasics from "~/components/infoContent/ChoosingElementsBasics";
import TilesCardsBasics from "~/components/infoContent/TilesCardsBasics";
import MapSetupBasics from "~/components/infoContent/MapSetupBasics";
import WheelOfRebirth from "~/components/infoContent/WheelOfRebirth";


const GameSetup: NextPage = () => {

    return (
        <>
        <HeadTag />
        <NavBar />
        <main className="flex justify-center h-screen">
            <div className="h-full w-full">

                <div className="text-4xl text-center font-extrabold py-8">
                    Start and Setup
                </div>

                <ChoosingElementsBasics />
                <TilesCardsBasics />
                <MapSetupBasics />
                <WheelOfRebirth />

            </div>
        </main>
        </>
    );
};

export default GameSetup;
