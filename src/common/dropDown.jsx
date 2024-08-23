import { Fade } from 'react-awesome-reveal';

import { useState } from 'react';
import { ParagraphComponent } from '../reusableComponents/paragraphComponent';

export const DropDownMenu = () => {
    // State to manage the visibility of dropdown menus
    const [isMenu1Open, setMenu1Open] = useState(false);
    const [isMenu2Open, setMenu2Open] = useState(false);

    // Toggle function for each menu
    const toggleMenu1 = () => setMenu1Open(!isMenu1Open);
    const toggleMenu2 = () => setMenu2Open(!isMenu2Open);

    // Close menus when clicking outside
    const closeMenus = () => {
        setMenu1Open(false);
        setMenu2Open(false);
    };

    return (
        <Fade>
            <div className="font-mono bg-black flex flex-col items-center justify-center min-h-screen" onClick={closeMenus}>

                <div className='border-y border-white m-6'>
                    {/* Paragraph Component on top of the Menus */}
                    <ParagraphComponent className="text-white mt-4" text="get in contact for further information" />
                </div>

                <div className="flex space-x-6" onClick={(e) => e.stopPropagation()}>
                    {/* First Dropdown Menu */}
                    <div className="relative inline-block text-left">
                        <button
                            onClick={toggleMenu1}
                            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black border border-gray-300 rounded-sm shadow-sm hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-slate-600"
                        >
                            Art
                            <svg
                                className="-mr-1 ml-2 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        {isMenu1Open && (
                            <div className="absolute left-0 z-10 w-44 mt-2 origin-top-left bg-black border border-gray-300 rounded-sm shadow-lg">
                                <div className="py-1">
                                    <a
                                        href="https://www.instagram.com/isarobertini/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-4 py-2 text-sm text-white hover:bg-slate-600"
                                    >
                                        Instagram
                                    </a>
                                    <a
                                        href="https://www.gallerykannski.com/upcomingshows"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-4 py-2 text-sm text-white hover:bg-slate-600"
                                    >
                                        Upcoming
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Second Dropdown Menu */}
                    <div className="relative inline-block text-left">
                        <button
                            onClick={toggleMenu2}
                            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black border border-gray-300 rounded-sm shadow-sm hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600"
                        >
                            Websites
                            <svg
                                className="-mr-1 ml-2 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        {isMenu2Open && (
                            <div className="absolute left-0 z-10 w-44 mt-2 origin-top-left bg-black border border-gray-300 rounded-sm shadow-lg">
                                <div className="py-1">
                                    <a
                                        href="https://tuanissurfschool.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-4 py-2 text-sm text-white hover:bg-slate-600"
                                    >
                                        Tuanis Surf School
                                    </a>
                                    <a
                                        href="https://bellybellybread.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-4 py-2 text-sm text-white hover:bg-slate-600"
                                    >
                                        Belly Belly Bread
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {/* Paragraph Component Below the Menus */}
                <div className='border-y text-white border-white p-6 m-6'>
                    <a href="mailto:robertiniisa@gmail.com" className="hover:text-slate-600">
                        robertiniisa@gmail.com
                    </a>
                </div>
            </div>
        </Fade>

    );
};
