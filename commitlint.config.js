export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // New features (minor version bump)
        'fix',      // Bug fixes (patch version bump)
        'perf',     // Performance improvements (patch version bump)
        'docs',     // Documentation changes (no version bump)
        'style',    // Code style changes (no version bump)
        'refactor', // Code refactoring (no version bump)
        'test',     // Test additions/modifications (no version bump)
        'chore',    // Build process or auxiliary tool changes (no version bump)
        'ci',       // CI configuration changes (no version bump)
        'build',    // Build system changes (no version bump)
        'revert'    // Reverts previous commits (patch version bump)
      ]
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 100],
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100]
  }
};