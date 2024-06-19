// Modal.jsx
import React from 'react';

export const Modal = ({ show, onClose, image }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative bg-white overflow-hidden max-w-full max-h-full">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-black p-2"
                >
                    &times;
                </button>
                <div className="p-4">
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="max-w-full max-h-screen object-contain "
                    />
                </div>
            </div>
        </div>
    );
};
