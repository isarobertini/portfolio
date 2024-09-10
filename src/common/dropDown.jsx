import { Fade } from 'react-awesome-reveal';
import { useState } from 'react';
import { ParagraphComponent } from '../reusableComponents/paragraphComponent';


export const DropDownMenu = () => {
    // State to manage the visibility of dropdown menus and tooltips
    const [isMenu1Open, setMenu1Open] = useState(false);
    const [isMenu2Open, setMenu2Open] = useState(false);
    const [showArtTooltip, setShowArtTooltip] = useState(false);
    const [showWebsitesTooltip, setShowWebsitesTooltip] = useState(false);

    // Toggle function for each menu
    const toggleMenu1 = () => setMenu1Open(!isMenu1Open);
    const toggleMenu2 = () => setMenu2Open(!isMenu2Open);

    // Close menus when clicking outside
    const closeMenus = () => {
        setMenu1Open(false);
        setMenu2Open(false);
        setShowArtTooltip(false);
        setShowWebsitesTooltip(false);
    };

    return (
        <Fade>

            <div className="font-mono flex flex-col items-center justify-center" onClick={closeMenus}>

                <div className="flex space-x-6 relative" onClick={(e) => e.stopPropagation()}>
                    {/* First Dropdown Menu */}
                    <div className="relative inline-block text-left">
                        <button
                            onClick={toggleMenu1}
                            onMouseEnter={() => setShowArtTooltip(true)}
                            onMouseLeave={() => setShowArtTooltip(false)}
                            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black border-dashed border-y-2  shadow-sm hover:border-sky-500"
                        >
                            Art
                            <svg
                                className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-200 ${isMenu1Open ? 'rotate-180' : ''}`}
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
                            <div className="absolute left-0 z-10 w-44 mt-2 origin-top-left bg-black border-dashed border-y-2 border-sky-500 shadow-sm hover:border-white">
                                <div className="py-1">
                                    <a
                                        href="https://www.instagram.com/isarobertini/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-4 py-2 text-sm text-white"
                                    >
                                        Instagram
                                    </a>
                                </div>
                            </div>
                        )}
                        {/* Art Tooltip */}
                        <div
                            className={`absolute bottom-40 left-0 mt-2 px-2 py-1 text-sm text-white bg-black transition-opacity duration-1000  ${showArtTooltip ? 'opacity-100' : 'opacity-0'}`}
                        >
                            View selected artworks
                        </div>
                    </div>

                    {/* Second Dropdown Menu */}
                    <div className="relative inline-block text-left">
                        <button
                            onClick={toggleMenu2}
                            onMouseEnter={() => setShowWebsitesTooltip(true)}
                            onMouseLeave={() => setShowWebsitesTooltip(false)}
                            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black border-dashed border-y-2  shadow-sm hover:border-sky-500"
                        >
                            Websites
                            <svg
                                className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-200 ${isMenu2Open ? 'rotate-180' : ''}`}
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
                            <div className="absolute left-0 z-10 w-44 mt-2 origin-top-left bg-black">
                                <div className="py-1">
                                    <a
                                        href="https://tuanissurfschool.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-4 py-2 text-sm text-white border-dashed border-t-2 border-sky-500 shadow-sm hover:border-white"
                                    >
                                        Tuanis Surf School
                                    </a>
                                    <a
                                        href="https://bellybellybread.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-4 py-2 text-sm text-white border-dashed border-y-2 border-sky-500 shadow-sm hover:border-white"
                                    >
                                        Belly Belly Bread
                                    </a>
                                </div>
                            </div>
                        )}
                        {/* Websites Tooltip */}
                        <div
                            className={`absolute top-60 left-3 mt-2 px-2 py-1 text-sm text-white bg-black transition-opacity duration-1000 ${showWebsitesTooltip ? 'opacity-100' : 'opacity-0'}`}
                        >
                            Visit sites built by me
                        </div>
                    </div>
                </div>

            </div>
        </Fade>
    );
};
