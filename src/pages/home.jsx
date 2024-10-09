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
    const dropdownRef = useRef(null);

    const handleHeadingClick = () => {
        if (isClicked) {
            dropdownRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        } else {
            setIsClicked(true);
        }
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
                <div className="vertical-white-line"></div> {/* Add the vertical line here */}
                {/* Vertical dashed line */}
                <div className="vertical-black-line"></div> {/* Add the vertical line here */}

                {/* Heading Section */}
                <section
                    className={`relative flex items-center justify-center w-full h-screen transition-all duration-500 ease-in-out ${isClicked ? 'white-bg' : 'bg-black'}`}
                >

                    {/* Vertical dashed line */}
                    <div className="vertical-black-line"></div> {/* Add the vertical line here */}

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
                    <div className="relative w-full h-32 bg-gradient-to-b from-white to-black">
                        {/* Gradient effect */}
                    </div>
                )}

                {/* Dropdown Section */}
                <div className="bg-black flex items-center justify-center w-full h-screen">
                    <section
                        ref={dropdownRef}
                        className={`flex items-center justify-center w-full ${isClicked ? 'white-bg' : 'black-bg'}`}
                    >
                        {isClicked && (
                            <div className="dropdown-border flex items-center justify-center">
                                <DropDownMenu />
                            </div>
                        )}
                    </section>
                </div>

                <div className="bg-black h-auto">
                    <CriticalMomentsComponent />
                </div>
                <div className="bg-black h-auto">
                    <ContentShows />
                </div>

                {/* Section Contact */}
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
