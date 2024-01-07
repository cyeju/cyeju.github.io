'use client';

import type { NextPage } from 'next';
import { DrawerAppBar } from '@/components/molecules';
import { Footer } from '@/components/organisms';
import { HomeTemplate } from '@/components/templates';

const Home: NextPage = () => {
    return (
        <>
            <DrawerAppBar />
            <HomeTemplate />
            <Footer />
        </>
    );
};

export default Home;
