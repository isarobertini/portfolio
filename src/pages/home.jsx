import React, { useState, useRef } from 'react';
import { HeadingComponent } from "../reusableComponents/headingComponent";
import '../reusableComponents/styles.css'; // Import your CSS here
import { DropDownMenu } from '../common/dropDown';

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
        <div className={`w-screen h-screen ${isClicked ? 'overflow-auto' : 'overflow-hidden'} transition-all duration-500 ease-in-out`}>
            {/* Heading Section */}
            <section className={`relative flex items-center justify-center w-full h-screen transition-all duration-500 ease-in-out ${isClicked ? 'bg-white' : 'bg-black'}`}>
                <HeadingComponent
                    text="Isa Robertini"
                    isClicked={isClicked}
                    onClick={handleHeadingClick}
                    className="relative z-10"
                />
            </section>

            {/* Gradient Spacer */}
            {isClicked && (
                <div className="relative w-full h-32 bg-gradient-to-b from-white to-black">
                    {/* Gradient effect */}
                </div>
            )}

            {/* Dropdown Section */}
            <section ref={dropdownRef} className="relative w-full min-h-screen bg-black">
                {isClicked && (
                    <div className="relative">
                        <DropDownMenu />
                    </div>
                )}
            </section>
        </div>
    );
};
