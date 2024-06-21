import { HeadingComponent } from "../../reusableComponents/headingComponent"
import { NavBar } from "../../common/navbar"
import { ImageGrid } from "../../reusableComponents/imgGrid"
import { SubHeadingComponent } from "../../reusableComponents/subHeadingComponent"

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
            <HeadingComponent>2023: First one (nuraghe) <br />But I don't want to be symbolic <br /> (especially not when it comes to my heritage)</HeadingComponent>

            <ImageGrid images={images} />

            <SubHeadingComponent>Sculpture, 2023, 160x200cm <br />
                Spaghetti, paper from the Academy of Fine Arts Vienna, a chair.</SubHeadingComponent>
        </>
    )
}