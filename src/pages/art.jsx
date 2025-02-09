import { Fade } from "react-awesome-reveal";
import { ChevronUp, ChevronDown } from "lucide-react";

import { DropdownMenu } from '../common/dropDownMenu';
import { NavigationMenu } from "../common/navigationMenu";
import { AlbumGrid } from "../reusableComponents/AlbumGrid";

export const Art = () => {
    return (
        <>


            {/* Art Content */}
            <Fade>
                <div>
                    <h1 className="text-3xl text-center font-bold my-6">Catalog of Variations</h1>
                    <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-1 mx-auto max-w-2xl">
                        {/* Titles List */}

                        <div className="mx-8 my-6">
                            <div className="">
                                <h2 className="text-l font-bold">Titles:</h2>
                                <ul className="text-sm list-disc pl-5">
                                    <li>Symbolic</li>
                                    <li>Critical</li>
                                    <li>Cultural</li>
                                    <li>Political</li>
                                    <li>Durum wheat semolina, water, squid ink</li>
                                    <li>Spaghetti al Nero di Seppia, Fregula</li>
                                </ul>
                            </div>

                            {/* Dimensions List */}
                            <div className="my-4">
                                <h2 className="text-l font-bold">Dimensions:</h2>
                                <ul className="text-sm list-disc pl-5">
                                    <li>30x30 cm</li>
                                    <li>15x30 cm</li>
                                    <li>50x30 cm</li>
                                    <li>60x60 cm</li>
                                    <li>05x15 cm</li>
                                </ul>
                            </div>
                        </div>

                        {/* Years List */}
                        <div>
                            <div className="my-6">
                                <h2 className="text-l font-bold">Years:</h2>
                                <ul className="text-sm list-disc pl-5">
                                    <li>2024</li>
                                    <li>2025</li>
                                </ul>
                            </div>

                            {/* Materials List */}
                            <div className="my-4">
                                <h2 className="text-l font-bold">Materials:</h2>
                                <ul className="text-sm list-disc pl-5">
                                    <li>A part of a door lock found at a house of a grandmother, durum wheat semolina, water, squid ink.</li>
                                    <li>A circular metal object with decorative elements, durum wheat semolina, water, squid ink.</li>
                                    <li>Metal object found at a house of a grandmother, durum wheat semolina, water, squid ink.</li>
                                    <li>Durum wheat semolina, water, squid ink.</li>
                                    <li>Spaghetti al Nero di Seppia, Fregula.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Centered directions */}
                <div className="my-36">

                    <h2 className="text-center flex items-center justify-center space-x-2"><ChevronUp className="ml-2" />Catalogue of Variations
                    </h2>

                    {/* Centered Navigation Menu */}
                    <NavigationMenu />

                    <h2 className="text-center flex items-center justify-center space-x-2"><ChevronDown className="ml-2" />Catalogue of Works

                    </h2>
                </div>

                <div className="">
                    {/*   <h1 className="text-3xl my-6 font-bold text-center">Catalog of Documentations</h1>
                    <div className="mx-8">
                        <DropdownMenu />
                    </div>
                    */}
                </div>
                <AlbumGrid />
            </Fade>

        </>
    );
};
