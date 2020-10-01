const request = require('request');
const fetch = require('node-fetch');

// Console: https://hookbin.com/eKg6ZOwlNPteYYRdXjPm
const rangeOf100 = [...Array(10).keys()];

//Scenario 1
console.log(rangeOf100);

//You can't async/await at the top-level
//Need to enclose all the code in an async function
//https://stackoverflow.com/questions/46515764/how-can-i-use-async-await-at-the-top-level
console.time("s");
let promiseList = [];
for (const number of rangeOf100) {
  const promisei = new Promise((resolve, reject) => {
    fetch('https://hookb.in/eKg6ZOwlNPteYYRdXjPm', {
      method: 'POST',
      body: number,
    })
      .then((res) => res.json())
      .then((json) => resolve(json));  //call Success callback, i.e, resolve
  });

  promiseList.push(promisei);
}

//This is an async call that resolves only
//after all promises in promiseList are resolved.
Promise.all(promiseList).then((result) => {
  console.log(result);
  console.timeEnd("s");
});

//Since Promise.all is async, this runs first..
console.log("This is called before the results are printed");

//---------------------------------------------------------------

//Scenario 2

//If you want the Promise.all to run first,
//as the link above suggests : Uncomment the below code
(async () => {
    try {
      console.time("p");
      let promiseList = [];
      for (const number of rangeOf100) {
        const promisei = new Promise((resolve, reject) => {
          fetch('https://hookb.in/eKg6ZOwlNPteYYRdXjPm', {
            method: 'POST',
            body: number,
          })
            .then((res) => res.json())
            .then((json) => resolve(json));
        });

        promiseList.push(promisei);
      }

      //Promises.all can be blocked here by using await
      await Promise.all(promiseList).then((result) => {
        console.log(result);
        console.timeEnd("p");
      });

      //Since Promise.all is blocking in this case, this runs last..
      console.log("This is called after the results are printed");
    } catch (e) {}
})();
