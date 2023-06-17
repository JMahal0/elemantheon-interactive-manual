import { type NextPage } from "next";
import Link from "next/link";
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
            <Link className="text-2xl font-bold text-center w-full" href="/GameSetup">Game Setup</Link>
          </div>

          <div className="flex p-4 max-w-sm mx-auto mb-4 bg-white rounded-xl shadow-lg">
            <Link className="text-2xl font-bold text-center w-full" href="/GameObjective">Game Objective</Link>
          </div>

          <div className="flex p-4 max-w-sm mx-auto mb-4 bg-white rounded-xl shadow-lg">
            <Link className="text-2xl font-bold text-center w-full" href="/HowToPlay">How to Play</Link>
          </div>

          <div className="flex p-4 max-w-sm mx-auto mb-4 bg-white rounded-xl shadow-lg">
            <Link className="text-2xl font-bold text-center w-full" href="/ElementalAbilities">Elemental Abilities</Link>
          </div>

        </div>
      </main>
    </>
  );
};

export default Home;
