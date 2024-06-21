import { HeadingComponent } from "../../reusableComponents/headingComponent"
import { NavBar } from "../../common/navbar"
import { ImageGrid } from "../../reusableComponents/imgGrid"
import { SubHeadingComponent } from "../../reusableComponents/subHeadingComponent"

import discoVertical from "../../assets/discoVertical/discoVertical.png"

export const WorkNine = () => {
    const images = [
        { src: discoVertical, alt: 'Door 1' },


    ];

    return (
        <>
            <NavBar />
            <HeadingComponent>2024: Ninth One: /+39 320 6885297/ <br />part of a stone house /thinking about dry stone walls</HeadingComponent>

            <ImageGrid images={images} />

            <SubHeadingComponent>Sculpture, 2024, 170x120cm <br />
                spaghetti, a disco ball, sketch on the wall, towel holder, metal shelf, nails</SubHeadingComponent>
        </>
    );
};