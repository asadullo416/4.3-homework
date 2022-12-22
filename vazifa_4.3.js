// 1. Berilgan sonlar massividan berilgan sondan kattalarini qaytaruvchi funksiya yozing.
function fiveAndGreaterOnly(arr, min) {
    // your code here
}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2], 5)); /// [6, 8]

// 2. Berilgan massivning faqat juft sonlardan iborat elementlaridan tashkil topgan
//  yangi massiv qaytaradigan funksiya yozing

function evensOnly(arr) {
    // your code here
}
// test
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

// 3. Stringlar massivi berilgan. Faqat uzunligi 5 dan kichik bo'lgan elementlaridan tashkil topgan
//  massiv qaytaradigan funksiya yozing

function fiveCharactersOrFewerOnly(arr) {
    // your code here
}
// test
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

// 4. Berilgan massivdan clubga tegishli bo'lmagan odamlardan tashqari odamlarni qaytaradigan funksiya yozing
function peopleWhoBelongToTheIlluminati(arr) {
    // your code here
}
// test
console.log(
    peopleWhoBelongToTheIlluminati([
        { name: "Angelina Jolie", member: true },
        { name: "Eric Jones", member: false },
        { name: "Paris Hilton", member: true },
        { name: "Kayne West", member: false },
        { name: "Bob Ziroll", member: true },
    ])
);
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]

// 5. 18 yoshdan kattalarni qaytaruvchi funksiya yozing.

function ofAge(arr) {
    // your code here
}
// test
console.log(
    ofAge([
        { name: "Angelina Jolie", age: 80 },
        { name: "Eric Jones", age: 2 },
        { name: "Paris Hilton", age: 5 },
        { name: "Kayne West", age: 16 },
        { name: "Bob Ziroll", age: 100 },
    ])
);
// =>
//[ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]

// 6. Berilgan massivni yoshi bo'yicha tartiblang.
function ofAge(arr) {
    // your code here
}
// test
console.log(
    ofAge([
        { name: "Angelina Jolie", age: 80 },
        { name: "Eric Jones", age: 2 },
        { name: "Paris Hilton", age: 5 },
        { name: "Kayne West", age: 16 },
        { name: "Bob Ziroll", age: 100 },
    ])
);

// 7. let players = [{name: 'Wes', position: 'WR'}, {name: 'Coty', position: 'QB'}, {name: 'Joe', position: 'WR'}];
// Berilgan o'yinchilar ro'yhatidan lavozimi WR bo'lganlarini qaytaring (Lavozim: position)

// 8. Berilgan o'quvchilar ro'yhati massivni guruh bo'yicha bo'lib bering.

function studentsByGroup(arr) {
    // sizning kodingiz
}

// test
const students = [
    { name: "Bob", group: "NT-79", voted: true },
    { name: "Jake", group: "NT-77", voted: true },
    { name: "Kate", group: "NT-70", voted: false },
    { name: "Sam", group: "NT-77", voted: false },
    { name: "Phil", group: "NT-70", voted: true },
    { name: "Ed", group: "NT-79", voted: true },
    { name: "Tami", group: "NT-77", voted: true },
    { name: "Mary", group: "NT-70", voted: false },
    { name: "Becky", group: "NT-79", voted: false },
    { name: "Joey", group: "NT-70", voted: true },
    { name: "Jeff", group: "NT-79", voted: true },
    { name: "Zack", group: "NT-79", voted: false },
];

studentsByGroup(students);
// Natija:
// {
//     "NT-79": [
//         { name: "Bob", group: "NT-79", voted: true },
//         { name: "Ed", group: "NT-79", voted: true },
//         { name: "Becky", group: "NT-79", voted: false },
//         { name: "Jeff", group: "NT-79", voted: true },
//         { name: "Zack", group: "NT-79", voted: false },
//     ],
//     "NT-70": [
//         { name: "Kate", group: "NT-70", voted: false },
//         { name: "Mary", group: "NT-70", voted: false },
//         { name: "Joey", group: "NT-70", voted: true },
//     ],
//     "NT-77": [
//         { name: "Jake", group: "NT-77", voted: true },
//         { name: "Sam", group: "NT-77", voted: false },
//         { name: "Tami", group: "NT-77", voted: true },
//     ]
// }


// https://coursework.vschool.io/array-filter-exercises/
// https://gist.github.com/LeWestopher/30d7ea0e212c5d140800a6575b5aad98
