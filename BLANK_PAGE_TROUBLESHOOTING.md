# Blank Page Troubleshooting Guide

## 🚨 Issue: Blank Page After Successful Build

Your Angular application builds successfully but shows a blank page when deployed to Vercel.

## ✅ **SOLUTION FOUND: MIME Type Issue**

### **Root Cause**
Vercel was serving JavaScript files with incorrect MIME type (`text/html` instead of `application/javascript`), preventing Angular from bootstrapping.

### **Error Messages**
- `Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "text/html"`
- `Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')`

### **Fix Applied**
Updated `vercel.json` with proper routes for static assets:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist/portfolio-angular/browser",
        "buildCommand": "npm run build"
      }
    }
  ],
  "routes": [
    {
      "src": "/main-([a-zA-Z0-9]+)\\.js",
      "dest": "/main-$1.js",
      "headers": {
        "Content-Type": "application/javascript"
      }
    },
    {
      "src": "/polyfills-([a-zA-Z0-9]+)\\.js",
      "dest": "/polyfills-$1.js",
      "headers": {
        "Content-Type": "application/javascript"
      }
    },
    {
      "src": "/styles-([a-zA-Z0-9]+)\\.css",
      "dest": "/styles-$1.css",
      "headers": {
        "Content-Type": "text/css"
      }
    },
    {
      "src": "/main-([a-zA-Z0-9]+)\\.css",
      "dest": "/main-$1.css",
      "headers": {
        "Content-Type": "text/css"
      }
    },
    {
      "src": "/favicon\\.ico",
      "dest": "/favicon.ico",
      "headers": {
        "Content-Type": "image/x-icon"
      }
    },
    {
      "src": "/assets/(.*)",
      "dest": "/assets/$1"
    },
    {
      "src": "/images/(.*)",
      "dest": "/images/$1"
    },
    {
      "src": "/files/(.*)",
      "dest": "/files/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

## 🔍 Other Common Causes and Solutions

### 1. **JavaScript Errors Preventing Bootstrap**

**Symptoms**: Page loads but shows blank content
**Solution**: Check browser console for JavaScript errors

**Debug Steps**:
1. Open browser developer tools (F12)
2. Go to Console tab
3. Look for any red error messages
4. Check for any failed script loads

### 2. **Environment Variable Issues**

**Symptoms**: App fails silently due to missing environment variables
**Solution**: Ensure environment variables are set correctly

**Debug Steps**:
1. Check Vercel dashboard for environment variables
2. Verify `FORMSPREE_FORM_ID` is set
3. Check if environment files are being created correctly

### 3. **Component Import Issues**

**Symptoms**: App fails to load due to missing dependencies
**Solution**: Check component imports and dependencies

**Debug Steps**:
1. Verify all components are properly imported
2. Check for any missing dependencies
3. Ensure all services are properly configured

### 4. **Build Output Issues**

**Symptoms**: Files not being served correctly
**Solution**: Verify build output and file paths

**Debug Steps**:
1. Check if all build files exist
2. Verify file paths in index.html
3. Ensure assets are being served correctly

## 🛠️ Immediate Fixes to Try

### Fix 1: Add Error Boundary

Add error handling to catch and display any errors:

```typescript
// In main.ts
bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    console.log('✅ Angular application bootstrapped successfully');
  })
  .catch((err) => {
    console.error('❌ Error bootstrapping Angular application:', err);
    // Display error on page
    document.body.innerHTML = `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h1>Application Error</h1>
        <p>There was an error loading the application:</p>
        <pre>${err.message}</pre>
        <p>Please check the console for more details.</p>
      </div>
    `;
  });
```

### Fix 2: Simplify App Component

Temporarily simplify the app to isolate the issue:

```typescript
// In app.ts
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: '<h1>Hello World - App is working!</h1>'
})
export class AppComponent {
  ngOnInit() {
    console.log('🎯 AppComponent initialized');
  }
}
```

### Fix 3: Check Environment Variables

Ensure environment variables are working:

```typescript
// In email.config.ts
console.log('🔧 Email config loaded:', EMAIL_CONFIG);
```

## 🔧 Debugging Steps

### Step 1: Check Browser Console
1. Open your deployed site
2. Press F12 to open developer tools
3. Go to Console tab
4. Look for any error messages
5. Check for any failed network requests

### Step 2: Test Build Locally
1. Run `npm run build`
2. Serve the build output locally
3. Check if it works locally

### Step 3: Verify Environment Variables
1. Check Vercel dashboard
2. Ensure `FORMSPREE_FORM_ID` is set
3. Redeploy after setting variables

### Step 4: Check Network Tab
1. Open developer tools
2. Go to Network tab
3. Reload the page
4. Look for any failed requests

## 📋 Debugging Checklist

- [ ] Browser console shows no errors
- [ ] All JavaScript files load successfully
- [ ] Environment variables are set correctly
- [ ] Build output files exist and are accessible
- [ ] No network errors in developer tools
- [ ] App component initializes without errors
- [ ] All dependencies are properly imported
- [ ] Static assets served with correct MIME types

## 🚀 Quick Test Commands

### Test Build Locally
```bash
npm run build
npx http-server dist/portfolio-angular/browser
```

### Validate Environment
```bash
node scripts/build-vercel.js
node scripts/debug-build.js
```

### Check JSON Files
```bash
node -e "console.log('vercel.json valid:', JSON.parse(require('fs').readFileSync('vercel.json', 'utf8')))"
```

## 📞 Next Steps

If the issue persists:

1. **Check Vercel Build Logs**: Look for any warnings or errors
2. **Test with Simplified App**: Remove complex components temporarily
3. **Verify Environment Variables**: Ensure all required variables are set
4. **Check Dependencies**: Ensure all packages are compatible
5. **Review Console Output**: Look for any error messages

## 🎯 Most Likely Solutions

1. **MIME Type Issues**: Ensure static assets are served with correct Content-Type headers
2. **Environment Variables**: Set `FORMSPREE_FORM_ID` in Vercel dashboard
3. **JavaScript Errors**: Check browser console for errors
4. **Component Issues**: Simplify app to isolate problematic components
5. **Build Configuration**: Verify Vercel configuration is correct

## 📝 Debug Output

Add this to your main.ts to get detailed debugging information:

```typescript
console.log('🚀 Starting Angular application...');
console.log('🔧 Environment:', environment);
console.log('📦 App config:', appConfig);
```

This will help identify where the app is failing during bootstrap.
