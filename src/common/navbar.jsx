import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file for custom styles
import { HeadingComponent } from '../reusableComponents/headingComponent';

export const NavBar = () => {
    const [isSculpturesSubMenuOpen, setIsSculpturesSubMenuOpen] = useState(false);
    const [isTextsWithSubtitlesSubMenuOpen, setIsTextsWithSubtitlesSubMenuOpen] = useState(false);

    const toggleSculpturesSubMenu = () => {
        setIsSculpturesSubMenuOpen(!isSculpturesSubMenuOpen);
    };

    const toggleTextsWithSubtitlesSubMenu = () => {
        setIsTextsWithSubtitlesSubMenuOpen(!isTextsWithSubtitlesSubMenuOpen);
    };

    return (
        <header className="fixed w-full bg-white shadow-md z-20">
            <input type="checkbox" id="openSideMenu" className="hidden" />
            <label
                htmlFor="openSideMenu"
                className="menuIconToggle cursor-pointer fixed z-40 top-8 left-8 h-5 w-5"
            >
                <div className="hamb-line dia part-1"></div>
                <div className="hamb-line hor"></div>
                <div className="hamb-line dia part-2"></div>
            </label>
            <nav className="fixed left-0 w-80 mt-24 bg-white border-l border-gray-200 transform -translate-x-80 transition-transform duration-260 ease-in-out">
                <ul className="m-0 p-0 border-t border-gray-200">
                    <li className="text-black uppercase font-bold py-5 px-4 border-b border-gray-200 hover:bg-gray-200">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-black uppercase font-bold py-5 px-4 border-b border-gray-200 hover:bg-gray-200 relative">
                        <span
                            className="cursor-pointer"
                            onClick={toggleSculpturesSubMenu}
                        >
                            Sculptures
                        </span>
                        {isSculpturesSubMenuOpen && (
                            <ul className="submenu bg-white border-l border-gray-200 transform transition-transform duration-260 ease-in-out translate-x-0 mt-8">
                                <li className="submenu-item">
                                    <Link to="/Title1">2023: First one: (symbolic)
                                        But I don't want to be symbolic
                                        (especially not when it comes to my herritage)</Link>
                                </li>
                                <li className="submenu-item">
                                    <Link to="/Title2">2023: Second one: Again? I'm so desperate (to be symbolic)</Link>
                                </li>
                                <li className="submenu-item">
                                    <Link to="/Title3">2023: Third One: 2023: Is the beach now symbolic?</Link>
                                </li>
                                <li className="submenu-item">
                                    <Link to="/Title4">2023: Fourth One: Is the backyard now symbolic?</Link>
                                </li>
                                <li className="submenu-item">
                                    <Link to="/Title5">2023: Fifth One: House</Link>
                                </li>
                                <li className="submenu-item">
                                    <Link to="/Title6">2024: Sixth One: Less symbolic (thinking about dry stone walls)</Link>
                                </li>
                                <li className="submenu-item">
                                    <Link to="/Title7">2024: Seventh One: Less symbolic (thinking about dry stone walls)</Link>
                                </li>
                                <li className="submenu-item">
                                    <Link to="/Title8">2024: Eighth One: Disco Club (thinking about dry stone walls)</Link>
                                </li>
                                <li className="submenu-item">
                                    <Link to="/Title9">2024: Ninth One: Less symbolic (thinking about dry stone walls)</Link>
                                </li>
                                <li className="submenu-item">
                                    <Link to="/Title10">2024: Tenth One: Less symbolic (thinking about dry stone walls)</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="text-black uppercase font-bold py-5 px-4 border-b border-gray-200 hover:bg-gray-200 relative">
                        <span
                            className="cursor-pointer"
                            onClick={toggleTextsWithSubtitlesSubMenu}
                        >
                            Texts
                        </span>
                        {isTextsWithSubtitlesSubMenuOpen && (
                            <ul className="submenu bg-white border-l border-gray-200 transform transition-transform duration-260 ease-in-out translate-x-0 mt-8">
                                {/* Add your links for Texts with subtitles here */}
                                <li className="submenu-item">
                                    <Link to="/text1">ITA, AUT, SWE</Link>
                                </li>
                                <li className="submenu-item">
                                    <Link to="/text2">Second one</Link>
                                </li>
                                <li className="submenu-item">
                                    <Link to="/TextSubtitle3">Subtitle 3</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};
