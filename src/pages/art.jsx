import { useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { ChevronUp, ChevronDown } from "lucide-react";

import { NavigationMenu } from "../common/navigationMenu";
import { AlbumGrid } from "../reusableComponents/AlbumGrid";
import { OtherWorks } from "../reusableComponents/otherWorks";

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
                    <AlbumGrid />
                </div>


                {/* Centered directions */}
                <div className="my-36 font-serif">
                    <h2 className="text-center flex items-center justify-center space-x-2">
                        <ChevronUp className="ml-2 cursor-pointer" onClick={scrollToTop} />
                        works organized by title
                    </h2>

                    {/* Centered Navigation Menu */}
                    <div ref={navMenuRef}>
                        <NavigationMenu />
                    </div>

                    <h2 className="text-center flex items-center font-serif justify-center space-x-2">
                        <ChevronDown className="ml-2 cursor-pointer" onClick={scrollToBottom} />
                        others works
                    </h2>
                </div>

                {/* Works */}

                <OtherWorks />
            </Fade>

        </>
    );
};
