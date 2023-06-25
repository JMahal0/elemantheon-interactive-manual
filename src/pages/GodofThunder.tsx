import { type NextPage } from "next";
import HeadTag from "../components/HeadTag";
import Image from "next/image";
import ContentSection from "~/components/ContentSection";

const GodofThunder: NextPage = () => {

    return (
        <>
            <HeadTag />
            <main className="flex justify-center h-screen">
                <div className="h-full w-full">

                    <div className="text-4xl text-center font-extrabold pt-8">
                        <span>God of Thunder</span>
                    </div>
                    <Image className="mx-auto pd-8" width={60} height={60} alt="thunder icon" src={"/images/thunder icon.png"} />
                    <ContentSection sectionTitle="Super Ability: Thunderstruck" paragraphsJsx={<>
                        <ul className="list-disc">
                        <li>
                            Thunder&apos;s super ability is called Howling Headwinds
                        </li>
                        <li>
                            Discard a follower and attack a player anywhere on the map for 1 damage
                        </li>
                        </ul>
                    </>} />

                    <ContentSection sectionTitle="Passive Ability: Electrifying Aura" paragraphsJsx={<>
                        <ul className="list-disc">
                        <li>
                            Thunder&apos;s passive ability is called Electrifying Aura
                        </li>
                        <li>
                            Each follower gives a Follower Convering Bonus of 3, instead of 2
                        </li>
                        <li>
                            The maximum Follower Convering Bonus is still 6
                        </li>
                        </ul>
                    </>} />


                </div>
            </main>
        </>
    );
};

export default GodofThunder;