const fs = require('fs');
const path = require('path');

// Get the Formspree form ID from environment variable
const formspreeFormId = process.env.FORMSPREE_FORM_ID || 'xgvzbogw';

// Paths to the environment files
const envProdPath = path.join(__dirname, '../src/environments/environment.prod.ts');
const envDevPath = path.join(__dirname, '../src/environments/environment.ts');

console.log(`🔧 Building with Formspree form ID: ${formspreeFormId}`);
console.log(`📁 Looking for environment files...`);

// Function to create environment file content
function createEnvironmentContent(formId, isProduction = false) {
  return `// Environment configuration
export const environment = {
  production: ${isProduction},
  email: {
    formspree: {
      formId: '${formId}',
      enabled: true
    }
  }
};`;
}

// Function to ensure environment file exists
function ensureEnvironmentFile(filePath, formId, isProduction = false) {
  console.log(`📁 Looking for environment file at: ${filePath}`);
  
  const envDir = path.dirname(filePath);
  
  // Ensure the directory exists
  if (!fs.existsSync(envDir)) {
    console.log(`🛠️ Creating environments directory: ${envDir}`);
    fs.mkdirSync(envDir, { recursive: true });
  }
  
  if (!fs.existsSync(filePath)) {
    console.log(`🛠️ Creating environment file: ${filePath}`);
    const content = createEnvironmentContent(formId, isProduction);
    fs.writeFileSync(filePath, content);
    console.log(`✅ Created environment file: ${filePath}`);
  } else {
    console.log(`📝 Updating existing environment file: ${filePath}`);
    const content = createEnvironmentContent(formId, isProduction);
    fs.writeFileSync(filePath, content);
    console.log(`✅ Updated environment file: ${filePath}`);
  }
}

try {
  // Create/update both environment files
  ensureEnvironmentFile(envDevPath, 'xgvzbogw', false); // Development environment
  ensureEnvironmentFile(envProdPath, formspreeFormId, true); // Production environment
  
  console.log(`✅ Environment files configured successfully!`);
} catch (error) {
  console.error(`❌ Error configuring environment files: ${error.message}`);
  process.exit(1);
}
