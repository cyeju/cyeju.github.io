import type { FC } from 'react';

const Interests: FC = () => {
    return (
        <div>
            <div>
                <h2 style={{ color: '#ffd400' }}>
                    <span style={{ marginRight: '8px' }}>TipsAndUpdates Icon</span>
                    인터랙티브 웹 개발
                </h2>
                <p>역동적이고 애니메이션적인 부분을 강조한 웹</p>
                <p>로띠를 공부하고 싶어요</p>
                <p style={{ color: '#999a9d', fontSize: '14px' }}>
                    #부드러운 애니메이션 #역동적이되 한눈에 들어오는 UI # 편안한 UX
                </p>
            </div>
            <div>
                <h2 style={{ color: '#ffd400' }}>
                    <span style={{ marginRight: '8px' }}>TagFaces Icon</span>
                    UI 디자인 트렌드
                </h2>
                <p>미니멀리즘, 뉴모피즘, 글래스모피즘</p>
                <p>탁월한 사용자 경험, 직관적인 인터페이스</p>
                <p style={{ color: '#999a9d', fontSize: '14px' }}>
                    #사용자 만족도가 서비스 #마이크로 인터랙션 #클레이 모피즘
                </p>
            </div>
            <div>
                <h2 style={{ color: '#ffd400' }}>
                    <span style={{ marginRight: '8px' }}>Settings Icon</span>
                    OSS 공헌
                </h2>
                <p>발전하고 지식을 나누고 싶어요</p>
                <p>혼자만의 성장이 아닌 모두가 성장 할 수 있는 사회</p>
                <p style={{ color: '#999a9d', fontSize: '14px' }}>
                    #받은만큼 더 베풀기 #행복을 나누면 2배 #자신이 발전해야 그만큼 공헌도 할수있어요
                </p>
            </div>
        </div>
    );
};

export default Interests;
