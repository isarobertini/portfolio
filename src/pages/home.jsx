import { useState } from 'react';
import { Helmet } from 'react-helmet';

import { NavigationMenu } from '../common/navigationMenu';

export const Home = () => {
    const [activeTab, setActiveTab] = useState(null);

    return (
        <>
            {/* Helmet for SEO and meta tags */}
            <Helmet>
                <title>Isa Robertini</title>
                <meta name="description" content="Isa Robertini is an artist and web developer. Based in Stockholm, Sweden, Vienna, Austria and Olbia, Italy. Contact for more information." />
                <script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script>
            </Helmet>


            {/* Main Content Wrapper */}
            <div className="h-screen flex font-serif flex-col justify-center items-center min-h-screen w-full">
                {/* Centered Content */}
                <div className="flex flex-col items-center justify-center text-center flex-grow w-full text-blue-700">
                    <p className="hover:underline">Isa Robertini</p>
                    <a
                        href="mailto:robertiniisa@gmail.com"
                        className="hover:underline"
                    >
                        robertiniisa@gmail.com
                    </a>
                    <a
                        href="tel:+46709170174"
                        className="hover:underline"
                    >
                        +46 70 917 0174
                    </a>
                    <a
                        href="https://www.instagram.com/isarobertini"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Instagram
                    </a>
                </div>

            </div>
        </>
    );
};

