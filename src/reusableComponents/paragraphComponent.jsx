
export const ParagraphComponent = ({
    children,
    text,
    level = 1,
    className = '',
    style = {},
    highlighted = false,
    isDarkBg = false,
    ...rest
}) => {
    const Tag = `h${level}`;

    const baseClasses = `
        leading-relaxed
        mb-3
        whitespace-pre-wrap
        transition-colors
        duration-300
    `;

    const colorClasses = isDarkBg
        ? 'text-white'
        : 'text-black';

    const highlightedClasses = highlighted
        ? 'text-blue-700 text-4xl tracking-widest'
        : '';

    const hoverClasses = `hover:`;

    const finalClassName = `
        ${baseClasses}
        ${colorClasses}
        ${highlightedClasses}
        ${hoverClasses}
        ${className}
    `.trim();

    return (
        <Tag className={finalClassName} style={style} {...rest}>
            {text && text.includes('@') ? (
                <a
                    href={`mailto:${text}`}
                    className="underline hover:text-gray-400"
                >
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
