import { useState } from "react";
import { ImageComponent } from "../reusableComponents/imageComponent";
import workData from "../../workData.json";

export const AlbumGrid = () => {
    const [selectedTitle, setSelectedTitle] = useState("All Works"); // Default filter
    const [expandedWork, setExpandedWork] = useState(null); // Track expanded work
    const [modalOpen, setModalOpen] = useState(false); // Track modal visibility
    const [modalImages, setModalImages] = useState([]); // Store images to display in modal

    // Toggle expanded work (for the list of images under the main image)
    const handleWorkClick = (title) => {
        setExpandedWork(expandedWork === title ? null : title);
    };

    // Open Modal with images
    const openModal = (images) => {
        setModalImages(images);
        setModalOpen(true);
    };

    // Close Modal
    const closeModal = () => {
        setModalOpen(false);
    };

    // Group works by title
    const groupedWorks = workData.reduce((acc, item) => {
        if (!acc[item.title]) {
            acc[item.title] = [];
        }
        acc[item.title].push(item);
        return acc;
    }, {});

    // Determine which works to display
    let displayedWorks = [];
    if (selectedTitle === "All Works") {
        displayedWorks = workData;
    } else if (groupedWorks[selectedTitle]) {
        displayedWorks = groupedWorks[selectedTitle];
    }

    return (
        <div className="text-center w-full my-10">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
                <button
                    onClick={() => setSelectedTitle("All Works")}
                    className={`px-4 py-2 border-2 border-black text-lg font-semibold ${selectedTitle === "All Works" ? "bg-black text-white" : "bg-white hover:bg-gray-100"}`}
                >
                    All Works
                </button>

                {Object.keys(groupedWorks).map((title) => (
                    <button
                        key={title}
                        onClick={() => setSelectedTitle(title)}
                        className={`px-4 py-2 border-2 border-black text-lg font-semibold ${selectedTitle === title ? "bg-black text-white" : "bg-white hover:bg-gray-100"}`}
                    >
                        {title}
                    </button>
                ))}

                {/* "No Work" option (Hides everything) */}
                <button
                    onClick={() => setSelectedTitle("No Work")}
                    className={`px-4 py-2 border-2 border-black text-lg font-semibold ${selectedTitle === "No Work" ? "bg-black text-white" : "bg-white hover:bg-gray-100"}`}
                >
                    No Work
                </button>
            </div>

            {/* Work Grid */}
            {selectedTitle !== "No Work" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 text-left">
                    {displayedWorks.map((work, index) => (
                        <div key={index} className="border:none p-2">
                            {/* Main image (always visible) */}
                            <div onClick={() => openModal(work.images)} className="cursor-pointer">
                                <img src={work.images[0].src} alt={work.images[0].alt} className="w-full object-cover" />
                                <p className="mt-2 text-base italic font-bold">{work.title} </p>
                                <p className="mt-2 text-sm">{work.year}</p>
                                <p className="mt-2 text-sm">{work.material_description} </p>
                                <p className="mt-2 text-sm italic text-gray-400">{work.exhibition} </p>
                                <p className="text-sm text-gray-400"> {work.curator}, {work.gallery}</p>
                                <p className="text-sm text-gray-400"> {work.credits}</p>
                            </div>

                            {/* Additional images (hidden until clicked) */}
                            {expandedWork === work.title && (
                                <div className="mt-2 grid grid-cols-2 gap-2">
                                    {work.images.slice(1).map((image, imgIndex) => (
                                        <ImageComponent key={imgIndex} src={image.src} alt={image.alt} className="w-full object-cover" />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Modal Popup (Positioned Fixed and Detached from Scroll) */}
            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-4 max-w-4xl w-full relative z-60"> {/* Ensure modal content is inside a high z-index context */}
                        <div className="flex justify-between">
                            <button onClick={closeModal} className="text-xl font-semibold text-white bg-black p-1">Close</button>
                        </div>

                        {/* Modal Content (Scrollable Image Grid) */}
                        <div className="overflow-y-auto mt-4 max-h-[80vh]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {modalImages.map((image, imgIndex) => (
                                    <ImageComponent
                                        key={imgIndex}
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-auto"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
