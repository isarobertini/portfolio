import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file for custom styles

export const NavBar = () => {
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const location = useLocation(); // Hook to get the current location

    const toggleSubMenu = (menu) => {
        setOpenSubMenu(openSubMenu === menu ? null : menu);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <header className="fixed top-0 w-full bg-white shadow-md z-20">
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
                    <li className={`text-black uppercase font-bold py-5 px-4 border-b border-gray-200 hover:bg-gray-200 ${isActive('/')}`}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={`text-black uppercase font-bold py-5 px-4 border-b border-gray-200 hover:bg-gray-200 relative ${isActive('/Title1') || isActive('/Title2') || isActive('/Title3') || isActive('/Title4') || isActive('/Title5') || isActive('/Title6') || isActive('/Title7') || isActive('/Title8') || isActive('/Title9') || isActive('/Title10') ? 'active' : ''}`}>
                        <span
                            className="cursor-pointer"
                            onClick={() => toggleSubMenu('sculptures')}
                        >
                            Sculptures
                        </span>
                        {openSubMenu === 'sculptures' && (
                            <ul className="submenu bg-white border-l border-gray-200 transform transition-transform duration-260 ease-in-out translate-x-0 mt-8">
                                <li className={`submenu-item ${isActive('/Title1')}`}>
                                    <Link to="/Title1">2023: First one: (nuraghe)
                                        But I don't want to be symbolic
                                        (especially not when it comes to my heritage)</Link>
                                </li>
                                <li className={`submenu-item ${isActive('/Title2')}`}>
                                    <Link to="/Title2">2023: Second one: (impianti di produzione) by the shore (still symbolic)</Link>
                                </li>
                                <li className={`submenu-item ${isActive('/Title3')}`}>
                                    <Link to="/Title3">2023: Third One: Field study</Link>
                                </li>
                                <li className={`submenu-item ${isActive('/Title4')}`}>
                                    <Link to="/Title4">2023: Fourth One: Field study</Link>
                                </li>
                                <li className={`submenu-item ${isActive('/Title5')}`}>
                                    <Link to="/Title5">2023: Fifth One: (Chiesa di San Giuseppe) But I don't want to be personal (especially not when it comes to my heritage)</Link>
                                </li>
                                <li className={`submenu-item ${isActive('/Title6')}`}>
                                    <Link to="/Title6">2024: Sixth One: /+39 320 6885297/part of a stone house/thinking about dry stone walls</Link>
                                </li>
                                <li className={`submenu-item ${isActive('/Title7')}`}>
                                    <Link to="/Title7">2024: Seventh One: /+39 320 6885297/part of a stone house/thinking about dry stone walls</Link>
                                </li>
                                <li className={`submenu-item ${isActive('/Title8')}`}>
                                    <Link to="/Title8">2024: Eighth One: /+39 320 6885297/part of a stone house/thinking about dry stone walls</Link>
                                </li>
                                <li className={`submenu-item ${isActive('/Title9')}`}>
                                    <Link to="/Title9">2024: Ninth One: /+39 320 6885297/part of a stone house/thinking about dry stone walls</Link>
                                </li>
                                <li className={`submenu-item ${isActive('/Title10')}`}>
                                    <Link to="/Title10">2024: Tenth One: /+39 320 6885297 /garden plot/ thinking about dry stone walls</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className={`text-black uppercase font-bold py-5 px-4 border-b border-gray-200 hover:bg-gray-200 relative ${isActive('/text1') || isActive('/text2') || isActive('/text3') ? 'active' : ''}`}>
                        <span
                            className="cursor-pointer"
                            onClick={() => toggleSubMenu('texts')}
                        >
                            Texts
                        </span>
                        {openSubMenu === 'texts' && (
                            <ul className="submenu bg-white border-l border-gray-200 transform transition-transform duration-260 ease-in-out translate-x-0 mt-8">
                                <li className={`submenu-item ${isActive('/text1')}`}>
                                    <Link to="/text1">2022: First one: thinking about outside structures</Link>
                                </li>
                                <li className={`submenu-item ${isActive('/text2')}`}>
                                    <Link to="/text2">2023-2024: Second one: thinking about inside structures</Link>
                                </li>
                                <li className={`submenu-item ${isActive('/text3')}`}>
                                    <Link to="/text3">I think about</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};
