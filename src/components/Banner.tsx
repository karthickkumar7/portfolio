import React from 'react';

const Banner = () => {
    return (
        <section
            id="home"
            className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
        >
            <h3 className="text-lg font-titleFont tracking-wide text-textGreen">
                Hi, my Name is
            </h3>
            <h1>
                Karthick, <span>I build things for the web</span>
            </h1>
        </section>
    );
};

export default Banner;
