import { HeadingComponent } from "../../reusableComponents/headingComponent"
import { NavBar } from "../../common/navbar"
import { ImageGrid } from "../../reusableComponents/imgGrid"

import undas1 from "../../assets/undas/undas1.jpg"
import undas2 from "../../assets/undas/undas2.jpg"

export const WorkTwo = () => {
    const images = [
        { src: undas1, alt: 'Door 1' },
        { src: undas2, alt: 'Door 2' }
    ];

    return (
        <>
            <NavBar />
            <HeadingComponent text="2023: Second one: Again? I'm so desperate (to be symbolic)" />
            <ImageGrid images={images} />
        </>
    );
};