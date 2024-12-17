import './styles.css'; // Ensure the path is correct

export const HeadingComponent = ({ children, text, level = 1, className, style, isClicked, onClick, ...rest }) => {
    const Tag = `h${level}`;

    const tailwindClasses = `font-serif text-blue-700 text-2xl text-center pt-7`;



    return (
        <Tag
            className={`${tailwindClasses} {className}`}
            style={style}
            onClick={onClick} // Handle click with parent's handler
            {...rest}
        >
            {text}
            {children}
        </Tag>
    );
};
