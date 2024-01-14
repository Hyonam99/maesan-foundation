module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'standard'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    rules: {
        'no-unused-vars': 'warn',
        'import/no-unresolved': 'off',
        'no-undef': 'warn',
        'linebreak-style': 'off',
        semi: 'off',
        'padded-blocks': 'off',
        'operator-linebreak': ['error', 'before'],
        indent: ['error', 4],
        'comma-dangle': 'off',
        quotes: 'off'
    }
};
