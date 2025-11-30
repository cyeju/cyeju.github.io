import { type FC } from 'react';
import Section from '@/components/atoms/Section';
import Card from '@/components/atoms/Card';
import Slider from '@/components/molecules/Slider';

const defaultWidth = 80;

const Projects: FC = () => {
    return (
        <Section id="projects">
            <div className="overflow-hidden flex w-full h-100">
                <div className="flex justify-end w-[40%] h-full shadow-[4px_0_100px_rgba(0,0,0,0.2)] z-1">
                    <div className="flex flex-col gap-2 w-80 max-w-80 min-w-80 h-full p-4 bg-white">
                        <p>프로젝트 이름 입니다.</p>
                        <p>사용 툴 입니다.</p>
                    </div>
                </div>
                <div className="relative overflow-hidden w-[60%] h-full">
                    <Slider width={defaultWidth}>
                        {[{ title: 'project1' }, { title: 'project2' }, { title: 'project3' }].map((v) => (
                            <Card key={v.title} width={defaultWidth}>
                                {v.title}
                            </Card>
                        ))}
                    </Slider>
                </div>
            </div>
        </Section>
    );
};

export default Projects;
