import { NavigationMenu } from "../common/navigationMenu";
import funnyArrow from "../../public/assets/arrow_funny.png";

// GitHub icon URL
const githubIcon = "https://cdn-icons-png.flaticon.com/256/25/25231.png";

// List of projects with optional GitHub links
const projects = [
    {
        name: "Chicken Out",
        url: "https://knittedbirdshop.netlify.app/",
        github: "https://github.com/isarobertini/knitted_bird_shop",
    },
    {
        name: "Bitstream - Luise Dieckmann",
        url: "https://blog-luisa.netlify.app/",
        github: "https://github.com/isarobertini/blog_luisa",
    },
    {
        name: "Portfolio - Susanna Maila",
        url: "https://susannamaila.com/",
        github: "https://github.com/isarobertini/maila_website",
    },
    {
        name: "Belly Belly Bread - Hedda Bauer",
        url: "https://bellybellybread.com/",
        github: "https://github.com/isarobertini/belly-belly-bread",
    },
    {
        name: "Tuanis Surf School",
        url: "https://tuanissurfschool.com/",
        github: "https://github.com/isarobertini/final-boiler-plate-monorepo",
    },
    {
        name: "Happy Thoughts - Frontend",
        url: "https://happy-happy-thought.netlify.app/",
        github: "https://github.com/isarobertini/project-happy-thoughts-vite",
    },
    {
        name: "Happy Thoughts - Backend",
        url: "https://api-happy-thought.onrender.com/",
        github: "https://github.com/isarobertini/project-happy-thoughts-api",
    },
    {
        name: "Project Auth API",
        url: "https://project-auth-frontend.netlify.app/",
        github: "https://github.com/isarobertini/project-auth",
    },
    {
        name: "Birds - Backend",
        url: "https://api-happy-thought.onrender.com/",
        github: "https://github.com/isarobertini/project-mongo-api",
    },
    {
        name: "Albums and Singles",
        url: "https://music-release-deployed.netlify.app/",
        github: "https://github.com/isarobertini/project-music-releases-vite",
    },
    {
        name: "QR-code generator",
        url: "https://qr-code-qr-code.netlify.app/",
        github: "https://github.com/isarobertini/project-custom-hooks-qr-code-generator-vite",
    },
];

export const Websites = () => {
    return (
        <>
            <NavigationMenu />

            <div className="flex justify-center">
                <div className="font-serif flex flex-col space-y-4 px-4">

                    {projects.map((project, i) => (
                        <div key={i} className="flex items-center space-x-4 group">
                            {/* Arrow + Project Name */}
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center group-hover:text-red-500 transition-colors"
                            >
                                <img
                                    className="h-9 pr-4 transform transition-transform duration-500 group-hover:rotate-[360deg]"
                                    src={funnyArrow}
                                    alt="arrow icon"
                                />
                                {project.name}
                            </a>

                            {/* GitHub Icon */}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center"
                                >
                                    <img
                                        className="h-7 hover:scale-110 transition-transform duration-300"
                                        src={githubIcon}
                                        alt="GitHub"
                                    />
                                </a>
                            )}
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
};
