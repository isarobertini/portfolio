import { useState } from "react";
import { ImageComponent } from "./imageComponent";

export const OtherWorks = () => {
    const [selectedContent, setSelectedContent] = useState(""); // Track selected content

    // Content data
    const contentItems = [
        {
            id: "1",
            title: "the content shows: when everything of essence has already been said",
            link: "https://www.folkteatern.se/events/the-content-shows",
            image: "/assets/contentShows/content1.jpg",
            description: "List and poster for The Content Shows",
            summary: `The Content Shows is a one-evening exhibition project held four times between 2023 and 2024 at Folkteatern in Gothenburg, Sweden. The project challenges conventional ideas about artistic merit, selection, and institutional power. At its core lies a simple yet provocative premise: participation is not determined by success, fame, or relevance—but by whoever signs up first on a physical list. No jury. No application. No curation. The Content Shows questions how artistic institutions, while often claiming to support creative freedom, tend to reinforce hierarchical systems. Directors and curators are typically chosen for their acclaim or cultural capital, and they, in turn, select artists who align with their vision—creating a chain of expectations that can limit expression. By removing these filters, the project explores what happens when access is radically redefined. Can artistic quality emerge without gatekeeping? What does an exhibition become when no one shapes the content but the artists themselves? Through this ongoing experiment, The Content Shows creates space for unpredictability, immediacy, and new voices—offering a live critique of how institutions define and control what counts as “important” art. The exhibitions were documented solely through text. `,
            text: `Documentation 1. The text on a pilar

In 2023 I contacted an artistic institution in Sweden proposing that I curate an exhibition about curatorial processes in artistic institutions. The institution responded that they were interested, and we set up an online meeting to discuss it further. During that meeting I pointed out that this is not going to be an exhibition about institutional critique since it's not logical to participate in an exhibition, take advantage of the institution’s benefits and call it critique. Instead, I framed it as an experimental project, even though the idea came to me in hopelessness and anger after once again meeting a male artist at the after-party, after once again seeing one of his works. Outside the artist's entrance, he looked at me and told me that he had a genius idea - he was going to create a work about the drama at the Swedish Academy but with Harry Potter characters instead of the actual ones.

So, I referred to it as an experimental project when I pitched it to the institution. It's about employment processes in the art world and alternative ways of addressing them. I raised questions like who gets employed and why. We often talk so much about artistic quality but rarely about our repetitive behavior of selecting the famous as an object and assigning artistic quality to it. Explicitly, it takes good judgment (the famous) to create good content (artistic quality).

During the meeting, I brought up how we often think that good judgment is based on what we know, or how much we know, rather than the act of exploring what we don’t know, and how to handle that. I referred to Jonna Bornemark's book “Horisonten finns alltid kvar: om det bortglömda omdömet” which translates to something like “The horizon is always there: about the forgotten judgment”. In the very beginning, Bornemark writes about a sea with small islands. When one arrives at the first island, they immediately explore it meticulously, discovering one rock, one tree, and one flower. Then there's the horizon, which can always be seen from any island. Bornemark describes the horizon as a symbolic wall where our knowledge ends and hides new unexplored islands. Even if one were brave enough to visit all the islands around the sea, the first one wouldn't look the same when returning to it. Therefore, science is a mass that is constantly moving and should be defined, revalued, and explored at every moment, not treated as a constant object (the island) with an assigned value (a beautiful beach). In the same way, 'the famous' and its 'artistic quality' should be defined, revalued, and explored continuously.

Furthermore, I referenced Petter Johansson's (a cognitive scientist at Lund University) study on choice blindness. His studies show that we often have no clue why we make the choices we do; we simply invent reasons afterward. So, I concluded by arguing that since I don't know what I'm doing, and since good judgment involves exploring what we don't know, the logical approach would be for the curator (in this case, me) not to know who or what will be in the show. Later, the curator would likely argue whether it went well or poorly anyway.

The producer responded warmly, stating that they would discuss it and then get back to me with a decision.`
        },
        {
            id: "2",
            title: "the content shows: more songs than philosophy",
            link: "https://www.folkteatern.se/events/the-content-shows",
            image: "/assets/contentShows/content2.png",
            description: "List and poster for The Content Shows",
            summary: "The Content Shows is a one-evening exhibition project held four times between 2023 and 2024 at Folkteatern in Gothenburg, Sweden. The project challenges conventional ideas about artistic merit, selection, and institutional power. At its core lies a simple yet provocative premise: participation is not determined by success, fame, or relevance—but by whoever signs up first on a physical list. No jury. No application. No curation. The Content Shows questions how artistic institutions, while often claiming to support creative freedom, tend to reinforce hierarchical systems. Directors and curators are typically chosen for their acclaim or cultural capital, and they, in turn, select artists who align with their vision—creating a chain of expectations that can limit expression. By removing these filters, the project explores what happens when access is radically redefined. Can artistic quality emerge without gatekeeping? What does an exhibition become when no one shapes the content but the artists themselves? Through this ongoing experiment, The Content Shows creates space for unpredictability, immediacy, and new voices—offering a live critique of how institutions define and control what counts as “important” art. The exhibitions were documented solely through text.",
            text: `Documentation 2. The opening speech

In 2023, I contacted an artistic institution in Sweden, proposing that I curate an exhibition about curatorial processes in artistic institutions. After presenting the concept and them deciding, the institution responded that they were interested, and the first show with the title “…when everything of essence has already been said...” opened and closed in September 2023. In retrospective, returning to the first show in memory I recall some certain aspects vividly.
In September 2023, during the exhibition in the exhibition space, I met an old colleague of mine. After exchanging greetings, she suggested that I speak into the microphone to provide an explanation of the show. She emphasized the importance of shedding light on the concept. I hesitated, as she persisted and insisted that it was crucial for some kind of understanding.
In September 2023, after the show, I return to the first show in memory again. I noted that it primarily served as a platform for discussions and conversations, being rather unaccommodating for any purposes other than verbal interactions. Any attempts at non-verbal communication between the artworks were promptly dismissed, both by the space itself and the visitors as multiple. The constant sound created by this multiple as a combined minimized any chance of contemplation and more subtle spaces for ideas to widen. 

More than that, the lighting was too dim for the paintings and some artworks too obscure for the lighting, some were even too transparent. Others were just too alike the room. The pilar where I put my text didn’t promote my text and thinking about it afterwards - the text didn’t effectively promote the show either. During dismantling, a work made of cartoon tore off a part of the wall paint right next to the entrance. 'Not good at all,' said the institution. Another artist tried to sell her work for only 50€ to the institution, because it was too heavy to carry home. ‘Thanks, but no thanks,” said the institution. 

During the work with the second show, I decided to make and auction with a collogue of mine. Not only to try to auction out my concept from the first show to shed light over the concept, but also to more effectively promote the works for the audience.
In September 2023, returning to the first show in memory again, I recall a conversation with a collogue of mine about an interview with Eva Illouz, where she suggests that our emotions are highly connected to economical consumption- we consume our experiences and experience through consuming. 
`
        },
        {
            id: "3",
            title: "the content shows: there is something called acting",
            link: "https://www.folkteatern.se/events/the-content-shows",
            image: "/assets/contentShows/content3.jpg",
            description: "List and poster for The Content Shows",
            summary: "The Content Shows is a one-evening exhibition project held four times between 2023 and 2024 at Folkteatern in Gothenburg, Sweden. The project challenges conventional ideas about artistic merit, selection, and institutional power. At its core lies a simple yet provocative premise: participation is not determined by success, fame, or relevance—but by whoever signs up first on a physical list. No jury. No application. No curation. The Content Shows questions how artistic institutions, while often claiming to support creative freedom, tend to reinforce hierarchical systems. Directors and curators are typically chosen for their acclaim or cultural capital, and they, in turn, select artists who align with their vision—creating a chain of expectations that can limit expression. By removing these filters, the project explores what happens when access is radically redefined. Can artistic quality emerge without gatekeeping? What does an exhibition become when no one shapes the content but the artists themselves? Through this ongoing experiment, The Content Shows creates space for unpredictability, immediacy, and new voices—offering a live critique of how institutions define and control what counts as “important” art. The exhibitions were documented solely through text.",
            text: `Documentation 3. The text on a pilar+ The opening speech

In 2023, I contacted an artistic institution in Sweden, proposing to curate an exhibition about curatorial processes within artistic institutions. After presenting the concept and them deciding, the first show with the title "...when everything of essence has already been said..." opened and closed in September 2023. The second show "...more songs than philosophy..." opened and closed in November 2023.

Following the first show, the institution requested more detailed planning and structure for the upcoming exhibition. Despite being unable to address any specific complications in my implemented structure, I agreed, of course, and the institution provided a more specific schedule, which I accepted, of course. Later that day when discussing it with a colleague, he pointed out the significant gap between the internal working methods of the institution and its outside. How intriguing it was when the institution and its stuff intersected with those who never set foot inside its walls- like insiders and outsiders. When thinking about their interaction, one could easily imagine that the insider is collaborating with the outsider and vice versa, but in what we often address as “real life” the opposite expands. The insider from the institution is speaking as the institution, and the outsider is speaking as (in this case) the artist, and since they speak as different things, there might be a risk that they don’t really communicate with each other. The artist doesn’t understand the institution and vice versa. I agreed with my colleague, of course, as I remember a talk with an insider from the institution. He told me that he believes that if the artist gets 15 minutes to solve a problem, the artist will solve it in 15 minutes. If the artist gets one hour, it will take one hour. I nodded, somehow agreeing that it might be true. I believe that’s why we need a more specific schedule, so the artist can understand the institution and vice versa.

In order to implement the more specific schedule, the institution invited me to an online meeting in November 2023. I accepted, of course. Earlier that month, when I pitched the idea of making a fake auction with fake money for the next show, we didn’t really agree. At first, the producer responded positively, expressing her enthusiasm for the idea—so fun! However, she soon sent me another email. She apologized, explaining that she actually comes from an artistic practice outside of the institution, and that’s why she sometimes forgets her role within the institution. In other words, she wants to say yes, and that’s why she said yes, but then a colleague of hers mentioned the fact that he’s not sure whether this "new idea" aligns with the initially pitched concept. It needs to be clarified. 

That’s why we scheduled a phone meeting to clarify, to agree. During the conversation, she raised the point that the colleague of her addressed: when you pitched the project, there seemed to be no defined concept, and that was the concept, as we understood it? She asks me whether me pitching the idea of a fake auction contradicted this. I responded, acknowledging that the concept was, in fact, the absence of the defined concept, but retrospectively, I admitted it wasn't entirely effective. Some parts of defined always exist, regardless of my claim of their absence, so adding another wouldn't make a significant difference. I could hear her fingers on the keyboard as she documented our discussion. Ultimately, we agreed, of course.

In the online meeting, we didn't really agree, again. The institution had made it clear to me that we could not, under any circumstances, encourage any trades between the artist and a potential buyer in the building. I asked what they meant. I pointed out that the money was fake, the auction was fake, and since the works were real, the bidders would end up without anything. They pointed out that a concept like this could, if verbalized the wrong way, lead to illegal affairs, and this could not happen inside the walls of the institution. I asked if it would be possible to encourage a trade between the artist and a potential buyer outside the walls of the institution. I quietly wondered what they defined as the actual trade—the meeting, the discussion, the agreement, the transfer, the receipt. They discussed it and got back to me with a positive answer: what happened outside the walls was not their responsibility.

I held The Opening Speech about The text on a pillar right before the fake auction started. I joked about the only reason I read it out loud myself was that a colleague of mine had asked me to do so. It was a bad joke since it wasn't a joke. I remembered a colleague of mine asking me if I felt offended by that comment, and that's why I had the urge to hold The Opening Speech. I answered no.
After the fake auction, I met a colleague of mine in the bar. She was a part of the exhibition, the fake auction—in other words, we fake auctioned out one of her works. She told me that she felt like her exhibited work was not important at all, contrary to what I had just argued in The Opening Speech. Another colleague of mine asked her to elaborate, and she told me that it was a strange sensation—it felt like the works didn't matter, that they only became a part of another work, which was, in fact, my work. A work that explicitly took ownership of her own. A performance? I answered that it was a sculpture, and she continued by arguing that on the other hand, when she took part in another exhibition a while ago, she had the same sensation without anyone explicitly taking ownership of her work. Even though the exhibition had a concept, she continued, it felt like the purpose of the show was for the curator to be in the paper, not for her work to be what it was.

`
        },
        {
            id: "4",
            title: "the content shows: completely empty of content",
            link: "https://www.folkteatern.se/events/the-content-shows",
            image: "/assets/contentShows/content4.jpg",
            description: "List and poster for The Content Shows",
            summary: "The Content Shows is a one-evening exhibition project held four times between 2023 and 2024 at Folkteatern in Gothenburg, Sweden. The project challenges conventional ideas about artistic merit, selection, and institutional power. At its core lies a simple yet provocative premise: participation is not determined by success, fame, or relevance—but by whoever signs up first on a physical list. No jury. No application. No curation. The Content Shows questions how artistic institutions, while often claiming to support creative freedom, tend to reinforce hierarchical systems. Directors and curators are typically chosen for their acclaim or cultural capital, and they, in turn, select artists who align with their vision—creating a chain of expectations that can limit expression. By removing these filters, the project explores what happens when access is radically redefined. Can artistic quality emerge without gatekeeping? What does an exhibition become when no one shapes the content but the artists themselves? Through this ongoing experiment, The Content Shows creates space for unpredictability, immediacy, and new voices—offering a live critique of how institutions define and control what counts as “important” art. The exhibitions were documented solely through text.",
            text: `Documentation 4. The fourth show was never documented. 
            `
        }
    ];

    // Toggle function to handle click on title
    const toggleContent = (id) => {
        setSelectedContent((prevSelectedContent) =>
            prevSelectedContent === id ? "" : id
        );
    };

    return (
        <div className="font-serif w-full my-10">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-0 mb-6">
                {contentItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => toggleContent(item.id)}
                        className={`px-4 py-2 text-sm ${selectedContent === item.id ? "underline text-blue-700" : "bg-white hover:underline"}`}
                    >
                        {item.title}
                    </button>
                ))}
            </div>

            {/* Content Grid */}
            {selectedContent && (
                <div className="flex flex-wrap justify-center items-start px-4 text-left">
                    {contentItems.map(
                        (item) =>
                            item.id === selectedContent && (
                                <div key={item.id} className="border-none p-2 lg:w-2/3">
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-col py-4">
                                            <ImageComponent
                                                src={item.image}
                                                alt={item.text}
                                                className="w-full max-w-xl h-auto"
                                            />
                                            {item.description && (
                                                <p className="text-xs text-gray-700 mt-2 text-left max-w-xl">
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>

                                        <div className="w-full">
                                            <p className="my-2 text-sm italic">
                                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                                    {item.title}
                                                </a>
                                            </p>
                                            <p className="text-sm text-gray-700">{item.summary}</p>

                                            {/* Preserved text formatting */}
                                            {item.text && (
                                                <div className="mt-4 text-sm whitespace-pre-wrap text-gray-800 leading-relaxed">
                                                    {item.text}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                    )}
                </div>
            )}
        </div>
    );
};
