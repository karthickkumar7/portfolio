import React from 'react';
import SectionTitle from './SectionTitle';
import { AiFillThunderbolt } from 'react-icons/ai';
import Image from 'next/image';

const About = () => {
    return (
        <section
            id="about"
            className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
        >
            <SectionTitle title={'About me'} titleNo={'01.'} />
            <div className="flex flex-col lgl:flex-row gap-16">
                <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
                    <p>
                        Hello! My Name is Karthick and I enjoy creating things
                        that live on the internet. my interest in web
                        development started in 2020, when i found out that i can
                        tweak things in the Browser console. turns out creating
                        and firing Events taught me a lot about HTML & CSS!{' '}
                    </p>
                    <p>
                        Fast-forward today, i have built many interesting
                        applications as a hobby and and i'm keen on working in a
                        Professional Environment.
                    </p>
                    <p>
                        I read Mangas and watch Animes in my spare time. and
                        currently due to the fast changing dynamics and on
                        what's happening around the world, i constantly catching
                        up and subscribed to Internation politics
                    </p>
                    <p>
                        Here are a few technologies I have been working with
                        recently:
                    </p>
                    <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>
                            Javascript (ES6+)
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>
                            React
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>
                            Next.js
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>
                            Typescript
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>
                            Node.js
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>
                            Express.js
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>
                            Tailwindcss
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>
                            MongoDB
                        </li>
                    </ul>
                </div>

                {/* IMAGE */}
                <div className="w-full lgl:w-1/3 h-80 relative group">
                    <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
                        <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                            <Image
                                src="/assets/profile.png"
                                alt="profile"
                                width={300}
                                height={300}
                                className="rounded-lg h-full w-full object-cover"
                            />
                            <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                        </div>

                        <div className="hidden lgl:inline-flex lgl:absolute top-4 -right-4 w-full h-80 border-2 border-textGreen rounded-md group-hover:top-0 group-hover:right-0 transition-all duration-300"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
