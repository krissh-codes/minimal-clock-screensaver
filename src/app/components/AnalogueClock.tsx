import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants';

export function AnalogueClock({ $dark, time }: { $dark: boolean; time: Date; }) {
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const hoursRotation = (hour >= 12 ? hour - 12 : hour) * 30 + minute * 0.5;

    const [smoothedSecond, setSmoothedSecond] = useState(second);

    useEffect(() => {
        setSmoothedSecond(curr => curr + 1);
    }, [time]);

    return (
        <AnalogueClockContainer $dark={$dark}>
            <HourNeedle $dark={$dark} style={{transform: `rotate(${hoursRotation}deg)`}} />
            <MinuteNeedle $dark={$dark} style={{transform: `rotate(${minute * 6}deg)`}} />
            <SecondNeedle $dark={$dark} style={{transform: `rotate(${smoothedSecond * 6}deg)`}} />
        </AnalogueClockContainer>
    );
}

const AnalogueClockContainer = styled.div<{ $dark: boolean }>`
    width: 25rem;
    height: 25rem;
    border-radius: 50%;
    padding: 1rem;
    position: relative;
    transform: rotate(-90deg);
    transition: all 0.3s;
`;

const HourNeedle = styled.div<{ $dark: boolean; }>`
    width: 8rem;
    height: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: left;
    background-color: ${({ $dark }) => ($dark ? colors.contrast.primary : colors.darkSlate)};
    transition: all 0.3s;
`;

const MinuteNeedle = styled.div<{ $dark: boolean; }>`
    width: 11rem;
    height: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: left;
    background-color: ${({ $dark }) => ($dark ? colors.contrast.primary : colors.darkSlate)};
    transition: all 0.3s;
`;

const SecondNeedle = styled.div<{ $dark: boolean; }>`
    width: 11rem;
    height: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: left;
    background-color: ${colors.primary};
    transition: all linear 1s;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        background-color: ${({ $dark }) => ($dark ? colors.contrast.primary : colors.darkSlate)};
        border: 3px solid ${colors.primary};
        border-radius: 50%;
        transition: all 0.3s;
    }
`;