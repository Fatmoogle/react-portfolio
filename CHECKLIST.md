# Portfolio Setup Checklist

Use this checklist to get your React portfolio up and running!

## ☐ Step 1: Install Dependencies

```bash
cd "C:\Coding\fatmoogle-portfolio-react"
npm install
```

**Expected result:** 
- `node_modules` folder appears
- No error messages
- "added XXX packages" message

---

## ☐ Step 2: Copy Your Images

You have two options:

### Option A: Copy Assets folder (Recommended)
```bash
# In Command Prompt
xcopy "C:\Coding\fatmoogle.github.io\Assets" "C:\Coding\fatmoogle-portfolio-react\public\Assets" /E /I
```

### Option B: Create symbolic link
```bash
# In Command Prompt (as Administrator)
mklink /D "C:\Coding\fatmoogle-portfolio-react\public\Assets" "C:\Coding\fatmoogle.github.io\Assets"
```

**Verify:** 
- Images should be in `public/Assets/Images/`
- Check for these files:
  - RGBCustomScript.png
  - PetsLuvAppImg.PNG
  - DBUGME_pic.PNG
  - And others...

---

## ☐ Step 3: Update Your Email Address

Open: `src/pages/Contact.jsx`

Find line 18:
```javascript
const mailtoLink = `mailto:your.email@example.com?subject=...`
```

Change `your.email@example.com` to your actual email.

Also update line 110:
```javascript
<p>your.email@example.com</p>
```

---

## ☐ Step 4: Run Development Server

```bash
npm run dev
```

**Expected result:**
```
  VITE v5.x.x  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open browser to: http://localhost:5173

---

## ☐ Step 5: Test Each Page

### Home Page (/)
- ☐ Shows your name "Alex Varela"
- ☐ Shows subtitle "Full Stack Web Developer"
- ☐ Shows skill tags
- ☐ "View My Work" button works
- ☐ "Get In Touch" button works
- ☐ Animated shapes visible

### About Page (/about)
- ☐ Shows "About Me" heading
- ☐ Bio text displays correctly
- ☐ Education logos show (WCU and UNC)
- ☐ Skills are organized in categories
- ☐ Interests show with icons

### Projects Page (/projects)
- ☐ All 7 projects display
- ☐ Project images show correctly
- ☐ Clicking a project opens modal
- ☐ Modal shows project details
- ☐ GitHub/Demo buttons work
- ☐ Close button (X) works
- ☐ Technology tags display

### Contact Page (/contact)
- ☐ Contact form displays
- ☐ GitHub link works
- ☐ LinkedIn link works
- ☐ Email address is correct
- ☐ Form submission opens email client

### Navigation
- ☐ Logo links to home
- ☐ All nav links work
- ☐ Active page is highlighted
- ☐ Mobile menu works (resize browser)

---

## ☐ Step 6: Test Mobile View

In browser:
1. Press `F12` (open DevTools)
2. Click device toolbar icon (or `Ctrl+Shift+M`)
3. Select different devices

Test on:
- ☐ iPhone SE (375px)
- ☐ iPhone 12 Pro (390px)
- ☐ iPad (768px)
- ☐ Desktop (1920px)

Check:
- ☐ Hamburger menu appears on mobile
- ☐ Content is readable
- ☐ No horizontal scroll
- ☐ Images scale properly
- ☐ Buttons are touch-friendly

---

## ☐ Step 7: Customize (Optional)

### Colors
Edit `src/index.css` (lines 1-15):
```css
:root {
  --primary-color: #4DA8DA;  /* Change this */
  --secondary-color: #6e7bf0; /* And this */
  /* etc... */
}
```

### Add/Remove Projects
Edit `src/pages/Projects.jsx` (lines 6-75)

### Update Bio
Edit `src/pages/About.jsx`

---

## ☐ Step 8: Build for Production

```bash
npm run build
```

**Expected result:**
- ✓ `dist` folder is created
- ✓ No errors in build
- ✓ Size report shows (typically ~150-200KB)

---

## ☐ Step 9: Test Production Build

```bash
npm run preview
```

Open the URL shown (usually http://localhost:4173)

Test again:
- ☐ All pages work
- ☐ Images load
- ☐ Navigation works
- ☐ No console errors

---

## ☐ Step 10: Deploy (Choose One)

### Option A: GitHub Pages
```bash
npm install --save-dev gh-pages
npm run deploy
```
See `DEPLOYMENT.md` for details.

### Option B: Vercel
1. Go to https://vercel.com
2. Connect GitHub
3. Import repository
4. Deploy!

### Option C: Netlify
1. Go to https://netlify.com
2. Drag `dist` folder to their site
3. Done!

---

## ☐ Step 11: Final Checks

After deployment:

- ☐ Site loads at live URL
- ☐ All pages accessible
- ☐ Images display correctly
- ☐ Links work
- ☐ Mobile responsive
- ☐ No console errors

---

## ☐ Step 12: Share Your Portfolio!

Update your:
- ☐ LinkedIn profile (add portfolio link)
- ☐ GitHub profile README
- ☐ Resume (add portfolio URL)
- ☐ Email signature

---

## Troubleshooting

### Images not showing?
- Check file paths
- Verify images are in `public/Assets/Images/`
- Check browser console for 404 errors

### npm install fails?
- Make sure Node.js is installed
- Try: `npm cache clean --force`
- Delete `node_modules` and try again

### Page is blank?
- Check browser console for errors
- Verify all files were created
- Try refreshing with `Ctrl+F5`

### Build fails?
- Check for syntax errors in console
- Verify all imports are correct
- Run `npm install` again

---

## Need Help?

Read the documentation:
- `README.md` - Complete docs
- `SETUP.md` - Quick start
- `DEPLOYMENT.md` - Deploy guide
- `PROJECT_SUMMARY.md` - Overview

---

## Success! 🎉

Once all items are checked, your portfolio is:
- ✅ Professional
- ✅ Modern
- ✅ Responsive
- ✅ Production-ready
- ✅ Deployed

**Congratulations on your new React portfolio!**
