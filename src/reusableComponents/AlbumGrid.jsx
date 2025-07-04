import { Link } from "react-router-dom";
import { ImageComponent } from "../reusableComponents/imageComponent";
import workData from "../../workData.json";

export const AlbumGrid = () => {
    const groupedWorks = workData.map((item, index) => ({
        ...item,
        uniqueKey: `${item.title}-${index}`,
    }));

    return (
        <div className="font-serif">
            <div className="flex justify-center">
                <div className="w-full max-w-4xl">
                    <div className="grid grid-cols-5 gap-2 md:grid-cols-6 gap-6">
                        {groupedWorks.map((work) => (
                            <Link
                                key={work.uniqueKey}
                                to={`/work/${work.uniqueKey}`}
                                className="block"
                            >
                                <ImageComponent
                                    src={work.images[0].src}
                                    alt={work.images[0].alt || work.title}
                                    className="w-full object-cover"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
