import { Fade } from "react-awesome-reveal";
import { ChevronUp, ChevronDown } from "lucide-react";

import { NavigationMenu } from "../common/navigationMenu";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";

export const Websites = () => {
    return (
        <>
            <div>
                <div className="flex flex-col items-center justify-center h-screen w-full">
                    <Fade>
                        <div className="text-center">
                            <SubHeadingComponent className="cursor-pointer  block my-2 font-serif italic p-2 text-sm text-blue-700 hover:underline">
                                <a href="https://susannamaila.com/" target="_blank" rel="noopener noreferrer">
                                    Susanna Maila, Portfolio --> visit
                                </a>
                            </SubHeadingComponent>

                            <SubHeadingComponent className="cursor-pointer  block my-2 font-serif p-2 font-serif italic p-2 text-sm text-blue-700 hover:underline">
                                <a href="https://tuanissurfschool.com/" target="_blank" rel="noopener noreferrer">
                                    Tuanis Surf School --> visit
                                </a>
                            </SubHeadingComponent>
                            <SubHeadingComponent className="cursor-pointer block my-2 mx-4 font-serif italic p-2 text-sm text-blue-700 hover:underline">
                                <a href="https://bellybellybread.com/" target="_blank" rel="noopener noreferrer">
                                    Belly Belly Bread --> visit
                                </a>
                            </SubHeadingComponent>
                        </div>
                    </Fade>

                    <h2 className="text-center flex items-center justify-center space-x-2"><ChevronUp className="ml-2" />websites
                    </h2>

                    {/* Centered Navigation Menu */}
                    <NavigationMenu />

                </div>

            </div>
        </>
    );
};
