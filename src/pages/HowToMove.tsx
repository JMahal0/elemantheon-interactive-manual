import { type NextPage } from "next";
import HeadTag from "../components/HeadTag";
import MovingBasics from "~/components/infoContent/MovingBasics";
import SpecialMovement from "~/components/infoContent/SpecialMovement";
import NavBar from "~/components/NavBar";
import Link from "next/link";


const HowToMove: NextPage = () => {

    return (
        <>
            <HeadTag />
            <NavBar />

            <main className="flex justify-center h-screen">
                <div className="h-full w-full">

                    <div className="text-4xl text-center font-extrabold py-8">
                        How to Move
                    </div>
                    
                    <MovingBasics />
                    <SpecialMovement />
                    <div className="flex p-4 max-w-sm mx-auto mb-4 bg-white rounded-xl shadow-lg">
                        <Link className="text-2xl font-bold text-center w-full" href="/HowToPlay">{"Back > How to Play"}</Link>
                    </div>

                </div>
            </main>
        </>
    );
};

export default HowToMove;