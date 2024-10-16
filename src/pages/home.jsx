import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';

import { HeadingComponent } from "../reusableComponents/headingComponent";
import { DropDownMenu } from '../common/dropDown';
import { ParagraphComponent } from '../reusableComponents/paragraphComponent';
import { ContentShows } from '../worksComponents/contentShows';
import { CriticalMomentsComponent } from '../worksComponents/citicalMomentsComponent';

import '../reusableComponents/styles.css';
import './border.css';

export const Home = () => {
    const [isClicked, setIsClicked] = useState(false);

    // Ref for Critical Moments component
    const criticalMomentsRef = useRef(null);

    const handleHeadingClick = () => {
        setIsClicked(true);
    };

    // Scroll handler for the dropdown to scroll to the CriticalMomentsComponent
    const scrollToCriticalMoments = () => {
        criticalMomentsRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <>
            {/* Helmet for SEO and meta tags */}
            <Helmet>
                <title>Isa Robertini</title>
                <meta name="description" content="Isa Robertini is an artist and web developer. Contact for more information." />
            </Helmet>

            {/* Container */}
            <div className={`w-screen h-screen ${isClicked ? 'overflow-auto' : 'overflow-hidden'} transition-all duration-500 ease-in-out`}>

                {/* Vertical dashed line */}
                <div className="vertical-white-line"></div>
                <div className="vertical-black-line"></div>

                {/* Heading Section */}
                <section
                    className={`relative flex items-center justify-center w-full h-screen transition-all duration-500 ease-in-out ${isClicked ? 'white-bg' : 'bg-black'}`}
                >
                    <div className="room-border relative flex items-center justify-center">
                        <div className="room-border-content">
                            <HeadingComponent
                                text={isClicked ? '' : 'Isa Robertini'}
                                isClicked={isClicked}
                                onClick={handleHeadingClick}
                            />
                        </div>
                    </div>
                </section>

                {/* Gradient Spacer */}
                {isClicked && (
                    <div className="relative w-full h-32 bg-gradient-to-b from-white to-black"></div>
                )}

                {/* Dropdown Section */}
                <div className="bg-black flex items-center justify-center w-full h-screen">
                    <section
                        className={`flex items-center justify-center w-full ${isClicked ? 'white-bg' : 'black-bg'}`}
                    >
                        {isClicked && (
                            <div className="dropdown-border flex items-center justify-center">
                                {/* Pass the scroll handler to DropDownMenu */}
                                <DropDownMenu onLatestClick={scrollToCriticalMoments} />
                            </div>
                        )}
                    </section>
                </div>

                {/* Critical Moments Section */}
                <div ref={criticalMomentsRef} className="bg-black h-auto">
                    <CriticalMomentsComponent />
                </div>

                <div className="bg-black h-auto">
                    <ContentShows />
                </div>

                {/* Contact Section */}
                <div className="bg-black flex flex-col items-center justify-center w-full h-screen">
                    <div className="text-white text-2xl mb-4">
                        <ParagraphComponent className="text-white" text="Contact" />
                    </div>

                    {/* Paragraph Component Below the Menus */}
                    <div className="border-dashed border-y-2 border-white text-white p-3">
                        <a href="mailto:robertiniisa@gmail.com" className="hover:text-slate-600">
                            robertiniisa@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
