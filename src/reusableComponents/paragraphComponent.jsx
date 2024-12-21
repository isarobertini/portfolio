import React from 'react';

export const ParagraphComponent = ({
    children,
    text,
    level = 1,
    className = '',
    style = {},
    highlighted = false,
    ...rest
}) => {
    const Tag = `h${level}`;
    const baseClasses = `text-sm p-1 whitespace-pre-wrap transition-all duration-300 ease-in-out`;
    const highlightedClasses = highlighted ? 'text-blue-700 text-4xl tracking-widest' : '';
    const hoverClasses = `hover:text-blue-700 hover:font-bold`;

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
