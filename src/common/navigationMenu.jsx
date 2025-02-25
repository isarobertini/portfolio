import { Link, useLocation } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export const NavigationMenu = () => {
    const location = useLocation();

    return (
        <Fade>
            {/* Center the navigation row */}
            <div className="flex justify-center font-serif items-center">
                <div className="flex flex-row items-center space-x-2">
                    {/* Home Link */}
                    <Link
                        to="/"
                        className={`rotate-180 [writing-mode:vertical-rl] p-2 text-lg ${location.pathname === "/" ? "text-blue-700 underline" : "hover:text-blue-700"
                            }`}
                    >
                        Isa Robertini
                    </Link>

                    {/* Art Link */}
                    <Link
                        to="/art"
                        className={` p-2 text-lg ${location.pathname === "/art" ? "text-blue-700 underline" : "hover:text-blue-700"
                            }`}
                    >
                        Art & Exhibitions
                    </Link>

                    {/* Art Link */}
                    <Link
                        to="/info"
                        className={` p-2 text-lg ${location.pathname === "/info" ? "text-blue-700 underline" : "hover:text-blue-700"
                            }`}
                    >
                        Info
                    </Link>
                    {/* Websites Link */}
                    <Link
                        to="/websites"
                        className={`rotate-20 [writing-mode:vertical-rl] p-2 text-lg ${location.pathname === "/websites" ? "text-blue-700 underline" : "hover:text-blue-700"
                            }`}
                    >
                        Websites
                    </Link>
                </div>
            </div>
        </Fade>
    );
};
