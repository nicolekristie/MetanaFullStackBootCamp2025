// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import esbuild from "esbuild";
// import fs from "fs";





// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],

 
// });
// vite.config.js
// import { defineConfig} from 'vite';
// import react from '@vitejs/plugin-react';

// import { readFile } from 'fs/promises';

// export default defineConfig({
//   plugins: [ react({
//     jsxRuntime: 'classic',
//     include: "**/*.js",
//   })],
 
// });
// export default defineConfig({ plugins: [react({ include: /\.(mdx|js|jsx|ts|tsx)$/ })], });

export default defineConfig({
    plugins: [react()],
    esbuild: {
      loader: "jsx",
      include: /src\/.*\.js$/,
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          ".js": "jsx",
        },
      },
    },
  });