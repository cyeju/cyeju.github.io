import type { FC } from 'react';
import GlassCard from '@/components/atoms/GlassCard';

const DevPhilosophy: FC = () => {
    return (
        <div>
            <div>
                <div>
                    <GlassCard>
                        <h2>
                            <span>AutoFixHigh Icon</span>
                            Commit Rule
                        </h2>
                        <p>커밋을 할 때는 항상 오류가 없는 상태여야 해요</p>
                        <p>깔끔하고 일관된 메세지로 작성해야해요</p>
                        <p>#작은단위로 커밋 #오류체크 #알아보기 쉽게</p>
                    </GlassCard>
                </div>
                <div>
                    <GlassCard>
                        <h2>
                            <span>Rule Icon</span>
                            컨벤션
                        </h2>
                        <p>코드는 항상 명사로 작성해야해요</p>
                        <p>같은 관심사끼리 묶어야해요 </p>
                        <p>#Naming Rules #유지보수 #규칙준수</p>
                    </GlassCard>
                </div>
                <div>
                    <GlassCard>
                        <h2>
                            <span>Build Icon</span>
                            Refactoring
                        </h2>
                        <p>하나의 함수는 한 역할만 해야해요</p>
                        <p>변수명을 정확하게 지어야해요</p>
                        <p>#함수분리 #사용하지않는 변수제거 #var 사용하지 않기</p>
                    </GlassCard>
                </div>
            </div>
            <div>
                <div>
                    <picture>
                        <source srcSet="/images/commit-rules.png" type="image/png" />
                        <img src="/images/commit-rules.png" alt="커밋룰 예시" width="100%" height={190} />
                    </picture>
                </div>
                <div>
                    <picture>
                        <source srcSet="/images/coding-conventions.png" type="image/png" />
                        <img src="/images/coding-conventions.png" alt="컨벤션 예시" width="100%" height={195} />
                    </picture>
                </div>
                <div>
                    <picture>
                        <source srcSet="/images/refactoring.png" type="image/png" />
                        <img src="/images/refactoring.png" alt="리팩토링 예시" width="100%" height={192} />
                    </picture>
                </div>
            </div>
        </div>
    );
};

export default DevPhilosophy;
