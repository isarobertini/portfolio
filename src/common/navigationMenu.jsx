import { Link, useLocation } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import arrow from "../../public/assets/errow1.png";

export const NavigationMenu = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const [artOpen, setArtOpen] = useState(false);

    // Helper to check active route
    const isActive = (path) => location.pathname === path;

    return (
        <Fade>
            <div className="my-14 font-serif md:text-xl flex justify-center">
                <div className="flex flex-col items-start w-full max-w-4xl">

                    {/* Name as clickable toggle */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="italic text-3xl mb-2 flex items-center cursor-pointer hover:text-blue-700"
                    >
                        Isa Robertini
                        <img
                            className={`h-10 ml-2 transform transition-transform duration-300 ${open ? "rotate-[270deg]" : "rotate-0"
                                }`}
                            src={arrow}
                            alt="arrow"
                        />
                    </button>

                    {/* Main dropdown */}
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <ul className="flex flex-col border-l-2 border-black pl-4 space-y-2 mt-2">

                            {/* Art and Exhibitions (Home + nested dropdown) */}
                            <li className="relative flex flex-col">
                                <div className="flex items-center">
                                    <span
                                        className={`inline-block mr-2 w-3 h-3 ${isActive("/") ? "rounded-full bg-black" : "bg-black"
                                            }`}
                                    ></span>

                                    {/* Clicking text navigates home */}
                                    <Link
                                        to="/"
                                        className="hover:text-blue-700"
                                    >
                                        Art and Exhibitions
                                    </Link>

                                    {/* Clicking arrow toggles dropdown */}
                                    <button
                                        onClick={() => setArtOpen(!artOpen)}
                                        className="ml-2 transform transition-transform duration-300"
                                    >

                                    </button>
                                </div>


                            </li>

                            {/* Websites */}
                            <li className="relative flex items-center">
                                <span
                                    className={`inline-block mr-2 w-3 h-3 ${isActive("/websites")
                                        ? "rounded-full bg-black"
                                        : "bg-black"
                                        }`}
                                ></span>
                                <Link to="/websites" className="block hover:text-blue-700">
                                    Websites
                                </Link>
                            </li>

                            {/* Info */}
                            <li className="relative flex items-center">
                                <span
                                    className={`inline-block mr-2 w-3 h-3 ${isActive("/info")
                                        ? "rounded-full bg-black"
                                        : "bg-black"
                                        }`}
                                ></span>
                                <Link to="/info" className="block hover:text-blue-700">
                                    Info
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fade>
    );
};
