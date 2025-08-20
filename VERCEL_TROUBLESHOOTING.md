# Vercel Deployment Troubleshooting Guide

## 🚨 Common Issues and Solutions

### 1. JSON Parsing Error: "Could not parse File as JSON: vercel.json"

**Error**: `Could not parse File as JSON: vercel.json`

**Solution**: 
- ✅ Recreated vercel.json with clean JSON syntax
- ✅ Validated JSON structure using Node.js
- ✅ Used standard routes format for compatibility
- ✅ Ensured proper file encoding

**Current Configuration**:
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
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### 2. Platform-Specific Dependency Errors

**Error**: `Unsupported platform for @rollup/rollup-win32-x64-msvc`

**Solution**: 
- ✅ Moved Windows-specific dependencies to `optionalDependencies`
- ✅ Added `.npmrc` configuration to skip optional dependencies
- ✅ Updated build process to handle platform differences

### 3. Build Command Issues

**Error**: `Command "npm install" exited with 1`

**Solutions**:
1. **Check package.json**: Ensure no platform-specific dependencies in main dependencies
2. **Use .npmrc**: Configure npm to skip optional dependencies
3. **Clean build**: Remove unnecessary files before build

### 4. File Structure Issues

**Problem**: Mixed project files from different frameworks

**Solution**:
- ✅ Added cleanup script to remove Vite/React files
- ✅ Updated .gitignore to exclude unnecessary files
- ✅ Ensured only Angular-specific files are included

### 5. Environment File Issues

**Error**: `Cannot find module '../../environments/environment'`

**Solution**:
- ✅ Enhanced build script to create both environment files
- ✅ Fixed import path issues
- ✅ Added automatic environment file creation

### 6. 404 Routing Errors

**Error**: 404 errors on deployed site

**Solution**:
- ✅ Updated build output directory to `dist/portfolio-angular/browser`
- ✅ Configured proper client-side routing
- ✅ Used correct Vercel routing configuration

## 🔧 Configuration Files

### .npmrc
```ini
# Skip optional dependencies during installation
optional=false

# Platform configuration for deployment
platform=linux
arch=x64

# Additional npm configuration
audit=false
fund=false
```

### package.json
```json
{
  "optionalDependencies": {
    "@rollup/rollup-win32-x64-msvc": "^4.46.2"
  }
}
```

### vercel.json
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
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

## 🛠️ Build Process

### Development
```bash
npm start
```

### Production Build
```bash
npm run build
```

### Vercel Build
```bash
npm run build
# 1. Replaces environment variables
# 2. Builds production version
```

## 🔍 Debugging Steps

### 1. Check Build Logs
- Look for JSON parsing errors
- Verify environment variables are set
- Check for missing dependencies

### 2. Test Locally
```bash
# Test the build process locally
npm run build

# Validate JSON files
node -e "console.log('JSON is valid:', JSON.parse(require('fs').readFileSync('vercel.json', 'utf8')))"
```

### 3. Verify Environment Variables
- Ensure `FORMSPREE_FORM_ID` is set in Vercel environment variables
- Check that environment variable is available during build

### 4. Check File Structure
- Ensure only Angular files are present
- Remove any Vite/React configuration files
- Verify Angular configuration is correct

## 🚀 Deployment Checklist

- [ ] JSON files are valid and properly formatted
- [ ] Platform-specific dependencies moved to optionalDependencies
- [ ] .npmrc configured for Linux deployment
- [ ] Cleanup script removes unnecessary files
- [ ] Environment variables set in Vercel dashboard
- [ ] Build script handles environment variable replacement
- [ ] Angular configuration is correct
- [ ] No mixed framework files
- [ ] Build output directory is correct

## 📞 Support

If you still encounter issues:

1. **Check Vercel Build Logs**: Look for specific error messages
2. **Verify Dependencies**: Ensure no Windows-specific packages in main dependencies
3. **Test Locally**: Run the build process locally to identify issues
4. **Check Environment**: Verify all environment variables are set correctly

## 🎯 Quick Fixes

### For JSON Errors:
```bash
# Validate JSON files
node -e "JSON.parse(require('fs').readFileSync('vercel.json', 'utf8')); console.log('JSON is valid')"
```

### For Platform Errors:
```bash
# Remove platform-specific dependencies
npm uninstall @rollup/rollup-win32-x64-msvc

# Reinstall without optional dependencies
npm install --omit=optional
```

### For Build Errors:
```bash
# Clean and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### For Environment Issues:
1. Set environment variables in Vercel dashboard
2. Redeploy the project
3. Check build logs for environment variable errors
