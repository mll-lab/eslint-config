# eslint-config

The shareable eslint configuration of MLL

## Installation

    yarn add --dev @mll-lab/eslint-config

## Configuration

Extend this configuration in your ESLint config:

```json
  "extends": [
    "@mll-lab/eslint-config"
  ],
```

## React

Add required peer dependencies:

```
yarn add --dev eslint-config-airbnb eslint-plugin-react eslint-plugin-react-hooks
```

Then add an extra entry to your ESLint config.
Make sure to place it config before the base config.

```json
  "extends": [
    "@mll-lab/eslint-config/react",
    "@mll-lab/eslint-config"
  ],
```
