// export const presets = [
//   ["@babel/preset-env", { targets: { node: "current" } }],
//   ['@babel/preset-react', { runtime: 'automatic' }]
// ];
export default {
  presets: [
    ['@babel/preset-env', { 
      targets: { node: 'current' },
      modules: false
    }],
    ['@babel/preset-react', { 
      runtime: 'automatic' 
    }]
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ],
  env: {
    test: {
      presets: [
        ['@babel/preset-env', { 
          targets: { node: 'current' },
          modules: 'commonjs'
        }],
        ['@babel/preset-react', { 
          runtime: 'automatic' 
        }]
      ]
    }
  }
};