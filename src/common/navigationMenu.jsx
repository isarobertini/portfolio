import { Link, useLocation } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import arrowLight from "../../public/assets/errow1.png";
import arrowDark from "../../public/assets/image.webp";

export const NavigationMenu = ({ isDarkBg = false }) => {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    const textColorClass = isDarkBg ? "text-white" : "text-black";
    const arrowImg = isDarkBg ? arrowDark : arrowLight;

    const NavItem = ({ path, children }) => {
        const active = isActive(path);

        return (
            <li className="relative flex items-center">
                <span
                    className={`inline-block mr-2 w-3 h-3 rounded-full bg-current
                        ${active ? "text-blue-700" : textColorClass}`}
                />

                <Link
                    to={path}
                    className={`block transition-colors duration-200
                        ${active ? "text-blue-700 italic" : textColorClass}
                        hover:text-blue-700`}
                >
                    {children}
                </Link>
            </li>
        );
    };

    return (
        <Fade>
            <div className="px-6 py-14 font-serif md:text-xl flex justify-center">
                <div className="flex flex-col items-start w-full max-w-4xl">
                    <button
                        onClick={() => setOpen(!open)}
                        className={`italic text-3xl mb-2 flex items-center cursor-pointer
                            ${textColorClass} hover:text-blue-700 transition-colors`}
                    >
                        Isa Robertini
                        <img
                            className={`h-10 ml-2 transform transition-transform duration-300
                                ${open ? "rotate-[270deg]" : "rotate-0"}`}
                            src={arrowImg}
                            alt="arrow"
                        />
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out
                            ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                    >
                        <ul className="flex flex-col pl-4 space-y-2 mt-2">
                            <NavItem path="/">Art and Exhibitions</NavItem>
                            <NavItem path="/websites">Websites</NavItem>
                            <NavItem path="/info">Info</NavItem>
                        </ul>
                    </div>
                </div>
            </div>
        </Fade>
    );
};
