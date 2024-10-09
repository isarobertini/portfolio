import { useState, useRef } from 'react';

import { ParagraphPopUpComponent } from '../reusableComponents/paragraphPopUpComponent';
import { ParagraphComponent } from '../reusableComponents/paragraphComponent';
import { ImageComponent } from '../reusableComponents/imageComponent';
import { SubHeadingComponent } from '../reusableComponents/subHeadingComponent';

import '../reusableComponents/styles.css'; // Import your CSS here
import '../pages/border.css';
import politicalVertical from '../assets/citicalMoments/politicalVertical.webp'
import political from '../assets/citicalMoments/political.webp'
import politicalCloseUp from '../assets/citicalMoments/politicalCloseUp.webp'
import politicalInstallation from '../assets/citicalMoments/politicalInstallation.webp'

import criticalClose from '../assets/citicalMoments/criticalClose.webp'
import critical from '../assets/citicalMoments/critical.webp'
import criticalCloseUp from '../assets/citicalMoments/criticalDetail.webp'
import criticalInstallation from '../assets/citicalMoments/criticalInstallation.webp'

import symbolicInstallation from '../assets/citicalMoments/symbolicInstallation.webp'
import symbolic from '../assets/citicalMoments/symbolic.webp'
import symbolicCloseUp from '../assets/citicalMoments/symbolicDetail.webp'

import symbolic2 from '../assets/citicalMoments/symbolic2.webp'
import symbolic2CloseUp from '../assets/citicalMoments/symbolic2Installation.png'

import criticalPolitical from '../assets/citicalMoments/criticalPolitical.webp'
import criticalPoliticalInstallation from '../assets/citicalMoments/criticalPoliticalInstallation.webp'

import floorplan from '../assets/floorplanKannski.png'

export const CriticalMomentsComponent = () => {
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
            {/* Section works */}

            <div className='z-40 flex flex-col items-center justify-center'>

                <div className='px-6 flex flex-col'>

                    <SubHeadingComponent className="text-white" text='Critical Moments' />
                    <ParagraphComponent className="text-white">
                        <a href="https://www.gallerykannski.com/" target="_blank" rel="noopener noreferrer">Gallery Kannski</a>
                    </ParagraphComponent>
                    <ParagraphComponent className="text-white" text="Duo-exhibition with J.Pasila" />
                    <ParagraphComponent className="z-40 text-white" text="curated by Sadie Cook and Diljá Þorvaldsdóttir" />
                    <ImageComponent className="my-4 w-80 h-auto" src={floorplan} />

                    <div className='bg-black h-auto text-amber-400 h-screen'>

                        <ParagraphPopUpComponent text="1- Political - overview, detail, installation">
                            {/* Popup content - images */}
                            <ImageComponent src={politicalVertical} alt="Political Overview" className="w-full h-auto mb-2" />
                            <ImageComponent src={political} alt="Political Overview" className="w-full h-auto mb-2" />
                            <ImageComponent src={politicalCloseUp} alt="Political Close Up" className="w-full h-auto mb-2" />
                            <ImageComponent src={politicalInstallation} alt="Political Installation" className="w-full h-auto mb-2" />
                            {/* Popup content - text */}
                            <ParagraphComponent className="font-bold">Political</ParagraphComponent>
                            <ParagraphComponent>
                                2024, 60x60cm <br />
                                handle from my great-grandmothers dresser, spghetti, fregula</ParagraphComponent>

                            <ParagraphComponent className="text-xs text-gray-500">
                                Documentation: <a href="https://www.gallerykannski.com/" target="_blank" rel="noopener noreferrer">Gallery Kannski</a>
                            </ParagraphComponent>
                        </ParagraphPopUpComponent>

                        <ParagraphPopUpComponent text="2- Critical - overview, detail, installation">
                            {/* Popup content - images */}
                            <ImageComponent src={criticalClose} alt="Political Overview" className="w-full h-auto mb-2" />
                            <ImageComponent src={critical} alt="Political Overview" className="w-full h-auto mb-2" />
                            <ImageComponent src={criticalCloseUp} alt="Political Close Up" className="w-full h-auto mb-2" />
                            <ImageComponent src={criticalInstallation} alt="Political Installation" className="w-full h-auto mb-2" />

                            {/* Popup content - text */}
                            <ParagraphComponent className="font-bold">Critical</ParagraphComponent>
                            <ParagraphComponent>
                                2024, 60x60cm<br />
                                half a door lock found at my grandmothers house, spaghetti, fregula</ParagraphComponent>

                            <ParagraphComponent className="text-xs text-gray-500">
                                Documentation: <a href="https://www.gallerykannski.com/" target="_blank" rel="noopener noreferrer">Gallery Kannski</a>
                            </ParagraphComponent>
                        </ParagraphPopUpComponent>

                        <ParagraphPopUpComponent text="3 - Symbolic - overview, detail, installation">
                            {/* Popup content - images */}
                            <ImageComponent src={symbolic} alt="Political Overview" className="w-full h-auto mb-2" />
                            <ImageComponent src={symbolicCloseUp} alt="Political Close Up" className="w-full h-auto mb-2" />
                            <ImageComponent src={symbolicInstallation} alt="Political Overview" className="w-full h-auto mb-2" />

                            {/* Popup content - text */}
                            <ParagraphComponent className="font-bold">Symbolic</ParagraphComponent>
                            <ParagraphComponent>
                                2024, 40x30cm<br />
                                Metal object made by my grandfather, spaghetti</ParagraphComponent>

                            <ParagraphComponent className="text-xs text-gray-500">
                                Documentation: <a href="https://www.gallerykannski.com/" target="_blank" rel="noopener noreferrer">Gallery Kannski</a>
                            </ParagraphComponent>
                        </ParagraphPopUpComponent>

                        <ParagraphPopUpComponent text="4 - Critical, Political - overview, detail, installation">
                            {/* Popup content - images */}
                            <ImageComponent src={criticalPolitical} alt="Political Overview" className="w-full h-auto mb-2" />
                            <ImageComponent src={criticalPoliticalInstallation} alt="Political Overview" className="w-full h-auto mb-2" />

                            {/* Popup content - text */}
                            <ParagraphComponent className="font-bold">Critical, Political</ParagraphComponent>
                            <ParagraphComponent>
                                2024, 20x20cm<br />
                                fregula, a door in the gallery.</ParagraphComponent>

                            <ParagraphComponent className="text-xs text-gray-500">
                                Documentation: <a href="https://www.gallerykannski.com/" target="_blank" rel="noopener noreferrer">Gallery Kannski</a>
                            </ParagraphComponent>
                        </ParagraphPopUpComponent>

                        <ParagraphPopUpComponent text="5 - Symbolic - overview, detail, installation">
                            {/* Popup content - images */}
                            <ImageComponent src={symbolic2} alt="Political Overview" className="w-full h-auto mb-2" />
                            <ImageComponent src={symbolic2CloseUp} alt="Political Close Up" className="w-full h-auto mb-2" />

                            {/* Popup content - text */}
                            <ParagraphComponent className="font-bold">Symbolic</ParagraphComponent>
                            <ParagraphComponent>
                                2024, 40x30cm<br />
                                lock from my grandmothers door, spghetti, drawing on the wall.</ParagraphComponent>

                            <ParagraphComponent className="text-xs text-gray-500">
                                Documentation: <a href="https://www.gallerykannski.com/" target="_blank" rel="noopener noreferrer">Gallery Kannski</a>
                            </ParagraphComponent>
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
                            <ParagraphComponent className="font-bold">
                                Symbolic, Critical, Political<br />
                            </ParagraphComponent>
                            <ParagraphComponent>
                                Text, 2024<br />
                                Isa Robertini
                            </ParagraphComponent>
                        </ParagraphPopUpComponent>
                    </div>
                </div>
            </div>

        </>
    );
};
