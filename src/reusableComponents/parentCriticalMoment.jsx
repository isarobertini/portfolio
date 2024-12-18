import React, { useState } from 'react';
import workData from '../workData.json';
import { SectionComponent } from './sectionComponent';

import symbolicInstallation from '../assets/citicalMoments/symbolicInstallation.webp';
import symbolic from '../assets/citicalMoments/symbolic.webp';
import symbolicCloseUp from '../assets/citicalMoments/symbolicDetail.webp';
import symbolic2 from '../assets/citicalMoments/symbolic2.webp';
import symbolic2CloseUp from '../assets/citicalMoments/symbolic2Installation.png';
import politicalVertical from '../assets/citicalMoments/politicalVertical.webp';
import political from '../assets/citicalMoments/political.webp';
import politicalCloseUp from '../assets/citicalMoments/politicalCloseUp.webp';
import politicalInstallation from '../assets/citicalMoments/politicalInstallation.webp';
import criticalClose from '../assets/citicalMoments/criticalClose.webp';
import critical from '../assets/citicalMoments/critical.webp';
import criticalCloseUp from '../assets/citicalMoments/criticalDetail.webp';
import criticalInstallation from '../assets/citicalMoments/criticalInstallation.webp';
import criticalPolitical from '../assets/citicalMoments/criticalPolitical.webp';
import criticalPoliticalInstallation from '../assets/citicalMoments/criticalPoliticalInstallation.webp';

// Map images to their imports
const images = {
    symbolicInstallation,
    symbolic,
    symbolicCloseUp,
    symbolic2,
    symbolic2CloseUp,
    politicalVertical,
    political,
    politicalCloseUp,
    politicalInstallation,
    criticalClose,
    criticalInstallation,
    critical,
    criticalCloseUp,
    criticalPolitical,
    criticalPoliticalInstallation,
};

export const ParentCriticalMoment = () => {
    const [expandedSections, setExpandedSections] = useState({});

    // Handle toggle for a section
    const toggleSection = (id) => {
        setExpandedSections((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className="">
            {workData.map((section) => (
                <SectionComponent
                    key={section.id}
                    id={section.id}
                    title={section.title}
                    description={section.description}
                    images={section.images.map((image) => ({
                        ...image,
                        src: images[image.src], // Resolve the image source
                    }))}
                    isExpanded={!!expandedSections[section.id]}
                    onToggle={toggleSection}
                    highlighted={!!expandedSections[section.id]} // Highlight the title/description if expanded
                />
            ))}
        </div>
    );
};
