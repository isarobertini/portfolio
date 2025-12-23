import { NavigationMenu } from "../common/navigationMenu";

import funnyArrow from "../../public/assets/arrow_funny.png"

export const Websites = () => {
    return (
        <>
            <div>
                {/* Centered Navigation Menu */}
                <NavigationMenu />

                <div className="flex justify-center">

                    <div>
                        <div className="font-serif flex flex-col space-y-2">
                            {/* Project Link 1 */}
                            <a
                                href="https://susannamaila.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center group hover:text-red-500"
                            >
                                <img
                                    className="h-9 pr-4 transform transition-transform duration-500 group-hover:rotate-[360deg]"
                                    src={funnyArrow}
                                    alt="icon"
                                />
                                Portfolio - Susanna Maila
                            </a>

                            {/* Project Link 2 */}
                            <a
                                href="https://bellybellybread.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center group hover:text-red-500"
                            >
                                <img
                                    className="h-9 pr-4 transform transition-transform duration-500 group-hover:rotate-[360deg]"
                                    src={funnyArrow}
                                    alt="icon"
                                />
                                Belly Belly Bread - Hedda Bauer
                            </a>

                            {/* Project Link 3 */}
                            <a
                                href="https://tuanissurfschool.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center group hover:text-red-500"
                            >
                                <img
                                    className="h-9 pr-4 transform transition-transform duration-500 group-hover:rotate-[360deg]"
                                    src={funnyArrow}
                                    alt="icon"
                                />
                                Tuanis Surf School
                            </a>
                            {/* Project Link 3 */}
                            <a
                                href="https://blog-luisa.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center group hover:text-red-500"
                            >
                                <img
                                    className="h-9 pr-4 transform transition-transform duration-500 group-hover:rotate-[360deg]"
                                    src={funnyArrow}
                                    alt="icon"
                                />
                                Bitstream - Luise Dieckmann
                            </a>

                        </div>

                        <div className="pt-10 font-serif flex flex-col space-y-2">
                            <h1>Other projects</h1>

                            <a
                                href="https://happy-happy-thought.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center group hover:text-red-500"
                            >
                                <img
                                    className="h-9 pr-4 transform transition-transform duration-500 group-hover:rotate-[360deg]"
                                    src={funnyArrow}
                                    alt="icon"
                                />
                                Happy Thoughts
                            </a>

                            <a
                                href="https://api-happy-thought.onrender.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center group hover:text-red-500"
                            >
                                <img
                                    className="h-9 pr-4 transform transition-transform duration-500 group-hover:rotate-[360deg]"
                                    src={funnyArrow}
                                    alt="icon"
                                />
                                Happy Thoughts - Backend
                            </a>

                            {/* Project Link 3 */}
                            <a
                                href="https://project-auth-frontend.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center group hover:text-red-500"
                            >
                                <img
                                    className="h-9 pr-4 transform transition-transform duration-500 group-hover:rotate-[360deg]"
                                    src={funnyArrow}
                                    alt="icon"
                                />
                                Project Auth API
                            </a>
                            <a
                                href="https://api-happy-thought.onrender.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center group hover:text-red-500"
                            >
                                <img
                                    className="h-9 pr-4 transform transition-transform duration-500 group-hover:rotate-[360deg]"
                                    src={funnyArrow}
                                    alt="icon"
                                />
                                Birds - Backend
                            </a>

                            {/* Project Link 3 */}
                            <a
                                href="https://music-release-deployed.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center group hover:text-red-500"
                            >
                                <img
                                    className="h-9 pr-4 transform transition-transform duration-500 group-hover:rotate-[360deg]"
                                    src={funnyArrow}
                                    alt="icon"
                                />
                                Albums and Singles
                            </a>
                            {/* Project Link 3 */}
                            <a
                                href="https://qr-code-qr-code.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center group hover:text-red-500"
                            >
                                <img
                                    className="h-9 pr-4 transform transition-transform duration-500 group-hover:rotate-[360deg]"
                                    src={funnyArrow}
                                    alt="icon"
                                />
                                QR-code generator
                            </a>
                            <div className="flex justify-center p-4">
                                <a
                                    href="https://github.com/isarobertini"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center group hover:text-red-500"
                                >
                                    <img className="h-10" src="https://cdn-icons-png.flaticon.com/256/25/25231.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
