import type { NextPage, Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import '@/assets/fonts/font.css';
import '@/styles/globals.css';

export const metadata: Metadata = {
    title: 'Yeju Choi',
    description: 'Yeju Choi Portfolio',
};

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
