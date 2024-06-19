import { HeadingComponent } from "../../reusableComponents/headingComponent"
import { NavBar } from "../../common/navbar"
import { ImageGrid } from "../../reusableComponents/imgGrid"

import disco1 from "../../assets/disco/disco1.png"
import disco2 from "../../assets/disco/disco2.png"


export const WorkEigth = () => {
    const images = [
        { src: disco1, alt: 'Door 1' },
        { src: disco2, alt: 'Door 2' },

    ];

    return (
        <>
            <NavBar />
            <HeadingComponent text="2024: Eighth One: 80's touch (thinking about dry stone walls)" />
            <ImageGrid images={images} />
        </>
    );
};