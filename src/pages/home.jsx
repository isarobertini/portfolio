import React, { useState, useRef } from 'react';
import { HeadingComponent } from "../reusableComponents/headingComponent";
import '../reusableComponents/styles.css'; // Import your CSS here
import './border.css';
import { DropDownMenu } from '../common/dropDown';
import { ParagraphComponent } from '../reusableComponents/paragraphComponent';

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
            <section
                className={`relative flex items-center justify-center w-full h-screen transition-all duration-500 ease-in-out ${isClicked ? 'white-bg' : 'bg-black'}`}
            >
                <div className='room-border relative flex items-center justify-center'>
                    <div className='room-border-content'>
                        <HeadingComponent
                            text={isClicked ? "You" : "Isa Robertini"}
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

            {/* Work section*/}
            <div className="relative w-full h-32 bg-gradient-to-b from-black to-white">
                {/* Gradient effect */}
            </div>
            <section
                className={`relative flex items-center justify-center w-full h-screen transition-all duration-500 ease-in-out ${isClicked ? 'white-bg' : 'bg-black'}`}
            >
                <div className='room-border-work flex items-center justify-center'>
                    <div className='room-border-work-content '>
                        <div className='flex items-center justify-center'>
                            <ParagraphComponent className="text-black absolute top-10" text="Space" />
                        </div>
                        <div className='absolute right-30 bottom-80 border-2 border-black h-7 w-7 rounded-full'></div>

                        <div className='absolute left-40 border-2 border-black h-7 w-7 rounded-full'></div>

                        <div className='absolute right-80 bottom-40 border-2 border-black h-7 w-7 rounded-full'></div>
                    </div>
                </div>
            </section>

        </div>
    );
};
