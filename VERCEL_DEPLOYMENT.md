# Vercel Deployment Guide

This guide will help you deploy your Angular portfolio to Vercel with proper environment variable configuration.

## 🚀 Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Your code should be in a GitHub repository
3. **Formspree Account**: For contact form functionality

## 📋 Environment Variables Setup

### Step 1: Get Your Formspree Form ID

1. Go to [Formspree Dashboard](https://formspree.io/forms)
2. Find your form or create a new one
3. Copy the Form ID (e.g., `xgvzbogw`)

### Step 2: Set Environment Variables in Vercel

1. **Deploy to Vercel**:
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect it's an Angular project

2. **Add Environment Variable**:
   - In your Vercel dashboard, go to your project
   - Navigate to **Settings** → **Environment Variables**
   - Add the following variable:
     - **Name**: `FORMSPREE_FORM_ID`
     - **Value**: Your actual Formspree form ID (e.g., `xgvzbogw`)
     - **Environment**: Production, Preview, and Development

3. **Redeploy**:
   - After adding the environment variable, redeploy your project

## 🔧 Configuration Files

### Environment Files
- `src/environments/environment.ts` - Development configuration
- `src/environments/environment.prod.ts` - Production configuration (with placeholder)

### Build Scripts
- `scripts/build-vercel.js` - Custom build script for environment variable replacement
- `vercel.json` - Vercel deployment settings

### Build Process
1. **Development**: Uses hardcoded form ID for local development
2. **Production**: Build script replaces placeholder with actual environment variable
3. **Vercel**: Custom build command handles environment variable injection

## 🛡️ Security Features

✅ **Environment Variables**: All sensitive data is stored as environment variables
✅ **Git Ignore**: Environment files are excluded from git
✅ **Production Build**: Uses production configuration for deployment
✅ **No Hardcoded Secrets**: No API keys or form IDs in source code
✅ **Build-time Replacement**: Environment variables injected during build process

## 🔍 Verification Steps

### 1. Check Environment Variables
After deployment, verify that your environment variables are working:

1. Go to your deployed site
2. Open browser developer tools (F12)
3. Go to the Console tab
4. Submit the contact form
5. Check for success/error messages

### 2. Test Contact Form
1. Fill out the contact form on your deployed site
2. Submit the form
3. Check your email for the message
4. Verify the form ID is being used correctly

## 🚨 Troubleshooting

### Common Issues:

1. **"Formspree not configured" error**
   - Verify `FORMSPREE_FORM_ID` is set in Vercel environment variables
   - Redeploy after adding the environment variable
   - Check that the build script is running correctly

2. **Contact form not working**
   - Check browser console for errors
   - Verify Formspree form ID is correct
   - Ensure Formspree account is active

3. **Build errors**
   - Check that all dependencies are in `package.json`
   - Verify Angular configuration is correct
   - Ensure the build script has proper permissions

### Debug Mode
To debug environment variables:

1. Add this to your component temporarily:
```typescript
console.log('Form ID:', environment.email.formspree.formId);
```

2. Check the browser console to see if the environment variable is loaded

### Build Script Debugging
To debug the build script:

1. Check Vercel build logs for any errors
2. Verify the `scripts/build-vercel.js` file is being executed
3. Ensure the environment variable is available during build

## 📝 Deployment Checklist

- [ ] Formspree account created and form ID obtained
- [ ] Environment variable `FORMSPREE_FORM_ID` set in Vercel
- [ ] Project deployed to Vercel
- [ ] Contact form tested and working
- [ ] All pages loading correctly
- [ ] Environment files not committed to git
- [ ] Build script executing successfully

## 🔄 Updating Environment Variables

If you need to change your Formspree form ID:

1. Update the `FORMSPREE_FORM_ID` environment variable in Vercel
2. Redeploy your project
3. Test the contact form

## 📞 Support

If you encounter issues:

1. Check the browser console for error messages
2. Verify environment variables in Vercel dashboard
3. Check Vercel build logs for build script errors
4. Test with a simple form first
5. Verify the build script is working correctly

## 🎉 Success!

Once deployed, your portfolio will be:
- ✅ Secure (no hardcoded credentials)
- ✅ Scalable (environment-based configuration)
- ✅ Professional (production-ready build)
- ✅ Maintainable (proper separation of concerns)
- ✅ Build-time optimized (environment variables injected during build)
