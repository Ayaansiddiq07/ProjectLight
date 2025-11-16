# 🔐 Environment Variables Setup Guide

## Overview
This guide explains how to set up environment variables for PROJECT LIGHT locally and on Vercel.

---

## Local Development Setup

### Step 1: Create .env File

1. In the project root directory, create a `.env` file
2. Copy the contents from `.env.example`:

```bash
cp .env.example .env
```

### Step 2: Add Your EmailJS Credentials

Edit `.env` and add your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_CONTACT_EMAIL=your_email@example.com
```

### Step 3: Get EmailJS Credentials

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up or log in
3. Go to **Email Services** → Create new service
4. Go to **Email Templates** → Create new template
5. Go to **Account** → Copy:
   - Service ID
   - Template ID
   - Public Key

### Step 4: Test Locally

```bash
npm run dev
```

Visit `http://localhost:8080/contact` and test the contact form.

---

## Vercel Deployment Setup

### Step 1: Add Environment Variables to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your PROJECT LIGHT project
3. Click **Settings** → **Environment Variables**

### Step 2: Add Each Variable

Add these 4 variables with your actual values:

| Variable Name | Value | Environments |
|---------------|-------|--------------|
| `VITE_EMAILJS_SERVICE_ID` | `service_xxx` | Production, Preview, Development |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_xxx` | Production, Preview, Development |
| `VITE_EMAILJS_PUBLIC_KEY` | `public_key_xxx` | Production, Preview, Development |
| `VITE_CONTACT_EMAIL` | `your@email.com` | Production, Preview, Development |

### Step 3: Redeploy

After adding environment variables:
1. Go to **Deployments**
2. Click the latest deployment
3. Click **Redeploy**
4. Wait for build to complete

---

## Environment Variables Reference

### VITE_EMAILJS_SERVICE_ID
- **Description**: EmailJS service identifier
- **Format**: `service_xxxxxxxxx`
- **Required**: Yes
- **Where to get**: EmailJS Dashboard → Account → Service ID

### VITE_EMAILJS_TEMPLATE_ID
- **Description**: EmailJS email template identifier
- **Format**: `template_xxxxxxxxx`
- **Required**: Yes
- **Where to get**: EmailJS Dashboard → Email Templates → Template ID

### VITE_EMAILJS_PUBLIC_KEY
- **Description**: EmailJS public key for client-side authentication
- **Format**: `xxxxxxxxxxxxxxxx`
- **Required**: Yes
- **Where to get**: EmailJS Dashboard → Account → Public Key

### VITE_CONTACT_EMAIL
- **Description**: Email address to receive contact form submissions
- **Format**: `email@example.com`
- **Required**: No (defaults to helpora8@gmail.com)
- **Default**: `helpora8@gmail.com`

---

## How Environment Variables Work

### In Development
- Variables are read from `.env` file
- Vite loads them at build time
- Prefixed with `VITE_` to be exposed to client

### In Production (Vercel)
- Variables are set in Vercel dashboard
- Injected during build process
- Never exposed in source code

### In Code
```typescript
// Accessing environment variables
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const isDev = import.meta.env.DEV;
```

---

## Security Best Practices

✅ **DO**:
- Keep `.env` file in `.gitignore` (already configured)
- Use different credentials for development and production
- Rotate keys periodically
- Use environment-specific variables

❌ **DON'T**:
- Commit `.env` file to Git
- Share credentials in chat or email
- Use production credentials in development
- Hardcode credentials in source code

---

## Troubleshooting

### Contact Form Not Sending

**Error**: "Email service is not configured"

**Solution**:
1. Check `.env` file has all 4 variables
2. Verify values are correct (no extra spaces)
3. Restart dev server: `npm run dev`
4. Check browser console for errors

### Variables Not Loading in Vercel

**Error**: Contact form fails on Vercel but works locally

**Solution**:
1. Verify variables added in Vercel dashboard
2. Check variable names match exactly (case-sensitive)
3. Redeploy after adding variables
4. Check Vercel build logs for errors

### EmailJS Errors

**Error**: "Invalid service ID" or "Invalid template ID"

**Solution**:
1. Verify credentials in EmailJS dashboard
2. Check service is active in EmailJS
3. Verify template is published
4. Test in EmailJS dashboard first

---

## Testing Environment Variables

### Local Test
```bash
# Add to src/pages/Contact.tsx temporarily
console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
```

### Vercel Test
1. Deploy with environment variables
2. Open browser DevTools → Console
3. Submit contact form
4. Check console for any errors

---

## File Structure

```
project-light/
├── .env                    # ❌ NOT committed (gitignored)
├── .env.example           # ✅ Committed (template)
├── .gitignore             # Excludes .env
├── src/
│   └── pages/
│       └── Contact.tsx    # Uses environment variables
└── vercel.json            # Vercel configuration
```

---

## Environment Variable Flow

```
Development:
.env file → Vite → import.meta.env → Contact.tsx → EmailJS

Production (Vercel):
Vercel Dashboard → Build Process → import.meta.env → Contact.tsx → EmailJS
```

---

## Quick Setup Checklist

- [ ] Create `.env` file from `.env.example`
- [ ] Add EmailJS Service ID
- [ ] Add EmailJS Template ID
- [ ] Add EmailJS Public Key
- [ ] Add Contact Email
- [ ] Test locally with `npm run dev`
- [ ] Add variables to Vercel dashboard
- [ ] Redeploy on Vercel
- [ ] Test contact form on live site

---

## Support

**EmailJS Documentation**: https://www.emailjs.com/docs/
**Vite Environment Variables**: https://vitejs.dev/guide/env-and-modes.html
**Vercel Environment Variables**: https://vercel.com/docs/environment-variables

---

**Last Updated**: November 16, 2025
**Status**: ✅ Ready for Setup
