//Chris Coffee
//Project 1

console.log("--1.---------------------------------------");
//1. Use a do...while loop to console.log the numbers from 1 to 1000.
let count = 1;
do{
    console.log(count);
    count++;
}while(count < 10001);

console.log("--2.---------------------------------------");
//2 Create an object (an array with keys and values) called person with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"

let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}


console.log("--3.---------------------------------------");
//3 Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.

for(let x in person){
    if(x === "birthDate"){
        //get birthdate
        let birthDate = person[x];
        //split birthdate by space
        let splitBirthDate = birthDate.split(" ");
        //get year from birthdate
        let year = splitBirthDate[splitBirthDate.length-1];
        //split year
        let yearSplit = year.split("");
        //get last digit of year
        let lastDigit = yearSplit[yearSplit.length-1];
        //check if last digit of the year is odd
        if(lastDigit % 2 != 0){
            console.log(birthDate);
        }
    }
}


console.log("--4.---------------------------------------");
//4. Create an arrayOfPersons that contains multiple objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.
let arrayOfPersons = 
[
    {
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925",
        gender: "female"
    },
    {
        firstName: "Johnny",
        lastName: "Brown",
        birthDate: "Jan 5, 1926",
        gender: "male"
    },
    {
        firstName: "Jessica",
        lastName: "Roberts",
        birthDate: "Jan 5, 1927",
        gender: "female"
    },
    {
        firstName: "Josh",
        lastName: "Washington",
        birthDate: "Jan 5, 1921",
        gender: "male"
    },
];


console.log("--5.---------------------------------------");
//5. Use .map() to map over the arrayOfPersons and console.log() their information.
arrayOfPersons.map((person, indexIfNeeded) => {
    console.log(person);
});


console.log("--6.---------------------------------------");
//6. Use .filter() to filter the persons array and console.log only males in the array.
let males = arrayOfPersons.filter((person, indexIfNeeded) => {
    let valid = person.gender === "male";
    return valid
});

males.forEach((person, indexIfNeeded) => {
    console.log(person);
});


console.log("--7.---------------------------------------");
//7. Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
let females = arrayOfPersons.filter((person, indexIfNeeded) => {
    let valid = person.gender === "female";
    return valid
});

females.forEach((person, indexIfNeeded) => {
    console.log(person);
});