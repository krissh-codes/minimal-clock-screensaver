import styled from 'styled-components';

export const Header = styled.header<{isZen: boolean}>`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 2rem;
    gap: 1rem;
    opacity: ${({ isZen }) => (isZen ? 0 : 1)};
    
    transition: all 0.4s;
    
    &:hover {
        opacity: 1;
    }
`;
