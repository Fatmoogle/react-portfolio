# Quick Reference Guide

## Common Commands

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages (after setup)
npm run deploy
```

## File Locations

### To Update Content
- **Home page text**: `src/pages/Home.jsx`
- **About page bio**: `src/pages/About.jsx` (lines 11-29)
- **Projects list**: `src/pages/Projects.jsx` (lines 6-75)
- **Contact info**: `src/pages/Contact.jsx` (lines 18, 110)

### To Change Colors
- **All colors**: `src/index.css` (lines 1-15)
- CSS variables like `--primary-color`, `--secondary-color`, etc.

### To Add Images
- Put images in: `public/Assets/Images/`
- Reference in code: `../Assets/Images/filename.png`

### To Change Styling
- **Global styles**: `src/index.css`
- **Navigation**: `src/components/Navigation.css`
- **Home page**: `src/pages/Home.css`
- **About page**: `src/pages/About.css`
- **Projects page**: `src/pages/Projects.css`
- **Contact page**: `src/pages/Contact.css`

## Project Structure

```
fatmoogle-portfolio-react/
├── src/
│   ├── components/          # Reusable components
│   │   └── Navigation.jsx   # Nav bar
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Landing page
│   │   ├── About.jsx       # About page
│   │   ├── Projects.jsx    # Projects page
│   │   └── Contact.jsx     # Contact page
│   ├── App.jsx             # Main app (routing)
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static files
│   └── Assets/
│       └── Images/         # Your images go here
└── index.html              # HTML template
```

## Adding a New Page

1. Create component in `src/pages/`:
```jsx
// src/pages/NewPage.jsx
import './NewPage.css'

function NewPage() {
  return (
    <div className="new-page">
      <h1>New Page</h1>
    </div>
  )
}

export default NewPage
```

2. Create CSS file:
```css
/* src/pages/NewPage.css */
.new-page {
  min-height: 100vh;
  padding: var(--spacing-xl) 0;
}
```

3. Add route in `App.jsx`:
```jsx
import NewPage from './pages/NewPage'

// Inside <Routes>
<Route path="/new-page" element={<NewPage />} />
```

4. Add to navigation in `Navigation.jsx`:
```jsx
<li className="nav-item">
  <NavLink to="/new-page" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
    New Page
  </NavLink>
</li>
```

## Adding a New Project

Open `src/pages/Projects.jsx` and add to the `projects` array:

```jsx
{
  id: 8,
  title: "My New Project",
  description: "Description of the project",
  image: "../Assets/Images/project-image.png",
  logo: "../Assets/Images/project-logo.png", // Optional
  technologies: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/username/repo",
  demo: "https://demo-url.com", // Optional
  video: "https://www.youtube.com/embed/VIDEO_ID" // Optional
}
```

## Changing Colors

Edit `src/index.css`:

```css
:root {
  /* Primary colors - main brand color */
  --primary-color: #4DA8DA;      /* Blue - buttons, links */
  --primary-dark: #3a8bb5;       /* Darker blue - hover states */
  
  /* Secondary colors */
  --secondary-color: #6e7bf0;    /* Purple - accents */
  --accent-color: #01a9ff;       /* Bright blue - highlights */
  
  /* Text colors */
  --text-primary: #2b2b2b;       /* Dark gray - main text */
  --text-secondary: #666;        /* Medium gray - secondary text */
  --text-light: #fff;            /* White - text on dark bg */
  
  /* Background colors */
  --bg-light: #f8f9fa;           /* Light gray - backgrounds */
  --bg-white: #ffffff;           /* White - cards, modals */
  
  /* Shadows */
  --shadow: rgba(0, 0, 0, 0.1);
  --shadow-hover: rgba(0, 0, 0, 0.2);
}
```

## Common Customizations

### Change Gradient Background (Home/Contact)
```css
/* In Home.css or Contact.css */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
/* Change to your colors */
background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
```

### Add Social Media Link
In `src/pages/Contact.jsx`, copy an existing contact method and modify:

```jsx
<a 
  href="https://twitter.com/yourhandle" 
  target="_blank" 
  rel="noopener noreferrer"
  className="contact-method"
>
  <div className="method-icon twitter">
    {/* Add Twitter SVG icon */}
  </div>
  <div className="method-details">
    <h3>Twitter</h3>
    <p>@yourhandle</p>
  </div>
</a>
```

### Change Navigation Logo
In `src/components/Navigation.jsx` (line 16):
```jsx
<NavLink to="/" className="nav-logo">
  AV  {/* Change to your initials or logo */}
</NavLink>
```

## URL Structure

- Home: `http://localhost:5173/`
- About: `http://localhost:5173/about`
- Projects: `http://localhost:5173/projects`
- Contact: `http://localhost:5173/contact`

## Deployment URLs

### GitHub Pages
- Format: `https://username.github.io/`
- Your site: `https://fatmoogle.github.io/`

### Vercel
- Format: `https://project-name.vercel.app`
- Can add custom domain

### Netlify
- Format: `https://random-name.netlify.app`
- Can change name and add custom domain

## Browser Testing

Test in:
- ✅ Chrome (most users)
- ✅ Firefox
- ✅ Safari (Mac/iOS)
- ✅ Edge
- ✅ Mobile browsers

## Performance Tips

1. **Optimize images** before adding:
   - Use WebP format
   - Compress with TinyPNG
   - Max width: 1920px

2. **Keep bundle small**:
   - Don't install unnecessary packages
   - Use code splitting for large features
   - Lazy load images

3. **Check performance**:
   - Open DevTools (F12)
   - Go to "Lighthouse" tab
   - Run audit
   - Aim for 90+ scores

## Git Commands

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add remote repository
git remote add origin https://github.com/Fatmoogle/repository-name.git

# Push to GitHub
git push -u origin main

# Update after changes
git add .
git commit -m "Update portfolio"
git push
```

## Keyboard Shortcuts

### VS Code
- `Ctrl + /` - Toggle comment
- `Ctrl + B` - Toggle sidebar
- `Ctrl + P` - Quick file open
- `Alt + ↑/↓` - Move line up/down
- `Ctrl + D` - Select next occurrence
- `Ctrl + Shift + F` - Find in files

### Browser DevTools
- `F12` - Open/close DevTools
- `Ctrl + Shift + M` - Toggle device toolbar
- `Ctrl + Shift + C` - Inspect element
- `F5` - Refresh
- `Ctrl + F5` - Hard refresh

## Helpful Resources

- React Docs: https://react.dev/
- React Router: https://reactrouter.com/
- Vite Docs: https://vitejs.dev/
- MDN Web Docs: https://developer.mozilla.org/
- CSS Tricks: https://css-tricks.com/

## Getting Help

1. Check browser console (F12) for errors
2. Read error messages carefully
3. Google the error message
4. Check Stack Overflow
5. Review documentation files

## Maintenance

### Regular Updates
```bash
# Check for outdated packages
npm outdated

# Update packages (carefully)
npm update

# Or update one package
npm update react
```

### Keep It Fresh
- Update projects regularly
- Add new skills as you learn
- Refresh screenshots
- Update bio and information
- Check links still work

---

## Quick Start Summary

```bash
# 1. Install
npm install

# 2. Copy images
# Copy from old portfolio to public/Assets/Images/

# 3. Update email
# Edit src/pages/Contact.jsx

# 4. Start dev server
npm run dev

# 5. Test everything
# Check all pages work

# 6. Build
npm run build

# 7. Deploy
# Use GitHub Pages, Vercel, or Netlify

# Done! 🎉
```

---

**Save this file for quick reference!**
