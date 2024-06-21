import { HeadingComponent } from "../../reusableComponents/headingComponent"
import { NavBar } from "../../common/navbar"
import { ImageGrid } from "../../reusableComponents/imgGrid"
import { SubHeadingComponent } from "../../reusableComponents/subHeadingComponent"

import gardenplot1 from "../../assets/gardenPlot/gardenplot1.png"
import gardenplot2 from "../../assets/gardenPlot/gardenplot2.png"
import gardenplot3 from "../../assets/gardenPlot/gardenplot3.png"


export const WorkTen = () => {
    const images = [
        { src: gardenplot1, alt: 'Door 1' },
        { src: gardenplot2, alt: 'Door 2' },
        { src: gardenplot3, alt: 'Door 1' },

    ];

    return (
        <>
            <NavBar />
            <HeadingComponent> 2024: Tenth One: /+39 320 6885297/ <br />garden plot /thinking about dry stone walls</HeadingComponent>

            <ImageGrid images={images} />

            <SubHeadingComponent>Sculpture, 2024, 120x120cm <br />
                spaghetti, parsly, angle iron, sketch on the wall, metal storage bin</SubHeadingComponent>
        </>
    );
};