import { type NextPage } from "next";
import HeadTag from "../components/HeadTag";
import Image from "next/image";
import ContentSection from "~/components/ContentSection";

const GodofFire: NextPage = () => {

    return (
        <>
            <HeadTag />
            <main className="flex justify-center h-screen">
                <div className="h-full w-full">

                    <div className="text-4xl text-center font-extrabold pt-8">
                        <span>God of Fire</span>
                    </div>
                    <Image className="mx-auto pd-8" width={100} height={100} alt="fire icon" src={"/images/fire icon.png"} />

                    <ContentSection sectionTitle="Super Ability: Burning Siege" paragraphsJsx={<>
                        <ul className="list-disc">
                        <li>
                            Fire&apos;s super ability is called Burning Siege
                        </li>
                        <li>
                            When you are converting a city, discard a follower and you can ignore the city defense value
                        </li>
                        <li>
                            If the city is unclaimed, you automatically convert it
                        </li>
                        </ul>
                    </>} />

                    <ContentSection sectionTitle="Passive Ability: Heat Wave" paragraphsJsx={<>
                        <ul className="list-disc">
                        <li>
                            Fire&apos;s passive ability is called Heat Wave
                        </li>
                        <li>
                            At the end of your turn, you do 1 damage all players that are next to you (1 to the left, right, up and down)
                        </li>
                        <li>
                            If you kill any players this way, you gain 2 followers per kill and can steal either one city or one follower from the each killed player
                        </li>
                        </ul>
                    </>} />


                </div>
            </main>
        </>
    );
};

export default GodofFire;