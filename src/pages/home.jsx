import { useState } from 'react';
import { Helmet } from 'react-helmet';

import { HeadingComponent } from "../reusableComponents/headingComponent";
import { ParagraphComponent } from '../reusableComponents/paragraphComponent';
import { SubHeadingComponent } from '../reusableComponents/subHeadingComponent';
import { ParentCriticalMoment } from '../reusableComponents/parentCriticalMoment';
import { ParentContentShow } from '../reusableComponents/parentContentShows';

import '../reusableComponents/styles.css';
import './border.css';


export const Home = () => {
    const [activeTab, setActiveTab] = useState(null); // State to track which tab is active
    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (section) => {
        setExpandedSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section], // Toggle the visibility of the section
        }));
    };

    return (
        <>
            {/* Helmet for SEO and meta tags */}
            <Helmet>
                <title>Isa Robertini</title>
                <meta name="description" content="Isa Robertini is an artist and web developer. Contact for more information." />
            </Helmet>

            {/* Container */}
            <div className="w-auto transition-all duration-500 ease-in-out">

                {/* Dropdown Section */}
                <div className="flex flex-col items-center justify-center w-full h-auto">
                    <div>
                        <HeadingComponent>Isa Robertini</HeadingComponent>
                    </div>

                    {/* Tab Buttons */}
                    <div className="flex flex-row justify-center items-center w-full mt-4">
                        <button
                            className={`mx-4 p-2 text-lg ${activeTab === 'art' ? 'underline font-bold' : ''}`}
                            onClick={() => setActiveTab('art')}
                        >
                            Art
                        </button>
                        <button
                            className={` mx-4 p-2 text-lg ${activeTab === 'websites' ? 'underline font-bold text-blue-700' : ''}`}
                            onClick={() => setActiveTab('websites')}
                        >
                            Websites
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="mt-8">
                        {activeTab === 'art' && (
                            <div className="mx-2 lg:mx-48">
                                <ParagraphComponent className="underline decoration-dashed">
                                    CRITICAL MOMENTS<br />07.09.24-15.09.24<br />Gallery Kannski<br />ARTISTS: J. Pasila, Isa Robertini
                                </ParagraphComponent>

                                {/* Dropdown Sections Critical Moments */}
                                <div>
                                    <ParentCriticalMoment />

                                </div>

                                {/* Content Shows Section*/}
                                <ParagraphComponent className="underline decoration-dashed justify-items-center">
                                    The Content Shows<br />26.09.23, 05.011.23, 08.02.2024, 02.05.2024<br />Folkteatern Göteborg<br />
                                    ARTISTS: Isa Robertini, Aftab Soltani, Agnes Lindheim, Amie Okenfors, Annie Mo Kellborg, Arvid Kraft, Astrid Schütter, Adam Ameline, Beatrice Fransson, Ebba Olsson, Edvin Cedergren, Emil Söderberg, Emma Stihl, Erik Karlsson, Erik Mattsson, Eskil Hagman, Felicia Ling, Felicia Ljunggren Stanberg, Greta Pielage, Gustav Danielssonbacka, Hampus Karlsson, Hedda Bauer, Hedda Sonnegård, Hedvig Schroeder, Ivan Johansson, Izola Johansson, John Dexter Zetterquist, John Ström Betilov, Jonathan Stanberg, Kassam Abdel Mallak, Kit Simpson, Lasse Eriksson, Leonie Dahlström, Leonie Björhsholm, Levi Ungsgaard, Linn Björheden, Linnea Hilding, Maja Oldefors, Maja Rut Eriksson, Molly Fagerberg, Noah Nordenstam, Olga Kardell, Olivia Brothén, Sahar Armandi, Sara Bessa, Sexter Lindquist, Simba Sinkkonen, Selma Lindhe, Sofia Träff, Solen Alii,Stella Wireen Lindman, Stella Q Wilmer, Tea Berglund, Tea Besglund, Tilde Bengtsson Älgeby, Vera Montelius, Vincent Maiari.
                                </ParagraphComponent>

                                {/* Mounting Content Shows  */}

                                <ParentContentShow />

                            </div>

                        )}

                        {activeTab === 'websites' && (
                            <div>
                                <SubHeadingComponent className="cursor-pointer">
                                    <a href="https://tuanissurfschool.com/" target="_blank" rel="noopener noreferrer">
                                        Tuanis Surf School -- visit
                                    </a>
                                </SubHeadingComponent>
                                <SubHeadingComponent className="cursor-pointer">
                                    <a href="https://bellybellybread.com/" target="_blank" rel="noopener noreferrer">
                                        Belly Belly Bread -- visit
                                    </a>
                                </SubHeadingComponent>
                            </div>
                        )}
                    </div>

                    {/* Contact */}
                    <div className="text-black p-3 mt-4">
                        <a href="mailto:robertiniisa@gmail.com" className="hover:text-slate-600">
                            robertiniisa@gmail.com
                        </a>
                    </div>

                </div>

            </div >

        </>
    );
};
