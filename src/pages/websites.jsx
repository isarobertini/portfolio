import { Fade } from "react-awesome-reveal";
import { ChevronUp, ChevronDown } from "lucide-react";

import { NavigationMenu } from "../common/navigationMenu";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";

export const Websites = () => {
    return (
        <>
            <div>

                {/* Centered Navigation Menu */}
                <NavigationMenu />
                <div className="flex justify-center">
                    <div className="w-full max-w-4xl">
                        <div className="grid grid-cols-5 gap-2 md:grid-cols-6 gap-6 font-serif">

                            {/* Clickable Instagram link */}
                            <a href="https://susannamaila.com/" target="_blank" rel="noopener noreferrer" className=" hover:underline">
                                Susanna Maila, Portfolio 2025
                            </a>

                            <a href="https://bellybellybread.com/" target="_blank" rel="noopener noreferrer" className=" hover:underline">
                                Belly Belly Bread, Diploma Hedda Bauer, 2024
                            </a>

                            <a href="https://tuanissurfschool.com/" target="_blank" rel="noopener noreferrer" className=" hover:underline">
                                Tuanis Surf School, 2024
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
