import type { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ColorSection, CircleModel, WorkCard } from '@/components/atoms';
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
    img: {
        marginBottom: 10,
        objectFit: 'cover',
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
                {workList.map(({ title, imageSrc }) => {
                    return (
                        <WorkCard key={title}>
                            {/* image 300 */}
                            <Image alt="이미지" src={imageSrc} width={500} height={300} style={style.img} />
                            {/* text 140 */}
                            {title}
                            {/* scroll 10 */}
                        </WorkCard>
                    );
                })}
            </motion.div>
        </ColorSection>
    );
};
