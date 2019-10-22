'use strict';

const counter = (value) => {
    let count = value;
    return () => count++
};

let callback = counter(0);

console.log(callback(), '<=== task_2');
console.log(callback(), '<=== task_2');
callback = counter(10);
console.log(callback(), '<=== task_2');
console.log(callback(), '<=== task_2');