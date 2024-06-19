import { HeadingComponent } from "../../reusableComponents/headingComponent"
import { NavBar } from "../../common/navbar"
import { ImageGrid } from "../../reusableComponents/imgGrid"

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
            <HeadingComponent text="2023: Fourth One: Is the backyard now symbolic?" />
            <ImageGrid images={images} />
        </>
    );
};