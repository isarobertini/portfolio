import { useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { ChevronUp, ChevronDown } from "lucide-react";

import { DropdownMenu } from '../common/dropDownMenu';
import { NavigationMenu } from "../common/navigationMenu";
import { AlbumGrid } from "../reusableComponents/AlbumGrid";
import { CatalogOfVariations } from "../reusableComponents/CatalogOfVariations";
import { Footer } from "../common/footer";

export const Art = () => {
    // Create a ref for the NavigationMenu
    const navMenuRef = useRef(null);

    // Scroll to the navigation menu when the component is mounted
    useEffect(() => {
        // Scroll to the NavigationMenu element
        if (navMenuRef.current) {
            navMenuRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center', // Scroll to the center of the element
            });
        }
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

                {/* Clickable Interview Link */}
                <div className="m-6 font-serif">
                    <a href="https://www.les-nouveaux-riches.com/interview-with-isa-robertini/" target="_blank" rel="noopener noreferrer" className="bg-amber-300 text-sm sm:text-2xl lg:text-2xl">
                        Interview with Isa Robertini by Daniel Lichterwaldt for Les Nouveaux Riches
                    </a>
                </div>

                {/* Centered directions */}
                <div className="my-36 font-serif">
                    <h2 className="text-center flex items-center justify-center space-x-2">
                        <ChevronUp className="ml-2 cursor-pointer" onClick={scrollToTop} />
                        Catalogue of Variations
                    </h2>

                    {/* Centered Navigation Menu */}
                    <div ref={navMenuRef}>
                        <NavigationMenu />
                    </div>

                    <h2 className="text-center flex items-center font-serif justify-center space-x-2">
                        <ChevronDown className="ml-2 cursor-pointer" onClick={scrollToBottom} />
                        Catalogue of Images
                    </h2>
                </div>

                {/* Works */}
                <AlbumGrid />
            </Fade>

        </>
    );
};
