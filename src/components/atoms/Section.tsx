import type { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

const Section: FC<Props> = ({ children }) => {
    return <div>{children}</div>;
};

export default Section;
