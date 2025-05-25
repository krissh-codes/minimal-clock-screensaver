import styled from 'styled-components';
import { colors } from '../../constants';

const CenterContainer = styled.div<{
    color?: 'primary' | 'secondary' | 'slate' | string;
}>`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => {
        switch (props.color) {
            case 'primary':
                return 'linear-gradient(to bottom right, #2d6cdf, #98bcff)';
            case 'slate':
                return 'linear-gradient(to bottom right, #292929, #111)';
            case 'secondary':
                return 'linear-gradient(to bottom right, #ff8cba, #ffb5d3)';
            default:
                return props.color;
        }
    }};
`;

export const ThemedCenterContainer = styled(CenterContainer)<{ $dark: boolean }>`
    background-color: ${({ $dark }) => ($dark ? colors.darkSlate : '#fff')};
    color: ${({ $dark }) => ($dark ? colors.contrast.primary : colors.darkSlate)};
    transition: all 0.4s;
`;