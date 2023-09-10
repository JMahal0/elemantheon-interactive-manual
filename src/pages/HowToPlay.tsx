import { type NextPage } from "next";
import HeadTag from "../components/HeadTag";
import Link from "next/link";
import NavBar from "~/components/NavBar";
import OnYourTurnBasics from "~/components/infoContent/OnYourTurnBasics";
import HowToWinBasics from "~/components/infoContent/HowToWinBasics";
import AttackingBasics from "~/components/infoContent/AttackingBasics";
import PlacingCollectingDefenders from "~/components/infoContent/PlacingCollectingDefenders";
import UsingSuperAbility from "~/components/infoContent/UsingSuperAbility";
import DyingReincarnating from "~/components/infoContent/DyingReincarnating";
import GettingFollowers from "~/components/infoContent/GettingFollowers";


const HowToPlay: NextPage = () => {

  return (
    <>
      <HeadTag />
      <NavBar />
      <main className="flex justify-center h-screen">
        <div className="h-full w-full">

          <div className="text-4xl text-center font-extrabold py-8">
            How to Play
          </div>

          <OnYourTurnBasics />
          <HowToWinBasics />
          <GettingFollowers />
          <AttackingBasics />                    
          <PlacingCollectingDefenders />
          <div className="flex p-4 max-w-sm mx-auto mb-4 bg-white rounded-xl shadow-lg">
              <Link className="text-2xl font-semibold text-center w-full" href="/HowToMove">{"Moving >"}</Link>
          </div>
          <div className="flex p-4 max-w-sm mx-auto mb-4 bg-white rounded-xl shadow-lg">
              <Link className="text-2xl font-semibold text-center w-full" href="/HowToConvert">{"Converting A City >"}</Link>
          </div>
          <UsingSuperAbility />
          <DyingReincarnating />

          <div className="flex p-4 max-w-sm mx-auto mb-4 bg-white rounded-xl shadow-lg">
            <Link className="text-2xl font-bold text-center w-full" href="/ElementInfo">{"Next > Element Info"}</Link>
          </div>

        </div>
      </main>
    </>
  );
};

export default HowToPlay;
