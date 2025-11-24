'use client';

import type { NextPage } from 'next';
import Header from '@/components/molecules/Header';
import Footer from '@/components/organisms/Footer';
import HomeTemplate from '@/components/templates/HomeTemplate';

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <HomeTemplate />
            <Footer />
        </>
    );
};

export default Home;
