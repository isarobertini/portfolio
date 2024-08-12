import React, { useState, useRef, useEffect } from 'react';

export const DropDownMenu = () => {
    const [isArtOpen, setIsArtOpen] = useState(false);
    const [isWebsiteOpen, setIsWebsiteOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = (dropdown) => {
        if (dropdown === 'art') {
            setIsArtOpen(prev => !prev);
            setIsWebsiteOpen(false); // Ensure the other dropdown is closed
            setIsContactOpen(false); // Ensure the other dropdown is closed
        } else if (dropdown === 'website') {
            setIsWebsiteOpen(prev => !prev);
            setIsArtOpen(false); // Ensure the other dropdown is closed
            setIsContactOpen(false); // Ensure the other dropdown is closed
        } else if (dropdown === 'contact') {
            setIsContactOpen(prev => !prev);
            setIsArtOpen(false); // Ensure the other dropdown is closed
            setIsWebsiteOpen(false); // Ensure the other dropdown is closed
        }
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsArtOpen(false);
            setIsWebsiteOpen(false);
            setIsContactOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen" ref={dropdownRef}>
            {/* Art Button and Dropdown */}
            <div className="relative mb-4">
                <button
                    onClick={() => toggleDropdown('art')}
                    className="px-4 py-2 border-2 border-white text-white bg-black focus:outline-none transition-transform transform hover:scale-105"
                >
                    Art
                </button>
                {isArtOpen && (
                    <div
                        className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-48 border-2 border-white text-white bg-black z-30 transition-opacity duration-300 ease-out ${isArtOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        <ul className="list-none p-0 m-0 text-center">
                            <li>
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-4 py-2 border-2 border-white text-white bg-blackhover:bg-black hover:text-white transition-colors duration-300"
                                >
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Website Button and Dropdown */}
            <div className="relative mb-4">
                <button
                    onClick={() => toggleDropdown('website')}
                    className="px-4 py-2 border-2 border-white text-white bg-black focus:outline-none transition-transform transform hover:scale-105"
                >
                    Websites
                </button>
                {isWebsiteOpen && (
                    <div
                        className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-48 border-2 border-white text-white bg-black z-20 transition-opacity duration-300 ease-out ${isWebsiteOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        <ul className="list-none p-0 m-0 text-center">
                            <li>
                                <a
                                    href="https://tuanissurfschool.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300"
                                >
                                    Tuanis Surf School
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://bellybellybread.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300"
                                >
                                    Belly Belly Bread
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Contact Button and Dropdown */}
            <div className="relative">
                <button
                    onClick={() => toggleDropdown('contact')}
                    className="px-4 py-2 border-2 border-2 border-white text-white bg-black focus:outline-none transition-transform transform hover:scale-105"
                >
                    Contact
                </button>
                {isContactOpen && (
                    <div
                        className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-48 bg-white border-2 border-black shadow-lg z-10 transition-opacity duration-300 ease-out ${isContactOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        <ul className="list-none p-0 m-0 text-center">
                            <li className="px-2 py-2 border-2 border-white text-white bg-black hover:bg-black hover:text-white transition-colors duration-300">
                                robertiniisa@gmail.com
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};
