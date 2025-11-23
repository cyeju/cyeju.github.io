import type { FC, PropsWithChildren } from 'react';
import { Container } from '@mui/material';

interface Props extends PropsWithChildren {
    color: string;
}
export const ColorSection: FC<Props> = ({ children, color }) => {
    return (
        <Container
            disableGutters
            maxWidth={false}
            component="section"
            sx={{
                display: 'table',
                backgroundColor: color,
                color: 'black',
                overflow: 'hidden',
                height: '100vh',
                justifyContent: 'center',
                textAlign: 'center',
                position: 'relative',
                '& > *': {
                    display: 'table-cell',
                    verticalAlign: 'middle',
                },
            }}
        >
            {children}
        </Container>
    );
};
