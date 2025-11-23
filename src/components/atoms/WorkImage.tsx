import { useState, type FC, MouseEventHandler } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';

interface Props {
    src: string | StaticImport;
    title: string;
    openModal: MouseEventHandler<HTMLButtonElement> | undefined;
}

const style = {
    title: {
        position: 'absolute',
        zIndex: '102',
        color: 'white',
        textShadow: '0px 0px 32px black',
    },
    imgWrap: {
        cursor: 'pointer',
        marginBottom: 10,
        overflow: 'hidden',
        width: 500,
        height: 300,
    },
    img: {
        objectFit: 'cover',
        filter: 'grayscale(0.7)',
        transition: '0.3s',
    },
    img_hover: {
        filter: 'grayscale(0) brightness(1)',
        transform: 'scale(1.1)',
        transition: '0.2s',
    },
} as const;

const WorkImage: FC<Props> = ({ src, title, openModal }) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    return (
        <>
            {isHovering && (
                <Typography
                    onClick={() => {}}
                    component={motion.h4}
                    variant="h4"
                    initial={{ translateY: -30, translateX: 16, opacity: 0 }}
                    whileInView={{ translateY: 10, translateX: 16, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    sx={style.title}
                >
                    {title}
                </Typography>
            )}
            <button type="button" onClick={openModal} style={style.imgWrap}>
                <Image
                    alt="이미지"
                    src={src}
                    style={isHovering ? { ...style.img, ...style.img_hover } : style.img}
                    width={500}
                    height={300}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                />
            </button>
        </>
    );
};

export default WorkImage;
