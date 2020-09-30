const request = require('request');
const fetch = require('node-fetch');

// Console: https://hookbin.com/eKg6ZOwlNPteYYRdXjPm
const rangeOf100 = [...Array(10).keys()];

console.log(rangeOf100);

for (const number of rangeOf100) {
  fetch('https://hookb.in/eKg6ZOwlNPteYYRdXjPm', {
    method: 'POST',
    body: number,
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
}
