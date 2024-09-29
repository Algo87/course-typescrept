import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths : BuildPaths = {
        html: '',
        entry: '',
        build: '',
        src: path.resolve(__dirname, '..', '..', 'src'),

    };

    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.tsx', '.ts', '.js');

    // eslint-disable-next-line no-param-reassign
    // @ts-ignore
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

    return config;
};
