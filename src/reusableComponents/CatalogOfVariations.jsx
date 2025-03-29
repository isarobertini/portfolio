import { useState } from "react";
import { ImageComponent } from "../reusableComponents/imageComponent";

export const CatalogOfVariations = () => {
    const [selectedContent, setSelectedContent] = useState(""); // Track selected content

    // Content data
    const contentItems = [
        {
            id: "1",
            text: "the content shows: when everything of essence has already been said",
            link: "https://www.folkteatern.se/events/the-content-shows",
            image: "/assets/contentShows/content1.jpg",
            summary: "By eliminating selection based on status, The Content Shows at Folkteatern Göteborg examined whether art becomes freer or more constrained when detached from institutional expectations. The event invited all artists to participate without judgment. Held four times between 2023 and 2024 as a one-night-only event, it was documented exclusively in text."
        },
        {
            id: "2",
            text: "the content shows: more songs than philosophy",
            link: "https://www.folkteatern.se/events/the-content-shows",
            image: "/assets/contentShows/content2.png",
            summary: "By eliminating selection based on status, The Content Shows at Folkteatern Göteborg examined whether art becomes freer or more constrained when detached from institutional expectations. The event invited all artists to participate without judgment. Held four times between 2023 and 2024 as a one-night-only event, it was documented exclusively in text."
        },
        {
            id: "3",
            text: "the content shows: there is something called acting",
            link: "https://www.folkteatern.se/events/the-content-shows",
            image: "/assets/contentShows/content3.jpg",
            summary: "By eliminating selection based on status, The Content Shows at Folkteatern Göteborg examined whether art becomes freer or more constrained when detached from institutional expectations. The event invited all artists to participate without judgment. Held four times between 2023 and 2024 as a one-night-only event, it was documented exclusively in text."
        },
        {
            id: "4",
            text: "the content shows: completely empty of content",
            link: "https://www.folkteatern.se/events/the-content-shows",
            image: "/assets/contentShows/content4.jpg",
            summary: "By eliminating selection based on status, The Content Shows at Folkteatern Göteborg examined whether art becomes freer or more constrained when detached from institutional expectations. The event invited all artists to participate without judgment. Held four times between 2023 and 2024 as a one-night-only event, it was documented exclusively in text."
        }
    ];

    // Toggle function to handle click on title
    const toggleContent = (id) => {
        setSelectedContent((prevSelectedContent) =>
            prevSelectedContent === id ? "" : id
        );
    };

    return (
        <div className="font-serif w-full my-10">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-0 mb-6">
                {contentItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => toggleContent(item.id)} // Use toggle function
                        className={`px-4 py-2 text-sm ${selectedContent === item.id ? "underline text-blue-700" : "bg-white hover:underline"}`}
                    >
                        {item.text}
                    </button>
                ))}
            </div>

            {/* Content Grid */}
            {selectedContent && (
                <div className="flex flex-wrap justify-center items-start px-4 text-left">
                    {contentItems.map(
                        (item) =>
                            item.id === selectedContent && (
                                <div key={item.id} className="border-none p-2 lg:w-2/3">
                                    {/* Wrap image and description in a flex container */}
                                    <div className="flex flex-col items-center">
                                        {/* Larger Image */}
                                        <ImageComponent
                                            src={item.image}
                                            alt={item.text}
                                            className="w-full max-w-xl h-auto py-4"
                                        />

                                        {/* Text content */}
                                        <div className="mt-2 w-full">
                                            <p className="text-sm italic">
                                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                                    {item.text}
                                                </a>
                                            </p>
                                            <p className="text-xs text-gray-700">{item.summary}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                    )}
                </div>
            )}
        </div>
    );
};
