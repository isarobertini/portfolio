import { HeadingComponent } from "../../reusableComponents/headingComponent"
import { NavBar } from "../../common/navbar"
import { ImageGrid } from "../../reusableComponents/imgGrid"
import { ParagraphComponent } from "../../reusableComponents/paragraphComponent"

import garden1 from "../../assets/garden/garden1.jpg"
import garden2 from "../../assets/garden/garden2.jpg"

export const WorkFour = () => {
    const images = [
        { src: garden1, alt: 'Door 1' },
        { src: garden2, alt: 'Door 2' }
    ];

    return (
        <>
            <NavBar />
            <HeadingComponent>2023: FOURTH ONE: FIELD STUDY</HeadingComponent>
            <div class="flex flex-col items-center">
                <div>
                    <ParagraphComponent>Place: A garden</ParagraphComponent>
                    <ParagraphComponent>Material: Part of an old stone house, mussels, plats, a garden. </ParagraphComponent>
                </div>
            </div>
        </>
    );
};