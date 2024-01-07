'use client';

import type { FC } from 'react';
import { Typography, Grid, Tooltip, Button } from '@mui/material';
import { skillList } from '@/constants';
import { ColorSection } from '@/components/atoms';

export const Second: FC = () => {
    return (
        <ColorSection color="#5D5DA8">
            <div>
                <Grid container justifyContent="center" sx={{ alignItems: 'center' }} rowSpacing={6}>
                    <Grid item xs={12} sm={6}>
                        <Typography component="h1" variant="h1">
                            기술스택
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Grid container gap="8px" sx={{ px: '24px' }}>
                            {skillList.map(({ skillName, src, comment }) => {
                                return (
                                    <Tooltip key={skillName} title={<h3>{comment}</h3>} placement="top" arrow>
                                        <Button
                                            component="a"
                                            sx={{ color: '#fff', border: '1px solid white' }}
                                            href={src}
                                            target="_blank"
                                        >
                                            {skillName}
                                        </Button>
                                    </Tooltip>
                                );
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </ColorSection>
    );
};
