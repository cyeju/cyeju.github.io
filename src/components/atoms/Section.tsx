import type { FC, PropsWithChildren } from 'react';

const bg = {
    white: 'bg-white',
    black: 'bg-black',
};

interface Props extends PropsWithChildren {
    id: string;
    bgColor?: 'white' | 'black';
}

const Section: FC<Props> = ({ children, id, bgColor = 'white' }) => {
    return (
        <section id={id} className={`flex flex-col justify-center items-center min-h-[100vh] pt-12 ${bg[bgColor]}`}>
            {children}
        </section>
    );
};

export default Section;
