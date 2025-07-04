import { Fade } from "react-awesome-reveal";
import { ChevronUp, ChevronDown } from "lucide-react";

import { NavigationMenu } from "../common/navigationMenu";

export const Info = () => {
    return (
        <>
            <div>
                <div className="">
                    <Fade>
                        <NavigationMenu />

                        {/* Centered Navigation Menu */}

                        <div className="max-w-4xl mx-auto font-serif grid grid-cols-2 gap-6">


                            {/* Clickable Interview Link */}
                            <div className="">
                                <a href="https://www.les-nouveaux-riches.com/interview-with-isa-robertini/" target="_blank" rel="noopener noreferrer" className=" hover:underline">
                                    Interview with for Les Nouveaux Riches, 2025
                                </a>
                            </div>

                            {/* Contact Section */}
                            <div className="">
                                {/* Clickable email */}
                                <a href="mailto:robertiniisa@gmail.com" className="block hover:underline">
                                    robertiniisa@gmail.com
                                </a>
                                {/* Clickable Instagram link */}
                                <a href="https://www.instagram.com/isarobertini/" target="_blank" rel="noopener noreferrer" className=" hover:underline">
                                    Instagram
                                </a>


                            </div>
                        </div>
                    </Fade>

                </div>


            </div>
        </>
    );
};
