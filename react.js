module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react', 'react-hooks'],
  rules: {
    // Not always accurate, but should be explicitly ignored in order to not trash the log
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',

    'react/default-props-match-prop-types': 'off', // unnecessary with TypeScript
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off', // unnecessary with TypeScript
    'react/forbid-foreign-prop-types': 'off', // unnecessary with TypeScript
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-no-target-blank': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-vars': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-direct-mutation-state': 'error',
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
  },
};
