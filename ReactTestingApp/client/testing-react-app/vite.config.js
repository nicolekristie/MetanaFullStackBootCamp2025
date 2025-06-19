import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import babel from "vite-plugin-babel";

export default defineConfig({
  plugins: [
    react({
      babel: {
        // Add your Babel plugins and presets here
        // plugins: [commonjs()],
        presets: ["@babel/preset-env", "@babel/preset-react"],
      },
    }),
    babel(), // Optional: Enables Babel for additional stages
  ],
  build: {
    rollupOptions: {
      external: [/^node:\w+/], // <-- ignores all 'node:*'
    },
  },
});
