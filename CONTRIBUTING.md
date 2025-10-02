# Contributing to slidev-theme-improving-25

Thank you for your interest in contributing to this Slidev theme! This guide will help you get started with development and understand our contribution guidelines.

## Development Setup

- `pnpm install`
- `pnpm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `pnpm run export` to generate the preview PDF
- `pnpm run screenshot` to generate the preview PNG

## Commit Message Guidelines

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for automated semantic versioning and changelog generation. Please follow these guidelines when making commits:

### Commit Message Format

```text
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Commit Types and Version Impact

| Type | Description | Version Impact | Example |
|------|-------------|----------------|---------|
| `feat` | New feature | **Minor** (0.1.0) | `feat: add new slide layout` |
| `fix` | Bug fix | **Patch** (0.0.1) | `fix: resolve footer alignment issue` |
| `perf` | Performance improvement | **Patch** (0.0.1) | `perf: optimize CSS loading` |
| `docs` | Documentation changes | No version bump | `docs: update README examples` |
| `style` | Code style changes | No version bump | `style: format CSS files` |
| `refactor` | Code refactoring | No version bump | `refactor: reorganize component structure` |
| `test` | Test additions/modifications | No version bump | `test: add layout component tests` |
| `chore` | Build/tooling changes | No version bump | `chore: update dependencies` |

### Breaking Changes

For breaking changes that require a **Major** version bump (1.0.0), use one of these formats:

1. Add `!` after the type: `feat!: remove deprecated layout`
2. Include `BREAKING CHANGE:` in the footer:

   ```text
   feat: update theme API
   
   BREAKING CHANGE: The theme configuration format has changed.
   See migration guide for details.
   ```

### Examples

#### New Feature (Minor Version Bump)

```text
feat(layouts): add image-center layout

Add new layout for centered images with caption support.
Includes responsive design and dark mode compatibility.
```

#### Bug Fix (Patch Version Bump)

```text
fix(footer): correct logo positioning in dark mode

The Improving logo was misaligned in dark mode due to
incorrect CSS selector specificity.

Fixes #123
```

#### Breaking Change (Major Version Bump)

```text
feat!: update component prop names for consistency

BREAKING CHANGE: Component prop names have been updated:
- `showFooter` is now `footer`
- `showPageNumber` is now `pageNumber`
- `showLogo` is now `logo`

Migration: Update your slide frontmatter to use the new prop names.
```

#### Documentation Update (No Version Bump)

```text
docs: add examples for custom logo configuration

Include step-by-step guide for replacing the default
Improving logo with custom branding.
```

#### Performance Improvement (Patch Version Bump)

```text
perf(styles): reduce CSS bundle size

Remove unused utility classes and optimize color definitions.
Reduces theme CSS from 45KB to 32KB.
```

### Scope Guidelines

Use these common scopes to categorize your changes:

- `layouts`: Changes to slide layouts
- `components`: Changes to Vue components
- `styles`: CSS and styling changes
- `setup`: Configuration and setup files
- `deps`: Dependency updates
- `build`: Build system changes

### Tips for Good Commit Messages

1. **Use imperative mood**: "add feature" not "added feature"
2. **Keep the subject line under 50 characters**
3. **Capitalize the subject line**
4. **Don't end the subject line with a period**
5. **Use the body to explain what and why, not how**
6. **Reference issues and pull requests when relevant**

## Code Style

- Follow existing code patterns and conventions
- Use meaningful variable and function names
- Add comments for complex logic
- Test your changes across different layouts and themes

## Pull Request Process

1. Fork the repository
2. Create a feature branch from `main`
3. Make your changes following the guidelines above
4. Test your changes thoroughly
5. Commit using conventional commit format
6. Push to your fork and submit a pull request
7. Ensure all CI checks pass

## Questions or Issues?

If you have questions about contributing or encounter issues:

1. Check existing [GitHub Issues](https://github.com/jbrinkman/slidev-theme-improving-25/issues)
2. Create a new issue with detailed information
3. Join the discussion in existing issues

Thank you for contributing to make this theme better! 🚀