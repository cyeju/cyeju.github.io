import { useState, type FC } from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/atoms/Section';
import WorkImage from '@/components/atoms/WorkImage';
import CircleModel from '@/components/atoms/CircleModel';
import WorkModal from '@/components/molecules/WorkModal';
import { workList } from '@/constants/workList';

const Projects: FC = () => {
    const [, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    return (
        <Section>
            <CircleModel />
            <motion.div
                initial={{ translateY: 200, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {workList.map(({ imageSrc, title, classification, comment }) => {
                    return (
                        <div key={title}>
                            <WorkImage src={imageSrc} title={title} openModal={openModal} />
                            <span>{classification}</span>
                            <span>{comment}</span>
                        </div>
                    );
                })}
            </motion.div>
            <WorkModal />
        </Section>
    );
};

export default Projects;
