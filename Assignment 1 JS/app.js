<<<<<<< HEAD
// ---------------- Task 01 -----------------------

// let per = 0.025;

// let userValue = +prompt("Enter your money :");
// let zakat = userValue * per;
// console.log(zakat);


// ------------------ Task 02 -------------------------

// let familyMembers = +prompt("Enter your total family members for calculating Fitrah :");
// let chooseFitrah = +prompt("What would you like to pay Fitrah either on '1-Wheat 2-Barley 3-Dates 4-Ajwa Dates 4-Kishmish' please select by entering numeric keys :");
// let fitrah;

// if (chooseFitrah === 1) {
//     fitrah = 320 * familyMembers;
//     console.log("Your fitrah is :"+fitrah);
// }
// else if (chooseFitrah === 2) {
//     fitrah = 800 * familyMembers;
//     console.log("Your fitrah is :"+fitrah);
// }
// else if (chooseFitrah === 3) {
//     fitrah = 2800 * familyMembers;
//     console.log("Your fitrah is :"+fitrah);
// }
// else if (chooseFitrah === 4) {
//     fitrah = 6400 * familyMembers;
//     console.log("Your fitrah is :"+fitrah);
// }
// else {
//     document.write("<h1>Please select the Fitrah distribution</h1>");
// }


// ------------------ Task 3 ----------------------------

// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let userGuess = +prompt("Guess the number between 1 and 10:");

// if (userGuess === secretNumber) {
//     document.write("<h1>Congratulations ! You guessed the secret number</h1>");
// }
// else if (userGuess > secretNumber) {
//     document.write("<h1>The guess is too high</h1>");
// }
// else if (userGuess < secretNumber) {
//     document.write("<h1>The guess is too low</h1>");
// }
// else {
//     document.write("<h1>Guess the number between 1 to 10</h1>");
// }


// ------------- Task 4 ----------------

// let userName = prompt("Enter your name :");
// let firstLetter = userName[0].toUpperCase();
// let remainingLetter = userName.slice(1,userName.length).toLowerCase();
// let finalResult = firstLetter + remainingLetter;
// document.write(finalResult);

// -------------- Task 5 --------------------

// let contactNames = [];
// let contactNumbers = [];

// let userName;
// let userNumber;

// for (let i=0; i<3; i++) {
//     userName = prompt("Enter your name :");
//     userNumber = +prompt("Enter your contact number :");
//     contactNames.push(userName);
//     contactNumbers.push(userNumber);
// }

// for (let i=0; i<3; i++) {
//     console.log("User Name :"+contactNames[i]);
//     console.log("User Contact :"+contactNumbers[i]);
// }

// -------------------- Task 6 -----------------------

// let products = ["Lays","Fanta","Pizza","Pepsi","Sprite","Sandwich","Chai","Red Bull","Super","Pakola"];
// console.log(products);
// let userInput = +prompt("Choose product by entering the position of the product:");

// let remove = products.splice(userInput,1);
// console.log("Your product :"+remove);
// console.log(products);
// console.log("The remaining products is "+products.length);


// -------------------- Task 07 --------------------------

// let nationality = prompt("Please enter your nationality").toLowerCase();
// let gender = prompt("Enter your gender").toLowerCase();
// let age = +prompt("Enter your age");

// if ((nationality === "pakistani" || nationality === "indian") && gender === "male" && age >=18){
//     console.log("You are eligible to vote.");
// }
// else if ((nationality === "pakistani" || nationality === "indian") && gender === "female" && age >=18){
//     let status = prompt("You are married?");
//     if(status === "yes"){
//         console.log("You are eligible to vote");
//     }
//     else {
//         console.log("You are not eligible to vote");
//     }
// }
// else {
//     console.log("You are not eligible to vote");
// }

// -------------------- Task 08 -------------------------

let worldCupSquad = ["Muhammad Rizwan","Babar Azam","Muhammad Haris","Fakhar Zaman","Saim Ayub","Iftikhar Ahmed","Immad Wasim","Haris Rauf","Shaheen Shah Afridi","Naseem Shah","Zaman Khan","Abdullah","Sarfaraz Ahmed","Ihsanullah","Shadab Khan"];

let finalSquad = worldCupSquad.slice(0,11);
=======
// ---------------- Task 01 -----------------------

// let per = 0.025;

// let userValue = +prompt("Enter your money :");
// let zakat = userValue * per;
// console.log(zakat);


// ------------------ Task 02 -------------------------

// let familyMembers = +prompt("Enter your total family members for calculating Fitrah :");
// let chooseFitrah = +prompt("What would you like to pay Fitrah either on '1-Wheat 2-Barley 3-Dates 4-Ajwa Dates 4-Kishmish' please select by entering numeric keys :");
// let fitrah;

// if (chooseFitrah === 1) {
//     fitrah = 320 * familyMembers;
//     console.log("Your fitrah is :"+fitrah);
// }
// else if (chooseFitrah === 2) {
//     fitrah = 800 * familyMembers;
//     console.log("Your fitrah is :"+fitrah);
// }
// else if (chooseFitrah === 3) {
//     fitrah = 2800 * familyMembers;
//     console.log("Your fitrah is :"+fitrah);
// }
// else if (chooseFitrah === 4) {
//     fitrah = 6400 * familyMembers;
//     console.log("Your fitrah is :"+fitrah);
// }
// else {
//     document.write("<h1>Please select the Fitrah distribution</h1>");
// }


// ------------------ Task 3 ----------------------------

// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let userGuess = +prompt("Guess the number between 1 and 10:");

// if (userGuess === secretNumber) {
//     document.write("<h1>Congratulations ! You guessed the secret number</h1>");
// }
// else if (userGuess > secretNumber) {
//     document.write("<h1>The guess is too high</h1>");
// }
// else if (userGuess < secretNumber) {
//     document.write("<h1>The guess is too low</h1>");
// }
// else {
//     document.write("<h1>Guess the number between 1 to 10</h1>");
// }


// ------------- Task 4 ----------------

// let userName = prompt("Enter your name :");
// let firstLetter = userName[0].toUpperCase();
// let remainingLetter = userName.slice(1,userName.length).toLowerCase();
// let finalResult = firstLetter + remainingLetter;
// document.write(finalResult);

// -------------- Task 5 --------------------

// let contactNames = [];
// let contactNumbers = [];

// let userName;
// let userNumber;

// for (let i=0; i<3; i++) {
//     userName = prompt("Enter your name :");
//     userNumber = +prompt("Enter your contact number :");
//     contactNames.push(userName);
//     contactNumbers.push(userNumber);
// }

// for (let i=0; i<3; i++) {
//     console.log("User Name :"+contactNames[i]);
//     console.log("User Contact :"+contactNumbers[i]);
// }

// -------------------- Task 6 -----------------------

// let products = ["Lays","Fanta","Pizza","Pepsi","Sprite","Sandwich","Chai","Red Bull","Super","Pakola"];
// console.log(products);
// let userInput = +prompt("Choose product by entering the position of the product:");

// let remove = products.splice(userInput,1);
// console.log("Your product :"+remove);
// console.log(products);
// console.log("The remaining products is "+products.length);


// -------------------- Task 07 --------------------------

// let nationality = prompt("Please enter your nationality").toLowerCase();
// let gender = prompt("Enter your gender").toLowerCase();
// let age = +prompt("Enter your age");

// if ((nationality === "pakistani" || nationality === "indian") && gender === "male" && age >=18){
//     console.log("You are eligible to vote.");
// }
// else if ((nationality === "pakistani" || nationality === "indian") && gender === "female" && age >=18){
//     let status = prompt("You are married?");
//     if(status === "yes"){
//         console.log("You are eligible to vote");
//     }
//     else {
//         console.log("You are not eligible to vote");
//     }
// }
// else {
//     console.log("You are not eligible to vote");
// }

// -------------------- Task 08 -------------------------

let worldCupSquad = ["Muhammad Rizwan","Babar Azam","Muhammad Haris","Fakhar Zaman","Saim Ayub","Iftikhar Ahmed","Immad Wasim","Haris Rauf","Shaheen Shah Afridi","Naseem Shah","Zaman Khan","Abdullah","Sarfaraz Ahmed","Ihsanullah","Shadab Khan"];

let finalSquad = worldCupSquad.slice(0,11);
>>>>>>> fbb569fc5c1bba37f7060a2fe79a5c5cec4e0de7
console.log(finalSquad);