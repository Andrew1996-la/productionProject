import { ResolveOptions } from 'webpack';
import path from 'path';
import { BuildOptions } from './types/config';

export function buildResolves(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            app: path.resolve(options.paths.src, 'app'),
            pages: path.resolve(options.paths.src, 'pages'),
            features: path.resolve(options.paths.src, 'features'),
            entities: path.resolve(options.paths.src, 'entities'),
            widgets: path.resolve(options.paths.src, 'widgets'),
            shared: path.resolve(options.paths.src, 'shared'),
        },
        modules: [options.paths.src, 'node_modules'],
        preferAbsolute: true,
        mainFiles: ['index'],
    };
}
