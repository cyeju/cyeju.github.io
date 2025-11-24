'use client';

import type { NextPage } from 'next';
import DrawerAppBar from '@/components/molecules/DrawerAppBar';
import Footer from '@/components/organisms/Footer';
import HomeTemplate from '@/components/templates/HomeTemplate';

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
