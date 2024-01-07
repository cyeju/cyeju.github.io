'use client';

import type { FC } from 'react';
import { Typography } from '@mui/material';
import { ColorSection } from '@/components/atoms';

export const First: FC = () => {
    return (
        <ColorSection color="#BD3455">
            <Typography component="h1" variant="h1">
                FRONTEND
            </Typography>
            <Typography
                component="h2"
                variant="h2"
                sx={{
                    position: 'absolute',
                    zIndex: '101',
                    left: '50%',
                    top: '55%',
                    transform: 'translate(-50%,-10%)',
                    width: '100%',
                }}
            >
                <span style={{ color: '#f7e057' }}>개발자 최예주</span>에요
            </Typography>
        </ColorSection>
    );
};
