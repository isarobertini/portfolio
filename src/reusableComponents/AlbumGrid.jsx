import { Link } from "react-router-dom";
import workData from "../../workData.json";

export const AlbumGrid = () => {
    const groupedWorks = workData.map((item) => ({
        ...item,
        uniqueKey: item.id,
    }));

    return (
        <div className="font-serif my-6 lg:my-12 px-4">
            <div className="flex justify-center">
                {/* Outer container with proper spacing */}
                <div className="space-y-8 lg:space-y-16 w-full lg:w-auto">
                    {groupedWorks.map((work) => (
                        <div key={work.uniqueKey} className="flex justify-center">
                            {/* Keep inline-block wrapper to match desktop layout */}
                            <div className="inline-block">
                                {/* Image */}
                                {work.images && work.images.length > 0 ? (
                                    <Link to={`/${work.id}`} className="block">
                                        <img
                                            src={work.images[0].src}
                                            alt={work.images[0].alt || work.title}
                                            className="max-h-[100vh] lg:max-w-[120vh] object-contain"
                                        />
                                    </Link>
                                ) : (
                                    <p className="text-gray-500 italic text-left">
                                        No image found for {work.title}
                                    </p>
                                )}

                                {/* Text under image */}
                                <div className="mt-2 lg:mt-3 text-left space-y-1">
                                    <h2 className="italic">{work.exhibition}</h2>
                                    <p className="text-xs">{work.gallery}, {work.year}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
