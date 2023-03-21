import path from 'path';
import { Configuration, DefinePlugin } from 'webpack';

import pkg from './package.json';

const commonConfig: Configuration = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: { babelrcRoots: ['.', '../'] },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
    },
    plugins: [
        new DefinePlugin({
            'process.env': {
                __PACKAGE_VERSION__: JSON.stringify(pkg.version),
                __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
            },
        }),
    ],
    devtool: 'source-map',
};

const nodeConfig: Configuration = {
    ...commonConfig,
    entry: {
        FIXParser: './src/FIXParser.ts',
    },
    output: {
        path: path.join(__dirname),
        filename: 'fixparser.js',
        library: 'FIXParser',
        libraryTarget: 'umd',
    },
    target: 'node',
};

const serverConfig: Configuration = {
    ...commonConfig,
    entry: {
        FIXParser: './src/FIXServer.ts',
    },
    output: {
        path: path.join(__dirname),
        filename: 'server.js',
        library: 'FIXParser',
        libraryTarget: 'umd',
    },
    target: 'node',
};

const browserConfig: Configuration = {
    ...commonConfig,
    entry: {
        FIXParser: './src/FIXParserBrowser.ts',
    },
    output: {
        path: path.join(__dirname),
        filename: 'browser.js',
        library: 'FIXParser',
        libraryTarget: 'umd',
    },
    target: 'web',
};

export default [nodeConfig, serverConfig, browserConfig];
