import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';
import { ColorSection, CircleModel, WorkCard, WorkImage } from '@/components/atoms';
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

export const Third: FC = () => {
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
                            <WorkImage src={imageSrc} title={title} />
                            {/* text 140 */}
                            <Typography>{classification}</Typography>
                            <Typography>{comment}</Typography>
                            {/* scroll 10 */}
                        </WorkCard>
                    );
                })}
            </motion.div>
        </ColorSection>
    );
};
