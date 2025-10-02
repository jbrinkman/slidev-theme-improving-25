# Requirements Document

## Introduction

This feature implements semantic release automation for the improving-25 Slidev theme package. The system will automatically handle version numbering, changelog generation, and release notes creation when releases are manually triggered, following semantic versioning principles based on conventional commit messages.

## Requirements

### Requirement 1

**User Story:** As a package maintainer, I want to manually trigger releases that automatically determine version numbers, so that I can control when releases happen while ensuring consistent versioning.

#### Acceptance Criteria

1. WHEN I trigger a release workflow THEN the system SHALL analyze commit messages since the last release to determine the appropriate version bump
2. WHEN commit messages contain breaking changes THEN the system SHALL increment the major version
3. WHEN commit messages contain new features THEN the system SHALL increment the minor version
4. WHEN commit messages contain only fixes THEN the system SHALL increment the patch version
5. WHEN no releasable changes are found THEN the system SHALL skip the release and notify the user

### Requirement 2

**User Story:** As a package maintainer, I want automatic changelog generation, so that users can easily understand what changed between versions.

#### Acceptance Criteria

1. WHEN a release is created THEN the system SHALL generate a CHANGELOG.md file with all changes since the last release
2. WHEN generating changelog entries THEN the system SHALL categorize changes by type (Features, Bug Fixes, Breaking Changes, etc.)
3. WHEN commit messages follow conventional commit format THEN the system SHALL parse them correctly for changelog generation
4. WHEN the changelog is generated THEN it SHALL include commit hashes and author information
5. IF a CHANGELOG.md already exists THEN the system SHALL prepend new entries to the existing file

### Requirement 3

**User Story:** As a package maintainer, I want automatic GitHub release creation with release notes, so that users are notified of new versions with detailed information.

#### Acceptance Criteria

1. WHEN a new version is published THEN the system SHALL create a corresponding GitHub release
2. WHEN creating a GitHub release THEN the system SHALL use only the current release's changelog content as release notes
3. WHEN the release is created THEN it SHALL be tagged with the semantic version number
4. WHEN the release includes breaking changes THEN the system SHALL clearly highlight them in the release notes
5. IF the release creation fails THEN the system SHALL rollback any version changes made

### Requirement 4

**User Story:** As a package maintainer, I want the package.json version to be automatically updated, so that the published package has the correct version number.

#### Acceptance Criteria

1. WHEN a new version is determined THEN the system SHALL update the version field in package.json
2. WHEN the package.json is updated THEN the system SHALL commit this change with a release commit message
3. WHEN committing version changes THEN the system SHALL use a conventional commit format
4. IF the version update fails THEN the system SHALL abort the release process
5. WHEN the version is updated THEN the system SHALL ensure pnpm-lock.yaml is also updated if needed

### Requirement 5

**User Story:** As a package maintainer, I want the workflow to be manually triggered, so that I can control the timing of releases based on my development cycle.

#### Acceptance Criteria

1. WHEN I want to create a release THEN I SHALL be able to trigger the workflow manually from GitHub Actions
2. WHEN triggering the workflow THEN I SHALL have the option to specify a release type (auto, patch, minor, major) if needed
3. WHEN the workflow is triggered THEN it SHALL run on the main/master branch only
4. IF I trigger a release on a non-main branch THEN the system SHALL fail with an appropriate error message
5. WHEN the workflow completes THEN I SHALL receive clear feedback about the release status

### Requirement 6

**User Story:** As a developer contributing to the project, I want clear guidelines on commit message format, so that my commits are properly categorized in releases.

#### Acceptance Criteria

1. WHEN I make commits THEN I SHALL follow conventional commit message format for proper categorization
2. WHEN I introduce breaking changes THEN I SHALL include "BREAKING CHANGE:" in the commit message or use "!" in the type
3. WHEN I add new features THEN I SHALL use "feat:" prefix in commit messages
4. WHEN I fix bugs THEN I SHALL use "fix:" prefix in commit messages
5. IF I use other commit types THEN they SHALL be documented and handled appropriately by the release system