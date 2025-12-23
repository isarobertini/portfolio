import workData from "../../workData.json";
import { NavigationMenu } from "../common/navigationMenu";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";

export const Diploma = () => {
    const work = workData.find((item) => item.id === "diploma");

    if (!work) {
        return (
            <ParagraphComponent>
                Diploma project not found.
            </ParagraphComponent>
        );
    }

    return (
        <div className="font-serif">
            <NavigationMenu />

            <div className="px-4 flex justify-center">
                <div className="space-y-16">
                    <div className="flex justify-center">
                        <div className="inline-block">

                            {/* Images */}
                            {work.images && work.images.length > 0 ? (
                                work.images.map((img, i) => (
                                    <div key={i} className="text-xs mb-6">
                                        <ImageComponent
                                            src={img.src}
                                            alt={img.alt || work.title}
                                            className="w-full max-h-[100vh] lg:h-[80vh] object-contain"
                                        />

                                        <ParagraphComponent>
                                            {img.title}
                                        </ParagraphComponent>

                                        <ParagraphComponent>
                                            {work.year}
                                        </ParagraphComponent>

                                        <ParagraphComponent>
                                            {img.material_description}
                                        </ParagraphComponent>

                                        <ParagraphComponent>
                                            {img.dimensions}
                                        </ParagraphComponent>
                                    </div>
                                ))
                            ) : (
                                <ParagraphComponent className="italic text-gray-500">
                                    No images found for {work.title}
                                </ParagraphComponent>
                            )}

                            {/* Exhibition info */}
                            <div className="mt-12 pb-8 space-y-1">
                                <ParagraphComponent level={2} className="text-2xl">
                                    {work.exhibition}
                                </ParagraphComponent>

                                <ParagraphComponent>
                                    {work.gallery}
                                </ParagraphComponent>

                                <ParagraphComponent>
                                    {work.curator}
                                </ParagraphComponent>
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <ParagraphComponent className="italic">
                                    About the exhibition:
                                </ParagraphComponent>

                                {work.text_description && (
                                    <ParagraphComponent>
                                        {work.text_description}
                                    </ParagraphComponent>
                                )}

                                {work.description && (
                                    <ParagraphComponent className="whitespace-pre-line">
                                        {work.description}
                                    </ParagraphComponent>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
