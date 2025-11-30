import type { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    width: number;
}

const Card: FC<Props> = ({ children, width }) => {
    return (
        <div className={`w-${width} min-w-${width} h-full rounded bg-white shadow-[0_0_8px_rgba(0,0,0,0.2)]`}>
            {children}
        </div>
    );
};

export default Card;
