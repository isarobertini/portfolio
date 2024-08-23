// Updated ParagraphComponent to support clickable email address
export const ParagraphComponent = ({ children, text, level = 1, className, style, ...rest }) => {
    const Tag = `h${level}`; // Dynamically set the heading level (h1, h2, h3, etc.)

    // Example of Tailwind classes applied to the heading tag
    const tailwindClasses = `block my-4 text-sm`; // Example classes

    return (
        <Tag className={`${tailwindClasses} ${className}`} style={style} {...rest}>
            {text.includes('@') ? (
                <a href={`mailto:${text}`} className="underline hover:text-gray-300">
                    {text}
                </a>
            ) : (
                text
            )}
            {children}
        </Tag>
    );
};
