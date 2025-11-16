# Vercel Deployment Guide - PROJECT LIGHT

## Overview
This guide provides step-by-step instructions to deploy PROJECT LIGHT on Vercel with optimal performance and security configurations.

---

## Prerequisites
- Vercel account (https://vercel.com)
- GitHub repository connected to Vercel
- Environment variables configured

---

## Step 1: Connect Repository to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Select your GitHub repository
4. Click **"Import"**

---

## Step 2: Configure Environment Variables

In the Vercel dashboard, go to **Settings** → **Environment Variables** and add:

```
VITE_EMAILJS_SERVICE_ID = service_jpu2j48
VITE_EMAILJS_TEMPLATE_ID = template_pm1387y
VITE_EMAILJS_PUBLIC_KEY = 9aDFHA4whx9CYlrG4
VITE_CONTACT_EMAIL = helpora8@gmail.com
```

**Note:** These variables are referenced in `vercel.json` as:
- `@vite_emailjs_service_id`
- `@vite_emailjs_template_id`
- `@vite_emailjs_public_key`
- `@vite_contact_email`

---

## Step 3: Build & Deployment Settings

The `vercel.json` file is already configured with:

### Build Command
```bash
npm run build
```

### Output Directory
```
dist
```

### Node Version
```
18.x
```

**No additional configuration needed** - Vercel will automatically detect and use these settings.

---

## Step 4: Deploy

1. Click **"Deploy"** in the Vercel dashboard
2. Wait for the build to complete
3. Your site will be live at `https://your-project.vercel.app`

---

## Performance Optimizations Enabled

### ✅ Caching Strategy
- **Assets (JS/CSS)**: 1 year cache (immutable)
- **Images**: 1 year cache (immutable)
- **Fonts**: 1 year cache (immutable)
- **HTML**: No cache (always fresh)
- **Source maps**: No cache (security)

### ✅ Code Optimization
- Aggressive minification with 2-pass compression
- Variable name mangling
- Console/debugger removal
- CSS minification
- Code splitting (vendor, UI, animations, utils)

### ✅ Loading Performance
- 8-second loading screen
- Optimized bundle size
- Lazy loading enabled
- Image optimization

---

## Security Headers Configured

All requests include:
- **X-Content-Type-Options**: nosniff
- **X-Frame-Options**: DENY
- **X-XSS-Protection**: 1; mode=block
- **Referrer-Policy**: strict-origin-when-cross-origin
- **Permissions-Policy**: Restricts geolocation, microphone, camera
- **Strict-Transport-Security**: HSTS enabled (1 year)

---

## SPA Routing Configuration

All routes are configured to serve `index.html` for client-side routing:

```json
{
  "src": "/.*",
  "dest": "/index.html"
}
```

This ensures React Router handles all navigation.

---

## Deployment Checklist

- [ ] Environment variables added to Vercel dashboard
- [ ] Repository connected to Vercel
- [ ] `vercel.json` is in root directory
- [ ] `.vercelignore` is configured
- [ ] `package.json` build script is correct
- [ ] `vite.config.ts` optimization settings applied
- [ ] Loading screen delay set to 8 seconds
- [ ] All errors fixed in codebase

---

## Monitoring & Logs

1. Go to Vercel Dashboard → Your Project
2. Click **"Deployments"** to view deployment history
3. Click on any deployment to view logs
4. Use **"Analytics"** tab to monitor performance

---

## Custom Domain Setup

1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions
4. SSL certificate is automatically provisioned

---

## Troubleshooting

### Build Fails
- Check **Deployment Logs** in Vercel dashboard
- Ensure all environment variables are set
- Verify `package.json` scripts are correct

### Environment Variables Not Working
- Ensure variables are prefixed with `VITE_` for Vite
- Redeploy after adding/changing variables
- Check `.env` file is in `.gitignore`

### Routing Issues
- Verify `vercel.json` routes configuration
- Check React Router setup in `App.tsx`
- Clear browser cache and redeploy

---

## Performance Metrics

After deployment, check:
- **Vercel Analytics**: Real user metrics
- **Lighthouse**: Performance score
- **Bundle Size**: Use `npm run build` locally to check

---

## Next Steps

1. Set up custom domain (optional)
2. Configure analytics
3. Set up error tracking (Sentry, etc.)
4. Monitor performance metrics
5. Plan future optimizations

---

## Support

For issues, refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)

---

**Last Updated**: November 16, 2025
**Deployment Status**: ✅ Ready for Vercel
