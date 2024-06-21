import { HeadingComponent } from "../../reusableComponents/headingComponent"
import { NavBar } from "../../common/navbar"
import { ImageGrid } from "../../reusableComponents/imgGrid"
import { SubHeadingComponent } from "../../reusableComponents/subHeadingComponent"

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
            <HeadingComponent>2024: Sixth One: /+39 320 6885297/ <br />part of a stone house /thinking about dry stone walls</HeadingComponent>
            <ImageGrid images={images} />
            <SubHeadingComponent>Sculpture, 2024, 80x40cm <br />
                spaghetti, a door chain, sketch on the wall</SubHeadingComponent>
        </>
    );
};