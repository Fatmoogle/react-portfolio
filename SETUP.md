# Quick Setup Guide

## Step 1: Install Dependencies

Open a terminal in the project folder and run:

```bash
cd "C:\Coding\fatmoogle-portfolio-react"
npm install
```

This will install:
- React 18
- React DOM
- React Router DOM
- Vite
- @vitejs/plugin-react

## Step 2: Copy Your Images

Your existing images are in `C:\Coding\fatmoogle.github.io\Assets\Images\`

You need to either:

**Option A: Copy the Assets folder**
```bash
xcopy "C:\Coding\fatmoogle.github.io\Assets" "C:\Coding\fatmoogle-portfolio-react\public\Assets" /E /I
```

**Option B: Update image paths in the code**
If you want to keep images in the original location, update the paths in:
- `src/pages/About.jsx` 
- `src/pages/Projects.jsx`

Change from: `../Assets/Images/filename.png`
To: `../../fatmoogle.github.io/Assets/Images/filename.png`

## Step 3: Update Your Email

In `src/pages/Contact.jsx`, update line 18:
```javascript
const mailtoLink = `mailto:your.email@example.com?subject=...`
```

Change `your.email@example.com` to your actual email address.

## Step 4: Run the Development Server

```bash
npm run dev
```

The site will open at: http://localhost:5173

Press `Ctrl+C` to stop the server.

## Step 5: Test Everything

Check each page:
- ✅ Home page loads with your name
- ✅ About page shows your education and skills
- ✅ Projects page displays all 7 projects
- ✅ Contact page has working social links
- ✅ Navigation works between all pages
- ✅ Mobile menu works on small screens

## Step 6: Build for Production

When ready to deploy:

```bash
npm run build
```

This creates a `dist` folder with optimized files.

## Troubleshooting

### Images not showing?
- Check that images are in `public/Assets/Images/`
- Or verify the relative paths are correct

### "npm is not recognized"?
- Make sure Node.js is installed
- Restart your terminal after installing Node.js

### Port 5173 already in use?
- Vite will automatically use the next available port
- Or stop other dev servers

## Next Steps

1. Customize colors in `src/index.css`
2. Add more projects to `src/pages/Projects.jsx`
3. Update personal info throughout
4. Deploy to GitHub Pages, Vercel, or Netlify

## Need Help?

Check the main README.md for detailed documentation!
