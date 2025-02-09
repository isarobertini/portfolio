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
                <meta name="description" content="Isa Robertini is an artist and web developer. Based in Stockholm, Sweden, Vienna, Austria and Oliba, Italy. Contact for more information." />
                <script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script>
            </Helmet>

            {/* Main Content Wrapper */}
            <div className="border-4 h-screen border-indigo-500 flex flex-col justify-center items-center min-h-screen w-full">

                {/* Centered Content */}
                <div className="flex flex-col items-center justify-center text-center gap-y-12 flex-grow w-full">

                    {/* Name Section */}
                    <div className="flex items-center justify-center gap-x-6">
                        <h1 className='text-6xl rotate-180 [writing-mode:vertical-rl]'>Isa</h1>
                        <h1 className='text-8xl'>Robertini</h1>
                    </div>

                    {/* Centered Navigation Menu */}
                    <NavigationMenu />

                    {/* Contact Section */}
                    <div className="flex items-center justify-center gap-x-6">
                        <h1 className='text-4xl'>robertiniisa@gmail.com</h1>
                        <h1 className='text-2xl rotate-180 [writing-mode:vertical-rl]'>Instagram</h1>
                    </div>
                </div>

                {/* Full-Width Footer */}
                <div className="w-full">
                    <Footer />
                </div>
            </div>
        </>
    );
};
