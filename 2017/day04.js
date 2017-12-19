// notes from monk-time


const passphrases = document.body.textContent.trim().split('\n');
const removeRepeats = (w, _, ws) => ws.filter(v => v === w).length === 1;
const sortLetters = w => [...w].sort().join('');
const isValid = f => ph => ph.split(' ').map(f).every(removeRepeats);
const count = f => passphrases.filter(isValid(f)).length;

console.log([w => w, sortLetters].map(count));