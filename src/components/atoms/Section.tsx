import { useEffect, useRef } from 'react';
import type { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    id: string;
    bgColor?: 'white' | 'black';
}

const Section: FC<Props> = ({ children, id, bgColor = 'white' }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add('opacity-100', 'translate-y-0');
                }
            },
            { threshold: 0.1 },
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, []);

    return (
        <section id={id} className={`min-h-screen flex items-center justify-center bg-${bgColor}`}>
            <div ref={ref} className="fade-up opacity-0 transform translate-y-8 transition-all duration-700">
                {children}
            </div>
        </section>
    );
};

export default Section;
