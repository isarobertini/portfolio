import { useState, useRef } from 'react';

import { ParagraphPopUpComponent } from '../reusableComponents/paragraphPopUpComponent';
import { ParagraphComponent } from '../reusableComponents/paragraphComponent';
import { ImageComponent } from '../reusableComponents/imageComponent';
import { SubHeadingComponent } from '../reusableComponents/subHeadingComponent';

import '../reusableComponents/styles.css'; // Import your CSS here
import '../pages/border.css';

import content1 from "../assets/contentShows/content1.jpg"
import content2 from "../assets/contentShows/content2.png"
import content3 from "../assets/contentShows/content3.jpg"
import content4 from "../assets/contentShows/content4.jpg"

export const ContentShows = () => {


    return (
        <>
            <meta name="description" content="The Content Shows, curated by Isa Robertini at Folkteatern Göteborg, featuring artists such as Astrid Schütter, Hedda Bauer, Leonie Dahlström, Aftab Soltani, and more." />

            {/* Section works */}

            <div className='flex flex-col items-center justify-center'>

                <div className='px-7'>
                    <SubHeadingComponent className="text-white">The Content Shows</SubHeadingComponent>
                    <ParagraphComponent className="text-white">
                        <a href="https://www.folkteatern.se/events/the-content-shows" target="_blank" rel="noopener noreferrer">Folkteatern Göteborg</a>
                    </ParagraphComponent>
                    <ParagraphComponent className="text-white">curated by Isa Robertini</ParagraphComponent>
                    <ParagraphComponent className="text-white">A series of shows documented in text - thinking about sculpture</ParagraphComponent>
                </div>

                <div className='flex flex flex-col'>
                    <div className='flex flex-wrap p-6'>
                        <ImageComponent className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto" src={content1} />
                        <ImageComponent className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto" src={content2} />
                        <ImageComponent className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto" src={content3} />
                        <ImageComponent className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto" src={content4} />

                        <SubHeadingComponent className="text-white">Participaring artists:</SubHeadingComponent>
                        <ParagraphComponent className="text-white">Aftab Soltani, Agnes Lindheim, Amie Okenfors, Annie Mo Kellborg, Arvid Kraft, Astrid Schütter, Adam Ameline, Beatrice Fransson, Ebba Olsson, Edvin Cedergren, Emil Söderberg, Emma Stihl, Erik Karlsson, Erik Mattsson, Eskil Hagman, Felicia Ling, Felicia Ljunggren Stanberg, Greta Pielage, Gustav Danielssonbacka, Hampus Karlsson, Hedda Bauer, Hedda Sonnegård, Hedvig Schroeder, Ivan Johansson, Izola Johansson, John Dexter Zetterquist, John Ström Betilov, Jonathan Stanberg, Kassam Abdel Mallak, Kit Simpson, Lasse Eriksson, Leonie Dahlström, Leonie Björhsholm, Levi Ungsgaard, Linn Björheden, Linnea Hilding, Maja Oldefors, Maja Rut Eriksson, Molly Fagerberg, Noah Nordenstam, Olga Kardell, Olivia Brothén, Sahar Armandi, Sara Bessa, Sexter Lindquist, Simba Sinkkonen, Selma Lindhe, Sofia Träff, Solen Alii,Stella Wireen Lindman, Stella Q Wilmer, Tea Berghund, Tea Besglund, Tilde Bengtsson Älgeby, Vera Montelius, Vincent Maiari.</ParagraphComponent>
                    </div>

                </div>
                <div className='px-6'>
                    {/* Popup content - text */}
                    <ParagraphPopUpComponent className="text-amber-400" text="1. Text on a pilar">
                        {/* Popup content - images */}
                        <ParagraphComponent>
                            In 2023 I contacted an artistic institution in Sweden proposing that I curate an exhibition about curatorial processes in artistic institutions. The institution responded that they were interested, and we set up an online meeting to discuss it further. During that meeting I pointed out that this is not going to be an exhibition about institutional critique since it's not logical to participate in an exhibition, take advantage of the institution’s benefits and call it critique. Instead, I framed it as an experimental project, even though the idea came to me in hopelessness and anger after once again meeting a male artist at the after-party, after once again seeing one of his works. Outside the artist's entrance, he looked at me and told me that he had a genius idea - he was going to create a work about the drama at the Swedish Academy but with Harry Potter characters instead of the actual ones.<br /><br />
                            So, I referred to it as an experimental project when I pitched it to the institution. It's about employment processes in the art world and alternative ways of addressing them. I raised questions like who gets employed and why. We often talk so much about artistic quality but rarely about our repetitive behavior of selecting the famous as an object and assigning artistic quality to it. Explicitly, it takes good judgment (the famous) to create good content (artistic quality).
                            During the meeting, I brought up how we often think that good judgment is based on what we know, or how much we know, rather than the act of exploring what we don’t know, and how to handle that. I referred to Jonna Bornemark's book “Horisonten finns alltid kvar: om det bortglömda omdömet” which translates to something like “The horizon is always there: about the forgotten judgment”. In the very beginning, Bornemark writes about a sea with small islands. When one arrives at the first island, they immediately explore it meticulously, discovering one rock, one tree, and one flower. Then there's the horizon, which can always be seen from any island. Bornemark describes the horizon as a symbolic wall where our knowledge ends and hides new unexplored islands. Even if one were brave enough to visit all the islands around the sea, the first one wouldn't look the same when returning to it. Therefore, science is a mass that is constantly moving and should be defined, revalued, and explored at every moment, not treated as a constant object (the island) with an assigned value (a beautiful beach). In the same way, 'the famous' and its 'artistic quality' should be defined, revalued, and explored continuously.<br /><br />
                            Furthermore, I referenced Petter Johansson's (a cognitive scientist at Lund University) study on choice blindness. His studies show that we often have no clue why we make the choices we do; we simply invent reasons afterward. So, I concluded by arguing that since I don't know what I'm doing, and since good judgment involves exploring what we don't know, the logical approach would be for the curator (in this case, me) not to know who or what will be in the show. Later, the curator would likely argue whether it went well or poorly anyway.<br /><br />
                            The producer responded warmly, stating that they would discuss it and then get back to me with a decision.

                            <br /> <br />

                        </ParagraphComponent>
                        <ParagraphComponent className="font-bold">
                            Text on a pilar<br />
                        </ParagraphComponent>
                        <ParagraphComponent>
                            Text, 2023<br />
                            Isa Robertini
                        </ParagraphComponent>
                    </ParagraphPopUpComponent>

                    {/* Popup content - text */}
                    <ParagraphPopUpComponent className="text-amber-400" text="2. The opening speech">
                        {/* Popup content - images */}
                        <ParagraphComponent>
                            In 2023, I contacted an artistic institution in Sweden, proposing that I curate an exhibition about curatorial processes in artistic institutions. After presenting the concept and them deciding, the institution responded that they were interested, and the first show with the title “…when everything of essence has already been said...” opened and closed in September 2023. In retrospective, returning to the first show in memory I recall some certain aspects vividly.
                            In September 2023, during the exhibition in the exhibition space, I met an old colleague of mine. After exchanging greetings, she suggested that I speak into the microphone to provide an explanation of the show. She emphasized the importance of shedding light on the concept. I hesitated, as she persisted and insisted that it was crucial for some kind of understanding.  <br /> <br />
                            In September 2023, after the show, I return to the first show in memory again. I noted that it primarily served as a platform for discussions and conversations, being rather unaccommodating for any purposes other than verbal interactions. Any attempts at non-verbal communication between the artworks were promptly dismissed, both by the space itself and the visitors as multiple. The constant sound created by this multiple as a combined minimized any chance of contemplation and more subtle spaces for ideas to widen.
                            More than that, the lighting was too dim for the paintings and some artworks too obscure for the lighting, some were even too transparent. Others were just too alike the room. The pilar where I put my text didn’t promote my text and thinking about it afterwards - the text didn’t effectively promote the show either. During dismantling, a work made of cartoon tore off a part of the wall paint right next to the entrance. 'Not good at all,' said the institution. Another artist tried to sell her work for only 50€ to the institution, because it was too heavy to carry home. ‘Thanks, but no thanks,” said the institution.  <br /> <br />
                            During the work with the second show, I decided to make and auction with a collogue of mine. Not only to try to auction out my concept from the first show to shed light over the concept, but also to more effectively promote the works for the audience.  <br /> <br />
                            In September 2023, returning to the first show in memory again, I recall a conversation with a collogue of mine about an interview with Eva Illouz, where she suggests that our emotions are highly connected to economical consumption- we consume our experiences and experience through consuming.
                            <br /> <br />

                        </ParagraphComponent>
                        <ParagraphComponent className="font-bold">
                            The opening speech<br />
                        </ParagraphComponent>
                        <ParagraphComponent>
                            Text, 2024<br />
                            Isa Robertini
                        </ParagraphComponent>
                    </ParagraphPopUpComponent>

                    {/* Popup content - text */}
                    <ParagraphPopUpComponent className="text-amber-400" text="3.  Text on a pilar + The opening speech">
                        {/* Popup content - images */}
                        <ParagraphComponent>
                            In 2023, I contacted an artistic institution in Sweden, proposing to curate an exhibition about curatorial processes within artistic institutions. After presenting the concept and them deciding, the first show with the title "...when everything of essence has already been said..." opened and closed in September 2023. The second show "...more songs than philosophy..." opened and closed in November 2023.
                            Following the first show, the institution requested more detailed planning and structure for the upcoming exhibition. Despite being unable to address any specific complications in my implemented structure, I agreed, of course, and the institution provided a more specific schedule, which I accepted, of course. Later that day when discussing it with a colleague, he pointed out the significant gap between the internal working methods of the institution and its outside. How intriguing it was when the institution and its stuff intersected with those who never set foot inside its walls- like insiders and outsiders. When thinking about their interaction, one could easily imagine that the insider is collaborating with the outsider and vice versa, but in what we often address as “real life” the opposite expands. The insider from the institution is speaking as the institution, and the outsider is speaking as (in this case) the artist, and since they speak as different things, there might be a risk that they don’t really communicate with each other. The artist doesn’t understand the institution and vice versa. I agreed with my colleague, of course, as I remember a talk with an insider from the institution. He told me that he believes that if the artist gets 15 minutes to solve a problem, the artist will solve it in 15 minutes. If the artist gets one hour, it will take one hour. I nodded, somehow agreeing that it might be true. I believe that’s why we need a more specific schedule, so the artist can understand the institution and vice versa.   <br /> <br />
                            In order to implement the more specific schedule, the institution invited me to an online meeting in November 2023. I accepted, of course. Earlier that month, when I pitched the idea of making a fake auction with fake money for the next show, we didn’t really agree. At first, the producer responded positively, expressing her enthusiasm for the idea—so fun! However, she soon sent me another email. She apologized, explaining that she actually comes from an artistic practice outside of the institution, and that’s why she sometimes forgets her role within the institution. In other words, she wants to say yes, and that’s why she said yes, but then a colleague of hers mentioned the fact that he’s not sure whether this "new idea" aligns with the initially pitched concept. It needs to be clarified.   <br /> <br />
                            That’s why we scheduled a phone meeting to clarify, to agree. During the conversation, she raised the point that the colleague of her addressed: when you pitched the project, there seemed to be no defined concept, and that was the concept, as we understood it? She asks me whether me pitching the idea of a fake auction contradicted this. I responded, acknowledging that the concept was, in fact, the absence of the defined concept, but retrospectively, I admitted it wasn't entirely effective. Some parts of defined always exist, regardless of my claim of their absence, so adding another wouldn't make a significant difference. I could hear her fingers on the keyboard as she documented our discussion. Ultimately, we agreed, of course.   <br /> <br />
                            In the online meeting, we didn't really agree, again. The institution had made it clear to me that we could not, under any circumstances, encourage any trades between the artist and a potential buyer in the building. I asked what they meant. I pointed out that the money was fake, the auction was fake, and since the works were real, the bidders would end up without anything. They pointed out that a concept like this could, if verbalized the wrong way, lead to illegal affairs, and this could not happen inside the walls of the institution. I asked if it would be possible to encourage a trade between the artist and a potential buyer outside the walls of the institution. I quietly wondered what they defined as the actual trade—the meeting, the discussion, the agreement, the transfer, the receipt. They discussed it and got back to me with a positive answer: what happened outside the walls was not their responsibility.   <br /> <br />
                            I held The Opening Speech about The text on a pillar right before the fake auction started. I joked about the only reason I read it out loud myself was that a colleague of mine had asked me to do so. It was a bad joke since it wasn't a joke. I remembered a colleague of mine asking me if I felt offended by that comment, and that's why I had the urge to hold The Opening Speech. I answered no.   <br /> <br />
                            After the fake auction, I met a colleague of mine in the bar. She was a part of the exhibition, the fake auction—in other words, we fake auctioned out one of her works. She told me that she felt like her exhibited work was not important at all, contrary to what I had just argued in The Opening Speech. Another colleague of mine asked her to elaborate, and she told me that it was a strange sensation—it felt like the works didn't matter, that they only became a part of another work, which was, in fact, my work. A work that explicitly took ownership of her own. A performance? I answered that it was a sculpture, and she continued by arguing that on the other hand, when she took part in another exhibition a while ago, she had the same sensation without anyone explicitly taking ownership of her work. Even though the exhibition had a concept, she continued, it felt like the purpose of the show was for the curator to be in the paper, not for her work to be what it was.
                            <br /> <br />

                        </ParagraphComponent>
                        <ParagraphComponent className="font-bold">
                            Text on a pilar + The opening speech<br />
                        </ParagraphComponent>
                        <ParagraphComponent>
                            Text, 2024<br />
                            Isa Robertini
                        </ParagraphComponent>
                    </ParagraphPopUpComponent>

                    <div className='flex flex-row pt-8'>

                        <ParagraphComponent className="bg-radiating-gradient bg-clip-text text-transparent animate-radiate">
                            <a href="https://www.folkteatern.se/events/the-content-shows" target="_blank" rel="noopener noreferrer">
                                Link to project
                            </a>
                        </ParagraphComponent>
                    </div>

                </div>
            </div>

        </>
    );
};
