import { useState } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import Card from '@/components/atoms/Card';

interface Props extends PropsWithChildren {
    width: number;
}

const Slider: FC<Props> = ({ children, width }) => {
    const [cardKey, setCardKey] = useState(1);

    return (
        <>
            <div className="absolute top-1/2 flex justify-between w-full -translate-y-1/2 p-2 z-2">
                <button
                    type="button"
                    className="cursor-pointer w-10 h-10 rounded-full bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.2)]"
                    onClick={() => setCardKey((prev) => prev - 1)}
                    disabled={cardKey === 1}
                >
                    <ChevronDoubleLeftIcon className="w-5 h-5 m-auto" />
                </button>
                <button
                    type="button"
                    className="cursor-pointer w-10 h-10 rounded-full bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.2)]"
                    onClick={() => setCardKey((prev) => prev + 1)}
                    disabled={cardKey === 3}
                >
                    <ChevronDoubleRightIcon className="w-5 h-5 m-auto" />
                </button>
            </div>
            <div
                className="flex gap-8 h-full p-4 pl-40 pr-40 transition-all duration-700"
                style={{ transform: `translateX(${-(cardKey * width) / 4}rem)` }}
            >
                <Card width={width} />
                {children}
                <Card width={width} />
            </div>
        </>
    );
};

export default Slider;
