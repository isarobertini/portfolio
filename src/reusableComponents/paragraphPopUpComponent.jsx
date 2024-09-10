import React, { useState } from 'react';

export const ParagraphPopUpComponent = ({ children, text, className, style, ...rest }) => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleClick = () => {
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
    };

    return (
        <>
            <p
                className={`${className} p-2 cursor-pointer`}
                style={style}
                onClick={handleClick}
                {...rest}
            >
                {text}
            </p>

            {isPopupVisible && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded shadow-lg max-w-sm">
                        {children} {/* Render the content passed as children */}
                        <button onClick={handleClosePopup} className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded">
                            Close
                        </button>
                    </div>
                    {/* Removed the semi-transparent background */}
                </div>
            )}
        </>
    );
};
