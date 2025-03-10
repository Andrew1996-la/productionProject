import { createContext } from 'react';

export enum ThemeType {
    Dark = 'dark',
    Light = 'light',
}

interface IThemeContext {
    theme?: ThemeType;
    setTheme?: (theme: ThemeType) => void;
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const ThemeContext = createContext<IThemeContext>({});
