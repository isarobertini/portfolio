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
                        className={` p-2 text-base ${location.pathname === "/" ? "text-blue-700 underline" : "hover:text-blue-700"
                            }`}
                    >
                        Isa Robertini
                    </Link>

                    {/* Art Link */}
                    <Link
                        to="/art"
                        className={` p-2 text-base ${location.pathname === "/art" ? "text-blue-700 underline" : "hover:text-blue-700"
                            }`}
                    >
                        art & exhibitions
                    </Link>
                    {/* Websites Link */}
                    <Link
                        to="/websites"
                        className={` p-2 text-base ${location.pathname === "/websites" ? "text-blue-700 underline" : "hover:text-blue-700"
                            }`}
                    >
                        websites
                    </Link>

                    {/* Art Link */}
                    <Link
                        to="/info"
                        className={` p-2 text-base ${location.pathname === "/info" ? "text-blue-700 underline" : "hover:text-blue-700"
                            }`}
                    >
                        contact & info
                    </Link>

                </div>
            </div>
        </Fade>
    );
};
