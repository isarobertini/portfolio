import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { AlbumGrid } from '../reusableComponents/AlbumGrid';
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
            <div className="">

                <div className=''>

                    <NavigationMenu />
                </div>
                <AlbumGrid />

            </div>
        </>
    );
};

