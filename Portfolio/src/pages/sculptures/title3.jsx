import { HeadingComponent } from "../../reusableComponents/headingComponent"
import { NavBar } from "../../common/navbar"
import { ImageGrid } from "../../reusableComponents/imgGrid"

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
            <HeadingComponent text="2023: Third one: Is the beack now symbolic?" />
            <ImageGrid images={images} />
        </>
    );
};