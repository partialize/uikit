const { BABEL_ENV } = process.env;
const isCommonJS = BABEL_ENV !== undefined && BABEL_ENV === 'cjs';
const isESM = BABEL_ENV !== undefined && BABEL_ENV === 'esm';

module.exports = (api) => {
    api.cache(true);

    const presets = [
        ['@babel/preset-env', {
            loose: false,
            modules: isCommonJS ? 'commonjs' : false,
            targets: {
                esmodules: isESM ? true : undefined,
            },
        }],
        ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
        '@babel/preset-react',
    ];
    const plugins = [
        '@babel/transform-runtime',
        ['@babel/plugin-proposal-private-property-in-object', { loose: false }],
        ['@babel/plugin-proposal-class-properties', { loose: false }],
        ["@babel/plugin-proposal-private-methods", { loose: false }]
    ];

    return {
        presets,
        plugins,
    };
};
