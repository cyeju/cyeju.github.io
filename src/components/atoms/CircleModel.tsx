import type { FC } from 'react';
import { Container } from '@mui/material';

interface Props {
    color: string;
}
export const CircleModel: FC<Props> = ({ color }) => {
    return (
        <Container
            disableGutters
            maxWidth={false}
            component="section"
            sx={{
                backgroundColor: color,
                position: 'absolute',
                top: 'calc(100% - 800px)',
                left: 'calc(100% - 800px)',
                borderRadius: 1000,
                width: 1000,
                height: 1000,
            }}
        />
    );
};
