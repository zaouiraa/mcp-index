# MCPIndex Deployment Guide

## Overview
This guide walks through deploying the MCPIndex Next.js 16 application with Resend email integration to Vercel.

## Prerequisites
1. Vercel account (https://vercel.com)
2. Resend account (https://resend.com)
3. Git repository connection
4. Vercel CLI installed

## Step 1: Get Your Resend API Key

1. Visit https://resend.com and sign up/login
2. Navigate to **API Keys** section in the dashboard
3. Click **Create API Key**
4. Name it "MCPIndex" or similar
5. Copy the API key (starts with `re_`)
6. Keep this safe - you'll use it in the next step

## Step 2: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended)

```bash
# 1. Login to Vercel
vercel login

# 2. Link to your Vercel project
vercel link

# 3. Add environment variables for production
vercel env add RESEND_API_KEY production
# When prompted, paste your Resend API key

vercel env add CONTACT_TO_EMAIL production
# When prompted, enter your email (where contact form emails will be sent)

vercel env add CONTACT_FROM_EMAIL production
# When prompted, enter the sender email (from your Resend verified domain)

# 4. Deploy to production
vercel --prod
```

### Option B: Using Vercel Dashboard

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add three new production variables:
   - `RESEND_API_KEY`: Your Resend API key
   - `CONTACT_TO_EMAIL`: Recipient email (e.g., contact@mcpindex.dev)
   - `CONTACT_FROM_EMAIL`: Sender email (e.g., onboarding@resend.dev)
4. Go to **Deployments** and click **Deploy**

## Step 3: Test Contact Form

1. Visit your deployed site's `/contact` page
2. Fill in the contact form:
   - Name: Test Name
   - Email: your-email@example.com
   - Message: Test message
3. Click "Send Message"
4. You should receive an email at the `CONTACT_TO_EMAIL` address

## Environment Variables

| Variable | Purpose | Example |
|----------|---------|---------|
| `RESEND_API_KEY` | Resend authentication key | `re_xxx...` |
| `CONTACT_TO_EMAIL` | Email to receive contact form submissions | `contact@mcpindex.dev` |
| `CONTACT_FROM_EMAIL` | Email address to send from | `onboarding@resend.dev` |

## API Endpoint

The contact form submits to `/api/contact` which:
1. Validates the form data (name, email, message required)
2. Sends an HTML-formatted email via Resend
3. Returns success or error response
4. Handles all errors gracefully with user feedback

## Features Implemented

✅ Contact form with validation  
✅ Email sending via Resend  
✅ Success/error feedback messages  
✅ Environment-based configuration  
✅ Responsive design matching site theme  
✅ Form reset on successful submission  
✅ Loading states on submit button  

## Troubleshooting

### "Email service not configured"
- Ensure `RESEND_API_KEY` is set in Vercel environment variables
- Check that the key is valid and hasn't expired
- Verify it's set for the correct environment (production)

### "Failed to send email"
- Verify `CONTACT_TO_EMAIL` is a valid email address
- Verify `CONTACT_FROM_EMAIL` is a verified domain in Resend
- Check Resend dashboard for any rate limiting or issues

### Form shows error but doesn't send
- Check browser console for network errors
- Verify the API endpoint `/api/contact` is accessible
- Check Vercel function logs for backend errors

## Local Development

To test locally:

1. Update `.env.development.local` with your Resend API key:
   ```
   RESEND_API_KEY=re_your_key_here
   CONTACT_TO_EMAIL=your-email@example.com
   CONTACT_FROM_EMAIL=onboarding@resend.dev
   ```

2. Start the dev server:
   ```bash
   pnpm dev
   ```

3. Visit `http://localhost:3000/contact` and test the form

## Security Notes

- Never commit `.env.development.local` or real API keys to git
- Use Vercel's environment variables for production secrets
- The `/api/contact` endpoint validates all inputs
- Email addresses are sent as the reply-to address, not stored
- Contact messages are sent via Resend's secure servers

## Next Steps

1. Customize the email template in `/app/api/contact/route.ts`
2. Add email notifications for new contact submissions
3. Implement contact form rate limiting
4. Add CAPTCHA protection if needed
5. Set up email forwarding to multiple recipients

## Support

For issues with:
- **Vercel**: https://vercel.com/support
- **Resend**: https://resend.com/support
- **Application**: Check the GitHub repository issues
