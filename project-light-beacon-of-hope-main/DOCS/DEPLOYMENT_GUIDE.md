# Deployment Guide - Vercel Hosting

## Overview
This guide covers deploying your PROJECT LIGHT website to Vercel with security optimizations and code protection.

## Pre-Deployment Checklist

### 1. Security Fixes Applied ✅
- ✅ Removed console logging in production
- ✅ Environment variables for sensitive credentials
- ✅ Source maps disabled in production build
- ✅ Code minification and obfuscation enabled
- ✅ Security headers configured
- ✅ .gitignore updated to prevent credential leaks

### 2. Environment Variables Setup

Create a `.env.local` file in your project root with:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_CONTACT_EMAIL=your_email@example.com
```

**Never commit `.env` files to Git!**

## Deployment Steps

### Step 1: Prepare Your Repository

```bash
# Ensure all changes are committed
git add .
git commit -m "Security fixes and Vercel optimization"

# Push to your Git repository (GitHub, GitLab, or Bitbucket)
git push origin main
```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

#### Option B: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository
4. Select the project root directory
5. Configure environment variables (see Step 3)
6. Click "Deploy"

### Step 3: Configure Environment Variables in Vercel

1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add the following variables:

| Variable | Value |
|----------|-------|
| `VITE_EMAILJS_SERVICE_ID` | Your EmailJS Service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | Your EmailJS Template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS Public Key |
| `VITE_CONTACT_EMAIL` | Your contact email |

4. Make sure these are set for **Production** environment

### Step 4: Verify Build Settings

Vercel should auto-detect your Vite configuration. Verify:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Security Features Implemented

### 1. Code Protection
- **No Source Maps**: Disabled in production build
- **Code Minification**: All code is minified and obfuscated
- **Console Removal**: All console statements removed in production
- **Comment Removal**: Code comments stripped from production build

### 2. Security Headers
The `vercel.json` file includes:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
Content-Security-Policy: [restrictive policy]
```

### 3. Environment Variables
- All sensitive credentials stored in Vercel environment variables
- Never exposed in client-side code
- EmailJS credentials protected

### 4. Git Protection
Updated `.gitignore` prevents:
- `.env` files from being committed
- Source maps from being committed
- Build artifacts from being committed
- Sensitive credentials from being exposed

## Preventing Code Inspection

### What's Protected:
✅ **Source Code**: Minified and obfuscated  
✅ **Source Maps**: Completely disabled  
✅ **Console Logs**: Removed in production  
✅ **Comments**: Stripped from production build  
✅ **Credentials**: Stored in server-side environment variables  

### How to Verify Protection:

1. **Check Network Tab**: No `.map` files should be downloaded
2. **Check Console**: No debug logs or errors
3. **View Page Source**: Code should be minified and unreadable
4. **DevTools Sources**: Code should be obfuscated

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
npm run build

# Check for TypeScript errors
npm run lint
```

### Environment Variables Not Working
1. Verify variables are set in Vercel dashboard
2. Redeploy after adding variables
3. Check variable names match exactly (case-sensitive)

### Contact Form Not Working
1. Verify EmailJS credentials are correct
2. Check EmailJS service is active
3. Test locally first with `.env.local`

## Local Testing

Before deploying, test locally:

```bash
# Install dependencies
npm install

# Create .env.local with your credentials
echo "VITE_EMAILJS_SERVICE_ID=your_id" > .env.local
echo "VITE_EMAILJS_TEMPLATE_ID=your_template" >> .env.local
echo "VITE_EMAILJS_PUBLIC_KEY=your_key" >> .env.local

# Run development server
npm run dev

# Test production build locally
npm run build
npm run preview
```

## Performance Optimization

The build is optimized for:
- **Code Splitting**: Separate vendor and UI chunks
- **Minification**: Terser with aggressive compression
- **Tree Shaking**: Unused code removed
- **Lazy Loading**: Components loaded on demand

## Monitoring

After deployment:

1. Check Vercel Analytics for performance metrics
2. Monitor error logs in Vercel dashboard
3. Test all pages and forms
4. Verify security headers are applied

## Rollback

If something goes wrong:

```bash
# Vercel keeps deployment history
# Go to Vercel dashboard → Deployments
# Click on a previous deployment
# Click "Promote to Production"
```

## Additional Security Recommendations

1. **Enable HTTPS**: Vercel does this automatically
2. **Set up DDoS Protection**: Vercel includes this
3. **Regular Updates**: Keep dependencies updated
4. **Monitor Dependencies**: Use `npm audit`
5. **Backup**: Keep Git repository backed up

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev
- **Security Headers**: https://securityheaders.com

---

**Last Updated**: November 2025  
**Status**: Ready for Production Deployment
