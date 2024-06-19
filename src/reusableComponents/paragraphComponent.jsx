import React from 'react';

export const ParagraphComponent = ({ children, text, className, style, ...rest }) => {

    // Example of Tailwind classes applied to the heading tag
    const tailwindClasses = `text-2xl`; // Example classes

    return (
        <p className={`${tailwindClasses} ${className}`} style={style} {...rest}>
            {children}
            {text}
        </p>
    );
};


