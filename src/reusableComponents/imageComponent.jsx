import React, { useState } from 'react';

export const ImageComponent = ({ src, alt, description, className, style, ...rest }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = (event) => {
        event.stopPropagation();
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="w-full">
            {/* Image and description */}
            <img
                src={src}
                alt={alt}
                className={`z-10 cursor-pointer ${className}`}
                style={style}
                onClick={handleImageClick}
                {...rest}
            />

            {/* Show description only when modal is NOT open */}
            {!isModalOpen && description && (
                <p className="mt-2 text-xs text-left">
                    {description}
                </p>
            )}

            {/* Modal (image only on dark background) */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
                    onClick={handleCloseModal}
                >
                    <button
                        onClick={handleCloseModal}
                        className="absolute top-6 right-6 text-white text-4xl font-light z-50"
                        aria-label="Close image modal"
                    >
                        &times;
                    </button>

                    <img
                        src={src}
                        alt={alt}
                        className="max-w-full max-h-full object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};
