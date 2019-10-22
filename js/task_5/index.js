'use strict';

const calculator = function(initValue = 0) {
    let acc = initValue;
    const getResult = () => acc;

    function reInit(value) {
        acc = value;
        return this
    }

    function addOperation(value) {
        acc += value;
        return this
    }

    function minusOperation(value) {
        acc -= value; return this
    }

    function multipleOperation(value) {
        acc *= value; return this
    }

    function divisionOperation(value) {
        acc /= value; return this
    }

    return {
        reInit: reInit,
        add: addOperation,
        minus: minusOperation,
        multiple: multipleOperation,
        division: divisionOperation,
        getResult: getResult
    }
};

let concreteCalculator = calculator(0);

console.log(concreteCalculator, '<=== task_5');