import { type NextPage } from "next";
import HeadTag from "../components/HeadTag";
import NavBar from "~/components/NavBar";
import React from "react";
import ChoosingElementsBasics from "~/components/infoContent/ChoosingElementsBasics";
import TilesCardsBasics from "~/components/infoContent/TilesCardsBasics";
import MapSetupBasics from "~/components/infoContent/MapSetupBasics";
import WheelOfRebirth from "~/components/infoContent/WheelOfRebirth";
import Link from "next/link";
import TurnOrder from "~/components/infoContent/TurnOrder";

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

                <TurnOrder />
                <ChoosingElementsBasics />
                <TilesCardsBasics />
                <MapSetupBasics />
                <WheelOfRebirth />

            <div className="flex p-4 max-w-sm mx-auto mb-4 bg-white rounded-xl shadow-lg">
                <Link className="text-2xl font-bold text-center w-full" href="/HowToPlay">{"Next > How to Play"}</Link>
            </div>

            </div>
        </main>
        </>
    );
};

export default GameSetup;
