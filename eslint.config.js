import github from 'eslint-plugin-github'

export default [
  github.getFlatConfigs().browser,
  github.getFlatConfigs().recommended,
  github.getFlatConfigs().react,
  ...github.getFlatConfigs().typescript,
  {
    files: ['**/*.ts', "*.ts"],
    ignores: ['samples/**/*', 'test/fixtures/**/*', 'dist/**/*', 'node_modules/**/*', "eslint.config.js"],
    rules: {
      'github/array-foreach': 'error',
      'github/async-preventdefault': 'warn',
      'github/no-then': 'error',
      'github/no-blur': 'error',
    },
  },
]