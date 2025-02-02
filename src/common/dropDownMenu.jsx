import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Fade } from "react-awesome-reveal";

import { ImageComponent } from "../reusableComponents/imageComponent";
import workData from '../../workData.json';

export const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState(null); // Store selected title

    // Handle title selection
    const handleTitleClick = (title) => {
        setSelectedTitle(title);
        setIsOpen(false);
    };

    // Group works by title
    const groupedWorks = workData.reduce((acc, item) => {
        if (!acc[item.title]) {
            acc[item.title] = [];
        }
        acc[item.title].push(item);
        return acc;
    }, {});

    // Combine all works into one array
    const allWorks = workData;

    return (
        <div className="relative inline-block text-left">
            {/* Dropdown Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center px-4 py-2 border-2 border-black text-lg font-semibold bg-white hover:bg-gray-100 transition"
            >
                Filters works by title {isOpen ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
            </button>

            {/* Dropdown Items */}
            {isOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white border border-black shadow-lg z-20">
                    {/* "All Works" option */}
                    <div
                        className={`block px-4 py-2 text-lg cursor-pointer ${selectedTitle === "All Works"
                            ? "font-bold text-white bg-black"
                            : "hover:bg-gray-100"
                            }`}
                        onClick={() => handleTitleClick("All Works")}
                    >
                        All Works
                    </div>

                    {/* Title options */}
                    {Object.keys(groupedWorks).map((title) => (
                        <div
                            key={title}
                            className={`block px-4 py-2 text-lg cursor-pointer ${selectedTitle === title
                                ? "font-bold text-white bg-black"
                                : "hover:bg-gray-100"
                                }`}
                            onClick={() => handleTitleClick(title)}
                        >
                            {title}
                        </div>
                    ))}
                </div>
            )}

            {/* Display Selected Item Data */}
            <div className="mt-4 lg:p-4 border-none z-10">
                {selectedTitle && (
                    <>
                        {/* Display works based on the selection */}
                        {(selectedTitle === "All Works" ? allWorks : groupedWorks[selectedTitle] || []).map((work, index) => (
                            <Fade key={index}>
                                <div className="mb-4 p-4 border-2 border-black">
                                    {/* Title and description */}
                                    <div className="py-4">
                                        <h2 className="py-4 text-xl italic">{work.title}</h2>
                                        <p>{work.dimensions}, {work.year}</p>
                                        <p>{work.material_description}</p>
                                    </div>

                                    {/* Images */}
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                        {work.images.map((image, imgIndex) => (
                                            <div key={imgIndex} className="mb-2">
                                                <ImageComponent src={image.src} alt={image.alt} className="w-full" />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Exhibition */}
                                    <p className="py-4 text-gray-400"> {work.exhibition}</p>
                                </div>
                            </Fade>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};
