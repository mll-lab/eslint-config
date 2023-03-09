module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'react/default-props-match-prop-types': 'off', // unnecessary with TypeScript
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off', // unnecessary with TypeScript
    'react/forbid-foreign-prop-types': 'off', // unnecessary with TypeScript
    'react/function-component-definition': [
      'error',
      {
        namedComponents: [
          'function-declaration', // top-level components
          'function-expression', // top-level components conforming to a component type
          'arrow-function', // for dynamically created components
        ],
      },
    ],
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never', propElementValues: 'always' },
    ],
    'react/jsx-filename-extension': 'off',
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-no-target-blank': 'off',
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md#allowexpressions
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-vars': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-danger': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    'react/no-unused-prop-types': 'off', // unnecessary with TypeScript
    'react/no-unused-state': 'error',
    'react/prop-types': 'off', // unnecessary with TypeScript
    'react/require-default-props': 'off', // unnecessary with function components
    'react/require-extension': 'off',
    'react/self-closing-comp': 'off',
    'react/sort-comp': 'off',
    'react/sort-prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': ['error', 'static public field'],

    // Not always accurate, but should be explicitly ignored in order to not trash the log
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',

    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/heading-has-content': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        // NOTE: If this error triggers, either disable it or add
        // your custom components, labels and attributes via these options
        // See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
        controlComponents: ['Input'],
      },
    ],
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
  },
};
