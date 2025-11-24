import type { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

const ColorSection: FC<Props> = ({ children }) => {
    return <div>{children}</div>;
};

export default ColorSection;
