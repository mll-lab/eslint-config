module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
  ],
  plugins: ['unused-imports', '@getify/proper-arrows'],
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
    '@typescript-eslint/explicit-module-boundary-types': 'off', // TODO consider re-enabling this
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'class', format: ['PascalCase'] },
      { selector: 'enumMember', format: ['UPPER_CASE'] },
    ],
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true,
        ignoreProperties: true,
      },
    ],
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/prefer-includes': 'error',

    // Can be useful for no-op or defaults
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',

    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    // See https://github.com/standard/standard/issues/1414#issuecomment-728947790
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'off',

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
    'import/no-cycle': 'off', // Computationally expensive and unnecessary with our bundlers
    'import/extensions': 'off', // Only works nicely with webpack
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
