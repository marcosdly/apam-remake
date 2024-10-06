import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import tsconfigPaths from 'vite-tsconfig-paths';
import { hexToCSSFilter } from 'hex-to-css-filter';
import { SassString } from 'sass';
const { assign } = Object;

/** @typedef {import('vite').UserConfig} UserConfig */

const customSassFunctions = {
  'hex-to-filter($color)': (color) => {
    const converted = hexToCSSFilter(color.dartValue.toString(), {
      acceptanceLossPercentage: 2,
      maxChecks: 200,
    });
    return new SassString(converted.filter, { quotes: false });
  },
};

export default defineConfig(({ mode }) => {
  /** @type {UserConfig} */
  const defaultConfig = {
    plugins: [preact(), tsconfigPaths()],
    build: {
      outDir: './build/dev',
      assetsDir: '',
      sourcemap: true,
      rollupOptions: {
        input: ['./index.html'],
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          functions: customSassFunctions,
        },
      },
    },
    test: {
      server: { sourcemap: true },
      environmentMatchGlobs: [
        ['./src/components/**', 'jsdom'],
        ['./src/pages/**', 'jsdom'],
      ],
    },
  };

  if (mode === 'production') {
    /** @type {UserConfig} */
    const productionConfig = {
      plugins: [...defaultConfig.plugins, ViteMinifyPlugin()],
      build: {
        assetsDir: '',
        outDir: './build/prod',
        minify: 'esbuild',
        cssMinify: 'esbuild',
        modulePreload: { polyfill: false },
        sourcemap: false,
      },
    };

    return assign(defaultConfig, productionConfig);
  }

  return defaultConfig;
});
