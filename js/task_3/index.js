'use strict';

const fooBarReplacePattern = (value) => {
    if ((value % 3 === 0) && (value % 7 === 0) ) {
        return 'foobar'
    } else if (value % 7 === 0) {
        return 'bar'
    } else if (value % 3 === 0) {
        return 'foo'
    } else {
        return value
    }
};

const applyPattern = (pattern) => {
    return (...arg) => {
        return arg.map(pattern)
    };
};

const fooBarReplacer = applyPattern(fooBarReplacePattern);

console.log(fooBarReplacer(3, 5, 7, 21, 100, 0), '<=== task_3');


