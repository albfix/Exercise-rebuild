/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/
/* EXERCISE 1
Write the code to execute a SUM between the number 12 and 20
*/

let num1 = 20
let num2 = 20
let totalSum = num1 + num2
console.log(totalSum)

/* EXERCISE 2
Create a variable named X containing the number 12
*/

//let x = 12
//console.log(x)

/* EXERCISE 3
Create a variable named name containing the string John Doe
*/

let name = "john doe"

console.log(name)


/* EXERCISE 4
Execute a DIFFERENCE between the number 12 and the variable X, which stores the value 12
*/

//console.log(x - 12)



/* EXERCISE 5
Create two variables: name1 and name 2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2)
*/

let name1 = "john"
let name2 = "John"

console.log(name1 !== name2)
console.log(name1.toLocaleLowerCase === name2.toLocaleLowerCase)


/* EXERCISE 6
Create the variable X (value less than 10). Write the code to print the literal value of the given number (ex.: 1 => one, 5 => five)
*/

let x = 3
 
if (x===0){
    console.log('zero of zero')
}
else if (x===1){
    console.log('one')
}
else if (x===2){
    console.log('two')
}
else if (x===3){
    console.log('three')

}

/* EXERCISE 7
Insert a value in a variable based on the resut of a ternary if
*/

let number = 25;
let age = "you are";

if(number<20){
    generation="young"
    console.log(age+" "+generation);
}

else if(number>20){
    generation="old"
    console.log(age+" "+generation);
}

else{
    console.log("unknown")
}





/* WHEN YOU ARE FINISHED
Send the code via Slack to the tutor! In the next days we'll also learn how to use GIT 
*/