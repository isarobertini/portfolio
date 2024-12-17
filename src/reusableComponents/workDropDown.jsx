import { useRef } from 'react';
import { Helmet } from 'react-helmet';

import { HeadingComponent } from "./headingComponent";
import { ParagraphComponent } from './paragraphComponent';
import { SubHeadingComponent } from './subHeadingComponent';

// Custom Dropdown Component
const WorkDropDown = ({ title, description, images }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-300 pb-4 mb-4">
            {/* Dropdown header */}
            <div
                className="cursor-pointer text-lg font-semibold text-gray-800 hover:underline"
                onClick={toggleDropdown}
            >
                {title}
            </div>

            {/* Dropdown content */}
            {isOpen && (
                <div className="mt-4">
                    {/* Description */}
                    <ParagraphComponent>
                        {description}
                    </ParagraphComponent>

                    {/* Images */}
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-auto rounded-md shadow-lg"
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
