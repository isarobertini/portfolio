import { Fade } from "react-awesome-reveal";

import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent"


export const Websites = () => {
    return (
        <>
            <div className="bg-yellow-200 flex flex-col items-center h-screen w-full">

                <Fade>
                    <div className="mx-4 mt-8">
                        <SubHeadingComponent className="cursor-pointer bg-black block my-2 font-sans p-2 text-2xl text-white">
                            <a href="https://tuanissurfschool.com/" target="_blank" rel="noopener noreferrer">
                                Tuanis Surf School -- visit
                            </a>
                        </SubHeadingComponent>
                        <SubHeadingComponent className="cursor-pointer bg-black block my-2 mx-4 font-sans p-2 text-2xl text-white">
                            <a href="https://bellybellybread.com/" target="_blank" rel="noopener noreferrer">
                                Belly Belly Bread -- visit
                            </a>
                        </SubHeadingComponent>
                    </div>
                </Fade>

            </div>
        </>
    )
}