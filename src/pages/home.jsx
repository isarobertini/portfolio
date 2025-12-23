import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AlbumGrid } from '../reusableComponents/AlbumGrid';
import { NavigationMenu } from '../common/navigationMenu';
import { motion } from "framer-motion";

import arrowLight from "../../public/assets/errow1.png"; // white bg arrow
import arrowDark from "../../public/assets/image.webp";   // black bg arrow

export const Home = ({ bgColor = "white" }) => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setRotation(window.scrollY * 0.1);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isDarkBg = bgColor === "black";
    const arrowImg = isDarkBg ? arrowDark : arrowLight;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`${isDarkBg ? "bg-black" : "bg-white"} min-h-screen`}
        >
            {/* Spinning images */}
            <div className="relative md:sticky md:top-5 z-20 mx-5">
                <div className="flex justify-between h-20">
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/29/29407.png"
                        alt=""
                        style={{
                            transform: `rotate(${rotation}deg)`,
                            filter: isDarkBg ? "invert(1)" : "none"
                        }}
                    />
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/29/29407.png"
                        alt=""
                        style={{
                            transform: `scaleX(-1) rotate(${-rotation}deg)`,
                            filter: isDarkBg ? "invert(1)" : "none"
                        }}
                    />
                </div>
            </div>

            {/* Navigation menu */}
            <NavigationMenu textColor={isDarkBg ? "white" : "black"} isDarkBg={isDarkBg} />

            <AlbumGrid />
        </motion.div>
    );
};
