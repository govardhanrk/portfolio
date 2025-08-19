const fs = require('fs');
const path = require('path');

// Files to remove for deployment (only non-Angular files)
const filesToRemove = [
  'vite.config.ts',
  'bun.lockb',
  'components.json',
  'eslint.config.js',
  'tsconfig.node.json',
  'tsconfig.server.json',
  'server.ts',
  'postcss.config.js',
  'tailwind.config.ts'
];

// Directories to remove
const dirsToRemove = [
  '.vite'
];

// React/Vite files in src directory to remove
const srcFilesToRemove = [
  'src/vite-env.d.ts',
  'src/index.css',
  'src/main.tsx',
  'src/App.css',
  'src/App.tsx'
];

// React/Vite directories in src to remove (these are React components, not Angular)
const srcDirsToRemove = [
  'src/hooks',
  'src/lib',
  'src/api',
  'src/pages',
  'src/components' // This contains React components, Angular components are in src/app/components
];

console.log('🧹 Cleaning up unnecessary files for deployment...');

// Remove root files
filesToRemove.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`✅ Removed: ${file}`);
    } catch (error) {
      console.log(`⚠️  Could not remove ${file}: ${error.message}`);
    }
  }
});

// Remove root directories
dirsToRemove.forEach(dir => {
  const dirPath = path.join(__dirname, '..', dir);
  if (fs.existsSync(dirPath)) {
    try {
      fs.rmSync(dirPath, { recursive: true, force: true });
      console.log(`✅ Removed directory: ${dir}`);
    } catch (error) {
      console.log(`⚠️  Could not remove directory ${dir}: ${error.message}`);
    }
  }
});

// Remove src files
srcFilesToRemove.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`✅ Removed src file: ${file}`);
    } catch (error) {
      console.log(`⚠️  Could not remove ${file}: ${error.message}`);
    }
  }
});

// Remove src directories
srcDirsToRemove.forEach(dir => {
  const dirPath = path.join(__dirname, '..', dir);
  if (fs.existsSync(dirPath)) {
    try {
      fs.rmSync(dirPath, { recursive: true, force: true });
      console.log(`✅ Removed src directory: ${dir}`);
    } catch (error) {
      console.log(`⚠️  Could not remove directory ${dir}: ${error.message}`);
    }
  }
});

console.log('✅ Cleanup completed!');
