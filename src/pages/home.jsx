import { useState } from 'react';
import { Helmet } from 'react-helmet';

import { NavigationMenu } from '../common/navigationMenu';
import { Footer } from '../common/footer';
import '../reusableComponents/styles.css';

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
                <div className="flex flex-col items-center justify-center text-center gap-y-12 flex-grow w-full">



                    {/* Centered Navigation Menu */}
                    <NavigationMenu />


                </div>
            </div>
        </>
    );
};

