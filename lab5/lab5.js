'use strict';

// 1. Function Declaration: max()
function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// 2. Function Expression: maxOfThree()
function maxOfThree(num1, num2, num3) {
    return Math.max(num1, num2, num3);
};

// 3. Function Declaration: isVowel()
function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

// 4. Function Declaration: sum()
function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// 4. Function Declaration: multiply()
function multiply(numbers) {
    let result = 1;
    for (let i = 0; i < numbers.length; i++) {
        result *= numbers[i];
    }
    return result;
}

// 5. Function Declaration: reverse()
function reverse(string) {
    let result = "";
    for (let i = string.length-1; i > -1; i--) {
        result += string[i];
    }
    return result;
}

// 6. Function Expression: findLongestWordLength()
const findLongestWordLength = function(words) {
    let max_len = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > max_len) {
            max_len = words[i].length;
        }
    }
    return max_len;
};

// 7. Arrow Function: filterLongWords()
const filterLongWords = (words, i) => words.filter(word => word.length > i);

// Test cases
console.log(max(2, 1)); // Output: 2
console.log(maxOfThree(1, 2, 3)); // Output: 3
console.log(isVowel('a')); // Output: true
console.log(sum([1, 2, 3, 4])); // Output: 10
console.log(multiply([1, 2, 3, 4])); // Output: 24
console.log(reverse('jag testar')); // Output: "ratset gaj"
console.log(findLongestWordLength(['apple', 'banana', 'cucumber'])); // Output: 8
console.log(filterLongWords(['apple', 'banana', 'cucumber'], 5)); // Output: ["banana", "cucumber"]
