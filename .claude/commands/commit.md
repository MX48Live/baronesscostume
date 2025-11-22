---
description: Intelligent commit workflow - checks changes, updates Claude.md if needed, and creates commit
---

# Smart Commit Workflow

Follow these steps in order:

## Step 1: Check Current Changes
Run git status and git diff to understand all changed files and their modifications.

## Step 2: Analyze Changes for Claude.md Update
Review the changes and determine if Claude.md needs updating:

**Update Claude.md if changes include:**
- New features or functionality
- New dependencies or libraries
- Changes to project architecture or structure
- New configuration files or environment variables
- New commands or scripts in package.json
- Changes to build or deployment process
- New file types or data structures
- Changes to calculation logic or formulas
- New UI components or pages
- Changes to database schema or operations

**DO NOT update Claude.md for:**
- Bug fixes that don't change behavior
- Code refactoring without functional changes
- Comment or documentation updates
- Minor formatting or style changes
- Version bumps without feature changes

## Step 3: Update Claude.md (If Needed)
If updates are required:
- Read the current Claude.md file
- Add or update relevant sections to document the changes
- Keep the existing structure and style
- Be concise but thorough
- Update only the sections that need changes

## Step 4: Create Commit Message
Draft a clear, concise commit message that:
- Summarizes the nature of changes (feature, fix, refactor, docs, etc.)
- Focuses on the "why" rather than just the "what"

Where `<type>` is one of: feat, fix, refactor, docs, style, test, chore

## Step 5: Stage and Commit
- Stage all changes including any Claude.md updates: `git add .`
- Create the commit with the drafted message using heredoc format
- Run git status after commit to verify success

## Important Notes
- NEVER commit files with secrets (.env, credentials.json, etc.)
- DO NOT push to remote unless explicitly requested
- If Claude.md was updated, mention it in the commit message
- Use git log to check recent commit style and follow the pattern
