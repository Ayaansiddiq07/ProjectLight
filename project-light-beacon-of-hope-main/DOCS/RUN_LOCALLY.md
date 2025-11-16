# Run Website Locally

## Quick Start

### Step 1: Create Environment File

Create `.env.local` in the project root with your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxxxxxx
VITE_CONTACT_EMAIL=helpora8@gmail.com
```

### Step 2: Start Development Server

```bash
npm run dev
```

The site will be available at: **http://localhost:5173**

### Step 3: Test Contact Form

1. Go to http://localhost:5173/contact
2. Fill out the form
3. Click "Send Message"
4. Check helpora8@gmail.com for the email

## Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Fix audit vulnerabilities
npm audit fix
```

## Project Status

✅ All dependencies installed  
✅ Contact form configured  
✅ Email set to helpora8@gmail.com  
✅ Ready to run locally  

## Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will use the next available port (5174, 5175, etc.)

### Contact Form Not Working
- Verify `.env.local` file exists
- Check all EmailJS credentials are correct
- Restart dev server after creating `.env.local`

### Build Errors
Run: `npm audit fix` to fix vulnerabilities

## Next Steps

1. Get EmailJS credentials from https://www.emailjs.com/
2. Create `.env.local` file
3. Run `npm run dev`
4. Test the website
