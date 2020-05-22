
/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

function area (l1,l2){
    console.log(l1 * l2);
}

area(5,6)


  
/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

function crazySum (a,b){
    if (a===b){console.log(3*(a+b))}
    else {console.log(a+b)}
}

crazySum (6,6)

 
/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

function crazyDiff (c){
    let difference = c - 19
    if (c > 19) {
        console.log(3*(c-19))
    }
    else {}
}
crazyDiff(40)


/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

function boundary (n){
    if (n>20 && n <100 || n===400 ){
        console.log(true)
    }
    else{console.log(false)}
}
boundary(28)

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

function strivify (s){
    if (s==="Strive"){
        console.log(s)
    }
    else if (s!=="strive"){
        console.log("strive"+s)
    }
    else{}
}
strivify(" is the greatest school")


/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

function check3and7(number){
    if (number % 3 === 0 || number %7 === 0 ){
        console.log("the number is a multiple")
    }
    else{console.log("is not multiple")}
}

check3and7(211)


/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('hello')) 

function ReverseString (string){
    return string.split("").reverse().join("")
}
console.log(ReverseString("byebye"))

/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

function upperFirst (first){ //CREO FUNZIONE
    first = first.split(" ") //METODO SPLIT PER DIVIDERE ARGOMENTO IN ARRAY
    for (let i = 0 ; i < first.length; i ++){//CICLO FOR PER ITERARE
        first[i]/*ACCESSO A OGNI ELEMENTO DI ARRAY FIRST*/ = first[i][0].toUpperCase()/*PER OGNI PRIMO CARATTERE '[0]' METODO UPPERCASE*/  + first[i].substr(1)/*STAMPA STRINGA ESCLUDENTO SECONDO ELEMENTO*/ 
    }
    return first.join(" ")
 
    }
    console.log(upperFirst("how are you"))

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/





/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/





/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/