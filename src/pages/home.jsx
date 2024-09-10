import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import { HeadingComponent } from "../reusableComponents/headingComponent";
import '../reusableComponents/styles.css'; // Import your CSS here
import './border.css';
import { DropDownMenu } from '../common/dropDown';
import { ParagraphPopUpComponent } from '../reusableComponents/paragraphPopUpComponent';
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

            {/* Helmet for SEO and meta tags */}
            <Helmet>
                <title>Isa Robertini</title>
                <meta name="description" content="Isa Robertini is an artist and web developer. Contact for more information." />
            </Helmet>

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
            <div className='bg-black flex flex-col items-center justify-center w-full h-screen'>
                {/* Paragraph Component on top of the Menus */}
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



            {/* Work section */}
            {/*
            <div className="relative w-full h-32 bg-gradient-to-b from-black to-white">
              
            </div>
            <section
                className={`relative flex items-center justify-center w-full h-screen transition-all duration-500 ease-in-out ${isClicked ? 'white-bg' : 'bg-black'}`}
            >
             
                <div className='room-border-work flex flex-col justify-center'>

                    <div className=''>
                        <ParagraphPopUpComponent className="items-center text-black" text="Symbolic">
                          
                            <p className="">This is some additional content inside the popup!</p>
                            <img src="https://via.placeholder.com/150" alt="Example" className="my-4 mx-auto" />
                        </ParagraphPopUpComponent>
                    </div>

                    <div className=''>
                        <ParagraphPopUpComponent className="items-center text-black" text="Critical">
                       
                            <p className="">This is some additional content inside the popup!</p>
                            <img src="https://via.placeholder.com/150" alt="Example" className="my-4 mx-auto" />
                        </ParagraphPopUpComponent>
                    </div>
                    <div className=''>
                        <ParagraphPopUpComponent className="items-center text-black" text="Political">
                          
                            <p className="">This is some additional content inside the popup!</p>
                            <img src="https://via.placeholder.com/150" alt="Example" className="my-4 mx-auto" />
                        </ParagraphPopUpComponent>
                    </div>
                </div>
            </section>
            */}
        </div>

    );
};
