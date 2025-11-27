import type { FC } from 'react';
import AboutMe from '@/components/organisms/AboutMe';
import Skills from '@/components/organisms/Skills';
import Career from '@/components/organisms/Career';
import Projects from '@/components/organisms/Projects';

const HomeTemplate: FC = () => {
    return (
        <>
            <AboutMe />
            <Skills />
            <Career />
            <Projects />
        </>
    );
};

export default HomeTemplate;
