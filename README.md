# eslint-config

The shareable eslint configuration of MLL

## Installation

    yarn add --dev @mll-lab/eslint-config

## Configuration

Extend this configuration in your ESLint config:

```json
  "extends": [
    "@mll-lab/eslint-config",
  ],
```

If you are using React:

```json
  "extends": [
    "@mll-lab/eslint-config",
    "@mll-lab/eslint-config/react",
  ],
```
