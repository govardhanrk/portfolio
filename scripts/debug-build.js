const fs = require('fs');
const path = require('path');

console.log('🔍 Debugging build output...');

// Check if build output exists
const buildPath = path.join(__dirname, '../dist/portfolio-angular/browser');
if (!fs.existsSync(buildPath)) {
  console.error('❌ Build output directory does not exist:', buildPath);
  process.exit(1);
}

// List all files in build output
console.log('📁 Build output files:');
const files = fs.readdirSync(buildPath);
files.forEach(file => {
  const filePath = path.join(buildPath, file);
  const stats = fs.statSync(filePath);
  console.log(`  ${file} (${stats.size} bytes)`);
});

// Check if index.html exists and is readable
const indexPath = path.join(buildPath, 'index.html');
if (fs.existsSync(indexPath)) {
  console.log('✅ index.html exists');
  const content = fs.readFileSync(indexPath, 'utf8');
  console.log('📄 index.html size:', content.length, 'characters');
  
  // Check for app-root tag
  if (content.includes('<app-root>')) {
    console.log('✅ app-root tag found in index.html');
  } else {
    console.error('❌ app-root tag missing from index.html');
  }
  
  // Check for script tags
  const scriptMatches = content.match(/<script[^>]*src="([^"]*)"[^>]*>/g);
  if (scriptMatches) {
    console.log('📜 Script tags found:', scriptMatches.length);
    scriptMatches.forEach(script => {
      console.log('  ', script);
    });
  }
} else {
  console.error('❌ index.html does not exist');
}

// Check environment files
const envDevPath = path.join(__dirname, '../src/environments/environment.ts');
const envProdPath = path.join(__dirname, '../src/environments/environment.prod.ts');

console.log('\n🔧 Environment files:');
if (fs.existsSync(envDevPath)) {
  const devContent = fs.readFileSync(envDevPath, 'utf8');
  console.log('✅ environment.ts exists');
  console.log('  Production flag:', devContent.includes('production: true') ? 'true' : 'false');
} else {
  console.error('❌ environment.ts missing');
}

if (fs.existsSync(envProdPath)) {
  const prodContent = fs.readFileSync(envProdPath, 'utf8');
  console.log('✅ environment.prod.ts exists');
  console.log('  Production flag:', prodContent.includes('production: true') ? 'true' : 'false');
} else {
  console.error('❌ environment.prod.ts missing');
}

console.log('\n✅ Debug check completed');
