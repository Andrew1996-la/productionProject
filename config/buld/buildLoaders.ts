import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
    const loaders = [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ]

    return loaders
}