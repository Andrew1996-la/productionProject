import webpack from 'webpack';
import path from 'path';
import { BuildPaths } from '../buld/types/config';
import { buildCssLoader } from '../buld/loaders/buildCssLoader';

/**
 * Кастомная настройка Webpack для Storybook.
 * Здесь мы добавляем поддержку путей, SVG как React-компонентов и CSS.
 */
export default ({ config }: { config: webpack.Configuration }) => {
    // Указываем пути до исходников (можно использовать в alias и modules)
    const paths: BuildPaths = {
        src: path.resolve(__dirname, '..', '..', 'src'),
        entry: '',
        html: '',
        build: '',
    };

    // Разрешаем абсолютные импорты из src/
    config.resolve?.modules?.push(paths.src);

    // Добавляем расширения файлов, которые можно импортировать без указания расширения
    config.resolve?.extensions?.push('.ts', '.tsx');

    // Добавляем кастомный css loader с поддержкой модулей (из проекта)
    config.module?.rules?.push(buildCssLoader(true));

    /**
     * Удаляем стандартную обработку .svg файлов (обычно это asset/resource),
     * чтобы можно было обрабатывать их как React-компоненты через @svgr/webpack.
     */
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule) => {
        if (
            typeof rule === 'object'
            && rule.test instanceof RegExp
            && rule.test.test('.svg')
        ) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });

    /**
     * Добавляем новый loader для .svg — теперь SVG можно импортировать как React-компоненты:
     * import Logo from './logo.svg';
     * <Logo />
     */
    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    return config;
};
