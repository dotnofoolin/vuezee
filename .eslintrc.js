module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'camelcase': 'off', //['error', {'allow': ['aa_bb']}], // I like snake_case variables names, and camelCase function names.
    'indent': 'off' // I can manage indention just fine, thank you.
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
