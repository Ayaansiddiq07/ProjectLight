# Quick Start: Deploy to Vercel in 5 Minutes

## Prerequisites
- Git repository (GitHub, GitLab, or Bitbucket)
- Vercel account (free at vercel.com)
- EmailJS credentials

## Step 1: Prepare Your Code (1 min)

```bash
# Ensure all changes are committed
git add .
git commit -m "Security fixes and Vercel optimization"
git push origin main
```

## Step 2: Deploy to Vercel (2 min)

### Option A: Vercel Dashboard (Easiest)
1. Go to https://vercel.com/new
2. Select your Git repository
3. Click "Import"
4. Click "Deploy"

### Option B: Vercel CLI
```bash
npm i -g vercel
vercel login
vercel
```

## Step 3: Add Environment Variables (1 min)

In Vercel Dashboard:
1. Go to Settings → Environment Variables
2. Add these 4 variables:

```
VITE_EMAILJS_SERVICE_ID = <your_service_id>
VITE_EMAILJS_TEMPLATE_ID = <your_template_id>
VITE_EMAILJS_PUBLIC_KEY = <your_public_key>
VITE_CONTACT_EMAIL = <your_email>
```

3. Click "Save"
4. Redeploy (Settings → Deployments → Redeploy)

## Step 4: Verify Deployment (1 min)

✅ Check your site is live at: `https://your-project.vercel.app`  
✅ Test the contact form  
✅ Verify no console errors  

## Done! 🎉

Your website is now:
- ✅ Deployed on Vercel
- ✅ Protected from code inspection
- ✅ Optimized for performance
- ✅ Secured with headers
- ✅ Using environment variables

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Check `npm run build` locally first |
| Contact form not working | Verify EmailJS credentials in Vercel |
| Still seeing source maps | Redeploy after build config changes |
| Environment variables not working | Redeploy after adding variables |

## Important Notes

⚠️ **Never commit `.env` files**  
⚠️ **Always use Vercel environment variables for secrets**  
⚠️ **Test locally before deploying**  

## Local Testing Before Deploy

```bash
# Install dependencies
npm install

# Create .env.local with your credentials
echo "VITE_EMAILJS_SERVICE_ID=your_id" > .env.local
echo "VITE_EMAILJS_TEMPLATE_ID=your_template" >> .env.local
echo "VITE_EMAILJS_PUBLIC_KEY=your_key" >> .env.local
echo "VITE_CONTACT_EMAIL=your_email" >> .env.local

# Test production build
npm run build
npm run preview

# Visit http://localhost:4173 and test everything
```

## Get Your EmailJS Credentials

1. Go to https://www.emailjs.com/
2. Sign up (free)
3. Create a service (Gmail, Outlook, etc.)
4. Create an email template
5. Copy these 3 values:
   - Service ID
   - Template ID
   - Public Key

## Support

- **Vercel Docs**: https://vercel.com/docs
- **EmailJS Docs**: https://www.emailjs.com/docs
- **Vite Docs**: https://vitejs.dev

---

**Status**: Ready to Deploy ✅
