const { BABEL_ENV } = process.env;

const isCommonJS = BABEL_ENV !== undefined && BABEL_ENV === 'cjs';
const isESM = BABEL_ENV !== undefined && BABEL_ENV === 'esm';
const isTest = BABEL_ENV !== undefined && BABEL_ENV === 'test';

module.exports = (api) => {
    api.cache(true);

    const presets = [
        ['@babel/preset-env', isTest ? {
            modules: isCommonJS ? 'commonjs' : false,
            targets: {
                esmodules: isESM ? true : undefined,
            },
        } : undefined],
        ['@babel/preset-react'],
        ['@babel/preset-typescript'],
        ['@linaria']
    ];
    const plugins = [
        ['@babel/plugin-transform-runtime'],
        isTest ? ['@babel/plugin-transform-modules-commonjs'] : undefined,
        ['@babel/plugin-proposal-class-properties'],
    ];

    return {
        presets,
        plugins: plugins.filter((it) => it !== undefined),
    };
};
