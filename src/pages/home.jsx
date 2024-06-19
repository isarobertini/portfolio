import { HeadingComponent } from "../reusableComponents/headingComponent"
import { ParagraphComponent } from "../reusableComponents/paragraphComponent"
import { NavBar } from "../common/navbar"

export const Home = () => {
    return (
        <>
            <NavBar />
            <HeadingComponent text="Isa Robertini" />

            <div className="flex items-center justify-center w-full h-screen">
                <div className="flex items-center justify-center w-3/6 h-5/6 rounded-full 
                 overflow-hidden">
                    <ParagraphComponent className="text-sm text-center">
                        I’m thinking about <br />dry stone walls every time I think about my work. They are dry like my work,
                        they hold together like my work, they are strong like my work, they are balancing like my work,<br />
                        they are delicate like my work, they are precise like my work, they are stacked on each other like my work,<br />
                        they could fall apart like my work, they are small like my work, when time pass they break like my work,<br />
                        they are what they are like my work, they are always built with material like my work, they are built by hand like my work,<br />
                        but also by using tools like my work, they are built with found material like my work, and they are constructed by my relatives<br />
                        and my work is constructed by me so their author share genetics, even if what I do is considered art because I was born 1996<br />
                        in Sweden and made my way to art academy and my relatives where born around 1940 on the Italian countryside and made it to the Italian countryside<br />
                        their work is considered dry stone walls. This leads me to think about the differences: they work outside but I work inside,<br />
                        they have measuring tools, but I have stick, they have to think about the weather conditions but I have to think about the exhibit conditions,<br />
                        their work is staying for very long but mine is not, they carry cultural heritage but mine doesn’t,
                    </ParagraphComponent>


                </div>
            </div>
        </>

    )
}