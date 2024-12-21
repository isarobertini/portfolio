import React from 'react';

export const ParagraphComponent = ({
    children,
    text,
    level = 1,
    className = '',
    style = {},
    highlighted = false, // New prop to control the highlighted state
    ...rest
}) => {
    const Tag = `h${level}`; // Dynamically set heading level (h1, h2, etc.)

    // Define base and conditional classes
    const baseClasses = `text-sm not-italic p-1 whitespace-pre-wrap transition-all duration-300 ease-in-out`;
    const highlightedClasses = highlighted
        ? `text-blue-700 text-5xl tracking-widest` // Applied if highlighted
        : '';
    const hoverClasses = `hover:text-blue-700 hover:font-bold`;

    // Merge all classes
    const finalClassName = `${baseClasses} ${highlightedClasses} ${hoverClasses} ${className}`.trim();

    return (
        <Tag className={finalClassName} style={style} {...rest}>
            {text && text.includes('@') ? (
                <a href={`mailto:${text}`} className="underline hover:text-gray-300">
                    {text}
                </a>
            ) : (
                <>
                    {text}
                    {children}
                </>
            )}
        </Tag>
    );
};
