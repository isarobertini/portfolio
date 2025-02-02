import { useState } from 'react';
import { Helmet } from 'react-helmet';

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
                <div className="flex flex-col items-center justify-center w-full h-full">

                    {/* Titles List */}
                    <div className='mx-8'>
                        <div className='my-4'>
                            <h2 className="text-l font-bold">Titles:</h2>
                            <ul className="text-sm list-disc pl-5">
                                <li>Symbolic</li>
                                <li>Critical</li>
                                <li>Cultural</li>
                                <li>Political</li>
                                <li>Durum wheat semolina, water, squid ink</li>
                                <li>Spaghetti al Nero di Seppia, Fregula</li>
                            </ul>
                        </div>

                        {/* Dimensions List */}
                        <div className='my-4'>
                            <h2 className="text-l font-bold">Dimensions:</h2>
                            <ul className="text-sm list-disc pl-5">
                                <li>30x30 cm</li>
                                <li>15x30 cm</li>
                                <li>50x30 cm</li>
                                <li>60x60 cm</li>
                                <li>05x15 cm</li>
                            </ul>
                        </div>

                        {/* Years List */}
                        <div className='my-4'>
                            <h2 className="text-l font-bold">Years:</h2>
                            <ul className="text-sm list-disc pl-5">
                                <li>2024</li>
                                <li>2025</li>
                            </ul>
                        </div>

                        {/* Materials List */}
                        <div className='my-4'>
                            <h2 className="text-l font-bold">Materials:</h2>
                            <ul className="text-sm list-disc pl-5">
                                <li>A part of a door lock found at a house of a grandmother, durum wheat semolina, water, squid ink.</li>
                                <li>A circular metal object with decorative elements, durum wheat semolina, water, squid ink.</li>
                                <li>Metal object found at a house of a grandmother, durum wheat semolina, water, squid ink.</li>
                                <li>Durum wheat semolina, water, squid ink.</li>
                                <li>Spaghetti al Nero di Seppia, Fregula.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
