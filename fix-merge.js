const fs = require('fs');

const file = 'web-app/dashboard.html';
let content = fs.readFileSync(file, 'utf8');
const lines = content.split('\n');
const result = [];
let inConflict = false;
let keepSection = null; // null = not in conflict, 'head' = HEAD section, 'incoming' = incoming section

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.replace(/\r$/, '');
  
  if (trimmed.startsWith('<<<<<<< HEAD')) {
    inConflict = true;
    keepSection = 'head'; // we're in HEAD section, skip it
    continue;
  }
  
  if (trimmed === '=======' && inConflict) {
    keepSection = 'incoming'; // now we're in incoming section, keep it
    continue;
  }
  
  if (trimmed.startsWith('>>>>>>>') && inConflict) {
    inConflict = false;
    keepSection = null;
    continue;
  }
  
  if (inConflict && keepSection === 'head') {
    // Skip HEAD section lines
    continue;
  }
  
  // Keep incoming section lines and non-conflict lines
  result.push(line);
}

fs.writeFileSync(file, result.join('\n'));
console.log('Merge conflicts resolved. Kept incoming (ceca334) version.');
console.log(`Original lines: ${lines.length}, Result lines: ${result.length}`);
