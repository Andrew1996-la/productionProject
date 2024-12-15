import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeType} from "./ThemeContext";

interface IUseTheme {
    theme: ThemeType;
    toggleTheme: () => void;
}

export const useTheme = (): IUseTheme => {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = (): void => {
        const newTheme = theme === ThemeType.Light ? ThemeType.Dark : ThemeType.Light;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {
        theme,
        toggleTheme,
    }
}