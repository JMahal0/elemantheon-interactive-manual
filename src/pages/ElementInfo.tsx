import { type NextPage } from "next";
import HeadTag from "../components/HeadTag"
import NavBar from "~/components/NavBar";
import Link from "next/link";


const ElementalAbilities: NextPage = () => {

  return (
    <>
      <HeadTag />
      <NavBar />
      <main className="flex justify-center h-screen">
        <div className="h-full w-full">

          <div className="text-4xl text-center font-extrabold py-8">
            Element Info
          </div>
          <div className="flex p-4 max-w-sm mx-auto mb-4 bg-white rounded-xl shadow-lg">
              <Link className="text-2xl font-semibold text-center w-full" href="/GodofFire">{"God of Fire >"}</Link>
          </div>
          <div className="flex p-4 max-w-sm mx-auto mb-4 bg-white rounded-xl shadow-lg">
              <Link className="text-2xl font-semibold text-center w-full" href="/GodofWater">{"God of Water >"}</Link>
          </div>
          <div className="flex p-4 max-w-sm mx-auto mb-4 bg-white rounded-xl shadow-lg">
              <Link className="text-2xl font-semibold text-center w-full" href="/GodofAir">{"God of Air >"}</Link>
          </div>
          <div className="flex p-4 max-w-sm mx-auto mb-4 bg-white rounded-xl shadow-lg">
              <Link className="text-2xl font-semibold text-center w-full" href="/GodofLand">{"God of Land >"}</Link>
          </div>
          <div className="flex p-4 max-w-sm mx-auto mb-4 bg-white rounded-xl shadow-lg">
              <Link className="text-2xl font-semibold text-center w-full" href="/GodofThunder">{"God of Thunder >"}</Link>
          </div>
          <div className="flex p-4 max-w-sm mx-auto mb-4 bg-white rounded-xl shadow-lg">
              <Link className="text-2xl font-semibold text-center w-full" href="/GodofMetal">{"God of Metal >"}</Link>
          </div>

        </div>
      </main>
    </>
  );
};

export default ElementalAbilities;
