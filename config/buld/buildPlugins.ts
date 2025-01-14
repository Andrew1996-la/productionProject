import webpack, { DefinePlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new DefinePlugin({
            __IS_DEV__: isDev
        }),
    ]
}