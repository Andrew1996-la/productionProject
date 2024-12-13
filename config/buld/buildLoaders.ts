import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: ((resourcePath: string) => resourcePath.includes(".module.")),
                        localIdentName: isDev ?
                            "[path][name]__[local]--[hash:base64:5]" :
                            "[hash:base64:8]",

                    }
                }
            },
            "sass-loader",
        ],
    }

    const typeScriptLoader =
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }

    return [
        typeScriptLoader,
        styleLoader
    ]
}