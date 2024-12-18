import { ParentCriticalMoment } from '../reusableComponents/parentCriticalMoment';
import { ParentContentShow } from '../reusableComponents/parentContentShows';
import { NavigationMenu } from '../common/navigationMenu';
import { ParagraphComponent } from '../reusableComponents/paragraphComponent';
import { HeadingComponent } from '../reusableComponents/headingComponent';
import { Link, useLocation } from "react-router-dom";

export const Art = () => {
    return (
        <div className="flex flex-col items-center w-full">

            {/* Navigation Menu */}
            <div className="mt-4">
                <NavigationMenu />
            </div>

            {/* Art Content */}
            <div className="mx-4 mt-8">
                <ParagraphComponent className="underline decoration-dashed">
                    CRITICAL MOMENTS<br />07.09.24-15.09.24<br />Gallery Kannski<br />ARTISTS: J. Pasila, Isa Robertini
                </ParagraphComponent>

                <ParentCriticalMoment />

                {/* Content Shows Section */}
                <ParagraphComponent className="underline decoration-dashed justify-items-center">
                    The Content Shows<br />26.09.23, 05.011.23, 08.02.2024, 02.05.2024<br />Folkteatern Göteborg<br />
                    ARTISTS: Isa Robertini, Aftab Soltani, Agnes Lindheim, Amie Okenfors, Annie Mo Kellborg, Arvid Kraft, Astrid Schütter, Adam Ameline, Beatrice Fransson, Ebba Olsson, Edvin Cedergren, Emil Söderberg, Emma Stihl, Erik Karlsson, Erik Mattsson, Eskil Hagman, Felicia Ling, Felicia Ljunggren Stanberg, Greta Pielage, Gustav Danielssonbacka, Hampus Karlsson, Hedda Bauer, Hedda Sonnegård, Hedvig Schroeder, Ivan Johansson, Izola Johansson, John Dexter Zetterquist, John Ström Betilov, Jonathan Stanberg, Kassam Abdel Mallak, Kit Simpson, Lasse Eriksson, Leonie Dahlström, Leonie Björhsholm, Levi Ungsgaard, Linn Björheden, Linnea Hilding, Maja Oldefors, Maja Rut Eriksson, Molly Fagerberg, Noah Nordenstam, Olga Kardell, Olivia Brothén, Sahar Armandi, Sara Bessa, Sexter Lindquist, Simba Sinkkonen, Selma Lindhe, Sofia Träff, Solen Alii, Stella Wireen Lindman, Stella Q Wilmer, Tea Berglund, Tea Besglund, Tilde Bengtsson Älgeby, Vera Montelius, Vincent Maiari.
                </ParagraphComponent>

                <ParentContentShow />
            </div>
        </div>
    );
};
