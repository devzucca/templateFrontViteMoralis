import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import * as path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

dotenv.config();

export default defineConfig(({ command, mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  return {
    plugins: [react(),
      nodePolyfills({
        // To exclude specific polyfills, add them to this list.
        exclude: [
          'fs', // Excludes the polyfill for `fs` and `node:fs`.
        ],
        // Whether to polyfill specific globals.
        globals: {
          Buffer: true, // can also be 'build', 'dev', or false
          global: true,
          process: true,
        },
        // Whether to polyfill `node:` protocol imports.
        protocolImports: true,
      }),],
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
      ],
    },
    server: {
      port: 3000,
      proxy: {
        '/server': {
          target: process.env.VITE_MORALIS_SERVER_URL,
          ws: false,
      },
    }
    }
  };
});
