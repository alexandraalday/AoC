// notes from monk-time
'use strict';

{
    const input = document.body.textContent.trim().split('\n');
    const rows = input.map(r => r.split('\t').map(Number).sort((x, y) => x - y));
    
    const diff = r => r[r.length - 1] - r[0];
    const q = r => (([x, y]) => y / x)(r.filter(x => r.some(even(x))));
    const even = x => y => x !== y && (y % x === 0 || x % y === 0); //part 2

    console.log([diff, q].map(f => rows.reduce((sum, r) => sum + f(r), 0)));
}