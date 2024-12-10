import webpackDevServer from 'webpack-dev-server';
import {BuildOptions} from "./config";

export function buildDevServer({port}: BuildOptions): webpackDevServer.Configuration {
    return {
        port: port,
        open: true,
    }
}