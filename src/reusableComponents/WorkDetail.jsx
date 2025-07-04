import { useParams } from "react-router-dom";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { NavigationMenu } from "../common/navigationMenu";

import workData from "../../workData.json";

export const WorkDetail = () => {
    const { workId } = useParams();

    const work = workData.find((item, index) =>
        `${item.title}-${index}` === workId
    );

    if (!work) {
        return <p className="m-10">Work not found.</p>;
    }

    return (
        <>
            <NavigationMenu />
            <div className="max-w-4xl mx-auto font-serif grid grid-cols-2 gap-6">
                <div className="mt-6">
                    <p className="py-2">{work.title}</p>

                    <div className="text-xs">
                        <p className="py-2">{work.material_description}, {work.dimensions}, {work.year}</p>
                        <p className="font-bold">{work.exhibition}</p>
                        <p>{work.curator}</p>
                        <p>{work.gallery}</p>
                        <p>{work.credits}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 mb-6">
                    {work.images.map((image, idx) => (
                        <ImageComponent
                            key={idx}
                            src={image.src}
                            alt={image.alt}
                            title={work.title}
                            description={image.description}
                        />
                    ))}
                </div>
            </div>

        </>
    );
};
