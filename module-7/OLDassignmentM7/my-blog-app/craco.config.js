export const style = {
  postcss: {
    // plugins: [require("tailwindcss"), require("autoprefixer")],
    plugins: [import("tailwimndcss"), import("autoprefixer")],
  },
};

export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
