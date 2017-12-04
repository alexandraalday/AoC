'use strict';

{
    const input = [...document.body.textContent.trim()].map(Number);
    
    const matchSum = shift => input
        .filter((num, index, arr) => num === arr[shift(index, arr.length) % arr.length])
        .reduce((sum, num) => sum + num, 0);
    
    console.log([i => i + 1, (i, len) => i + len / 2].map(matchSum));
}