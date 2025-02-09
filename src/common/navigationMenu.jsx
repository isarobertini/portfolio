import { Link, useLocation } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export const NavigationMenu = () => {
    const location = useLocation();

    return (
        <Fade>
            {/* Center the navigation row */}
            <div className="flex justify-center items-center">
                <div className="flex flex-row items-center space-x-2">
                    {/* Home Link */}
                    <Link
                        to="/"
                        className={`rotate-180 [writing-mode:vertical-rl] border-2 border-black p-2 text-lg ${location.pathname === "/" ? "font-bold text-white bg-black" : ""
                            }`}
                    >
                        Home
                    </Link>

                    {/* Art Link */}
                    <Link
                        to="/art"
                        className={`border-2 border-black p-2 text-lg ${location.pathname === "/art" ? "font-bold text-white bg-black" : ""
                            }`}
                    >
                        Art
                    </Link>

                    {/* Websites Link */}
                    <Link
                        to="/websites"
                        className={`rotate-20 [writing-mode:vertical-rl] border-2 border-black p-2 text-lg ${location.pathname === "/websites" ? "font-bold text-white bg-black" : ""
                            }`}
                    >
                        Websites
                    </Link>
                </div>
            </div>
        </Fade>
    );
};
