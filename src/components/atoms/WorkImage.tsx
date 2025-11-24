import { useState, type FC, MouseEventHandler } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface Props {
    src: string | StaticImport;
    title: string;
    openModal: MouseEventHandler<HTMLButtonElement> | undefined;
}

const WorkImage: FC<Props> = ({ src, title, openModal }) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    return (
        <>
            {isHovering && <span>{title}</span>}
            <button type="button" onClick={openModal}>
                <Image
                    alt="이미지"
                    src={src}
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
