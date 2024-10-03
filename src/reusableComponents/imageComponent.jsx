export const ImageComponent = ({ src, alt, className, style, ...rest }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`relative z-10 ${className}`} // Added 'relative' and 'z-10' for stacking
            style={style}
            {...rest}
        />
    );
};
