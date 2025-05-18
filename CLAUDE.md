# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a minimalist web project for the domain cubiz.top, optimized for iOS/macOS:

- HTML page with dark theme styling
- PWA with iOS-focused optimizations
- View transitions API support
- GitHub Pages deployment

## Architecture

- `index.html`: Main entry point
- `manifest.json`: PWA configuration (iOS-focused)
- `sw.js`: Service worker
- `icon.svg`: Emoji-based SVG icon
- `CNAME`: GitHub Pages domain configuration

## Development Guidelines

1. iOS/macOS First: Prioritize iOS and macOS compatibility and features
2. Extreme Minimalism: Never add unnecessary attributes, quotes, or code
3. Default Values: Never specify any attribute that would use the default value
4. Dark Mode: Ensure dark mode appearance, especially for iOS PWA status bar

## Code Style

- Minimize HTML attribute quotes (`<meta name=viewport>` not `<meta name="viewport">`)
- Use shortest valid color codes (`#000` not `#000000`)
- Remove all unnecessary whitespace
- Never add code comments
- Skip optional closing tags
- Use the bare minimum HTML required