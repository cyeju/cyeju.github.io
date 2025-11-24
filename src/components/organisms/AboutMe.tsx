'use client';

import type { FC } from 'react';
import ColorSection from '@/components/atoms/ColorSection';

const AboutMe: FC = () => {
    return (
        <ColorSection>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </ColorSection>
    );
};

export default AboutMe;
