import { type NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import HeadTag from "../components/HeadTag"
import ContentSection from "~/components/ContentSection";

const Home: NextPage = () => {

  return (
    <>
      <HeadTag />
      <main className="flex justify-center h-screen">
        <div className="h-full w-full">

          <div className="text-4xl text-center font-extrabold py-8">
            Elemantheon Interactive Instruction Manual
          </div>

          <ContentSection sectionTitle="Introduction" paragraphsJsx={<>
            <p>
              You are one of many elemental gods trying to be the most influential god of all time.
              You all reincarnate into Avatars in the mortal world competing to gain the most cities and followers.
              The game ends after all players finish 12 turns. Roll the dice, and the highest roller goes first and then go clockwise.
              At the end, the God with the most points from cities and followers wins!
            </p>
          </>} />

          <Image className="mx-auto mb-4 rotate-45" width={120} height={120} alt="Logo" src={"/images/logo-transparent bg.png"} />

          <div className="flex p-4 max-w-sm mx-auto mb-4 bg-white rounded-xl shadow-lg">
            <Link className="text-2xl font-bold text-center w-full" href="/StartSetup">{"Start and Setup >"}</Link>
          </div>

          <div className="flex p-4 max-w-sm mx-auto mb-4 bg-white rounded-xl shadow-lg">
            <Link className="text-2xl font-bold text-center w-full" href="/HowToPlay">{"How to Play >"}</Link>
          </div>

          <div className="flex p-4 max-w-sm mx-auto mb-4 bg-white rounded-xl shadow-lg">
            <Link className="text-2xl font-bold text-center w-full" href="/ElementInfo">{"Element Info >"}</Link>
          </div>

          <div className="flex mx-auto">
            <Link href={"/GodofFire"} className="mx-auto"><Image  width={53.75} height={50} alt="fire icon" src={"/images/fire icon.png"} /></Link>
            <Link href={"/GodofWater"} className="mx-auto"><Image  width={40} height={40} alt="water icon" src={"/images/water icon.png"} /></Link>
            <Link href={"/GodofAir"} className="mx-auto"><Image  width={40} height={40} alt="air icon" src={"/images/air icon.png"} /></Link>
            <Link href={"/GodofLand"} className="mx-auto"><Image  width={53.75} height={50} alt="land icon" src={"/images/land icon.png"} /></Link>
            <Link href={"/GodofThunder"} className="mx-auto"><Image  width={30} height={30} alt="thunder icon" src={"/images/thunder icon.png"} /></Link>
            <Link href={"/GodofMetal"} className="mx-auto" ><Image width={53.75} height={50} alt="metal icon" src={"/images/metal icon.png"} /></Link>
          </div>

        </div>
      </main>
    </>
  );
};

export default Home;
