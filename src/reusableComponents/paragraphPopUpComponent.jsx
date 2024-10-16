import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';

export const ParagraphPopUpComponent = ({ children, text, className, style, ...rest }) => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [loadingAnimation, setLoadingAnimation] = useState(null); // State for loading animation

    useEffect(() => {
        // Fetch the Lottie animation JSON from the provided link
        const fetchAnimation = async () => {
            const response = await fetch('https://lottie.host/20eda121-104e-40da-9958-69195baf17b6/s8YjomYcag.json');
            const data = await response.json();
            setLoadingAnimation(data);
        };

        fetchAnimation();
    }, []);

    const handleClick = () => {
        setPopupVisible(true);
        setLoading(true);

        // Simulate a delay to show loading animation (replace with actual loading logic if needed)
        setTimeout(() => {
            setLoading(false); // Set loading to false after content is ready
        }, 1000); // You can adjust this delay or handle actual loading for images
    };

    const handleClosePopup = (e) => {
        if (e.target.classList.contains('popup-backdrop')) {
            setPopupVisible(false);
        }
    };

    // Lottie animation options
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingAnimation, // Use the fetched animation
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <>
            {/* Trigger paragraph */}
            <p
                className={`${className} p-2 z-40 relative cursor-pointer`}
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
                    <div className="m-4 fixed inset-0 flex items-center justify-center z-50">
                        <div className="text-slate-700 bg-white p-4 shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
                            {/* Loading animation */}
                            {isLoading ? (
                                <div className="flex justify-center items-center h-40">
                                    {loadingAnimation && <Lottie options={defaultOptions} height={100} width={100} />}
                                </div>
                            ) : (
                                <>
                                    {/* Render the content passed as children */}
                                    {children}

                                    {/* Close button */}
                                    <button
                                        onClick={() => setPopupVisible(false)}
                                        className="mt-4 text-gray-800 hover:bg-amber-400 py-2 px-4"
                                    >
                                        &times;
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
