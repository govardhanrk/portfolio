const fs = require('fs');
const path = require('path');

// Get the Formspree form ID from environment variable
const formspreeFormId = process.env.FORMSPREE_FORM_ID || 'xgvzbogw';

// Path to the production environment file
const envProdPath = path.join(__dirname, '../src/environments/environment.prod.ts');

// Read the current content
let content = fs.readFileSync(envProdPath, 'utf8');

// Replace the placeholder with the actual form ID
content = content.replace(
  /formId: 'FORMSPREE_FORM_ID_PLACEHOLDER'/,
  `formId: '${formspreeFormId}'`
);

// Write the updated content back
fs.writeFileSync(envProdPath, content);

console.log(`✅ Updated environment.prod.ts with Formspree form ID: ${formspreeFormId}`);
