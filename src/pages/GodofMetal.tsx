import { type NextPage } from "next";
import HeadTag from "../components/HeadTag";
import Image from "next/image";
import ContentSection from "~/components/ContentSection";
import NavBar from "~/components/NavBar";

const GodofMetal: NextPage = () => {

    return (
        <>
            <HeadTag />
            <NavBar />

            <main className="flex justify-center h-screen">
                <div className="h-full w-full">

                    <div className="text-4xl text-center font-extrabold pt-8">
                        <span>God of Metal</span>
                    </div>
                    <Image className="mx-auto pb-4" width={100} height={100} alt="metal icon" src={"/images/metal icon.png"} />

                    <ContentSection sectionTitle="Super Ability: Robotic Disciple" paragraphsJsx={<>
                        <ul className="list-disc">
                        <li>
                            Metal&apos;s super ability is called Robotic Disciple
                        </li>
                        <li>
                            The God of Metal player gets the special Robot token at the start of the game
                            <Image width={75} height={75} alt="robot token" src={"/images/robot token.png"} />
                        </li>
                        <li>
                            Discard a follower and use the Robot token as a second Avatar
                        </li>
                        <li>
                            Place the Robot token on your spawn tile or on any city tile that you control
                        </li>
                        <li>
                            Place the robot heart piece on the 4 on the Wheel of Rebirth
                        </li>
                        <li>
                            On your turn you can move both your Avatar and the Robot
                        </li>
                        <li>
                            On your turn, if you attack or convert cities with the Robot you cannot attack or convert with your Avatar, and vice versa
                        </li>
                        <li>
                            There can only be 1 Robot at a time
                        </li>
                        <li>
                            The Robot can be attacked by other players and has 4 Health
                        </li>
                        <li>
                            If another player kills the Robot, they get 1 follower and do not steal anything from you
                        </li>
                        <li>
                            When the Robot loses all its Health, it does not reincarnate so take it off the map
                        </li>
                        </ul>
                    </>} />

                    <ContentSection sectionTitle="Passive Ability: Steel Fortifications" paragraphsJsx={<>
                        <ul className="list-disc">
                        <li>
                            Metal&apos;s passive ability is called Steel Fortifications
                        </li>
                        <li>
                            Each follower gives a Follower Defense Bonus of 3, instead of 2
                        </li>
                        <li>
                            The maximum Follower Defense Bonus is still 6
                        </li>
                        </ul>
                    </>} />

                </div>
            </main>
        </>
    );
};

export default GodofMetal;