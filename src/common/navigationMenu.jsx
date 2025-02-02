import { Link, useLocation } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export const NavigationMenu = () => {
    const location = useLocation();

    return (
        <>
            <Fade>
                <div className="">
                    <div className="flex flex-row justify-center items-center w-full m-4">
                        <Link
                            to="/"
                            className="bg-black block mx-4 font-sans p-2 text-2xl text-white"
                        >
                            Isa Robertini
                        </Link>
                    </div>

                    <div className="flex flex-col items-center space-y-2 overflow-visible">
                        <Link
                            to="/art"
                            className={`border-2 border-solid border-black mx-4 my-1 p-2 text-lg leading-normal ${location.pathname === "/art" ? "font-bold text-white bg-black" : ""
                                }`}
                        >
                            Art
                        </Link>
                        <Link
                            to="/websites"
                            className={`border-2 border-solid border-black mx-4 my-1 p-2 text-lg leading-normal ${location.pathname === "/websites" ? "font-bold text-white bg-black" : ""
                                }`}
                        >
                            Websites
                        </Link>
                    </div>
                </div >
            </Fade >

        </>
    );
};
