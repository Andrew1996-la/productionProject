import {FC, useMemo, useState} from "react";
import {LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeType} from "./ThemeContext";

const defaultTheme: ThemeType = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType || ThemeType.Light;

const ThemeContextProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<ThemeType>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;