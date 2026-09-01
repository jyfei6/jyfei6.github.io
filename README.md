# Yifei Jiang — Academic Homepage

An English academic homepage for CS PhD applications, built as a static React
site and configured for GitHub Pages.

## Edit the content

- Main copy and structured content: src/main.tsx
- Visual design and responsive behavior: src/styles.css
- CV LaTeX source: cv/
- Profile photo and other public files: public/

## Run locally

Use pnpm install, then pnpm dev.

## Publish with GitHub Pages

Push this project to the main branch of a GitHub repository. In the repository
settings, open Pages and select GitHub Actions as the publishing source. The
included workflow builds and deploys the site automatically after each push.

This site is intended for the repository `jyfei6.github.io` and the public URL
https://jyfei6.github.io. The relative asset configuration also works from a
project URL such as `username.github.io/repository-name/`.
