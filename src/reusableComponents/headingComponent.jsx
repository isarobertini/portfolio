import React, { useState } from 'react';
import './styles.css'; // Ensure the path is correct

export const HeadingComponent = ({ children, text, level = 1, className, style, ...rest }) => {
    const Tag = `h${level}`;

    const [isClicked, setIsClicked] = useState(false);
    const [circlesVisible, setCirclesVisible] = useState(true); // State for circle visibility

    const tailwindClasses = `text-2xl text-center cursor-pointer transition-all duration-500 ease-in-out relative heading`;

    const defaultStyles = 'text-white';
    const clickedStyles = 'text-black';

    const handleClick = () => {
        setIsClicked(!isClicked);
        setCirclesVisible(false); // Hide circles when clicked
    };

    return (
        <Tag
            className={`${tailwindClasses} ${isClicked ? clickedStyles : defaultStyles} ${className}`}
            style={style}
            onClick={handleClick}
            {...rest}
        >
            {text}
            {children}

            {/* Conditionally render circles */}
            {circlesVisible && (
                <>
                    <span className="circle"></span>
                    <span className="circle delay-200"></span>
                    <span className="circle delay-400"></span>
                </>
            )}
        </Tag>
    );
};
