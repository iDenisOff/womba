module.exports = {
  extends: ['react-app', 'prettier'],
  ignorePatterns: [],
  parser: '@typescript-eslint/parser',
  plugins: [],
  root: true,
  rules: {
    'array-callback-return': ['error', { allowImplicit: true, checkForEach: false }],
    'dot-location': ['error', 'property'],
    eqeqeq: ['error'],
    'eol-last': ['error', 'always'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        ignoreTypeReferences: true,
        functions: false
      }
    ],
    'no-nested-ternary': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true
      }
    ],
    'no-redeclare': ['off'],
    '@typescript-eslint/no-redeclare': ['error'],
    'array-element-newline': ['error', 'consistent'],
    'array-bracket-newline': ['error', 'consistent'],
    'no-const-assign': ['error'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: '*', next: ['return', 'function'] }
    ],
    'react/no-unknown-property': ['error'],
    'newline-after-var': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        singleline: {
          requireLast: true
        }
      }
    ],
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': ['error'],
    camelcase: 'off',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: ['default'],
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid'
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allowDouble'
      },
      {
        selector: ['variable'],
        format: ['UPPER_CASE'],
        leadingUnderscore: 'allowDouble',
        trailingUnderscore: 'allowDouble'
      },
      {
        selector: 'typeLike',
        format: ['PascalCase']
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        prefix: ['T']
      }
    ],
    'comma-dangle': 'off',
    indent: 'off',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        pathGroups: [
          {
            pattern: '@{yandex,bem}*/**',
            group: 'external',
            position: 'after'
          },
          {
            pattern: '{admin,common,user}/**',
            group: 'internal'
          },
          {
            pattern: '**/*.{scss,css,svg}',
            group: 'internal'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: [
          'builtin',
          'external',
          'internal',
          'index',
          'sibling',
          'parent',
          'unknown'
        ],
        'newlines-between': 'always'
      }
    ],
    'import/no-anonymous-default-export': [
      'warn',
      {
        allowArray: true,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowLiteral: true,
        allowObject: true
      }
    ],
    'react/jsx-no-bind': ['warn'],
    'no-warning-comments': ['error', { terms: ['FIXME'], location: 'anywhere' }],
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' }
    ],
    'no-restricted-imports': [
      'error',
      {
        name: '@yandex-int/i18n',
        message: 'Используй @i18n',
        importNames: ['default', 'i18nRaw']
      }
    ],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    'sort-keys': ['warn', 'asc', { caseSensitive: true, natural: true, minKeys: 2 }]
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  overrides: [
    {
      files: ['*.ts{,x}'],
      parserOptions: {
        sourceType: 'module'
      }
    },
    {
      files: ['**/__tests__/*'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'warn'
      }
    },
    {
      files: ['**/root/**/*', '**/client/**/*'],
      globals: {
        __DEV__: 'readonly',
        __SERVER__: 'readonly'
      }
    },
    {
      files: ['config/**', 'hermione/bin/*'],
      rules: {
        'no-console': [0],
        'no-multi-str': [0]
      }
    },
    {
      files: ['**/*.json', '*.json', '**/.*.json', '.*.json'],
      rules: {
        quotes: ['error', 'double'],
        semi: [2, 'always'],
        '@typescript-eslint/semi': 'off',
        indent: ['error', 2],
        'no-unused-expressions': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'never'],
        'quote-props': ['error', 'always']
      }
    }
  ]
};
