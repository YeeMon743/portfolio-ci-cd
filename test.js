// Minimal assertions without any library
function assert(cond, msg) { if (!cond) throw new Error(msg); }

const fs = require('fs');

// 1) Ensure required files exist
['index.html', 'style.css', 'script.js'].forEach(f => {
  assert(fs.existsSync(f), `Missing required file: ${f}`);
});

// 2) Basic content checks
const html = fs.readFileSync('index.html', 'utf8');
assert(/<h1[^>]*>/.test(html), 'index.html should contain an <h1> heading');
assert(/<section[^>]*id=["']projects["']/.test(html), 'index.html should contain a #projects section');

const css = fs.readFileSync('style.css', 'utf8');
assert(/body\s*\{/.test(css), 'style.css should style the body');

console.log('✅ All simple tests passed.');
