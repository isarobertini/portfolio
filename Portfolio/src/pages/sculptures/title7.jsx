import { HeadingComponent } from "../../reusableComponents/headingComponent"
import { NavBar } from "../../common/navbar"
import { ImageGrid } from "../../reusableComponents/imgGrid"

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
            <HeadingComponent text="2024: seventh One: Less symbolic (thinking about dry stone walls)" />
            <ImageGrid images={images} />
        </div>

    );
};