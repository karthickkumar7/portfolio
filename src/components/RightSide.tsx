import React from 'react';

const RightSide = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
            <a href="mailto:karthickkumar7.k7@gmail.com">
                <p className="text-sm rotate-90 tracking-wide text-textGreen">
                    EMAIL ME
                </p>
            </a>
            <div className="w-[2px] h-[400px] mt-6 bg-textDark"></div>
        </div>
    );
};

export default RightSide;
