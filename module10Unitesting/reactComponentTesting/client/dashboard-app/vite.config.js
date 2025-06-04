import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [
//     react({
//       babel: {
//         // Add your Babel plugins and presets here
//         // plugins: [commonjs()],
//         presets: ["@babel/preset-env", "@babel/preset-react"],
//       },
//     }),
//     babel(), // Optional: Enables Babel for additional stages
//   ],
//   build: {
//     rollupOptions: {
//       external: [/^node:\w+/], // <-- ignores all 'node:*'
//     },
//   },
// });

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [/^node:\w+/],
    },
  },
});