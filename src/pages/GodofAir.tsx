import { type NextPage } from "next";
import HeadTag from "../components/HeadTag";
import Image from "next/image";
import ContentSection from "~/components/ContentSection";
import NavBar from "~/components/NavBar";

const GodofAir: NextPage = () => {

    return (
        <>
            <HeadTag />
            <NavBar />

            <main className="flex justify-center h-screen">
                <div className="h-full w-full">

                    <div className="text-4xl text-center font-extrabold pt-8">
                        <span>God of Air</span>
                    </div>
                    <Image className="mx-auto pb-4" width={80} height={80} alt="air icon" src={"/images/air icon.png"} />

                    <ContentSection sectionTitle="Super Ability: Howling Headwinds" paragraphsJsx={<>
                        <ul className="list-disc">
                        <li>
                            Air&apos;s super ability is called Howling Headwinds
                        </li>
                        <li>
                            Discard a follower and all other players have 2 Speed until your next turn
                        </li>
                        </ul>
                    </>} />

                    <ContentSection sectionTitle="Passive Ability: Free Flight" paragraphsJsx={<>
                        <ul className="list-disc">
                        <li>
                            Air&apos;s passive ability is called Free Flight
                        </li>
                        <li>
                            All tiles cost only 1 Speed to enter
                        </li>
                        </ul>
                    </>} />

                </div>
            </main>
        </>
    );
};

export default GodofAir;