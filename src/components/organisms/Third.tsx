import { useState, type FC } from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';
import ColorSection from '@/components/atoms/ColorSection';
import WorkCard from '@/components/atoms/WorkCard';
import WorkImage from '@/components/atoms/WorkImage';
import CircleModel from '@/components/atoms/CircleModel';
import WorkModal from '@/components/molecules/WorkModal';
import { workList } from '@/constants';

const style = {
    scroll: {
        paddingLeft: 200,
        paddingRight: 40,
        display: 'flex',
        gap: 40,
        overflowX: 'scroll',
        position: 'absolute',
        zIndex: '101',
        top: '50%',
        width: '100%',
        height: 440,
    },
} as const;

const Third: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <ColorSection color="white">
            <CircleModel color="#ffd400" />
            <motion.div
                style={style.scroll}
                initial={{ translateY: 200, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {workList.map(({ imageSrc, title, classification, comment }) => {
                    return (
                        <WorkCard key={title}>
                            {/* image 300 */}
                            <WorkImage src={imageSrc} title={title} openModal={openModal} />
                            {/* text 140 */}
                            <Typography>{classification}</Typography>
                            <Typography>{comment}</Typography>
                            {/* scroll 10 */}
                        </WorkCard>
                    );
                })}
            </motion.div>
            <WorkModal isModalOpen={isModalOpen} closeModal={closeModal} />
        </ColorSection>
    );
};

export default Third;
