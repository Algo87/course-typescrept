// const path = require('path');
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");
import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/types/config";


export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', "index.tsx"),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src")
    }

    const mode = env.mode || "development";
    const PORT = env.port || 3000;

    const isDev = mode === "development";

    const config: webpack.Configuration = buildWebpackConfig({
        mode: mode,
        paths: paths,
        isDev: isDev,
        port: PORT
    })

    return config
}