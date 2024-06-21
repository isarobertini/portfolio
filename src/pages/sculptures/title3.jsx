import { HeadingComponent } from "../../reusableComponents/headingComponent"
import { NavBar } from "../../common/navbar"
import { ImageGrid } from "../../reusableComponents/imgGrid"
import { ParagraphComponent } from "../../reusableComponents/paragraphComponent"

import beach1 from "../../assets/beach/beach1.jpg"
import beach2 from "../../assets/beach/beach2.jpg"

export const WorkThree = () => {
    const images = [
        { src: beach1, alt: 'Door 1' },
        { src: beach2, alt: 'Door 2' }
    ];

    return (
        <>
            <NavBar />
            <HeadingComponent>2023: THIRD ONE: 2023: FIELD STUDY</HeadingComponent>
            <div class="flex flex-col items-center">
                <div>
                    <ParagraphComponent>Place: A beach</ParagraphComponent>
                    <ParagraphComponent>Material: Spaghetti, a branch from an olive tree, a beach</ParagraphComponent>
                </div>
            </div>

        </>
    );
};