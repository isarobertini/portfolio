import { Link, useLocation } from "react-router-dom";

export const NavigationMenu = () => {
    const location = useLocation();

    return (
        <>
            <div className="flex flex-row justify-center items-center w-full mt-4">

                <Link
                    to="/"
                    className={`display: block mx-4 font-serif p-2 text-2xl text-blue-700 ${location.pathname === '/' ? 'text-blue-700' : ''}`}
                >
                    Isa Robertini
                </Link>
            </div>
            <div>
                <Link
                    to="/art"
                    className={`mx-4 p-2 text-lg ${location.pathname === '/art' ? 'underline font-bold text-blue-700' : ''}`}
                >
                    Art
                </Link>
                <Link
                    to="/websites"
                    className={`mx-4 p-2 text-lg ${location.pathname === '/websites' ? 'underline font-bold text-blue-700' : ''}`}
                >
                    Websites
                </Link>
            </div>
        </>
    );
};
