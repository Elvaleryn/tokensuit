module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 0,
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'none',
        linebreakStyle: 0,
        'linebreak-style': ['error', 'unix']
      }
    ],

    'linebreak-style': ['error', 'unix']
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
