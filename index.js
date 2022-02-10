module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['import', 'unused-imports'],
  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/explicit-module-boundary-types': 'off', // TODO consider reenabling this
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'class', format: ['PascalCase'] },
      { selector: 'enumMember', format: ['UPPER_CASE'] },
    ],
    '@typescript-eslint/no-empty-function': 'off', // Can be useful for no-op or defaults
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true,
        ignoreProperties: true,
      },
    ],
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',

    'arrow-body-style': ['error', 'as-needed'],
    camelcase: 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'consistent-return': 'off', // Not necessary with TypeScript
    'default-case': 'off', // Replaced by @typescript-eslint/switch-exhaustiveness-check
    'func-names': ['error', 'always'],
    'import/extensions': ['error', 'never'],
    'import/imports-first': 'error',
    'import/newline-after-import': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'error',
    'import/no-unresolved': 'off', // Only works with webpack
    'import/no-webpack-loader-syntax': 'off',
    'import/order': [
      'error',
      { 'newlines-between': 'always', alphabetize: { order: 'asc' } },
    ],
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'newline-per-chained-call': 'off',
    'no-confusing-arrow': 'off',
    'no-console': 'error',
    'no-nested-ternary': 'error',
    'no-param-reassign': ['error', { props: false }],
    'no-redeclare': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': [
      2,
      { allow: ['__typename', '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] },
    ],
    'no-unused-vars': 'off', // Replaced by @typescript-eslint/no-unused-vars
    'no-use-before-define': 'off',
    'object-shorthand': 'error',
    'prefer-template': 'error',
    'require-yield': 'off',
    'unused-imports/no-unused-imports-ts': 'error',
  },
};
