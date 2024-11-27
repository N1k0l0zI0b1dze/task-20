// 1) დაწერე კოდი, რომელიც while ლუპის საშუალებით ეკრანზე გამოიტანს რიცხვებს 
// 1-დან 5-მდე.

let num = 5, cnt = 1;

while(num--){
    console.log(cnt);
    cnt++;
}


// 2) დაწერე კოდი, რომელიც მომხმარებელს ეკითხება პაროლს (მოითხოვე prompt-ის გამოყენებით) 
// და გამოდის LOOP _იდან მხოლოდ იმ შემთხვევაში, 
// თუ მომხმარებელი სწორ პაროლს შეიყვანს. სწორ პაროლად ჩათვალე "1234".


// const correctPassword = "1234";
// let userInput;

// while (true) {
//     userInput = prompt("Enter the password:");

//     if (userInput === correctPassword) {
//         alert("Access granted!");
//         break;
//     } else {
//         alert("Incorrect password. Try again.");
//     }
// }





// 2️⃣ for Loop დავალებები

//  1) შექმენი მასივი (მაგალითად: ["apple", "banana", "cherry"]).
// დაწერე კოდი, რომელიც for ლუპის საშუალებით კონსოლში გამოიტანს მასივის თითოეულ ელემენტს.
// შედეგი უნდა იყოს შემდეგი:
// apple
// banana
// cherry


const arr = ['apple', 'banana', 'cherry'];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}


// 2) შექმენი კოდი, რომელიც for ლუპით 1-დან 10-მდე 
// რიცხვებს დააჯამებს და ამ ჯამს ეკრანზე გამოიტანს.

// საბოლოო შედეგი უნდა იყოს:
// " The sum is: 55 "


let sumOfNums = 0;
for(let i = 1; i <= 10; i++){
    sumOfNums += i;
}

console.log(sumOfNums);
