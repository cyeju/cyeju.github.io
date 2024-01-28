import { useState, type FC } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface Props {
    src: string | StaticImport;
}

const style = {
    imgWrap: {
        width: 500,
        height: 300,
        overflow: 'hidden',
    },
    img: {
        marginBottom: 10,
        objectFit: 'cover',
        filter: 'grayscale(1)',
        transition: '0.3s',
    },
    img_hover: {
        filter: 'grayscale(0)',
        transform: 'scale(1.1)',
        transition: '0.2s',
    },
} as const;

export const WorkImage: FC<Props> = ({ src }) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    return (
        <div style={style.imgWrap}>
            <Image
                alt="이미지"
                src={src}
                style={isHovering ? { ...style.img, ...style.img_hover } : style.img}
                width={500}
                height={300}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            />
        </div>
    );
};
