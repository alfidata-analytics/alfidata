# Alfidata Analytics website

GitHub Pages-ready source for the Alfidata Analytics business website.

## Publish on GitHub Pages

1. Create a GitHub repository, for example `alfidata-analytics`.
2. Upload **all files and folders** from this project, including the hidden `.github` folder.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Open the repository's **Actions** tab and wait for **Deploy Alfidata Analytics to GitHub Pages** to finish.

The website will normally be available at:

`https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`

Each future commit to the `main` branch will publish the latest version automatically.

## Run locally

Install Node.js 22 or newer, then run:

```bash
npm install
npm run dev
```

## Important

- Do not upload only the ZIP file. Extract it first, then upload its contents.
- The `.github/workflows/deploy-pages.yml` file controls automatic deployment.
- The contact links use the visitor's email application; no server or database is required.
