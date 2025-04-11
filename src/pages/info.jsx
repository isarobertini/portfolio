import { Fade } from "react-awesome-reveal";
import { ChevronUp, ChevronDown } from "lucide-react";

import { NavigationMenu } from "../common/navigationMenu";

export const Info = () => {
    return (
        <>
            <div>
                <div className="flex flex-col items-center justify-center h-screen w-full">
                    <Fade>
                        <div className="text-center my-10">
                            {/* Contact Section */}
                            <div className="font-serif gap-x-6">
                                {/* Clickable email */}

                                <a href="mailto:robertiniisa@gmail.com" className="block italic p-2 text-sm text-blue-700 hover:underline">
                                    robertiniisa@gmail.com
                                </a>
                                {/* Clickable Instagram link */}
                                <a href="https://www.instagram.com/isarobertini/" target="_blank" rel="noopener noreferrer" className="italic p-2 text-sm text-blue-700 hover:underline">
                                    Instagram
                                </a>


                            </div>
                        </div>
                    </Fade>

                    <h2 className="text-center flex items-center justify-center space-x-2"><ChevronUp className="ml-2" />contact
                    </h2>

                    {/* Centered Navigation Menu */}
                    <NavigationMenu />

                    <h2 className="text-center flex items-center font-serif justify-center space-x-2">
                        <ChevronDown className="ml-2 cursor-pointer" />
                        info
                    </h2>
                    {/* Clickable Interview Link */}
                    <div className="m-6 font-serif">
                        <a href="https://www.les-nouveaux-riches.com/interview-with-isa-robertini/" target="_blank" rel="noopener noreferrer" className="italic p-2 text-sm text-blue-700 hover:underline">
                            Interview with Isa Robertini by Daniel Lichterwaldt for Les Nouveaux Riches
                        </a>
                    </div>

                </div>


            </div>
        </>
    );
};
