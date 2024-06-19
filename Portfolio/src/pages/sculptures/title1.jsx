import { HeadingComponent } from "../../reusableComponents/headingComponent"
import { NavBar } from "../../common/navbar"
import { ImageGrid } from "../../reusableComponents/imgGrid"

import praja1 from "../../assets/praja/praja1.jpg"
import praja2 from "../../assets/praja/praja2.jpg"
import praja3 from "../../assets/praja/praja3.jpg"
import praja4 from "../../assets/praja/praja4.jpg"

export const WorkOne = () => {
    const images = [
        { src: praja1, alt: 'Door 1' },
        { src: praja2, alt: 'Door 2' },
        { src: praja3, alt: 'Door 1' },
        { src: praja4, alt: 'Door 2' }
    ];
    return (
        <>
            <NavBar />
            <HeadingComponent text="2023: First one (symbolic)" />
            <HeadingComponent text="But I don't want to be symbolic" />
            <HeadingComponent text="(especially not when it comes to my herritage)" />
            <ImageGrid images={images} />
        </>
    )
}