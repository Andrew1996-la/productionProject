type Mods = Record<string, boolean | string>;

/**
 * конкатенирует классы
 *
 * @param requiredClass обязательные класс
 * @param mod классы по уловию
 * @param addiction дополнительные классы
 */
export const classNames = (
    requiredClass: string,
    mod: Mods = {},
    addiction: string[] = [],
): string => {
    const classes: string[] = [
        requiredClass,
        ...addiction.filter(Boolean),
        ...Object.entries(mod)
            .filter(([_, value]) => Boolean(value))
            .map(([classes, value]) => classes),
    ];

    return classes.join(' ');
};
