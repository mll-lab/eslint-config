# eslint-config

The shareable eslint configuration of MLL

## Installation

```shell
yarn add --dev @mll-lab/eslint-config
```

## Configuration

Extend this configuration in your ESLint config:

```json
  "extends": [
    "@mll-lab/eslint-config"
  ],
```

## React

Add required peer dependencies:

```shell
yarn add --dev eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

Then add an extra entry to your ESLint config.
Make sure to place it config before the base config.

```json
  "extends": [
    "@mll-lab/eslint-config/react",
    "@mll-lab/eslint-config"
  ],
```
