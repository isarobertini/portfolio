import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet

import { HeadingComponent } from "../reusableComponents/headingComponent";
import { DropDownMenu } from '../common/dropDown';
import { ParagraphPopUpComponent } from '../reusableComponents/paragraphPopUpComponent';
import { ParagraphComponent } from '../reusableComponents/paragraphComponent';
import { ImageComponent } from '../reusableComponents/imageComponent';

import '../reusableComponents/styles.css'; // Import your CSS here
import './border.css';
import political from '../assets/citicalMoments/political.webp'
import politicalCloseUp from '../assets/citicalMoments/politicalCloseUp.webp'
import politicalInstallation from '../assets/citicalMoments/politicalInstallation.webp'

import critical from '../assets/citicalMoments/critical.webp'
import criticalCloseUp from '../assets/citicalMoments/criticalDetail.webp'

import symbolic from '../assets/citicalMoments/symbolic.webp'
import symbolicCloseUp from '../assets/citicalMoments/symbolicDetail.webp'

import symbolic2 from '../assets/citicalMoments/symbolic2.webp'
import symbolic2CloseUp from '../assets/citicalMoments/symbolic2Installation.webp'

import criticalPolitical from '../assets/citicalMoments/criticalPolitical.webp'

import floorplan from '../assets/floorplanKannski.png'

export const Home = () => {
    const [isClicked, setIsClicked] = useState(false);
    const dropdownRef = useRef(null);

    const handleHeadingClick = () => {
        if (isClicked) {
            dropdownRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
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

            <div className={`w-screen h-screen ${isClicked ? 'overflow-auto' : 'overflow-hidden'} transition-all duration-500 ease-in-out`}>
                {/* Heading Section */}

                <section
                    className={`relative flex items-center justify-center w-full h-screen transition-all duration-500 ease-in-out ${isClicked ? 'white-bg' : 'bg-black'}`}
                >
                    <div className='room-border relative flex items-center justify-center'>
                        <div className='room-border-content'>
                            <HeadingComponent
                                text={isClicked ? "" : "Isa Robertini"}
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
                <div className='bg-black flex items-center justify-center w-full h-screen '>
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

                {/* Section works */}

                <div className='bg-black flex flex-col items-center justify-center w-full h-screen'>

                    <div className='px-6 flex flex-col items-center justify-center w-full h-screen'>
                        <ImageComponent className="my-4 w-80 h-auto" src={isClicked ? floorplan : ""} />

                        <div className='bg-black h-auto text-amber-400 italic h-screen'>

                            <ParagraphPopUpComponent text="1- Political - overview, detail, installation">
                                {/* Popup content - images */}
                                <img src={political} alt="Political Overview" className="w-full h-auto mb-2" />
                                <img src={politicalCloseUp} alt="Political Close Up" className="w-full h-auto mb-2" />
                                <img src={politicalInstallation} alt="Political Installation" className="w-full h-auto mb-2" />
                            </ParagraphPopUpComponent>

                            <ParagraphPopUpComponent text="2- Critical - overview, detail, installation">
                                {/* Popup content - images */}
                                <img src={critical} alt="Political Overview" className="w-full h-auto mb-2" />
                                <img src={criticalCloseUp} alt="Political Close Up" className="w-full h-auto mb-2" />
                                <img src={politicalInstallation} alt="Political Installation" className="w-full h-auto mb-2" />
                            </ParagraphPopUpComponent>

                            <ParagraphPopUpComponent text="3 - Symbolic - overview, detail, installation">
                                {/* Popup content - images */}
                                <img src={symbolic} alt="Political Overview" className="w-full h-auto mb-2" />
                                <img src={symbolicCloseUp} alt="Political Close Up" className="w-full h-auto mb-2" />
                            </ParagraphPopUpComponent>

                            <ParagraphPopUpComponent text="4 - Critical, Political - overview, detail, installation">
                                {/* Popup content - images */}
                                <img src={criticalPolitical} alt="Political Overview" className="w-full h-auto mb-2" />
                            </ParagraphPopUpComponent>

                            <ParagraphPopUpComponent text="5 - Symbolic - overview, detail, installation">
                                {/* Popup content - images */}
                                <img src={symbolic2} alt="Political Overview" className="w-full h-auto mb-2" />
                                <img src={symbolic2CloseUp} alt="Political Close Up" className="w-full h-auto mb-2" />
                            </ParagraphPopUpComponent>

                            <ParagraphPopUpComponent text="Symbolic, Crititcal, Political - Text">
                                {/* Popup content - images */}
                                <ParagraphComponent>
                                    In 2022, I wrote three texts about three happenings describing three of my sculptures made of spaghetti. I was always rather uncomfortable with my writing, but by good luck, I managed to capture content and a style of writing that made some kind of sense in relation to my sculptures made of spaghetti, in the same way that I sometimes, by good luck, manage to avoid being symbolic. I don’t want to be symbolic. Another thing I don’t want to be is actively involved. The paradox is that my texts were based on events outside of my studio space that could, by chance, happen without my active involvement—yet so rarely that content would almost never be generated. Another thing I didn’t want to do was wait. To solve this artistic dilemma, I decided to generate content, but in a passive way.
                                    <br /> <br />
                                    So, in 2023, I spent time in my studio, carefully planning the curation of a few shows with a concept that, by good luck, would allow me to generate content passively. I called it research and materialized it as text. By bad luck, I discovered that my process of passive generation was not passive at all, and the texts ended up being symbolic, but also critical and slightly political. I don’t want to be critical or political. Worse, the way my texts didn’t connect to my sculptures made of spaghetti was more than a disappointment—it was a surprise to me. How could I have been so insensitive as to think they would? For a moment, I considered merging them by force, but I soon realized that a violent strategy like that would neither add to nor subtract from this situation of discomfort I had managed to create. As a last, almost desperate attempt to align my texts with my sculptures, I wrote a play about their connection. Neither did that make sense, and—oh, what a tragedy, one year of work, and everything resulted in such a disorder.
                                    <br /> <br />
                                    So, in the summer of 2024, I left my studio. Instead, I drifted around in a garden, hoping to find objects with personal value to include in my three non-symbolic, non-critical, non-political sculptures made of spaghetti. Mentally visualizing my artistic practice, imagining that loud crack between all artistic decisions I once thought were logical, the disorder that followed, and how there generally is not enough spatial understanding for a disorder of that kind. Worse, it turned out that this summer was a hot one. The sun made it hard to see and, therefore, to find; the heat made it hard to think, to move, and therefore to organize—and, oh, what a tragedy, what a tragedy... everything remains in such an inexplicable order.
                                    <br /> <br />

                                </ParagraphComponent>
                                <ParagraphComponent className="">
                                    Symbolic, Critical, Political<br />
                                    Text, 2024<br />
                                    Isa Robertini
                                </ParagraphComponent>
                            </ParagraphPopUpComponent>
                        </div>
                    </div>
                </div>
                {/* Section Contact */}
                <div className='bg-black flex flex-col items-center justify-center w-full h-screen'>
                    <div className='text-white text-2xl mb-4'>
                        <ParagraphComponent className="text-white" text="Contact" />
                    </div>

                    {/* Paragraph Component Below the Menus */}
                    <div className='border-dashed border-y-2 border-white text-white p-3'>
                        <a href="mailto:robertiniisa@gmail.com" className="hover:text-slate-600">
                            robertiniisa@gmail.com
                        </a>
                    </div>
                </div>

            </div>
        </>
    );
};
