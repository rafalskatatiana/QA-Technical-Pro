var name = prompt("Скільки тобі років ?", "1");
let age = Number(name);

console.log(typeof name, age);

if (age === 1 || age ===21 || age === 31 || age === 41 || age === 51 ||  age === 61 ||  age === 71 ||  age === 81 ||
    age === 91) {
 console.log("рік");
}
else if (age >= 2 && age <= 4 || age >= 22 && age <= 24 || age >= 32 && age <= 34 || age >= 42 && age <= 44 || age >= 52 && age <= 54 || age >= 62 && age <= 64
|| age >= 72 && age <= 74 || age >= 82 && age <= 84 || age >= 92 && age <= 94) {
 console.log("роки");
} 

else if (age >= 5 && age <= 20 || age >= 25 && age <= 30 || age >= 35 && age <= 40 || age >= 45 && age <= 50 ||
    age >= 55 && age <= 60 || age >= 65 && age <= 70
 || age >= 75 && age <= 80 || age >= 85 && age <= 90 || age >= 95 && age <= 99 )  {
 console.log("років");
} 

else if (age === 100) {
 console.log("років");
} 
else {
 console.log("Недопустиме значення");
}