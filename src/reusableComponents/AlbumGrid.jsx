import { useState } from "react";
import { ImageComponent } from "../reusableComponents/imageComponent";
import workData from "../../workData.json";

export const AlbumGrid = () => {
    const [selectedTitle, setSelectedTitle] = useState("All Works"); // Default filter

    // Group works by title, keeping duplicates separate
    const groupedWorks = workData.map((item, index) => ({ ...item, uniqueKey: `${item.title}-${index}` }));

    // Determine which works to display
    let displayedWorks = [];
    if (selectedTitle === "All Works") {
        displayedWorks = groupedWorks;
    } else {
        displayedWorks = groupedWorks.filter(work => work.uniqueKey === selectedTitle);
    }

    return (
        <div className="font-serif w-full my-10">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-0 mb-6">


                {groupedWorks.map((work) => (
                    <button
                        key={work.uniqueKey}
                        onClick={() => setSelectedTitle(work.uniqueKey)}
                        className={`px-4 py-2 text-lg italic ${selectedTitle === work.uniqueKey ? "underline text-blue-700 italic" : "bg-white hover:underline"}`}
                    >
                        {work.title}
                    </button>
                ))}
            </div>

            {/* Work Grid */}
            {selectedTitle !== "No Work" && (
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
                                    <p className="text-base italic">{work.title}</p>
                                    <p className="text-sm">{work.year}</p>
                                    <p className="text-sm break-words">{work.material_description}</p>
                                    <p className="text-sm italic text-gray-400">{work.exhibition}</p>
                                    <p className="text-sm text-gray-400">{work.curator} {work.gallery}</p>
                                    <p className="text-sm text-gray-400">{work.credits}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            )}
        </div>
    );
};
