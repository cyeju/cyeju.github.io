import { type FC } from 'react';
import Section from '@/components/atoms/Section';
import Card from '@/components/atoms/Card';
import Slider from '@/components/molecules/Slider';
import { projectList } from '@/constants/projectList';

const sliderWidth = 80;

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
                <Slider width={sliderWidth}>
                    {projectList.map((v) => (
                        <Card key={v.title} width={sliderWidth}>
                            <p className="mb-1">{v.title}</p>
                            <div className="flex gap-1 mb-4 text-xs">
                                <span>{v.startDate}</span>
                                <span>~</span>
                                <span>{v.endDate}</span>
                            </div>
                            <div className="flex flex-wrap gap-1 mb-4">
                                {v.skills.map((skill) => (
                                    <p
                                        key={skill}
                                        className="flex justify-center items-center text-sm rounded-lg pl-2 pr-2 bg-gray-200"
                                    >
                                        {skill}
                                    </p>
                                ))}
                            </div>
                            <ul className="flex flex-col gap-1">
                                {v.contents.map((content) => (
                                    <li key={content} className="flex gap-2 text-sm">
                                        <span>-</span>
                                        <span>{content}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </Slider>
            </div>
        </Section>
    );
};

export default Projects;
