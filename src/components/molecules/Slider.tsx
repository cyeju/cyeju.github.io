import React, { useState } from 'react';
import type { FC } from 'react';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import Card from '@/components/atoms/Card';

interface Props {
    width: number;
    children: React.ReactElement[];
}

const Slider: FC<Props> = ({ children, width }) => {
    const [hover, setHover] = useState(false);
    const [cardKey, setCardKey] = useState(1);

    const handleClickLeft = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setCardKey((prev) => prev - 1);
    };

    const handleClickRight = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setCardKey((prev) => prev + 1);
    };

    return (
        <div
            className="relative overflow-hidden w-[60%] h-full"
            onMouseMove={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="absolute top-1/2 flex justify-between w-full -translate-y-1/2 p-2 z-2">
                <button
                    type="button"
                    className="cursor-pointer w-10 h-10 rounded-full bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.2)] disabled:cursor-auto disabled:opacity-0 transition-all duration-400"
                    style={{ transform: `translateX(${hover ? 1 : -20}rem)` }}
                    onClick={handleClickLeft}
                    disabled={cardKey === 1}
                >
                    <ChevronDoubleLeftIcon className="w-5 h-5 m-auto" />
                </button>
                <button
                    type="button"
                    className="cursor-pointer w-10 h-10 rounded-full bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.2)] disabled:cursor-auto disabled:opacity-0 transition-all duration-400"
                    style={{ transform: `translateX(${hover ? -1 : 20}rem)` }}
                    onClick={handleClickRight}
                    disabled={cardKey === children.length}
                >
                    <ChevronDoubleRightIcon className="w-5 h-5 m-auto" />
                </button>
            </div>
            <div
                className="flex gap-4 h-full p-4 pl-40 pr-40 transition-all duration-700"
                style={{ transform: `translateX(${-(cardKey * (width + 4)) / 4}rem)` }}
            >
                <Card width={width} style={{ transform: 'scale(0.9)' }} />
                {children.map((child, i) => {
                    const isActive = i + 1 === cardKey;
                    return React.cloneElement(child, {
                        style: { transform: `scale(${isActive ? 1 : 0.9})` },
                    });
                })}
                <Card width={width} style={{ transform: 'scale(0.9)' }} />
            </div>
        </div>
    );
};

export default Slider;
