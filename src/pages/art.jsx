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

                {/* Centered directions */}
                <div className="my-36 font-serif">


                    {/* Centered Navigation Menu */}
                    <div ref={navMenuRef}>
                        <NavigationMenu />

                    </div>


                    {/* Works */}


                    <AlbumGrid />

                    <OtherWorks />


                </div>
            </Fade>


        </>
    );
};
