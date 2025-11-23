import type { FC } from 'react';
import First from '@/components/organisms/First';
import Second from '@/components/organisms/Second';
import Third from '@/components/organisms/Third';
import Fourth from '@/components/organisms/Fourth';

const HomeTemplate: FC = () => {
    return (
        <>
            <First />
            <Second />
            <Third />
            <Fourth />
        </>
    );
};

export default HomeTemplate;
