'use strict';

const array = [1, 3, 4, 0, 205, -0, -10, -90, -1000, -400];

const superFunction = array => {
    const getMaxArrayValue = Math.max(...array);
    const getMinArrayValue = Math.min(...array);
    const getSumArrayValue = array.reduce((acc, curr) => acc + curr, 0);

    const newArray = array.map((value) => { // return new array
        if (value === getMaxArrayValue) {
            return getMinArrayValue
        } else if (value === getMinArrayValue) {
            return getMaxArrayValue
        }
        return value
    });

    return {
        getMaxArrayValue,
        getMinArrayValue,
        getSumArrayValue,
        newArray
    }
};

console.log(superFunction(array), '<=== task_1');