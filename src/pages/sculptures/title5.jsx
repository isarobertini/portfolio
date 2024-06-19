import { HeadingComponent } from "../../reusableComponents/headingComponent"
import { NavBar } from "../../common/navbar"
import { ImageGrid } from "../../reusableComponents/imgGrid"

import house1 from "../../assets/house/house1.jpg"
import house2 from "../../assets/house/house2.jpg"
import house3 from "../../assets/house/house3.jpg"
import house4 from "../../assets/house/house4.jpg"
import house5 from "../../assets/house/house5.jpg"

export const WorkFive = () => {
    const images = [
        { src: house1, alt: 'Door 1' },
        { src: house2, alt: 'Door 2' },
        { src: house3, alt: 'Door 1' },
        { src: house4, alt: 'Door 2' },
        { src: house5, alt: 'Door 2' },
    ];

    return (
        <>
            <NavBar />
            <HeadingComponent text="2023: Fifth One: House" />
            <ImageGrid images={images} />
        </>
    );
};