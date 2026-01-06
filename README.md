# agents-template

A template repository for **AGENTS.md** - instructions for AI coding agents.

## What is AGENTS.md?

AGENTS.md is a standardized file that provides instructions and guidelines for AI coding agents (GitHub Copilot, OpenAI Codex, Cursor, Claude Code, Google Jules, etc.) working on your project.

Think of it as a **README for AI agents**: a dedicated place to define rules, conventions, and boundaries that help AI tools work effectively with your codebase.

## Features

This template includes:

- **Branch Rules** - GitHub Flow with support for AI-generated branches
- **Commit Rules** - Conventional Commits format
- **Pull Request Rules** - Title format, description requirements
- **Permissions & Boundaries** - What AI agents can and cannot do
- **AI Agent Rules** - Testing, code quality, and troubleshooting guidelines
- **Placeholders** - Ready-to-fill sections for project-specific configuration

## Quick Start

### Option 1: Use as Template

Click the **"Use this template"** button on GitHub to create a new repository with AGENTS.md included.

### Option 2: Copy the File

Download or copy `AGENTS.md` directly into your project's root directory.

```bash
curl -o AGENTS.md https://raw.githubusercontent.com/tomyf-dev/agents-template/main/AGENTS.md
```

### Option 3: Manual Setup

1. Clone this repository
2. Copy `AGENTS.md` to your project
3. Fill in the placeholder sections (marked with `> **TODO**`)

## Customization

After adding AGENTS.md to your project, customize the following sections:

| Section | Description |
|---------|-------------|
| 1. Project Overview | Brief description of your project |
| 2. Build & Test | Your build, test, and lint commands |
| 3. Project Structure | Directory layout and key files |
| 4. Code Style | Coding standards and naming conventions |
| 10. Additional Notes | External services, environment variables, etc. |

## Supported AI Tools

This template is compatible with:

- GitHub Copilot (`copilot/*`)
- OpenAI Codex (`codex/*`)
- Cursor (`cursor/*`)
- Claude Code (`claude/*`)
- Google Jules (`jules/*`)
- Other AI coding agents

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## References

- [AGENTS.md Official Website](https://agents.md/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)
