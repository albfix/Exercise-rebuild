/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/
ESERCIZI SVOLTI NEI COMMENTI
/* EXERCISE 1
Create and array with the first 5 positive numbers



let firstArray = [1,2,3,4,5]
console.log(firstArray)


/* EXERCISE 2
Create an object containing your name, surname, email address and age.




var myObj = {
    name: "alberto",
    surname: "gaias",
    email: "alberto@gmail.com",
    age:  33
}
console.log(myObj)

/* EXERCISE 3
Add to the previously created object a boolean value
 to rappresent wheter you have or not a driving license



myObj.haveLicense = true
console.log(myObj)


/* EXERCISE 4
Remove from the previously created object the age


delete myObj.haveLicense
console.log(myObj)



/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address


var myObj2 = {
    name: "piero",
    surname: "gaias",
    email: "piero@gmail.com",
    age:  33
}
var myObj3 = {
    name: "piero",
    surname: "gaias",
    email: "alberto@gmail.com",
    age:  33
}



let sameMail = (myObj.email === myObj2.email) ? "are the same" : "are different";
console.log(sameMail)

let sameMail2 = (myObj.email === myObj3.email) ? "are the same" : "are different";
console.log(sameMail2)


/* EXERCISE 6
You are working for a eCommerce. In the variable totalShoppingCart you have 
the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€,
 they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.


let customerShoppingCart = 48
let cartCost = 10

let totalShoppingCart = (customerShoppingCart < 50) ? "total shopping cart is" + " " +
(customerShoppingCart + cartCost) : 
 "total shopping cart is" + customerShoppingCart

 console.log(totalShoppingCart)



/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.


const customerShoppingCart = 48
let blackFriday = customerShoppingCart/100*20
console.log(blackFriday) //INVECE CHE FARE IL TERNARIO O IF/ELSE, DIRETTAMENTE QUESTO ALGORITMO


/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.


let myCar = {
    brand: "opel",
    model: "astra",
    licensePlate: "B", 
}
let myCar2 ={}
let myCar3 ={}
let myCar4 ={}
let myCar5 ={}

Object.assign(myCar2, myCar)
Object.assign(myCar3, myCar)
Object.assign(myCar4, myCar)
Object.assign(myCar5, myCar)

myCar2.licensePlate = "C"
console.log(myCar2)
console.log(myCar)



/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise



let carsForRent = []

carsForRent.push(myCar2, myCar, myCar3, myCar4, myCar5)




/* EXERCISE 10
Remove the first and the last car from the carsForRent array.


carsForRent.shift ()
carsForRent.pop ()


/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand


console.log(carsForRent[0])



/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays


let carsForSale = [{
    brand: "opel",
    model: "astra",
} ,
{
    brand: "ford",
    model: "fiesta", 
},
{
    brand: "alfa",
    model: "gtv",  
}

]

let totalCars = carsForSale.length + carsForRent.length
 
console.log(totalCars)



/* EXERCISE 13
Print in the console the data from each car in the carsForSale array


console.log(carsForSale)


/* WHEN YOU ARE FINISHED
Send the code via Slack to the tutor! In the next days we'll also learn how to use GIT 
*/
