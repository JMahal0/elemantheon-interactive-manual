import React from "react";
import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="bg-stone-800 py-4">
            <div className="container mx-auto max-w-sm">
                <ul className="flex space-x-4 text-sm text-amber-50">
                    <li>
                        <Link className="hover:text-gray-300" href="/">Home</Link>
                    </li>
                    <li>
                        <Link className="hover:text-gray-300" href="/GameSetup">Game Setup</Link>
                    </li>
                    <li>
                        <Link className="hover:text-gray-300" href="/GameObjective">Game Objective</Link>
                    </li>
                    <li>
                        <Link className="hover:text-gray-300" href="/HowToPlay">How to Play</Link>
                    </li>
                    <li>
                        <Link className="hover:text-gray-300" href="/ElementalAbilities">Elemental Abilities</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;