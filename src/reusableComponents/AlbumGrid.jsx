import { useState } from "react";
import { ImageComponent } from "../reusableComponents/imageComponent";
import workData from "../../workData.json";

export const AlbumGrid = () => {
    const [selectedTitle, setSelectedTitle] = useState(""); // Default to empty string to indicate no title selected

    // Group works by title, keeping duplicates separate
    const groupedWorks = workData.map((item, index) => ({ ...item, uniqueKey: `${item.title}-${index}` }));

    // Determine which works to display
    let displayedWorks = [];
    if (selectedTitle) {
        displayedWorks = groupedWorks.filter(work => work.uniqueKey === selectedTitle);
    }

    // Toggle function to handle click on title
    const toggleTitle = (uniqueKey) => {
        setSelectedTitle((prevSelectedTitle) =>
            prevSelectedTitle === uniqueKey ? "" : uniqueKey
        );
    };

    return (
        <div className="font-serif w-full my-10">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-0 mb-6">
                {groupedWorks.map((work) => (
                    <button
                        key={work.uniqueKey}
                        onClick={() => toggleTitle(work.uniqueKey)} // Use toggle function
                        className={`px-4 py-2 text-sm ${selectedTitle === work.uniqueKey ? "underline text-blue-700" : "bg-white hover:underline"}`}
                    >
                        {work.title}
                    </button>
                ))}
            </div>

            {/* Work Grid */}
            {selectedTitle && (
                <div className="flex flex-wrap justify-center items-start px-4 text-left">
                    {displayedWorks.map((work, index) => (
                        <div key={index} className="border-none p-2 lg:w-2/3">
                            {/* Wrap image and description in a flex container */}
                            <div className="flex flex-col items-center">
                                {/* Display all images */}
                                {work.images.map((image, imgIndex) => (
                                    <ImageComponent key={imgIndex} src={image.src} alt={image.alt} className="py-4" />
                                ))}

                                {/* Text content */}
                                <div className="mt-2 w-full">
                                    <p className="text-sm italic">{work.title}</p>
                                    <p className="text-xs">{work.year}</p>
                                    <p className="text-xs break-words">{work.material_description}</p>
                                    <p className="text-xs italic text-gray-400">{work.exhibition}</p>
                                    <p className="text-xs text-gray-400">{work.curator} {work.gallery}</p>
                                    <p className="text-xs text-gray-400">{work.credits}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
