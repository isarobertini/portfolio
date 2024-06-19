import { HeadingComponent } from "../../reusableComponents/headingComponent"
import { NavBar } from "../../common/navbar"
import { ImageGrid } from "../../reusableComponents/imgGrid"

import door1 from "../../assets/door/door1.jpg"
import door2 from "../../assets/door/door2.jpg"


export const WorkSix = () => {
    const images = [
        { src: door1, alt: 'Door 1' },
        { src: door2, alt: 'Door 2' },

    ];

    return (
        <>
            <NavBar />
            <HeadingComponent text="2024: Sixth One: Less symbolic (thinking about dry stone walls)" />
            <ImageGrid images={images} />
        </>
    );
};