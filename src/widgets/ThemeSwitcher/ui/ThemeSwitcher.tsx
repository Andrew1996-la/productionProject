import { ThemeType, useTheme } from 'app/providers/themeProvider';
import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import LightTheme from 'shared/assets/icons/theme-light.svg';
import { Button, ButtonTheme } from 'shared/ui/Button';

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
        >
            {theme === ThemeType.Light ? <LightTheme /> : <DarkTheme />}
        </Button>
    );
};
