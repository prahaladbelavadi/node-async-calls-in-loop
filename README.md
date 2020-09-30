# node-async-calls-in-loop


## Workflow

Should be able to make asynchronous function calls inside a for loop.
How ?

### Examples

- Load a csv file into memory and make api calls to a particular endpoint based on data from csv that's been imported to memory.

## Approach

- Run all the api requests in parallel
- Run all the api requests synchronously in parallel
- Batch requests into batches of ten to be fired in parallel and remaining in series

#### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
- https://www.freecodecamp.org/news/promise-all-in-javascript-with-example-6c8c5aea3e32/
- https://www.javascripttutorial.net/es6/javascript-promise-all/
- https://www.geeksforgeeks.org/javascript-promise-all-method/



##### Notes;
- To view requests made: https://hookbin.com/eKg6ZOwlNPteYYRdXjPm
- Endpoint to make requests at: https://hookb.in/eKg6ZOwlNPteYYRdXjPm