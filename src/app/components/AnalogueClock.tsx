import styled from 'styled-components';
import { colors } from '../../constants';

export function AnalogueClock({ $dark, $time }: { $dark: boolean; $time: Date; }) {
    return (
        <AnalogueClockContainer $dark={$dark}>
            <HourNeedle $dark={$dark} $hour={$time.getHours()} $minute={$time.getMinutes()} />
            <MinuteNeedle $dark={$dark} $minute={$time.getMinutes()} />
            <SecondNeedle $dark={$dark} $second={$time.getSeconds()} />
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

const HourNeedle = styled.div<{ $dark: boolean; $hour: number; $minute: number }>`
    width: 8rem;
    height: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: left;
    background-color: ${({ $dark }) => ($dark ? colors.contrast.primary : colors.darkSlate)};
    transform: rotate(
            ${({ $hour, $minute }) => {
                const temp = $hour >= 12 ? $hour - 12 : $hour;
                return temp * 30 + $minute * 0.5;
            }}deg
    );
    transition: all 0.3s;
`;

const MinuteNeedle = styled.div<{ $dark: boolean; $minute: number }>`
    width: 11rem;
    height: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: left;
    background-color: ${({ $dark }) => ($dark ? colors.contrast.primary : colors.darkSlate)};
    transform: rotate(${({ $minute }) => $minute * 6}deg);
    transition: all 0.3s;
`;

const SecondNeedle = styled.div<{ $dark: boolean; $second: number }>`
    width: 11rem;
    height: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: left;
    background-color: ${colors.primary};
    transform: rotate(${({ $second }) => $second * 6}deg);
    transition: all 0.3s;

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