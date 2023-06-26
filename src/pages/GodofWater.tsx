import { type NextPage } from "next";
import HeadTag from "../components/HeadTag";
import Image from "next/image";
import ContentSection from "~/components/ContentSection";
import NavBar from "~/components/NavBar";

const GodofFire: NextPage = () => {

    return (
        <>
            <HeadTag />
            <NavBar />

            <main className="flex justify-center h-screen">
                <div className="h-full w-full">

                    <div className="text-4xl text-center font-extrabold pt-8">
                        <span>God of Water</span>
                    </div>
                    <Image className="mx-auto pb-4" width={80} height={80} alt="water icon" src={"/images/water icon.png"} />

                    <ContentSection sectionTitle="Super Ability: The Great Flood" paragraphsJsx={<>
                        <ul className="list-disc">
                        <li>
                            Water&apos;s super ability is called The Great Flood
                        </li>
                        <li>
                            Discard a follower and you can put the Flood card on any map card you choose
                        </li>
                        <li>
                            When a city under a flood it is worth 0 points
                        </li>
                        <li>
                            Any followers/defenders that were on a flooded map card die and are discarded
                        </li>
                        <li>
                            There can only be 1 flood at a time
                        </li>
                        <li>
                            You can end the flood at any time and the flood ends automatically when you die
                        </li>
                        <li>
                            If a city was under a flood, it becomes unclaimed when the flood ends
                        </li>
                        </ul>
                    </>} />

                    <ContentSection sectionTitle="Passive Ability: Water Walker" paragraphsJsx={<>
                        <ul className="list-disc">
                        <li>
                            Water&apos;s passive ability is called Water Walker
                        </li>
                        <li>
                            Blue lake tiles cost only 1 Speed to enter (just like green grassland and gray city tiles)
                        </li>
                        </ul>
                    </>} />

                </div>
            </main>
        </>
    );
};

export default GodofFire;