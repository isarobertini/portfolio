import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { ChevronUp, ChevronDown } from "lucide-react";

import { DropdownMenu } from '../common/dropDownMenu';
import { NavigationMenu } from "../common/navigationMenu";
import { AlbumGrid } from "../reusableComponents/AlbumGrid";
import { CatalogOfVariations } from "../reusableComponents/CatalogOfVariations";

export const Art = () => {

    // Scroll to the center of the page when the component is mounted
    useEffect(() => {
        // Scroll to the middle of the page
        window.scrollTo({
            top: window.innerHeight / 1.2,
            behavior: 'smooth', // Smooth scrolling
        });
    }, []);

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling
        });
    };

    // Scroll to the bottom of the page
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth', // Smooth scrolling
        });
    };

    return (
        <>
            {/* Art Content */}
            <Fade>
                <div>
                    <CatalogOfVariations />
                </div>

                {/* Centered directions */}
                <div className="my-36">
                    <h2 className="text-center flex items-center justify-center space-x-2">
                        <ChevronUp className="ml-2 cursor-pointer" onClick={scrollToTop} />
                        Catalogue of Variations
                    </h2>

                    {/* Centered Navigation Menu */}
                    <NavigationMenu />

                    <h2 className="text-center flex items-center justify-center space-x-2">
                        <ChevronDown className="ml-2 cursor-pointer" onClick={scrollToBottom} />
                        Catalogue of Works
                    </h2>
                </div>

                {/* Works */}
                <AlbumGrid />
            </Fade>
        </>
    );
};
