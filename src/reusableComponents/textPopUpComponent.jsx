import { useState } from 'react';

export const TextPopUpComponent = ({ text, className, style, isPopupVisible, setIsPopupVisible, popupContent, onClick, ...rest }) => {
    const handleClosePopup = (e) => {
        if (e.target.classList.contains('popup-backdrop')) {
            setIsPopupVisible(false);
        }
    };

    return (
        <>
            {/* Trigger text */}
            <p
                className={`${className} my-2 text-sm cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-700 hover:font-bold`} // Styling for the clickable text
                style={style}
                onClick={onClick} // When clicked, toggle the popup
                {...rest}
            >
                {text}
            </p>

            {/* Popup logic */}
            {isPopupVisible && (
                <>
                    {/* Semi-transparent backdrop */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 popup-backdrop"
                        onClick={handleClosePopup}
                    ></div>

                    {/* Popup content */}
                    <div className="m-4 fixed inset-0 flex items-center justify-center z-30">
                        <div className="relative text-slate-700 bg-white p-4 shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
                            {/* Close button in the top-right corner */}
                            <button
                                onClick={() => setIsPopupVisible(false)}
                                className="absolute top-2 right-2 text-gray-800 bg-transparent hover:bg-blue-700 p-4"
                            >
                                &times;
                            </button>

                            {/* Render the content passed as popupContent */}
                            {popupContent}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
