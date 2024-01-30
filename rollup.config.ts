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
import { readFileSync } from 'fs';
import del from 'rollup-plugin-delete';
import terser from '@rollup/plugin-terser';
import nodeExternals from 'rollup-plugin-node-externals';
import babel from '@rollup/plugin-babel';
import { visualizer } from 'rollup-plugin-visualizer';
import typescript from '@rollup/plugin-typescript';

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
          externalLiveBindings: false,
          preserveModules: true,
          preserveModulesRoot: join(srcPath)
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
        commonjs({
          include: /node_modules/,
          defaultIsModuleExports: true
        }),
        nodeExternals({
          exclude: ['tslib']
        }),
        nodeResolve({
          extensions: ['.css', '.ts', '.tsx', '.js', '.jsx']
        }),
        babel({ 
          babelHelpers: 'bundled',
          exclude: 'node_modules/**',
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          babelrc: true
        }),
        esbuild({
          minify: true,
          tsconfig: join(rootPath, './tsconfig.json'),
          exclude: [
            '**/*.stories.ts'
          ],
          sourceMap: false
        }),
        image({
          include: ['**/*.png', '**/*.svg', '**/*.webp']
        }),
        postcss(),
        terser(),
        visualizer(),
        typescript({
          tsconfig: './tsconfig.json',
          rootDir: './src',
          declaration: true,
          declarationDir: './dist',
          exclude: [
            './**/*.stories.tsx'
          ]
        })
      ],
      external
    }
  ];
}

export default defineConfig(
  createConfig()
);
