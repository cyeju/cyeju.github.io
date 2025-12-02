import type { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    width: number;
    style?: object;
}

const Card: FC<Props> = ({ children, width, style = {} }) => {
    return (
        <div
            className="h-full rounded p-4 bg-white shadow-[0_0_8px_rgba(0,0,0,0.2)] transition-all duration-700"
            style={{ width: `${width / 4}rem`, minWidth: `${width / 4}rem`, ...style }}
        >
            {children}
        </div>
    );
};

export default Card;
