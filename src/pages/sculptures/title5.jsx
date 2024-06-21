import { HeadingComponent } from "../../reusableComponents/headingComponent"
import { NavBar } from "../../common/navbar"
import { ImageGrid } from "../../reusableComponents/imgGrid"
import { SubHeadingComponent } from "../../reusableComponents/subHeadingComponent"

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
            <HeadingComponent>2023: Fifth One: (Chiesa di San Giuseppe) <br />But I don't want to be personal <br /> (especially not when it comes to my heritage)</HeadingComponent>
            <ImageGrid images={images} />

            <SubHeadingComponent>Sculpture, 2023, 250x150cm <br />
                Spaghetti, plastic glasses, an old flower bucket, photographs of grass</SubHeadingComponent>
        </>
    );
};