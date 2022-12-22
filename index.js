//function ovozberuvchilar (arr) {
// const natija = arr.reduce((object, objectqiymati) => {
//   return objectqiymati.voted ? object + 1 : object
//  }, 0)
// return natija
// }
// var nomzodlar = [
//  {name: 'bob', age: 30, voted: true},
//  {name: 'jake', age: 32, voted: true},
//   {name: 'kate', age: 25, voted:false},
// {name: 'sam', age: 20, voted: false},
//  {name: 'phil', age: 21, voted: true}
// ]

// console.log(ovozberuvchilar(nomzodlar))

// Birinchi masala berilgan arrdan berilgan sondan kattalarini chiqarish!

function func(arr, max) {
  let arr2 = [];
  arr.forEach((elem) => {
    if (elem > max) {
      return arr2.push(elem);
    }
  });
  console.log(arr2);
}
//func([3, 7, 5, 6],5)

// 2. Berilgan massivning faqat juft sonlardan iborat elementlaridan tashkil topgan
//    yangi massiv qaytaradigan funksiya yozing

function func2(mas) {
  let massiv2 = [];
  mas.forEach((elem) => {
    if (elem % 2 == 0) {
      return massiv2.push(elem);
    }
  });
  console.log(massiv2);
}

// func2([4, 6, 7, 10])

// 3. berilgan massivning uzunligi 5dan kichik bo'lgan elementini qaytaruvchi funksiya

function func3(mas2) {
  let yangimassiv = [];
  mas2.forEach((elem) => {
    if (elem.length <= 5) {
      return yangimassiv.push(elem);
    }
  });
  console.log(yangimassiv);
}

// func3(["dog", "wolf", "by", "family", "eaten", "camping"])

// 4. Berilgan massivdan clubga tegishli bo'lmagan odamlardan tashqari odamlarni qaytaradigan funksiya yozing

let person = [
  { name: "Angelina Jolie", member: true },
  { name: "Eric Jones", member: false },
  { name: "Paris Hilton", member: true },
  { name: "Kayne West", member: false },
  { name: "Bob Ziroll", member: true },
];
const filtered = person.filter((elem) => elem.member == true);
// console.log(filtered)

// 5. 18 yoshdan kattalarni qaytaruvchi funksiya yozing.

let yosh = [
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 },
];
const natija = yosh.filter((elem) => elem.age > 18);
// console.log(natija)

// 6. Berilgan massivni yoshi bo'yicha tartiblang.

let ofAge = [
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 },
];

ofAge.sort((a, b) => a.age - b.age);
// console.log(ofAge)

// 7.
// Berilgan o'yinchilar ro'yhatidan lavozimi WR bo'lganlarini qaytaring (Lavozim: position)

let players = [
  { name: "Wes", position: "WR" },
  { name: "Coty", position: "QB" },
  { name: "Joe", position: "WR" },
  { name: "Sam", position: "QB" },
  { name: "Jack", position: "WR" },
];

const result = players.filter((elem) => elem.position == "WR")
// console.log(result)


// 8. Berilgan o'quvchilar ro'yhati massivni guruh bo'yicha bo'lib bering.

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
   
  
function func5 (arr) {
  let nt79 = [];
  let nt77 = [];
  let nt70 = [];

arr.forEach((elem) => {
    if(elem.group === "NT-79") {
        nt79.push(elem)
    }
    if(elem.group === "NT-77") {
        nt77.push(elem)
    }
    else if (elem.group === "NT-70"){
        nt70.push(elem)
    }


});
console.log("NT-79-guruhi");
console.log(nt79)
console.log("NT-77-guruhi")
console.log(nt77)
console.log("NT-70-guruhi");
console.log(nt70);
}
func5(students)  