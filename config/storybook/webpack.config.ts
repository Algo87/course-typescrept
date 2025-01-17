import webpack, { RuleSetRule, DefinePlugin } from 'webpack';
import path from 'path';
import CopyPlugin from 'copy-webpack-plugin';
import { BuildPaths } from '../types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        html: '',
        entry: '',
        build: '',
        src: path.resolve(__dirname, '..', '..', 'src'),

    };

    config!.resolve!.modules = [
        paths.src,
        // path.resolve(__dirname, '../../src'),
        'node_modules',
    ];
    config!.resolve!.extensions!.push('.tsx', '.ts', '.js');

    // eslint-disable-next-line no-param-reassign
    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config!.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config!.module!.rules.push(buildCssLoader(true));

    config!.plugins!.push(new DefinePlugin({
        __IS_DEV__: true,
    }));

    config!.plugins!.push(
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, '..', '..', 'public/locales'), to: 'locales' },
            ],
        }),
    );

    return config;
};
