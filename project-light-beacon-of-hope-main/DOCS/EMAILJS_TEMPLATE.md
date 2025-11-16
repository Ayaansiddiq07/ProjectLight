# EmailJS Email Template for PROJECT LIGHT

## 📧 Template Setup Instructions

### **Step 1: Create Template in EmailJS Dashboard**

1. Log in to [EmailJS.com](https://www.emailjs.com/)
2. Go to **Email Templates**
3. Click **Create New Template**
4. Fill in the details:
   - **Template Name**: `contact_form_template`
   - **From Email**: `helpora8@gmail.com`
   - **To Email**: `{{to_email}}`
   - **Subject**: `New Contact Form Submission from {{from_name}}`

---

## 📝 Email Template HTML Content

Copy and paste this HTML into the **Email Content** section:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f1e8;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #004B87 0%, #F4C430 50%, #004B87 100%);
            padding: 30px;
            text-align: center;
            color: white;
        }
        .header h1 {
            font-size: 28px;
            margin-bottom: 5px;
        }
        .header p {
            font-size: 14px;
            opacity: 0.9;
        }
        .content {
            padding: 30px;
        }
        .greeting {
            font-size: 16px;
            margin-bottom: 20px;
            color: #333;
        }
        .section {
            margin-bottom: 25px;
            padding: 15px;
            background-color: #f5f1e8;
            border-left: 4px solid #004B87;
            border-radius: 4px;
        }
        .section-title {
            font-weight: bold;
            color: #004B87;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
        }
        .section-content {
            color: #555;
            font-size: 15px;
            line-height: 1.6;
            word-wrap: break-word;
        }
        .message-box {
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            padding: 15px;
            border-radius: 6px;
            margin-top: 8px;
            font-style: italic;
            color: #333;
        }
        .footer {
            background-color: #f5f1e8;
            padding: 20px 30px;
            text-align: center;
            border-top: 1px solid #e0e0e0;
            font-size: 12px;
            color: #666;
        }
        .footer-link {
            color: #004B87;
            text-decoration: none;
            font-weight: 500;
        }
        .cta-button {
            display: inline-block;
            background-color: #F4C430;
            color: #004B87;
            padding: 12px 24px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: bold;
            margin-top: 15px;
            font-size: 14px;
        }
        .divider {
            height: 1px;
            background-color: #e0e0e0;
            margin: 20px 0;
        }
        .highlight {
            color: #004B87;
            font-weight: bold;
        }
        .secondary-color {
            color: #F4C430;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <h1>🌟 PROJECT LIGHT</h1>
            <p>Powered by Helpora - Connecting Humanity</p>
        </div>

        <!-- Content -->
        <div class="content">
            <div class="greeting">
                <p>Hello,</p>
                <p>You have received a new contact form submission from your PROJECT LIGHT website. Here are the details:</p>
            </div>

            <!-- Sender Information -->
            <div class="section">
                <div class="section-title">📋 Sender Information</div>
                <div class="section-content">
                    <p><strong>Name:</strong> {{from_name}}</p>
                    <p><strong>Email:</strong> <a href="mailto:{{from_email}}" style="color: #004B87; text-decoration: none;">{{from_email}}</a></p>
                    {{#phone}}
                    <p><strong>Phone:</strong> {{phone}}</p>
                    {{/phone}}
                </div>
            </div>

            <!-- Message -->
            <div class="section">
                <div class="section-title">💬 Message</div>
                <div class="message-box">
                    {{message}}
                </div>
            </div>

            <div class="divider"></div>

            <!-- Call to Action -->
            <div style="text-align: center; margin: 25px 0;">
                <p style="margin-bottom: 15px; color: #666; font-size: 14px;">
                    Please respond to this inquiry as soon as possible to maintain excellent customer service.
                </p>
                <a href="mailto:{{from_email}}" class="cta-button">Reply to {{from_name}}</a>
            </div>

            <div class="divider"></div>

            <!-- Additional Info -->
            <div style="background-color: #f0f8ff; padding: 15px; border-radius: 6px; margin-top: 20px;">
                <p style="font-size: 13px; color: #555; margin-bottom: 8px;">
                    <strong>About PROJECT LIGHT:</strong>
                </p>
                <p style="font-size: 12px; color: #666; line-height: 1.6;">
                    PROJECT LIGHT is a global platform that connects people in need with people who want to help—bringing transparency, trust, and real impact to social giving. It is powered by <span class="highlight">Helpora - Connecting Humanity</span>.
                </p>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>
                <strong>PROJECT LIGHT Contact Form</strong><br>
                <a href="https://projectlight.com" class="footer-link">Visit Website</a> | 
                <a href="https://projectlight.com/contact" class="footer-link">Contact Page</a>
            </p>
            <p style="margin-top: 10px; color: #999;">
                This is an automated email from your PROJECT LIGHT website contact form.
            </p>
            <p style="margin-top: 8px; font-size: 11px; color: #bbb;">
                © {{current_year}} PROJECT LIGHT. All rights reserved.
            </p>
        </div>
    </div>
</body>
</html>
```

---

## 🎯 Template Variables Used

| Variable | Description | Example |
|----------|-------------|---------|
| `{{from_name}}` | Sender's full name | John Doe |
| `{{from_email}}` | Sender's email address | john@example.com |
| `{{phone}}` | Sender's phone number (optional) | +1 (555) 000-0000 |
| `{{message}}` | Message content | Your inquiry text here |
| `{{to_email}}` | Recipient email | helpora8@gmail.com |
| `{{current_year}}` | Current year | 2025 |

---

## 🎨 Color Scheme (Aligned with Logo)

- **Primary Blue**: `#004B87` (Deep Blue)
- **Secondary Yellow**: `#F4C430` (Golden Yellow)
- **Background**: `#f5f1e8` (Cream Beige)
- **Text**: `#333` (Dark Gray)
- **Accent**: `#555` (Medium Gray)

---

## 📋 Form Data Mapping

Your contact form sends this data:

```javascript
{
  from_name: formData.name,        // User's name
  from_email: formData.email,      // User's email
  phone: formData.phone,           // User's phone (optional)
  message: formData.message,       // User's message
  to_email: "helpora8@gmail.com"   // Recipient
}
```

---

## ✅ Features of This Template

✅ **Professional Design**: Modern, clean layout  
✅ **Branded Colors**: Matches PROJECT LIGHT logo  
✅ **Responsive**: Works on all devices  
✅ **Clear Structure**: Easy to read  
✅ **Call to Action**: Reply button included  
✅ **Brand Info**: Explains PROJECT LIGHT mission  
✅ **Security**: No sensitive data exposed  
✅ **Mobile Friendly**: Optimized for phones  

---

## 🚀 Setup Steps

### **In EmailJS Dashboard:**

1. Go to **Email Templates**
2. Click **Create New Template**
3. Set **Template Name**: `contact_form_template`
4. Set **From Email**: `helpora8@gmail.com`
5. Set **To Email**: `{{to_email}}`
6. Set **Subject**: `New Contact Form Submission from {{from_name}}`
7. Paste the HTML template above into **Email Content**
8. Click **Save**
9. Copy the **Template ID** (e.g., `template_xxxxx`)

### **In Your Project:**

1. Add to `.env.local`:
```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=pk_xxxxx
VITE_CONTACT_EMAIL=helpora8@gmail.com
```

2. Test the contact form at `/contact`

---

## 📧 Email Preview

When someone submits the form, they'll receive a beautifully formatted email with:

- ✅ PROJECT LIGHT branded header
- ✅ Sender's information (name, email, phone)
- ✅ Full message content
- ✅ Reply button
- ✅ Project information
- ✅ Professional footer

---

## 🔧 Customization Options

### **Change Colors:**
Replace color codes in the template:
- `#004B87` → Your primary color
- `#F4C430` → Your secondary color
- `#f5f1e8` → Your background color

### **Add More Fields:**
Add to the form data in `Contact.tsx`:
```javascript
{
  from_name: formData.name,
  from_email: formData.email,
  phone: formData.phone,
  message: formData.message,
  company: formData.company,  // New field
  subject: formData.subject,  // New field
  to_email: "helpora8@gmail.com"
}
```

Then add to template:
```html
{{#company}}
<p><strong>Company:</strong> {{company}}</p>
{{/company}}
```

### **Change Subject Line:**
In EmailJS template settings:
- Current: `New Contact Form Submission from {{from_name}}`
- Custom: `{{from_name}} - New Inquiry for PROJECT LIGHT`

---

## 🧪 Test Email

Before deploying, send a test email:

1. Fill out the contact form with test data
2. Submit the form
3. Check `helpora8@gmail.com` inbox
4. Verify formatting and content
5. Check spam folder if not received

---

## 📞 Support

If you need help:
- Check [EmailJS Documentation](https://www.emailjs.com/docs/)
- Review [Email Template Guide](https://www.emailjs.com/docs/user-guide/templates/)
- Contact EmailJS Support

---

**Your PROJECT LIGHT email template is ready!** 🎉

This template is:
- ✅ Professional
- ✅ Branded
- ✅ Mobile-friendly
- ✅ Easy to customize
- ✅ Production-ready
