import React, { useState } from 'react';

export const ParagraphPopUpComponent = ({ children, text, className, style, ...rest }) => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleClick = () => {
        setPopupVisible(true);
    };

    const handleClosePopup = (e) => {
        // Close popup only when clicking outside the popup content
        if (e.target.classList.contains('popup-backdrop')) {
            setPopupVisible(false);
        }
    };

    return (
        <>
            {/* Trigger paragraph */}
            <p
                className={`${className} bg-black p-2 cursor-pointer`}
                style={style}
                onClick={handleClick}
                {...rest}
            >
                {text}
            </p>

            {/* Popup logic */}
            {isPopupVisible && (
                <>
                    {/* Semi-transparent backdrop */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 popup-backdrop"
                        onClick={handleClosePopup}
                    ></div>

                    {/* Popup content */}
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="text-slate-700 bg-white p-4 shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto ">
                            {/* Render the content passed as children */}
                            {children}

                            {/* Close button */}
                            <button
                                onClick={() => setPopupVisible(false)}
                                className="mt-4 bg-gray-800 hover:bg-gray-600 text-white py-2 px-4"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
