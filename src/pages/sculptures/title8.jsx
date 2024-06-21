import { HeadingComponent } from "../../reusableComponents/headingComponent"
import { NavBar } from "../../common/navbar"
import { ImageGrid } from "../../reusableComponents/imgGrid"
import { SubHeadingComponent } from "../../reusableComponents/subHeadingComponent"

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
            <HeadingComponent>2024: Eighth One: /+39 320 6885297/ <br />part of a stone house /thinking about dry stone walls</HeadingComponent>
            <ImageGrid images={images} />

            <SubHeadingComponent>Sculpture, 2024, 120x120cm <br />
                spaghetti, a disco ball, sketch on the wall, nail</SubHeadingComponent>
        </>
    );
};