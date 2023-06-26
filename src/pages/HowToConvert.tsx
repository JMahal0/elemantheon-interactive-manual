import { type NextPage } from "next";
import HeadTag from "../components/HeadTag";
import ConvertingBasics from "~/components/infoContent/ConvertingBasics";
import ConvertingUnclaimedCity from "~/components/infoContent/ConvertingUnclaimedCity";
import FollowerBonusBasics from "~/components/infoContent/FollowerBonusBasics";
import ConvertingClaimedCity from "~/components/infoContent/ConvertingClaimedCity";
import NavBar from "~/components/NavBar";
import Link from "next/link";

const HowToConvert: NextPage = () => {

    return (
        <>
            <HeadTag />
            <NavBar />

            <main className="flex justify-center h-screen">
                <div className="h-full w-full">

                    <div className="text-4xl text-center font-extrabold py-8">
                        How to Convert a City
                    </div>
                    
                    <ConvertingBasics />
                    <FollowerBonusBasics />
                    <ConvertingUnclaimedCity />
                    <ConvertingClaimedCity />

                    <div className="flex p-4 max-w-sm mx-auto mb-4 bg-white rounded-xl shadow-lg">
                        <Link className="text-2xl font-bold text-center w-full" href="/HowToPlay">{"Back > How to Play"}</Link>
                    </div>

                </div>
            </main>
        </>
    );
};

export default HowToConvert;