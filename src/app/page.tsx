import type { NextPage } from 'next';
import { HomeTemplate } from '@/components/templates';
import { Footer } from '@/components/organisms/Footer';

const Home: NextPage = () => {
    return (
        <>
            <HomeTemplate />
            <Footer />
        </>
    );
};

export default Home;
