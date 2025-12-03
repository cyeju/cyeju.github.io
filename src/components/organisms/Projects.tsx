import { useState, type FC } from 'react';
import Section from '@/components/atoms/Section';
import Card from '@/components/atoms/Card';
import Slider from '@/components/molecules/Slider';
import { projectList, type ProjectType } from '@/constants/projectList';

const sliderWidth = 80;

const Projects: FC = () => {
    const [project, setProject] = useState<ProjectType>(projectList[0]);

    const handleChange = (cardKey: number) => {
        setProject(projectList[cardKey - 1]);
    };

    return (
        <Section id="projects">
            <div className="overflow-hidden flex w-full h-120">
                <div className="relative overflow-hidden flex flex-col items-center justify-center w-[40%] h-full shadow-[4px_0_100px_rgba(0,0,0,0.2)] z-1">
                    <img alt={project.gif} src={project.gif} className="max-w-full max-h-full object-contain z-1" />
                </div>
                <Slider width={sliderWidth} onChange={handleChange}>
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
