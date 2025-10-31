import workData from "../../workData.json";
import { NavigationMenu } from "../common/navigationMenu";

export const Diploma = () => {
    const work = workData.find((item) => item.id === "diploma");

    if (!work) return <p>Diploma project not found.</p>;

    return (
        <div className="font-serif">
            <NavigationMenu />

            <div className="flex justify-center">
                <div className="space-y-16">
                    <div className="flex justify-center">
                        {/* Centered wrapper */}
                        <div className="inline-block">
                            {/* Text directly under the image(s) */}

                            {/* All images */}
                            {work.images && work.images.length > 0 ? (
                                work.images.map((img, i) => (
                                    <div key={i} className="text-xs mb-6">
                                        <img
                                            src={img.src}
                                            alt={img.alt || work.title}
                                            className="w-full max-h-[100vh] lg:h-[80vh] object-contain"
                                        />
                                        <p className="py-1">
                                            {img.title}
                                        </p>
                                        <p>{work.year}</p>
                                        <p>{img.material_description}</p>
                                        <p>{img.dimensions}</p>
                                    </div>

                                ))
                            ) : (
                                <p className="text-gray-500 italic text-left">
                                    No images found for {work.title}
                                </p>
                            )}
                            <div className="mt-12 pb-8 text-left space-y-1 ">
                                <h2 className="text-2xl">{work.exhibition}</h2>

                                <p className="text-xs">
                                    {work.gallery}
                                </p>
                                <p className="text-xs">
                                    {work.curator}
                                </p>
                            </div>

                            <div className="text-xs">
                                <p className="pb-3 italic">About the exhibition:</p>
                                <div>{work.text_description}
                                </div>
                                <div> <p className="whitespace-pre-line">
                                    {work.description}
                                </p></div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
