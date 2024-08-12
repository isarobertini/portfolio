import React from 'react';
import './styles.css'; // Ensure the path is correct

export const HeadingComponent = ({ children, text, level = 1, className, style, isClicked, onClick, ...rest }) => {
    const Tag = `h${level}`;

    const tailwindClasses = `text-2xl text-center cursor-pointer transition-all duration-500 ease-in-out relative heading`;

    const defaultStyles = 'text-white';
    const clickedStyles = 'text-black';

    return (
        <Tag
            className={`${tailwindClasses} ${isClicked ? clickedStyles : defaultStyles} ${className}`}
            style={style}
            onClick={onClick} // Handle click with parent's handler
            {...rest}
        >
            {text}
            {children}

            {/* Conditionally render circles */}
            {!isClicked && (
                <>
                    <span className="circle"></span>
                    <span className="circle delay-200"></span>
                    <span className="circle delay-400"></span>
                </>
            )}
        </Tag>
    );
};
