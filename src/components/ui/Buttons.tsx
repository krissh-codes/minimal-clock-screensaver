import styled from 'styled-components';
import { colors } from '../../constants';

const IconButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

export const ToggleButton = styled(IconButton)<{ dark: boolean }>`
    background-color: ${colors.lightSlate};
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    display: grid;
    place-content: center;
    color: ${ ({ dark }) => (dark ? '#f9ffd6' : '#003b88') };
    filter: brightness(0.8);
    opacity: 0.8;
    transition: all 0.4s;
    
    img {
        height: 1.2rem;
    }
    
    &:hover {
        opacity: 1;
        filter: brightness(1);
    }
`;
