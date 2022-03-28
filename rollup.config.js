import fs from 'fs';
import path from 'path';

import { DEFAULT_EXTENSIONS } from '@babel/core'
import babel  from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import { visualizer } from 'rollup-plugin-visualizer'
import typescript from 'rollup-plugin-typescript2';

// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-dynamic-require
const packageJson = require(path.join(fs.realpathSync(process.cwd()), 'package.json'));
const extensions = DEFAULT_EXTENSIONS.concat(['.ts', '.tsx'])

function setUpConfig({ output }) {
    return {
        input: 'src/index.ts',
        output,
        watch: {
            include: '*',
            exclude: 'node_modules/**',
        },
        plugins: [
            babel({
                babelHelpers: 'runtime',
                exclude: 'node_modules/**',
                extensions,
                configFile: path.join(__dirname, 'babel.config.js')
            }),
            resolve({ extensions }),
            typescript({
                tsconfig: 'tsconfig.json'
            }),
            commonjs({
                include: /node_modules/,
            }),
            json(),
            peerDepsExternal(),
            terser(),
            visualizer({
                filename: 'tmp/stats.html',
            }),
        ],
        external: [/@babel\/runtime/],
        preserveModules: output.format === 'es'
    };
}

export default [
    setUpConfig({
        output: {
            file: packageJson.main,
            sourcemap: true,
            format: 'cjs',
        },
    }),
    setUpConfig({
        output: {
            file: packageJson.module,
            sourcemap: true,
            format: 'esm',
        },
    }),
];
