import styled from '@emotion/styled';

export const GlassCard = styled.div`
    height: 192px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 20px 0 rgba(255, 180, 0, 0.3);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
`;
