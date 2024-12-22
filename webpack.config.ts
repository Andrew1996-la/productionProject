import webpack from 'webpack'
import {buildWebpackConfig} from "./config/buld/buildWebpackConfig";
import {BuildEnv, BuildMode, BuildPaths} from "./config/buld/types/config";
import path from "path";

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }

    const PORT = env.port || 3000;
    const mode = env.mode || BuildMode.development;
    const isDev = mode === BuildMode.development;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    });

    return config
};