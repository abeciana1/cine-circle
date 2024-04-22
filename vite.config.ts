import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
import { codecovVitePlugin } from "@codecov/vite-plugin";

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    }
  },
  plugins: [
    react(),
    codecovVitePlugin({
      enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
      bundleName: "CineCircle",
      uploadToken: process.env.CODECOV_TOKEN,
    }),
  ],
  test: {
    include: ['**/__test__/**/*.test.{js,jsx,ts,tsx}'],
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/tests/setup.ts',
  }
})
