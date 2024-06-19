import { HeadingComponent } from "../../reusableComponents/headingComponent"
import { NavBar } from "../../common/navbar"
import { ImageGrid } from "../../reusableComponents/imgGrid"

import discoVertical from "../../assets/discoVertical/discoVertical.png"

export const WorkNine = () => {
    const images = [
        { src: discoVertical, alt: 'Door 1' },


    ];

    return (
        <>
            <NavBar />
            <HeadingComponent text="2024: Ninth One: Less symbolic (thinking about dry stone walls)" />
            <ImageGrid images={images} />
        </>
    );
};