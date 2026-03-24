const fs = require('fs');

const files = [
  'web-app/index.html',
  'web-app/signup.html',
  'web-app/create-new-password.html',
  'web-app/forgot-password.html'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Change form actions
    content = content.replace(/<form action="\/"/g, '<form onsubmit="event.preventDefault();"');
    content = content.replace(/<form action="#"/g, '<form onsubmit="event.preventDefault();"');
    
    // Change simple password inputs
    content = content.replace(/type="password"/g, 'type="text" style="-webkit-text-security: disc;"');
    
    // Change Alpine.js password inputs
    content = content.replace(/:type="showPass \? 'text' : 'password'"/g, ':type="\'text\'" :style="!showPass ? \'-webkit-text-security: disc;\' : \'\'"');
    content = content.replace(/:type="showConfirmPass \? 'text' : 'password'"/g, ':type="\'text\'" :style="!showConfirmPass ? \'-webkit-text-security: disc;\' : \'\'"');
    
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
