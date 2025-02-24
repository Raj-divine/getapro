import nextPlugin from '@next/eslint-plugin-next';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';

export default [
    {
        ignores: [
            '.next/**',
            'node_modules/**',
            'out/**',
            'components/ui/*'
        ]
    },
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            '@typescript-eslint': tsPlugin,
            '@next/next': nextPlugin,
            'import': importPlugin
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        // Remove the old extends format and use the new flat config format
        settings: {
            next: {
                rootDir: "."
            }
        },
        rules: {
            ...tsPlugin.configs['recommended'].rules,
            ...nextPlugin.configs['recommended'].rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
            'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
            'import/no-duplicates': 'error',
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/no-explicit-any': 'error',
            'react-hooks/exhaustive-deps': 'off',
            'arrow-body-style': ['warn', 'as-needed'],
            'semi': ['error', 'always'],
            "@typescript-eslint/no-require-imports": "off"
        },
    }
];