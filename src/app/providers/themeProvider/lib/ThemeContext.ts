import { createContext } from 'react';

export enum ThemeType {
    Dark = 'app_dark_theme',
    Light = 'app_light_theme',
}

interface IThemeContext {
    theme?: ThemeType;
    setTheme?: (theme: ThemeType) => void;
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const ThemeContext = createContext<IThemeContext>({});
