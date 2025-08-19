const fs = require('fs');
const path = require('path');

// Files to remove for deployment
const filesToRemove = [
  'vite.config.ts',
  'bun.lockb',
  'components.json',
  'eslint.config.js',
  'tsconfig.node.json',
  'tsconfig.server.json',
  'server.ts',
  'postcss.config.js',
  'tailwind.config.ts',
  'index.html' // This should be in src/, not root
];

// Directories to remove
const dirsToRemove = [
  '.vite'
];

console.log('🧹 Cleaning up unnecessary files for deployment...');

// Remove files
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

// Remove directories
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

console.log('✅ Cleanup completed!');
