# Deploying to GitHub Pages

## Option 1: Using GitHub Pages (Recommended)

### Step 1: Update vite.config.js

Update the base path in `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/' if using fatmoogle.github.io directly
  // OR
  // base: '/portfolio/', // If using a subfolder like fatmoogle.github.io/portfolio
})
```

### Step 2: Install gh-pages package

```bash
npm install --save-dev gh-pages
```

### Step 3: Add deployment scripts to package.json

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### Step 4: Deploy

```bash
npm run deploy
```

This will:
1. Build your project
2. Create/update the `gh-pages` branch
3. Push the built files to GitHub

### Step 5: Configure GitHub Pages

1. Go to your GitHub repository
2. Click "Settings"
3. Click "Pages" in the left sidebar
4. Under "Source", select the `gh-pages` branch
5. Click "Save"

Your site will be live at: `https://fatmoogle.github.io`

## Option 2: Manual Deployment

### Build the project
```bash
npm run build
```

### Push the dist folder to gh-pages branch
```bash
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/Fatmoogle/fatmoogle.github.io.git main:gh-pages
cd ..
```

## Option 3: Use Vercel (Easiest)

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Vite and deploy!

Your site will be live at: `https://your-project.vercel.app`

## Option 4: Use Netlify

1. Go to https://netlify.com
2. Sign in with GitHub
3. Click "Add new site" > "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

Your site will be live at: `https://random-name.netlify.app` (customizable)

## Updating Your Site

### For GitHub Pages with gh-pages:
```bash
npm run deploy
```

### For Vercel/Netlify:
Just push to your main branch - they auto-deploy!

```bash
git add .
git commit -m "Update portfolio"
git push
```

## Custom Domain (Optional)

### For GitHub Pages:
1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

### For Vercel/Netlify:
1. Go to domain settings in their dashboard
2. Add your custom domain
3. Update DNS records as instructed

## Troubleshooting

### Routes not working after deployment?
This is common with React Router on GitHub Pages. Solutions:

1. Use HashRouter instead of BrowserRouter:
```javascript
// In src/main.jsx, replace BrowserRouter with HashRouter
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
```

2. Or add a 404.html redirect (copy index.html as 404.html in public folder)

### Images not loading?
- Ensure images are in the `public` folder
- Check that paths don't start with `/` (use relative paths)
- Verify the `base` path in vite.config.js is correct

### Build fails?
- Run `npm install` to ensure all dependencies are installed
- Check for console errors during `npm run build`
- Ensure Node.js version is 18 or higher

## Performance Tips

After deployment, check performance:
- Use Lighthouse in Chrome DevTools
- Optimize images (use WebP format, compress)
- Enable caching headers
- Consider using a CDN

## Continuous Deployment

For automatic deployments on every push:

### GitHub Actions (for GitHub Pages)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Now every push to main will automatically deploy!
