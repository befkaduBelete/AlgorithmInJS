// const p ={};
// const label = 'KK';
// p[label].push({name:'kkkkkkkk',age:23})

// console.log(p)


const p = {};
const label = 'KK';

// Initialize p[label] as an array if it doesn't already exist
if (!p[label]) {
  p[label] = [];
}

// Push the object into the array
p[label].push({ name: 'kkkkkkkk', age: 23 });

console.log(p);