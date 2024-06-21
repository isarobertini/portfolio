import { HeadingComponent } from "../../reusableComponents/headingComponent"
import { NavBar } from "../../common/navbar"
import { ImageGrid } from "../../reusableComponents/imgGrid"
import { SubHeadingComponent } from "../../reusableComponents/subHeadingComponent"

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
            <HeadingComponent>2023: Second one: (impianti di produzione) <br />by the shore (still symbolic)</HeadingComponent>

            <ImageGrid images={images} />

            <SubHeadingComponent>Sculpture, 2023, 60x30cm <br />
                Office material, foam, mussels, parsly, a door chain.</SubHeadingComponent>
        </>
    );
};