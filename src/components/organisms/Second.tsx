'use client';

import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Typography, Grid, Tooltip, Button } from '@mui/material';
import ColorSection from '@/components/atoms/ColorSection';
import { skillList } from '@/constants';

const Second: FC = () => {
    return (
        <ColorSection color="white">
            <div>
                <Grid container justifyContent="center" sx={{ alignItems: 'center' }} rowSpacing={6}>
                    <Grid item xs={12} sm={6}>
                        <Typography
                            component={motion.h1}
                            variant="h1"
                            initial={{ translateX: -200, opacity: 0 }}
                            whileInView={{ translateX: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
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
                                            sx={{ color: 'black', border: '1px solid black' }}
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

export default Second;
