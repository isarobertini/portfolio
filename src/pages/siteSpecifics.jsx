import workData from "../../workData.json";
import { NavigationMenu } from "../common/navigationMenu";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";

import konstnärsnämndenLogo from "../../public/logos/konstnärsnämnden.png";

export const SiteSpecifics = () => {
    const work = workData.find((item) => item.id === "siteSpecifics");

    if (!work) {
        return (
            <ParagraphComponent isDarkBg>
                Diploma project not found.
            </ParagraphComponent>
        );
    }

    return (
        <div className="px-4 bg-black font-serif">
            {/* Navigation */}
            <NavigationMenu isDarkBg />


            {/* Page center */}
            <div className="flex justify-center">
                <div className="space-y-16 w-full max-w-6xl">

                    {/* Images */}
                    {work.images && work.images.length > 0 ? (
                        work.images.map((img, i) => (
                            <div key={i} className="flex justify-center">
                                <div className="inline-flex flex-col items-start text-xs">

                                    <ImageComponent
                                        src={img.src}
                                        alt={img.alt || work.title}
                                        className="max-h-[100vh] lg:max-h-[90vh] object-contain"
                                    />

                                    {/* Caption */}
                                    <div className="mt-2 space-y-1">
                                        <ParagraphComponent isDarkBg>
                                            {img.title}
                                        </ParagraphComponent>

                                        <ParagraphComponent isDarkBg>
                                            {work.year}
                                        </ParagraphComponent>

                                        <ParagraphComponent isDarkBg>
                                            {img.dimensions}
                                        </ParagraphComponent>

                                        <ParagraphComponent isDarkBg>
                                            {img.material_description}
                                        </ParagraphComponent>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <ParagraphComponent
                            isDarkBg
                            className="text-gray-400 italic"
                        >
                            No images found for {work.title}
                        </ParagraphComponent>
                    )}

                    {/* Exhibition info */}
                    <div className="m-auto max-w-4xl space-y-1">
                        <ParagraphComponent
                            isDarkBg
                            level={2}
                            className="text-2xl"
                        >
                            {work.exhibition}
                        </ParagraphComponent>

                        <ParagraphComponent isDarkBg>
                            {work.gallery}
                        </ParagraphComponent>

                        <ParagraphComponent isDarkBg>
                            Curated by {work.curator}
                        </ParagraphComponent>
                    </div>

                    {/* Description */}
                    <div className="m-auto max-w-4xl pb-7 space-y-4">


                        <ParagraphComponent isDarkBg className="italic">
                            Selected text excerpted from the festival’s official <a
                                className="underline italic font-bold text-white hover:text-blue-700 transition-colors"
                                href="https://www.metamorphosisarchfest.com/sardegna-cinema-paradiso/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnL1faSCv4ltTp-IRyqxVT5jGMN6Uj2q7hZrLH-2ho3lqWe4MY65o7YfsuoVA_aem_5kyhQ_oSMP3x-4BVoUoyVw"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                website:
                            </a>
                        </ParagraphComponent>

                        <ParagraphComponent isDarkBg>
                            What does it truly mean to enhance inland areas today? How can artistic
                            practices — from cinema to performance, from public art to storytelling —
                            activate new processes of cultural and social regeneration? A dialogue
                            between artists, researchers, and activists aimed at giving voice and
                            centrality back to those seemingly marginal territories, which in fact hold
                            a landscape, human, and symbolic capital that is essential for the future.
                        </ParagraphComponent>

                        <ParagraphComponent isDarkBg className="italic">
                            About the exhibition: 𝐁𝐢𝐨𝐠𝐫𝐚𝐩𝐡𝐲 𝐨𝐟 𝐈𝐬𝐚 𝐑𝐨𝐛𝐞𝐫𝐭𝐢𝐧𝐢,
                            𝐆𝐢𝐮𝐥𝐢𝐚 𝐌𝐞𝐧𝐢𝐜𝐮𝐜𝐜𝐢 𝐚𝐧𝐝 𝐒𝐚𝐫𝐚𝐡 𝐀𝐭𝐳𝐨𝐫𝐢:
                            𝐰𝐡𝐨 𝐭𝐡𝐞𝐲 𝐚𝐫𝐞, 𝐰𝐡𝐚𝐭 𝐭𝐡𝐞𝐲 𝐝𝐨.
                        </ParagraphComponent>

                        <ParagraphComponent isDarkBg>
                            Three artists, three different ways of giving shape to memory,
                            landscape, and relationships. We are delighted to welcome into the
                            Sardegna Cinema Paradiso program the works of Isa Robertini, Giulia
                            Menicucci, and Sarah Atzori, selected through our collaboration with
                            Nocefresca.
                        </ParagraphComponent>

                        <ParagraphComponent isDarkBg>
                            Their practices span different languages — sculpture, photography,
                            performance, sound — yet they share a common direction: making visible
                            what often remains on the margins, transforming materials, gestures,
                            and narratives into spaces of listening and new awareness.
                        </ParagraphComponent>

                        <ParagraphComponent isDarkBg>
                            Isa Robertini is working on a series of sculptures made with peripheral,
                            overlooked, ephemeral, and enduring found objects, opening a reflection
                            on human approach to the objects and the landscape.
                            {" "}
                            <a
                                href="https://www.instagram.com/reel/DSZwaWBje5S/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline italic font-bold"
                            >
                                In this interview
                            </a>
                            {" "}
                            Isa explains how sculpture can function as an open language.
                        </ParagraphComponent>

                        {work.text_description && (
                            <ParagraphComponent isDarkBg>
                                {work.text_description}
                            </ParagraphComponent>
                        )}

                        {work.description && (
                            <ParagraphComponent isDarkBg className="whitespace-pre-line">
                                {work.description}
                            </ParagraphComponent>
                        )}

                        {/* Support */}
                        <div className="flex items-center gap-4 pt-4">
                            <ParagraphComponent isDarkBg>
                                The project was supported by:
                            </ParagraphComponent>

                            <a
                                href="https://www.konstnarsnamnden.se"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="h-20"
                                    src={konstnärsnämndenLogo}
                                    alt="Konstnärsnämnden"
                                />
                            </a>

                            <ParagraphComponent isDarkBg>
                                <a
                                    href="https://www.haxsonj.se/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=""
                                >
                                    Helge Ax:son Johnsons stiftelse
                                </a>
                            </ParagraphComponent>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
