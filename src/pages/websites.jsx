import { NavigationMenu } from "../common/navigationMenu"
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent"

export const Websites = () => {
    return (
        <>
            <div className="flex flex-col items-center w-full">
                <NavigationMenu />

                <div className="mx-4 mt-8">
                    <SubHeadingComponent className="cursor-pointer text-blue-700 text-xl tracking-widest">
                        <a href="https://tuanissurfschool.com/" target="_blank" rel="noopener noreferrer">
                            Tuanis Surf School -- visit
                        </a>
                    </SubHeadingComponent>
                    <SubHeadingComponent className="cursor-pointer text-blue-700 text-xl tracking-widest">
                        <a href="https://bellybellybread.com/" target="_blank" rel="noopener noreferrer">
                            Belly Belly Bread -- visit
                        </a>
                    </SubHeadingComponent>
                </div>
            </div>
        </>
    )
}