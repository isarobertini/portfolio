import React from 'react';
import { NavBar } from '../../common/navbar';
import { HeadingComponent } from '../../reusableComponents/headingComponent';
import { ParagraphComponent } from '../../reusableComponents/paragraphComponent';
import { SubHeadingComponent } from '../../reusableComponents/subHeadingComponent';

export const TextThree = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <NavBar />
            <div className="text-center p-6">
                <HeadingComponent>I’m thinking about dry stone walls every time I think about my work.</HeadingComponent>
                <SubHeadingComponent>Texts, 2023-2024</SubHeadingComponent>
                <div className="flex flex-col md:flex-row items-center">
                    <div className='p-2'>
                        <SubHeadingComponent>Similarities</SubHeadingComponent>
                        <ParagraphComponent>
                            I’m thinking about dry stone walls every time I think about my work. They are dry like my work, they hold together like my work, they are strong like my work, they are balancing like my work, they are delicate like my work, they are precise like my work, they are stacked on each other like my work, they could fall apart like my work, they are small like my work, when time pass they break like my work, they are what they are like my work, they are always built with material like my work, they are built by hand like my work, but also by using tools like my work, they are built with found material like my work, and they are constructed by my relatives and my work is constructed by me so their author share genetics,
                        </ParagraphComponent>
                    </div>
                    <div className='p-2'>
                        <SubHeadingComponent>Differences</SubHeadingComponent>
                        <ParagraphComponent>
                            even if what I do is considered art because I was born 1996 in Sweden and made my way to art academy and my relatives where born around 1940 on the Italian countryside and made it to the Italian countryside their work is considered dry stone walls. This leads me to think about the differences: they work outside but I work inside, they have measuring tools, but I have stick, they have to think about the weather conditions but I have to think about the exhibit conditions, their work is staying for very long but mine is not, they carry cultural heritage but mine doesn’t,
                        </ParagraphComponent>
                    </div>
                </div>
            </div>
        </div>
    );
};
