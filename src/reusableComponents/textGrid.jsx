import React, { useState } from 'react';
import { TextModal } from '../common/textModal';
import { ParagraphComponent } from './paragraphComponent';
import { HeadingComponent } from './headingComponent';

export const TextGrid = ({ texts }) => {
    const [showTextModal, setShowTextModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const handleTextClick = (text) => {
        setModalContent(text);
        setShowTextModal(true);
    };

    const handleCloseModal = () => {
        setShowTextModal(false);
        setModalContent(null);
    };

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {texts.map((text, index) => (
                    <div key={index} className="cursor-pointer" onClick={() => handleTextClick(text)}>
                        <div className="bg-white p-4 border border-black hover:border-gray-300">
                            <HeadingComponent className="text-lg font-semibold mb-2">{text.title}</HeadingComponent>
                            {/* Split content by newline and render each part in a paragraph */}
                            {text.content.split('\n').map((paragraph, index) => (
                                <ParagraphComponent key={index} className="text-sm text-gray-600 mb-2">{paragraph}</ParagraphComponent>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {modalContent && (
                <TextModal show={showTextModal} onClose={handleCloseModal} content={modalContent} />
            )}
        </div>
    );
};
