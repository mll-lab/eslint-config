module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['import', 'unused-imports', '@getify/proper-arrows'],
  rules: {
    '@getify/proper-arrows/where': [
      'error',
      {
        global: false,
        'global-declaration': true,
        property: false,
        export: false,
        trivial: false,
      },
    ],
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
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true,
        ignoreProperties: true,
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],

    'default-param-last': 'off', // Replaced by @typescript-eslint/default-param-last
    '@typescript-eslint/default-param-last': 'off', // see https://github.com/standard/standard/issues/1414

    'default-case': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',

    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',

    'arrow-body-style': ['error', 'as-needed'],
    camelcase: 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'consistent-return': 'off', // Not necessary with TypeScript
    'func-names': ['error', 'always'],
    'import/extensions': [
      'error',
      'always',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
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
    'no-use-before-define': 'off',
    'object-shorthand': 'error',
    'prefer-template': 'error',
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    'require-yield': 'off',
    'unused-imports/no-unused-imports-ts': 'error',
  },
};
