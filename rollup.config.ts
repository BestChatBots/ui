import { join } from 'path';
import {
  defineConfig, ExternalOption, Plugin, RollupOptions 
} from 'rollup';
import nodeResolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import dts from 'rollup-plugin-dts';
import { readFileSync } from 'fs';
import del from 'rollup-plugin-delete';
import terser from '@rollup/plugin-terser';
import nodeExternals from 'rollup-plugin-node-externals';
import babel from '@rollup/plugin-babel';

export function createConfig(): RollupOptions[] {
  const rootPath: string = process.cwd();
  const packagePath: string = rootPath;
  const packageConfigPath: string = join(packagePath, './package.json');
  const packageConfig = JSON.parse(readFileSync(packageConfigPath).toString());
  const srcPath: string = join(packagePath, './src');
  const distPath: string = join(packagePath, './dist');
  const external: ExternalOption = [
    ...Object.keys(packageConfig.peerDependencies)
  ];
  const aliasPlugin: Plugin = alias({
    entries: [
      { find: '@', replacement: srcPath }
    ]
  });

  return [
    {
      input: join(srcPath, './index.ts'),
      output: [
        {
          dir: distPath,
          format: 'es',
          sourcemap: true,
          externalLiveBindings: false
        }
      ],
      plugins: [
        del({
          targets: [
            join(distPath, './*')
          ],
          runOnce: true
        }),
        aliasPlugin,
        nodeExternals(),
        nodeResolve({
          browser: true,
          extensions: ['.css', '.ts', '.tsx', '.js', '.jsx']
        }),
        commonjs(),
        esbuild({
          tsconfig: join(rootPath, './tsconfig.json'),
          exclude: [
            'node_modules/**',
            '**/*.stories.ts'
          ]
        }),
        image({
          include: ['**/*.png', '**/*.svg', '**/*.webp']
        }),
        postcss(),
        terser(),
        babel({ 
          babelHelpers: 'bundled',
          exclude: 'node_modules/**',
          extensions: ['.js', '.ts'],
          presets: ['@babel/preset-react'],
          plugins: [
            ['babel-plugin-styled-components', {
              ssr: true,
              displayName: true
            }]
          ]
        })
      ],
      external
    },
    {
      input: join(srcPath, './index.ts'),
      output: [
        {
          file: join(distPath, './index.d.ts'),
          format: 'es'
        }
      ],
      plugins: [
        dts(),
        aliasPlugin,
        postcss({
          inject: false,
          extract: false
        })
      ],
      external
    }
  ];
}

export default defineConfig(
  createConfig()
);
