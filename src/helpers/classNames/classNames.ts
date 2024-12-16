type Mods = Record<string, boolean | string>;

export const classNames = (requiredClass: string, mod: Mods, addiction?: string[]): string => {
    const classes: string[] = [
        requiredClass,
        ...(addiction || []),
        ...Object.entries(mod)
            .filter(([classes, value]) => Boolean(value))
            .map(([classes, value]) => classes)
    ]

    return classes.join(' ');
}

