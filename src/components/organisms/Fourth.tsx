'use client';

import { useState, type FC, type SyntheticEvent } from 'react';
import { Stack, Box, Tabs, Tab } from '@mui/material';
import { CustomTabPanel } from '@/components/molecules';
import { ColorSection } from '@/components/atoms';

const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
};

export const Fourth: FC = () => {
    const [value, setValue] = useState(0);

    const handleChange = (_event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <ColorSection color="#0f4c82">
            <Stack sx={{ alignItems: 'center' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: '#f7e057',
                            },
                        }}
                        sx={{
                            '.Mui-selected': {
                                color: `#f7e057 !important`,
                            },
                        }}
                    >
                        <Tab label="개발철학" {...a11yProps(0)} sx={{ color: 'white' }} />
                        <Tab label="Culture Fit" {...a11yProps(1)} sx={{ color: 'white' }} />
                        <Tab label="관심사/기타" {...a11yProps(2)} sx={{ color: 'white' }} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    개발 철학
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    중요하게 생각하는 점,
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    관심사 기타
                </CustomTabPanel>
            </Stack>
        </ColorSection>
    );
};
