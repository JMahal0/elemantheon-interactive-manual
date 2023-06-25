import { type NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import HeadTag from "../components/HeadTag"


const Home: NextPage = () => {

  return (
    <>
      <HeadTag />
      <main className="flex justify-center h-screen">
        <div className="h-full w-full">

          <div className="text-4xl text-center font-extrabold py-8">
            Elemantheon Interactive Instruction Manual
          </div>

          <div className="flex p-4 max-w-sm mx-auto mb-4 bg-white rounded-xl shadow-lg">
            <Link className="text-2xl font-bold text-center w-full" href="/StartSetup">{"Start and Setup >"}</Link>
          </div>

          <div className="flex p-4 max-w-sm mx-auto mb-4 bg-white rounded-xl shadow-lg">
            <Link className="text-2xl font-bold text-center w-full" href="/HowToPlay">{"How to Play >"}</Link>
          </div>

          <div className="flex p-4 max-w-sm mx-auto mb-4 bg-white rounded-xl shadow-lg">
            <Link className="text-2xl font-bold text-center w-full" href="/ElementInfo">{"Element Info >"}</Link>
          </div>

          <Image className="mx-auto pd-8 rotate-45" width={120} height={120} alt="Logo" src={"/images/logo-transparent bg.png"} />

        </div>
      </main>
    </>
  );
};

export default Home;
