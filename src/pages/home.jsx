import React, { useState, useRef, useEffect } from 'react';
import { HeadingComponent } from "../reusableComponents/headingComponent";
import '../reusableComponents/styles.css'; // Import your CSS here
import { DropDownMenu } from '../common/dropDown';

export const Home = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [lineStyle, setLineStyle] = useState({});
    const headingRef = useRef(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (headingRef.current && dropdownRef.current) {
            const headingRect = headingRef.current.getBoundingClientRect();
            const dropdownRect = dropdownRef.current.getBoundingClientRect();

            setLineStyle({
                top: `${headingRect.bottom}px`,
                left: `${headingRect.left + headingRect.width / 2}px`,
                width: `${dropdownRect.left + dropdownRect.width / 2 - headingRect.left - headingRect.width / 2}px`
            });
        }
    }, [isClicked]);

    const backgroundColor = isClicked ? 'bg-white' : 'bg-black';

    return (
        <>
            <div
                className={`relative flex items-center justify-center w-screen h-screen transition-all duration-500 ease-in-out ${backgroundColor}`}
                onClick={() => setIsClicked(!isClicked)}
            >
                <HeadingComponent text="Isa Robertini" ref={headingRef} />
                {isClicked && (
                    <div className="absolute z-10" style={{ ...lineStyle, height: '2px', backgroundColor: 'black', transition: 'width 0.5s ease-out' }}></div>
                )}
            </div>
            <div ref={dropdownRef}>
                <DropDownMenu />
            </div>
        </>
    );
};
