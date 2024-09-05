import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
const { assign } = Object;

/** @typedef {import('vite').UserConfig} UserConfig */

export default defineConfig(({ mode }) => {
  /** @type {UserConfig} */
  const defaultConfig = {
    plugins: [preact()],
    build: {
      outDir: './build/dev',
      assetsDir: '',
      sourcemap: true,
      rollupOptions: {
        input: ['./index.html'],
      },
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
