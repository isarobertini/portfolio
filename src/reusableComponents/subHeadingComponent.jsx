
export const SubHeadingComponent = ({ children, text, level = 1, className, style, ...rest }) => {
    const Tag = `h${level}`; // Dynamically set the heading level (h1, h2, h3, etc.)

    // Example of Tailwind classes applied to the heading tag
    const tailwindClasses = `text-left my-4 text-xl`; // Example classes

    return (
        <Tag className={`${tailwindClasses} ${className}`} style={style} {...rest}>
            {text}{children}
        </Tag>
    );
};

