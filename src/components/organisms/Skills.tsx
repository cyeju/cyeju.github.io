'use client';

import type { FC } from 'react';
import Section from '@/components/atoms/Section';

const Skills: FC = () => {
    return (
        <Section id="skills" bgColor="black">
            <p className="font-bold text-4xl text-white mb-12">Skills</p>
            <div className="flex flex-col">
                <div className="flex gap-4">
                    <span>Typescript</span>
                    <span>Javascript</span>
                </div>
                <div className="flex gap-4">
                    <span>React</span>
                    <span>Next.js</span>
                    <span>ReactNative</span>
                    <span>jQuery</span>
                    <span>redux-toolkit</span>
                    <span>recoil</span>
                </div>
                <div className="flex gap-4">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>SCSS</span>
                    <span>Emotion</span>
                </div>
                <div className="flex gap-4">
                    <span>Git</span>
                    <span>Github</span>
                    <span>Jira</span>
                </div>
            </div>
        </Section>
    );
};

export default Skills;
