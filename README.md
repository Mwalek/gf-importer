# GF Importer

Gravity Forms importer for E2E tests using Playwright and wp-env.  
Published as an internal package via GitHub Packages.

## 📦 Installation

To install this package from GitHub Packages:

### 1. Create a GitHub Personal Access Token (PAT)

1. Visit: https://github.com/settings/tokens
2. Generate a **Classic token** with at least the following scope: `read:packages`

### 2. Configure npm Authentication (Locally)

Because the token is sensitive, you should configure it in your personal `.npmrc` file, **outside the project** (e.g., in your home directory: `~/.npmrc`):

```ini
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

Do **not** commit your personal .npmrc to version control.

The project already includes the necessary scope registry config:

```ini
@gravitykit:registry=https://npm.pkg.github.com
```


### 3. Install the Package

```bash
npm install --save-dev @gravitykit/gf-importer
```