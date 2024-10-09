// src/reusableComponents/ImageComponent.js
import React, { useState } from 'react';

export const ImageComponent = ({ src, alt, className, style, ...rest }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {/* Image element */}
            <img
                src={src}
                alt={alt}
                className={`relative z-10 cursor-pointer ${className}`} // Added cursor pointer
                style={style}
                onClick={handleImageClick} // Open modal on click
                {...rest}
            />

            {/* Modal for enlarged image */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="relative p-4">
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-4 right-5 text-black text-2xl"
                        >
                            &times; {/* Close button */}
                        </button>
                        <img
                            src={src}
                            alt={alt}
                            className="max-w-full max-h-screen" // Ensure the image fits within the screen
                        />
                    </div>
                </div>
            )}
        </>
    );
};
