import type { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    id: string;
}

const Section: FC<Props> = ({ children, id }) => {
    return (
        <section id={id} className="flex flex-col items-center min-h-[100vh] pt-12 -mt-12">
            {children}
        </section>
    );
};

export default Section;
