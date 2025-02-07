import React from 'react';
import { ParagraphComponent } from './paragraphComponent';
import { ExpandCollapseButton } from './expandCollapsBtn';
import { ImageComponent } from './imageComponent';

export const SectionComponent = ({
    id,
    title,
    description,
    images,
    isExpanded,
    onToggle,
    highlighted,
}) => {
    return (
        <div className="mb-2">
            {/* Title and Expand Button */}
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => onToggle(id)}
            >
                {/* Pass highlighted as a prop to ParagraphComponent */}
                <ParagraphComponent
                    text={`${title}, ${description}`}
                    highlighted={highlighted} // Use highlighted state directly
                />
                <ExpandCollapseButton isExpanded={isExpanded} onClick={() => onToggle(id)} />
            </div>

            {/* Expanded Section */}
            {isExpanded && (
                <div className="grid lg:grid-cols-2 gap-4 mt-4">
                    {images.map((image, index) => (
                        <ImageComponent
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto"
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
