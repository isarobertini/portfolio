import { Link, useLocation } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export const NavigationMenu = () => {
    const location = useLocation();

    return (
        <Fade>
            <div className="my-14 font-serif md:text-xl">
                {/* Outer flex container centers whole nav */}
                <div className="flex justify-center">
                    {/* Inner flex container: name left, links right */}
                    <div className="flex items-center w-full max-w-4xl">
                        {/* Name on the left */}
                        <Link className="font-bold" to="/">
                            Isa Robertini
                        </Link>

                        {/* Menu links with ml-auto push */}
                        <div className="flex space-x-4 ml-auto">
                            <Link
                                to="/"
                                className={`tracking-tighter p-2 ${location.pathname === "/"
                                        ? "underline"
                                        : "hover:underline"
                                    }`}
                            >
                                Works
                            </Link>

                            <Link
                                to="/websites"
                                className={`tracking-tighter p-2 ${location.pathname === "/websites"
                                        ? "underline"
                                        : "hover:underline"
                                    }`}
                            >
                                Websites
                            </Link>

                            <Link
                                to="/info"
                                className={`tracking-tighter p-2 ${location.pathname === "/info"
                                        ? "underline"
                                        : "hover:underline"
                                    }`}
                            >
                                Info
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};
