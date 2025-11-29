'use client';

import type { FC } from 'react';

const Introduction: FC = () => {
    return (
        <section className="flex flex-col items-center min-h-[100vh] pt-12 -mt-12">
            <div className="flex flex-col gap-4 items-center max-w-2xl m-auto">
                <h1 className="text-4xl text-gray-600">안녕하세요 :&#41;</h1>
                <p className="text-4xl text-gray-600 text-center">프론트엔드 개발자 최예주 입니다.</p>
                <p className="text-xl mt-16 text-gray-500 text-center">
                    저는 수학 문제 푸는 것을 좋아해서 수학과 전공을 선택하였습니다.
                    <br />
                    복수전공을 시작하면서 수학과 비슷한 매력을 가진 코딩에 흥미가 생겼고, 마크업 언어에 대한 호기심에
                    혼자서 관련 영상과 서적을 찾아 이것저것 시도해보면서 자연스럽게 프론트엔드 개발자를 꿈꾸게
                    되었습니다.
                    <br />
                    수많은 도전과 경험을 통해 다양한 기술 스택을 쌓아 적재적소에 알맞은 기술을 적용하여 최고의 UX를
                    제공할 수 있는 프론트엔드 개발자가 되고 싶습니다.
                </p>
            </div>
        </section>
    );
};

export default Introduction;
