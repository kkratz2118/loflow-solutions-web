# LOFlow Solutions Website

Static HTML/CSS/JS rebuild of loflowsolutions.com, ready to host on Vercel.

## Files
- index.html — Main homepage
- contact.html — Contact page
- privacy.html — Privacy policy
- terms.html — Terms of service
- styles.css — All styles (dark theme, responsive)
- script.js — Interactivity (FAQ accordion, process tabs, scroll animations)
- vercel.json — Vercel routing config

## Local Development
1. Open folder in VS Code
2. Install "Live Server" extension
3. Right-click index.html -> Open with Live Server

## Deploy to Vercel
Option A: Drag the folder to vercel.com/new
Option B: Push to GitHub, then import at vercel.com/new

## Customization
- Colors: Edit CSS variables in :root in styles.css
- CTA links: Search for ro.am/loflow-solutions-llc/lobby-3 to update booking URL
- Contact form: Wire up to Formspree or EmailJS for real email delivery
- Images/video: Loaded from Framer CDN; download and host locally for full independence
- Email: hello@loflowsolutions.com