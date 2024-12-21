import { useState } from 'react';
import { ParentCriticalMoment } from '../reusableComponents/parentCriticalMoment';
import { ParentContentShow } from '../reusableComponents/parentContentShows';
import { NavigationMenu } from '../common/navigationMenu';
import { TextPopUpComponent } from '../reusableComponents/textPopUpComponent';
import { SubHeadingComponent } from '../reusableComponents/subHeadingComponent';
import { ParagraphComponent } from '../reusableComponents/paragraphComponent';

export const Art = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isContentShowsPopupVisible, setIsContentShowsPopupVisible] = useState(false);

    // Text content for the clickable area (what user will click)
    const criticalMomentClickableText = "CRITICAL MOMENTS: 07.09.24-15.09.24 Gallery Kannski ARTISTS: J. Pasila, Isa Robertini";
    const contentShowsClickableText = `THE CONTENT SHOWS: (4 parts, curated artistic interventions)
    26.09.23, 05.11.23, 08.02.2024, 02.05.2024,
    Folkteatern Göteborg,
    ARTISTS: Isa Robertini, Aftab Soltani, Agnes Lindheim, Amie Okenfors, Annie Mo Kellborg, Arvid Kraft, Astrid Schütter, Adam Ameline, Beatrice Fransson, Ebba Olsson, Edvin Cedergren, Emil Söderberg, Emma Stihl, Erik Karlsson, Erik Mattsson, Eskil Hagman, Felicia Ling, Felicia Ljunggren Stanberg, Greta Pielage, Gustav Danielssonbacka, Hampus Karlsson, Hedda Bauer, Hedda Sonnegård, Hedvig Schroeder, Ivan Johansson, Izola Johansson, John Dexter Zetterquist, John Ström Betilov, Jonathan Stanberg, Kassam Abdel Mallak, Kit Simpson, Lasse Eriksson, Leonie Dahlström, Leonie Björhsholm, Levi Ungsgaard, Linn Björheden, Linnea Hilding, Maja Oldefors, Maja Rut Eriksson, Molly Fagerberg, Noah Nordenstam, Olga Kardell, Olivia Brothén, Sahar Armandi, Sara Bessa, Sexter Lindquist, Simba Sinkkonen, Selma Lindhe, Sofia Träff, Solen Alii, Stella Wireen Lindman, Stella Q Wilmer, Tea Berglund, Tea Besglund, Tilde Bengtsson Älgeby, Vera Montelius, Vincent Maiari.`;

    // Content to be shown inside the popup
    const criticalMomentPopupContent = (
        <div>
            <h2 className='py-2 text-blue-700 font-bold'>CRITICAL MOMENTS</h2>
            <p className='py-2'>Artist: J. Pasila and Isa Robertini.</p>
            <p className='py-2'>Gallery Kannski 07.09.24 to 15.09.24.</p>
            <p>Critical moments is an exhibition addressing the time old question of what an artist might make if they were trapped in a room for a hundred years.
                <br /><br />
                Both Isa Robertini and J. Pasila make meticulous objects out of unnoticed things; rusty tools, dry pasta, the walls of the exhibition space itself. A meditative, obsessive process of care links Robertini’s delicate pasta sculptures with Pasila’s careful photographs of the doorways, scratches, and marks on Kannski’s walls.
                <br /><br />
                Together, the artists create a simple, hallucinatory exhibition reflecting on the temporality of the spaces we find ourselves in.</p>

            <ParagraphComponent className="cursor-pointer text-blue-700 text-xl tracking-widest">
                <a href="https://www.gallerykannski.com/previousshows" target="_blank" rel="noopener noreferrer">
                    Link to project
                </a>
            </ParagraphComponent >
        </div>
    );

    const contentShowsPopupContent = (
        <div>
            <h2 className='py-2 text-blue-700 font-bold'>Content Shows</h2>
            <p className='py-2'>A curated artistic intervention by Isa Robertini with multiple shows and artists, including Leonie Dahlström, Hedda Bauer, and many others.</p>
            <p>The events took place at Folkteatern Göteborg on various dates throughout the year 2023-2024.<br /><br />
                The Content Shows was a series of four artistic interventions curated by Isa Robertini, focusing on the tension between artistic freedom and institutional structures. Hosted at Folkteatern in Gothenburg, Sweden, the exhibitions invited artists from various disciplines through an open call with a first-come, first-served sign-up process, deliberately disregarding fame and success.
                <br /><br />
                The exhibitions, titled "When Everything of Essence Has Already Been Said", "More Songs Than Philosophy", "Completely Empty of Content", and "There Is Something Called Acting", sought to question the hierarchical system of institutions that typically prioritize well-known artists for the sake of perceived artistic quality. By removing these conventional gatekeeping structures, The Content Shows explored whether true artistic freedom is possible in such a context.</p>

            <ParagraphComponent className="cursor-pointer text-blue-700 text-xl tracking-widest">
                <a href="https://www.folkteatern.se/events/the-content-shows" target="_blank" rel="noopener noreferrer">
                    Link to project
                </a>
            </ParagraphComponent >

            <div className="mt-4">
                <h3>Artists Featured:</h3>
                <ul>
                    {[
                        'Isa Robertini', 'Aftab Soltani', 'Agnes Lindheim', 'Amie Okenfors', 'Annie Mo Kellborg',
                        'Arvid Kraft', 'Astrid Schütter', 'Adam Ameline', 'Beatrice Fransson', 'Ebba Olsson',
                        'Edvin Cedergren', 'Emil Söderberg', 'Emma Stihl', 'Erik Karlsson', 'Erik Mattsson',
                        'Eskil Hagman', 'Felicia Ling', 'Felicia Ljunggren Stanberg', 'Greta Pielage', 'Gustav Danielssonbacka',
                        'Hampus Karlsson', 'Hedda Bauer', 'Hedda Sonnegård', 'Hedvig Schroeder', 'Ivan Johansson',
                        'Izola Johansson', 'John Dexter Zetterquist', 'John Ström Betilov', 'Jonathan Stanberg', 'Kassam Abdel Mallak',
                        'Kit Simpson', 'Lasse Eriksson', 'Leonie Dahlström', 'Leonie Björhsholm', 'Levi Ungsgaard', 'Linn Björheden',
                        'Linnea Hilding', 'Maja Oldefors', 'Maja Rut Eriksson', 'Molly Fagerberg', 'Noah Nordenstam', 'Olga Kardell',
                        'Olivia Brothén', 'Sahar Armandi', 'Sara Bessa', 'Sexter Lindquist', 'Simba Sinkkonen', 'Selma Lindhe',
                        'Sofia Träff', 'Solen Alii', 'Stella Wireen Lindman', 'Stella Q Wilmer', 'Tea Berglund', 'Tea Besglund',
                        'Tilde Bengtsson Älgeby', 'Vera Montelius', 'Vincent Maiari'
                    ].map((artist, index) => (
                        <li key={index}>{artist}</li>
                    ))}
                </ul>
                <ParagraphComponent className="cursor-pointer text-blue-700 text-xl tracking-widest">
                    <a href="https://www.folkteatern.se/events/the-content-shows" target="_blank" rel="noopener noreferrer">
                        Link to project
                    </a>
                </ParagraphComponent >
            </div>
        </div >
    );

    const handleCriticalMomentTextClick = () => {
        setIsPopupVisible(!isPopupVisible); // Toggle the visibility of the critical moments popup
    };

    const handleContentShowsTextClick = () => {
        setIsContentShowsPopupVisible(!isContentShowsPopupVisible); // Toggle the visibility of the content shows popup
    };

    return (
        <div className="flex flex-col items-center lg:w-1/2 m-auto">
            {/* Navigation Menu */}
            <div className="m-4">
                <NavigationMenu />
            </div>

            {/* Art Content */}
            <div className="m-8">
                {/* Critical Moments Section */}
                <div className="relative cursor-pointer">
                    <TextPopUpComponent
                        className="underline decoration-dashed"
                        isPopupVisible={isPopupVisible}
                        setIsPopupVisible={setIsPopupVisible}
                        text={criticalMomentClickableText} // This is the clickable text
                        popupContent={criticalMomentPopupContent} // This is the content inside the popup
                        onClick={handleCriticalMomentTextClick} // Click to toggle the popup
                    />
                </div>

                {/* Parent Critical Moment Component */}
                <ParentCriticalMoment />

                {/* Content Shows Section */}
                <div className="group relative mt-8">
                    <TextPopUpComponent
                        className="underline decoration-dashed cursor-pointer"
                        isPopupVisible={isContentShowsPopupVisible}
                        setIsPopupVisible={setIsContentShowsPopupVisible}
                        text={contentShowsClickableText} // This is the clickable text
                        popupContent={contentShowsPopupContent} // This is the content inside the popup
                        onClick={handleContentShowsTextClick} // Click to toggle the popup
                    />
                </div>

                {/* Parent Content Show Component */}
                <ParentContentShow />
            </div>
        </div>
    );
};
