import styled from 'styled-components';
import { colors } from '../../constants';

export const CalendarLayout = styled.div<{ $dark: boolean }>`
    font-size: 1rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    p {
        width: 1.8rem;
        height: 1.8rem;
        font-size: 0.8rem;
        text-align: center;
        border-radius: 50%;
        color: ${colors.contrast.primary};
        background-color: ${({ $dark }) => ($dark ? colors.contrast.primary : colors.darkSlate)};
        color: ${({ $dark }) => (!$dark ? colors.lightSlate : colors.darkSlate)};
        display: inline-flex;
        align-items: center;
        justify-content: center;
        letter-spacing: initial;
        transition: all 0.3s;
    }
`;
