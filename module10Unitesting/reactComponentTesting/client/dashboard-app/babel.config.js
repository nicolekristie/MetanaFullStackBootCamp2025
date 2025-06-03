// export const presets = [
//   ["@babel/preset-env", { targets: { node: "current" } }],
// ];
export const presets = [
  '@babel/preset-env',
  ['@babel/preset-react', { runtime: 'automatic' }]
];