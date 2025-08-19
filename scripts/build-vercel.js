const fs = require('fs');
const path = require('path');

// Get the Formspree form ID from environment variable
const formspreeFormId = process.env.FORMSPREE_FORM_ID || 'xgvzbogw';

// Path to the production environment file
const envProdPath = path.join(__dirname, '../src/environments/environment.prod.ts');

console.log(`🔧 Building with Formspree form ID: ${formspreeFormId}`);
console.log(`📁 Looking for environment file at: ${envProdPath}`);

// Check if the environment file exists
if (!fs.existsSync(envProdPath)) {
  console.error(`❌ Environment file not found: ${envProdPath}`);
  console.log('🔍 Checking if environments directory exists...');
  
  const envDir = path.dirname(envProdPath);
  if (fs.existsSync(envDir)) {
    console.log(`✅ Environments directory exists: ${envDir}`);
    const files = fs.readdirSync(envDir);
    console.log(`📄 Files in environments directory: ${files.join(', ')}`);
  } else {
    console.error(`❌ Environments directory not found: ${envDir}`);
  }
  
  // Create the environment file if it doesn't exist
  console.log('🛠️ Creating environment file...');
  const envContent = `// Production environment configuration
export const environment = {
  production: true,
  email: {
    formspree: {
      formId: '${formspreeFormId}',
      enabled: true
    }
  }
};`;

  try {
    // Ensure the directory exists
    const envDir = path.dirname(envProdPath);
    if (!fs.existsSync(envDir)) {
      fs.mkdirSync(envDir, { recursive: true });
    }
    
    fs.writeFileSync(envProdPath, envContent);
    console.log(`✅ Created environment file: ${envProdPath}`);
  } catch (error) {
    console.error(`❌ Error creating environment file: ${error.message}`);
    process.exit(1);
  }
} else {
  try {
    // Read the current content
    let content = fs.readFileSync(envProdPath, 'utf8');

    // Replace any form ID with the environment variable
    content = content.replace(
      /formId: ['"`][^'"`]*['"`]/,
      `formId: '${formspreeFormId}'`
    );

    // Write the updated content back
    fs.writeFileSync(envProdPath, content);

    console.log(`✅ Updated environment.prod.ts with Formspree form ID: ${formspreeFormId}`);
  } catch (error) {
    console.error(`❌ Error updating environment file: ${error.message}`);
    process.exit(1);
  }
}
