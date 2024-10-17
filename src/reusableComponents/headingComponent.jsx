import './styles.css'; // Ensure the path is correct

export const HeadingComponent = ({ children, text, level = 1, className, style, isClicked, onClick, ...rest }) => {
    const Tag = `h${level}`;

    const tailwindClasses = `animate-pulse bg-radiating-gradient bg-clip-text text-transparent animate-radiate text-xl text-center cursor-pointer transition-all duration-500 ease-in-out relative heading z-50 relative`;

    const defaultStyles = 'text-black dashed-text';
    const clickedStyles = 'text-black dashed-text';  // Apply the dashed and animated styles when clicked

    return (
        <Tag
            className={`${tailwindClasses} ${isClicked ? clickedStyles : defaultStyles} ${className}`}
            style={style}
            onClick={onClick} // Handle click with parent's handler
            {...rest}
        >
            {text}
            {children}
        </Tag>
    );
};
