const fs = require('fs');
const path = require('path');

// Get the Formspree form ID from environment variable
const formspreeFormId = process.env.FORMSPREE_FORM_ID || 'xgvzbogw';

// Path to the production environment file
const envProdPath = path.join(__dirname, '../src/environments/environment.prod.ts');

console.log(`🔧 Building with Formspree form ID: ${formspreeFormId}`);

// Check if the environment file exists
if (!fs.existsSync(envProdPath)) {
  console.error(`❌ Environment file not found: ${envProdPath}`);
  process.exit(1);
}

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
