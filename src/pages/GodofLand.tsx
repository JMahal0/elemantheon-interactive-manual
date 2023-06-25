import { type NextPage } from "next";
import HeadTag from "../components/HeadTag";
import Image from "next/image";
import ContentSection from "~/components/ContentSection";

const GodofLand: NextPage = () => {

    return (
        <>
            <HeadTag />
            <main className="flex justify-center h-screen">
                <div className="h-full w-full">

                    <div className="text-4xl text-center font-extrabold pt-8">
                        <span>God of Land</span>
                    </div>
                    <Image className="mx-auto pd-8" width={100} height={100} alt="land icon" src={"/images/land icon.png"} />

                    <ContentSection sectionTitle="Super Ability: Divine Tectonics" paragraphsJsx={<>
                        <ul className="list-disc">
                        <li>
                            Land&apos;s super ability is called Divine Tectonics
                        </li>
                        <li>
                            Discard a follower and swap any 2 map cards, along with anybody and anything on those cards
                        </li>
                        <li>
                            You can rotate the cards as you switch them
                        </li>
                        </ul>
                    </>} />

                    <ContentSection sectionTitle="Passive Ability: Shifty Sands" paragraphsJsx={<>
                        <ul className="list-disc">
                        <li>
                            Land&apos;s passive ability is called Shifty Sands
                        </li>
                        <li>
                            Brown desert tiles cost only 1 Speed to enter (just like green grassland and gray city tiles)
                        </li>
                        <li>
                            Also, when you attack another player that is standing on a desert tile, they lose 3 Health instead of 2
                        </li>
                        </ul>
                    </>} />

                </div>
            </main>
        </>
    );
};

export default GodofLand;