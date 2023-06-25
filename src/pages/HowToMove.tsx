import { type NextPage } from "next";
import HeadTag from "../components/HeadTag";
import MovingBasics from "~/components/infoContent/MovingBasics";
import SpecialMovement from "~/components/infoContent/SpecialMovement";


const HowToMove: NextPage = () => {

    return (
        <>
            <HeadTag />
            <main className="flex justify-center h-screen">
                <div className="h-full w-full">

                    <div className="text-4xl text-center font-extrabold py-8">
                        How to Move
                    </div>
                    
                    <MovingBasics />
                    <SpecialMovement />

                </div>
            </main>
        </>
    );
};

export default HowToMove;