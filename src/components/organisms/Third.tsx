import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ColorSection, CircleModel } from '@/components/atoms';

const style = {
    scroll: {
        overflowX: 'scroll',
        position: 'absolute',
        zIndex: '101',
        top: '50%',
        width: '100%',
        height: 340,
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
                Hi
            </motion.div>
        </ColorSection>
    );
};
