# EmailJS Setup Guide for Contact Form

## Overview
Your contact form is configured to send emails to **helpora8@gmail.com** using EmailJS. This guide will help you set up EmailJS credentials.

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Click "Sign Up Free"
3. Create an account (use your email)
4. Verify your email

## Step 2: Add Email Service

1. In EmailJS Dashboard, go to **Email Services**
2. Click **"Add Service"**
3. Select **Gmail** (or your preferred email provider)
4. Click **"Connect Account"**
5. Sign in with your Gmail account (helpora8@gmail.com)
6. Grant EmailJS permission to send emails
7. Copy your **Service ID** (looks like: `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **"Create New Template"**
3. Fill in the template:

```
Template Name: Contact Form
Subject: New Contact Form Message from {{from_name}}

Template Content:
---
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}
---
```

4. Click **"Save"**
5. Copy your **Template ID** (looks like: `template_xxxxxxx`)

## Step 4: Get Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (looks like: `xxxxxxxxxxxxxxxxxxxxxxxx`)

## Step 5: Configure Environment Variables

### Local Development

Create a `.env.local` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxxxxxx
VITE_CONTACT_EMAIL=helpora8@gmail.com
```

### For Vercel Deployment

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add these 4 variables:

| Variable | Value |
|----------|-------|
| `VITE_EMAILJS_SERVICE_ID` | Your Service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | Your Template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | Your Public Key |
| `VITE_CONTACT_EMAIL` | helpora8@gmail.com |

4. Click **Save**
5. Redeploy your project

## Step 6: Test the Contact Form

### Local Testing

```bash
# Install dependencies
npm install

# Create .env.local with your credentials
echo "VITE_EMAILJS_SERVICE_ID=your_service_id" > .env.local
echo "VITE_EMAILJS_TEMPLATE_ID=your_template_id" >> .env.local
echo "VITE_EMAILJS_PUBLIC_KEY=your_public_key" >> .env.local
echo "VITE_CONTACT_EMAIL=helpora8@gmail.com" >> .env.local

# Start development server
npm run dev

# Visit http://localhost:5173/contact
# Fill out the form and submit
```

### What to Expect

✅ Form submits successfully  
✅ Success message appears: "Message sent successfully! We'll get back to you soon."  
✅ Email received at helpora8@gmail.com  
✅ Form fields clear after submission  

## Contact Form Features

### Current Configuration

- **Recipient Email**: helpora8@gmail.com
- **Form Fields**:
  - Name (required)
  - Email (required)
  - Phone (optional)
  - Message (required)

### Security Features

- ✅ Environment variables protect credentials
- ✅ Form validation before submission
- ✅ Error handling with user-friendly messages
- ✅ No console errors in production
- ✅ CSRF protection via EmailJS

### Form Behavior

1. User fills out form
2. Click "Send Message"
3. Button shows "Sending..."
4. Email sent via EmailJS to helpora8@gmail.com
5. Success message displays
6. Form clears automatically
7. Button shows "Message Sent!" for 5 seconds

## Troubleshooting

### Issue: "Email service is not configured"

**Solution**: Verify environment variables are set correctly
```bash
# Check if variables are loaded
echo $VITE_EMAILJS_SERVICE_ID
echo $VITE_EMAILJS_TEMPLATE_ID
echo $VITE_EMAILJS_PUBLIC_KEY
```

### Issue: "Failed to send message"

**Possible Causes**:
1. Invalid Service ID
2. Invalid Template ID
3. Invalid Public Key
4. Gmail account not connected in EmailJS
5. EmailJS service is down

**Solution**:
- Verify all credentials in EmailJS dashboard
- Check Gmail account is connected
- Test with EmailJS test email feature
- Check browser console for detailed error

### Issue: Email not received

**Possible Causes**:
1. Email filtered to spam
2. Template variables not matching form fields
3. Gmail account disconnected

**Solution**:
- Check spam folder
- Verify template variable names match form fields:
  - `{{from_name}}` → formData.name
  - `{{from_email}}` → formData.email
  - `{{phone}}` → formData.phone
  - `{{message}}` → formData.message
- Reconnect Gmail in EmailJS

### Issue: Form not submitting

**Possible Causes**:
1. Missing required fields
2. Invalid email format
3. Network error

**Solution**:
- Fill all required fields (Name, Email, Message)
- Use valid email format
- Check internet connection
- Check browser console for errors

## EmailJS Pricing

- **Free Plan**: 200 emails/month
- **Pro Plan**: Unlimited emails/month

For your contact form, the free plan should be sufficient.

## Email Template Variables

Your form sends these variables to EmailJS:

```javascript
{
  from_name: "User's Name",
  from_email: "user@example.com",
  phone: "User's Phone",
  message: "User's Message",
  to_email: "helpora8@gmail.com"
}
```

Make sure your EmailJS template uses these exact variable names.

## Security Best Practices

1. ✅ Never commit `.env` files to Git
2. ✅ Use environment variables for all credentials
3. ✅ Keep Public Key private (only use in frontend)
4. ✅ Validate form data before sending
5. ✅ Use HTTPS for form submission
6. ✅ Monitor EmailJS dashboard for suspicious activity

## Testing Checklist

- [ ] EmailJS account created
- [ ] Gmail service connected
- [ ] Email template created
- [ ] Service ID copied
- [ ] Template ID copied
- [ ] Public Key copied
- [ ] Environment variables set locally
- [ ] Form submits successfully
- [ ] Email received at helpora8@gmail.com
- [ ] Environment variables set in Vercel
- [ ] Form works on production site

## Additional Resources

- **EmailJS Documentation**: https://www.emailjs.com/docs
- **EmailJS Support**: https://www.emailjs.com/support
- **Contact Form Code**: `src/pages/Contact.tsx`

## Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review EmailJS dashboard for errors
3. Check browser console for error messages
4. Verify all environment variables are correct
5. Test with EmailJS test feature

---

**Status**: ✅ Contact Form Ready for EmailJS Setup  
**Email Recipient**: helpora8@gmail.com  
**Last Updated**: November 2025
