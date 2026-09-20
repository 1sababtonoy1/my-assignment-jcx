import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/logo-text.png";

const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 border-t-4 border-slate-300 border-b border-slate-200 bg-white">
            <div className="container mx-auto flex h-[74px] items-center justify-between">

                {/* Hamburger - Mobile Only */}
                <div className="md:hidden">
                    <GiHamburgerMenu className="text-2xl text-slate-600" />
                </div>

                {/* Logo */}
                <div>
                    <img
                        src={Logo}
                        alt="DevStack"
                        className="h-10 w-auto"
                    />
                </div>

                {/* Navigation - Desktop Only */}
                <ul className="hidden items-center gap-7 text-sm text-slate-600 md:flex">

                    <li className="cursor-pointer text-pink-500">
                        Home
                    </li>

                    <li className="cursor-pointer hover:text-pink-500">
                        Technologies
                    </li>

                    <li className="cursor-pointer hover:text-pink-500">
                        Projects
                    </li>

                    <li className="cursor-pointer hover:text-pink-500">
                        About
                    </li>

                    <li className="cursor-pointer hover:text-pink-500">
                        Contact
                    </li>

                </ul>

                {/* Right side */}
                <ul className="flex items-center gap-5 text-sm">

                    <li className="cursor-pointer text-slate-700 hover:text-pink-500">
                        Sign In
                    </li>

                    <li>
                        <button className="rounded-full bg-pink-600 px-6 py-2.5 font-medium text-white transition hover:bg-pink-700">
                            Sign Up
                        </button>
                    </li>

                </ul>

            </div>
        </nav>
    );
};

export default Nav;