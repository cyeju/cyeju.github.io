'use client';

import { useState, type FC } from 'react';
import ColorSection from '@/components/atoms/ColorSection';
import CultureFit from '@/components/molecules/CultureFit';
import CustomTabPanel from '@/components/molecules/CustomTabPanel';
import DevPhilosophy from '@/components/molecules/DevPhilosophy';
import Interests from '@/components/molecules/Interests';

const Fourth: FC = () => {
    const [value] = useState(0);

    return (
        <ColorSection>
            <div style={{ paddingTop: 48 }}>
                <div>
                    <div className="text-sm font-medium text-center text-body border-b border-default">
                        <ul className="flex flex-wrap -mb-px">
                            <li className="me-2">
                                <a
                                    href="/#"
                                    className="inline-block p-4 border-b border-transparent rounded-t-base hover:text-fg-brand hover:border-brand"
                                >
                                    Profile
                                </a>
                            </li>
                            <li className="me-2">
                                <a
                                    href="/#"
                                    className="inline-block p-4 text-fg-brand border-b border-brand rounded-t-base active"
                                    aria-current="page"
                                >
                                    Dashboard
                                </a>
                            </li>
                            <li className="me-2">
                                <a
                                    href="/#"
                                    className="inline-block p-4 border-b border-transparent rounded-t-base hover:text-fg-brand hover:border-brand"
                                >
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </div>
                    <CustomTabPanel value={value} index={0}>
                        <DevPhilosophy />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <CultureFit />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <Interests />
                    </CustomTabPanel>
                </div>
            </div>
        </ColorSection>
    );
};

export default Fourth;
