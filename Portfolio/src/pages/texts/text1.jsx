import { NavBar } from '../../common/navbar';
import { TextGrid } from '../../reusableComponents/textGrid'; // Correct import path
import { HeadingComponent } from '../../reusableComponents/headingComponent';

export const TextOne = () => {
    const texts = [
        {
            title: 'Accademia di Belle Arti, ITA',
            content: `After carrying my sculpture made of pasta from the exhibition space, I met my colleague in
the hallway. She asked me where I planned to put it now. Mentally, I searched through
different unused spaces in the building but couldn’t come up with a good place to store it.
“Put it in the middle of the square!” she exclaimed. So, I put it in the middle of the square.
While I was installing it (or perhaps getting rid of it), a man approached me. His name was
Ghiaccio, which means ice in English. I recognized him as part of the group of men who lived
on the square. Ghiaccio started to compliment my work, saying that he thought it was
extraordinary. Since I had to leave, I asked if he would be staying in the square during the
day and if he could keep an eye on my sculpture. He answered that he would guard it with
his life, and he knightly, slightly aggressively swung a two-meter-long metal stick in wide
circles over his head.

Later that day, I returned to the square, and Ghiaccio had added objects to my
sculpture: a commercial folder, an old broken speaker, and a fake Louis Vuitton bag. His
square shirt was hanging on a bike parked next to the long metal stick, which was resting on
the ground. “Ragazzi, ragazzi, guardate che meraviglia!” he continuously pointed towards my
work, charging passersby one, two, or five euros to look at it. The money he made ended up
in a pile on the fake Louis Vuitton bag. Sometimes he got on his bike, grabbed the metal
stick, and circulated the sculpture, balancing and performing tricks with the stick. There was
a metal chain close by, made to keep cars out of the square, and sometimes he opened it,
pretending to let people into the square.

Later that night, I received a text message with a link from a colleague. The link
led to an Instagram account that published a picture. It was a big party in a square, and in
the middle, my sculpture made of pasta was burning in flames. I guess Ghiaccio burned
down my work.`,
        },
        {
            title: 'Akademie der Bildenden Künste, AUT',
            content: `After carrying my sculpture made of pasta from the exhibition space, I regret the decision I
made earlier. Before bringing the work into the exhibition space, I decided to remove the tip
of the sculpture for aesthetic reasons. So, I put the tip of the sculpture in my studio and left it
there. Later, as a joke, I placed the tip of my work on the shelf next to the bar where we sell
other works and discarded items from previous works that we found lying around in the
empty spaces outside of the
studio spaces. As a joke, I priced the tip of my work at 27€, thinking that someone might buy
it during the party after a few drinks. We wrote the prices with a permanent marker on pieces
of tape, which we placed under the objects on the shelf.

After two days, a colleague of mine called me, telling me that an art collector
was in the bar and that he wanted to buy my work. I asked which work, and my colleague
replied that he wanted to buy the tip. Just the tip. He just needed to get some cash from the
ATM first.

Later that day, I met the art collector at the bar. He told me that he really liked
the tip of my work, and in fact, his colleague did too, and she also wanted to buy it. I told him
that I had more of them in my studio, not sure if I was joking. In fact, I did have more of them
in my studio. He laughed. We took a walk to look at my actual work. He really liked it, and
while looking at it, I told him how it’s inspired by Nuraghe, Italian houses from late bronze
age. Then we discussed current trends in the art academy and emerging artists.
I signed my work with the same pen I used for the price tags. Mentally, I
caressed the structure of my sculpture with the fingertips of my gaze, as one part together
and two parts apart, trying to decide which title to sell to the art collector. Does the tip have
the same title as the bottom? I signed it. After putting the tip of my work in a paper bag,
gently wrapped in toilet paper, he gave me 27€. I thanked him. I guessed that was it.`,
        },
        {
            title: 'Stockholm Stadsteater, SWE',
            content: `After carrying my sculpture made of pasta from the exhibition space, I met one of the
organizers in the hallway. I thanked her for the exhibition while mentally traveling through
different unused spaces in the building, without coming up with a good place to dispose of
my sculpture. So, I put it in the middle of the square. Walking away, I turned around and
noticed that the wind had forced my sculpture to fall. I stopped at McDonald’s for ice cream
on the way home.

Twenty minutes later, I noticed a missed call, a voice message, and a text from
an unknown number. It was one of the supervisors from the institution. I called back, and he
asked, with a slightly panicky voice, if I had picked up my sculpture already from the
exhibition space. I told him that I had put it on the square and he sighed as he realized that
no one had stolen it. He was confused and thought out loud “what will the city think when
crazy stuff like this happens?” I told him that I usually put my work on squares after the
exhibition period and shared the story about Bologna, where Ghiaccio burned down my work
in the middle of a party at the square. “When you say it like this, it makes more sense,” the
supervisor said and added, “in Sweden, you just get a call from some boring institution
worker that tells you to clean your sculpture away.” I agreed with him; it was a bit boring. I
asked him if he had access to a container and if he could do me the favor of throwing it
away. He told me that he would throw the sculpture in the container, and I thanked him.
Later that night, I wondered how my sculpture looked in the container. I sent the
supervisor a text message asking if he could be so kind as to send me a photo of my
sculpture in the container, only for documentation reasons, of course. He read my message
but didn’t respond. I guess it was too much to ask for.`,
        },
        // Add more text objects as needed
    ];

    return (
        <div>
            <NavBar />
            <HeadingComponent text="ITA, AUT, SWE" />
            <TextGrid texts={texts} /> {/* Ensure TextGrid is rendered correctly */}
        </div>
    );
};

