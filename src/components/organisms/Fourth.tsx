'use client';

import { useState, type FC, type SyntheticEvent } from 'react';
import { Stack, Box, Tabs, Tab } from '@mui/material';
import ColorSection from '@/components/atoms/ColorSection';
import CultureFit from '@/components/molecules/CultureFit';
import CustomTabPanel from '@/components/molecules/CustomTabPanel';
import DevPhilosophy from '@/components/molecules/DevPhilosophy';
import Interests from '@/components/molecules/Interests';

const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
};

const style = {
    minW800: { minHeight: '800px' },
    tabPanel: {
        maxWidth: '873px',
        width: '100%',
    },
} as const;

const Fourth: FC = () => {
    const [value, setValue] = useState(0);

    const handleChange = (_event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <ColorSection color="white">
            <div style={{ paddingTop: 48 }}>
                <Stack sx={{ alignItems: 'center' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: '#ffd400',
                                },
                            }}
                            sx={{
                                '.Mui-selected': {
                                    color: `#ffd400 !important`,
                                },
                            }}
                        >
                            <Tab label="개발철학" {...a11yProps(0)} sx={{ color: 'black' }} />
                            <Tab label="Culture Fit" {...a11yProps(1)} sx={{ color: 'black' }} />
                            <Tab label="관심사/기타" {...a11yProps(2)} sx={{ color: 'black' }} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0} style={style.minW800}>
                        <DevPhilosophy />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1} style={{ ...style.minW800, ...style.tabPanel }}>
                        <CultureFit />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2} style={{ ...style.minW800, ...style.tabPanel }}>
                        <Interests />
                    </CustomTabPanel>
                </Stack>
            </div>
        </ColorSection>
    );
};

export default Fourth;
