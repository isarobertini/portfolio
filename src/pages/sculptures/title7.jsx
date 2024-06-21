import { HeadingComponent } from "../../reusableComponents/headingComponent"
import { NavBar } from "../../common/navbar"
import { ImageGrid } from "../../reusableComponents/imgGrid"
import { SubHeadingComponent } from "../../reusableComponents/subHeadingComponent"

import round1 from "../../assets/round/round1.png"
import round2 from "../../assets/round/round2.png"


export const WorkSeven = () => {
    const images = [
        { src: round1, alt: 'Door 1' },
        { src: round2, alt: 'Door 2' },

    ];

    return (

        <div>
            <NavBar />
            <HeadingComponent>2024: seventh One: /+39 320 6885297/ <br />part of a stone house /thinking about dry stone walls</HeadingComponent>

            <ImageGrid images={images} />

            <SubHeadingComponent>Sculpture, 2024, 270x120cm <br />
                spaghetti, angle iron, sketch on the wall, nails</SubHeadingComponent>
        </div>

    );
};