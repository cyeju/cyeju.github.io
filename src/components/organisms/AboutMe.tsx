'use client';

import type { FC } from 'react';
import Section from '@/components/atoms/Section';

const AboutMe: FC = () => {
    return (
        <Section id="about">
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </Section>
    );
};

export default AboutMe;
