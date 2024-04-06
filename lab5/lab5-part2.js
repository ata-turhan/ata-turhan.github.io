'use strict';

// Function named computeSumOfSquares
const computeSumOfSquares = numbers => numbers.reduce((sum, num) => sum + num ** 2, 0);

// Function named printOddNumbersOnly
const printOddNumbersOnly = numbers => {
    numbers.forEach(num => {
    if (num % 2 !== 0) {
        console.log(num);
    }
    });
};

// Function named printFibo
const printFibo = (n, a, b) => {
    if (n == 1)
        console.log(a);
    else {
        let fiboSequence = [a, b];
        while (fiboSequence.length < n) {
        const nextFibo = fiboSequence[fiboSequence.length - 1] + fiboSequence[fiboSequence.length - 2];
        fiboSequence.push(nextFibo);
        }
        console.log(fiboSequence.join(', '));
    }
};

// Testing the functions
console.log(computeSumOfSquares([1, 2, 3])); // Output: 14
printOddNumbersOnly([1, 2, 3]); // Output: 1, 3
printFibo(1, 0, 1); // Output: 0
printFibo(2, 0, 1); // Output: 0, 1
printFibo(3, 0, 1); // Output: 0, 1, 1
printFibo(6, 0, 1); // Output: 0, 1, 1, 2, 3, 5
printFibo(10, 0, 1); // Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

let user = {
    name: "John",
    years: 30
    };

let { name, years: age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
    { title: "Steve Jobs", author: "Walter Isaacson", libraryID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
    ];


function addBook(title, author, libraryID) {
    let newBook = { title, author, libraryID };
    libraryBooks.push(newBook);
    return newBook;
}

function getTitles() {
    return libraryBooks.map(book => book.title).sort();
}

function findBooks(keyword) {
    let filteredBooks = libraryBooks.filter(book => book.title.includes(keyword));
    return filteredBooks.sort((a, b) => a.author.localeCompare(b.author));
}


  console.log(addBook("The Brave New World", "Aldous Huxley", 2023)); 
  console.log(getTitles());
  console.log(findBooks("The"));
  
