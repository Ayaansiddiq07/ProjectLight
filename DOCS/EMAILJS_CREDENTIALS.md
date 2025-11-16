# ✅ EmailJS Credentials Setup

## 🎉 Your EmailJS Credentials

Your EmailJS account is now configured! Here are your credentials:

| Item | Value |
|------|-------|
| **Service ID** | `service_jpu2j48` |
| **Template ID** | `template_pm1387y` |
| **Public Key** | Get from EmailJS Account |
| **Recipient Email** | `helpora8@gmail.com` |

---

## 🔑 Get Your Public Key

1. Go to [EmailJS Dashboard](https://www.emailjs.com/dashboard/)
2. Click **Account** in the left sidebar
3. Go to **API Keys** tab
4. Copy your **Public Key** (starts with `pk_`)

---

## 📝 Create `.env.local` File

Create a new file in your project root called `.env.local`:

```env
VITE_EMAILJS_SERVICE_ID=service_jpu2j48
VITE_EMAILJS_TEMPLATE_ID=template_pm1387y
VITE_EMAILJS_PUBLIC_KEY=pk_YOUR_PUBLIC_KEY_HERE
VITE_CONTACT_EMAIL=helpora8@gmail.com
```

**Replace `pk_YOUR_PUBLIC_KEY_HERE` with your actual public key**

---

## ✅ Verify Your Template

Your template is already created in EmailJS with:

- **Template ID**: `template_pm1387y`
- **Service ID**: `service_jpu2j48`
- **Recipient**: `helpora8@gmail.com`

### **Template Variables:**
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{phone}}` - Visitor's phone
- `{{message}}` - Visitor's message
- `{{to_email}}` - helpora8@gmail.com

---

## 🚀 Test Locally

1. **Create `.env.local` file** with your credentials
2. **Run development server**:
   ```bash
   npm run dev
   ```
3. **Visit contact page**:
   ```
   http://localhost:5173/contact
   ```
4. **Fill out the form** and submit
5. **Check `helpora8@gmail.com`** for the email

---

## 🌐 Deploy to Vercel

### **Step 1: Add Environment Variables**

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your PROJECT LIGHT project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:

```
VITE_EMAILJS_SERVICE_ID=service_jpu2j48
VITE_EMAILJS_TEMPLATE_ID=template_pm1387y
VITE_EMAILJS_PUBLIC_KEY=pk_YOUR_PUBLIC_KEY_HERE
VITE_CONTACT_EMAIL=helpora8@gmail.com
```

5. Click **Save**

### **Step 2: Redeploy**

1. Go to **Deployments**
2. Click **Redeploy** on the latest deployment
3. Wait for deployment to complete

### **Step 3: Test Production**

1. Visit your deployed site
2. Go to `/contact` page
3. Test the contact form
4. Verify email is received

---

## 📋 Quick Checklist

- [ ] Created `.env.local` file
- [ ] Added `VITE_EMAILJS_SERVICE_ID=service_jpu2j48`
- [ ] Added `VITE_EMAILJS_TEMPLATE_ID=template_pm1387y`
- [ ] Added `VITE_EMAILJS_PUBLIC_KEY=pk_xxxxx` (your public key)
- [ ] Added `VITE_CONTACT_EMAIL=helpora8@gmail.com`
- [ ] Tested locally at `/contact`
- [ ] Received test email
- [ ] Added environment variables to Vercel
- [ ] Redeployed to Vercel
- [ ] Tested production contact form

---

## 🔒 Security Notes

✅ **What to Do:**
- Store `.env.local` locally only
- Never commit `.env.local` to git
- Add `.env.local` to `.gitignore`
- Keep public key private
- Use HTTPS for all communications

❌ **What NOT to Do:**
- Don't share `.env.local` file
- Don't commit credentials to git
- Don't hardcode credentials in code
- Don't expose public key in comments

---

## 🧪 Test Email Template

Your template sends emails with:

```
From: helpora8@gmail.com
To: helpora8@gmail.com
Subject: New Contact Form Submission from [Visitor Name]

Content:
- Visitor's name
- Visitor's email
- Visitor's phone (if provided)
- Visitor's message
- Reply button
- PROJECT LIGHT branding
```

---

## 📞 Troubleshooting

### **Issue: "Email service is not configured"**

**Solution:**
1. Check `.env.local` exists
2. Verify all variables are set
3. Restart dev server: `npm run dev`
4. Check browser console for errors

### **Issue: Email not received**

**Check:**
1. Verify recipient email: `helpora8@gmail.com`
2. Check spam/junk folder
3. Verify service is connected in EmailJS
4. Check EmailJS activity log

### **Issue: Template not found**

**Solution:**
1. Verify template ID: `template_pm1387y`
2. Check template exists in EmailJS
3. Verify template is published
4. Check template variables match

---

## 🎯 Next Steps

1. ✅ Get your public key from EmailJS
2. ✅ Create `.env.local` file
3. ✅ Test locally
4. ✅ Add to Vercel environment variables
5. ✅ Deploy and test production

---

## 📧 Your Setup is Complete!

**Service ID**: `service_jpu2j48` ✅  
**Template ID**: `template_pm1387y` ✅  
**Recipient**: `helpora8@gmail.com` ✅  

Just add your **Public Key** and you're ready to go! 🚀

---

## 🔗 Useful Links

- [EmailJS Dashboard](https://www.emailjs.com/dashboard/)
- [EmailJS API Keys](https://www.emailjs.com/dashboard/account/api-keys)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)

---

**Your PROJECT LIGHT contact form is now ready!** 📧✨
