import { useState } from 'react';
import { Helmet } from 'react-helmet';

import { NavigationMenu } from '../common/navigationMenu';

import '../reusableComponents/styles.css';
import './border.css';

export const Home = () => {
    const [activeTab, setActiveTab] = useState(null); // State to track which tab is active

    return (
        <>
            {/* Helmet for SEO and meta tags */}
            <Helmet>
                <title>Isa Robertini</title>
                <meta name="description" content="Isa Robertini is an artist and web developer. Based in Stockholm, Sweden, Vienna, Austria and Oliba, Italy. Contact for more information." />
                {/* Adding the script for dotlottie-player */}
                <script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script>
            </Helmet>

            {/* Container */}
            <div className="w-auto transition-all duration-500 ease-in-out">
                {/* Dropdown Section */}
                <div className="flex flex-col items-center justify-center w-full h-auto">

                    {/* Tab Buttons */}
                    <NavigationMenu activeTab={activeTab} setActiveTab={setActiveTab} />

                    {/* Lottie Player */}
                    <div className="mt-6">
                        <dotlottie-player
                            src="https://lottie.host/15146925-887d-4ac1-a6f2-49d339109699/FCrlKZhKiz.lottie"
                            background="transparent"
                            speed="1"
                            style={{ width: '300px', height: '300px' }}
                            loop
                            autoplay
                        ></dotlottie-player>
                    </div>
                    {/* Contact */}
                    <div className="text-black p-3 mt-4">
                        <a href="mailto:robertiniisa@gmail.com" className="font-serif p-2 text-2xl text-blue-700">
                            robertiniisa@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
