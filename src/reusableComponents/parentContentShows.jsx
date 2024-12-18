import React, { useState } from 'react';
import contentShowData from '../contentShowData.json';
import { ParagraphComponent } from './paragraphComponent';
import { ImageComponent } from './imageComponent';
import { ExpandCollapseButton } from './expandCollapsBtn';

import content4 from "../assets/contentShows/content1.jpg";
import content3 from "../assets/contentShows/content2.png";
import content2 from "../assets/contentShows/content3.jpg";
import content1 from "../assets/contentShows/content4.jpg";

const imageMap = {
    content1,
    content2,
    content3,
    content4,
};

export const ParentContentShow = () => {
    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (id) => {
        setExpandedSections((prev) => ({
            ...prev,
            [id]: !prev[id], // Toggle the specific section's expanded state
        }));
    };

    return (
        <div className="">
            {contentShowData.map((content) => (
                <div key={content.id} className="mb-2">
                    {/* Title and Toggle Button */}
                    <div
                        className="cursor-pointer flex justify-between items-center"
                        onClick={() => toggleSection(content.id)} // Clicking anywhere in this div toggles the section
                    >
                        <ParagraphComponent
                            text={`${content.title}, ${content.details}`}
                            highlighted={!!expandedSections[content.id]} // Pass highlighted state
                        />
                        <ExpandCollapseButton
                            isExpanded={expandedSections[content.id]}
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent the paragraph's click handler from triggering
                                toggleSection(content.id); // Toggle the section when the button is clicked
                            }}
                        />
                    </div>

                    {/* Expanded Content */}
                    {expandedSections[content.id] && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                            {/* Render Images */}
                            {content.images.map((image, index) => (
                                <ImageComponent
                                    key={index}
                                    src={imageMap[image.src]} // Resolve the image source
                                    alt={image.alt}
                                    className="mb-4 w-full h-auto"
                                />
                            ))}

                            {/* Render Description Fields Dynamically */}
                            <div className="col-span-2">
                                {Object.entries(content.description).map(([key, value]) => (
                                    <p key={key}>
                                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                                    </p>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
