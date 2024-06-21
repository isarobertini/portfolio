import React from 'react';
import { ParagraphComponent } from '../reusableComponents/paragraphComponent'; // Adjust import path as per your project structure
import { HeadingComponent } from '../reusableComponents/headingComponent'; // Adjust import path as per your project structure

export const TextModal = ({ show, onClose, content }) => {
    if (!show) return null;

    // Split the content into paragraphs based on double newline characters
    const paragraphs = content.content.split('\n\n');

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative bg-white overflow-hidden max-w-full max-h-full p-4 lg:w-9/12">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-black p-2"
                >
                    &times;
                </button>
                <div className="p-4 max-h-[80vh] overflow-auto">
                    <HeadingComponent className="text-lg font-semibold mb-2">{content.title}</HeadingComponent>
                    {/* Render each paragraph in a ParagraphComponent */}
                    {paragraphs.map((paragraph, index) => (
                        <ParagraphComponent key={index} className="text-sm text-gray-600 mb-2">{paragraph}</ParagraphComponent>
                    ))}
                </div>
            </div>
        </div>
    );
};
