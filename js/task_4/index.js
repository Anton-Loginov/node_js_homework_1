'use strict';

const test4 = (str1, str2) => {
    const firstLetter = str1.trim().toLowerCase();
    const secondLetter = str2.trim().toLowerCase();
    const arrayOfLetters = firstLetter.split('');
    const lettersSet = new Set();

    arrayOfLetters.forEach((letter) =>{ lettersSet.add(letter) });
    const countMatches = Array.from(lettersSet).reduce( (acc, letter) => {
        let countOfMatches = secondLetter.match(new RegExp(`${letter}`, 'g'));
        return acc + (countOfMatches ? countOfMatches.length : 0);
    }, 0);

    return (countMatches / secondLetter.length)*100
};

console.log(test4('Anton Loginov', 'Loginov Anton',  '<=== task_4'));
