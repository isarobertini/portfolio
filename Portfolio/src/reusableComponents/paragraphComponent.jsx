import React from 'react';

export const ParagraphComponent = ({ text, className, style, ...rest }) => {

    // Example of Tailwind classes applied to the heading tag
    const tailwindClasses = `text-2xl text-center`; // Example classes

    return (
        <Tag className={`${tailwindClasses} ${className}`} style={style} {...rest}>
            {text}
        </Tag>
    );
};


