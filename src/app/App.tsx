import { useEffect, useState } from 'react';
import { Header, ThemedCenterContainer, ToggleButton } from '../components';
import { days, months } from '../constants';
import { dark_mode, light_mode, maximize, minimize, zen, zen_off } from '../icons';
import { AnalogueClock } from './components/AnalogueClock';
import { CalendarLayout } from './components/CalendarLayout';
import { DigitalClockLayout } from './components/DigitalClockLayout';

export default function ThemeClock() {
    const [isDark, setDarkMode] = useState<boolean>(false);
    const [isZen, setZen] = useState<boolean>(false);
    const [isFullScreen, setFullScreen] = useState<boolean>(false);
    const [time, setTime] = useState<Date>(new Date());

    const toggleDarkTheme = () => {
        setDarkMode(prevMode => !prevMode);
    };

    const toggleZen = () => {
        setZen(isAlreadyEnabled => {
            if (!isAlreadyEnabled) {
                document.body.classList.add('zen');
            } else {
                document.body.classList.remove('zen');
            }
            return !isAlreadyEnabled;
        });
    };

    const toggleFullScreen = () => {
        setFullScreen(prevMode => {
            if (prevMode) {
                document.exitFullscreen().then();
            } else {
                document.getElementById('root')!.requestFullscreen().then();
            }
            return !prevMode;
        });
    };

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    });

    return (
        <ThemedCenterContainer $dark={isDark}>
            <Header $isZen={isZen}>
                <ToggleButton onClick={toggleZen} $dark={isDark}>
                    <img src={isZen ? zen_off : zen} alt="icon" />
                </ToggleButton>
                <ToggleButton onClick={toggleDarkTheme} $dark={isDark}>
                    <img src={isDark ? dark_mode : light_mode} alt="icon" />
                </ToggleButton>
                <ToggleButton onClick={toggleFullScreen} $dark={isDark}>
                    <img src={isFullScreen ? minimize : maximize} alt="icon" />
                </ToggleButton>
            </Header>

            <AnalogueClock $dark={isDark} $time={time} />
            <DigitalClockLayout>{time.toLocaleTimeString('en-us')}</DigitalClockLayout>
            <CalendarLayout $dark={isDark}>
                {days[time.getDay()]}, {months[time.getMonth()]} <p>{time.getDate()}</p>
            </CalendarLayout>
        </ThemedCenterContainer>
    );
}