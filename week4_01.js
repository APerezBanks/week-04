// Make 3 variables: storing a String, a number and a Boolean.

// let string = "hello world";
// let number = 10;
// let b = true;


// Make and array that stores 4 items, add something to the end of the array using a method.

// let array = ["tomato", "lettuce","water"];
// array.push("carrot");
// console.log(array);


// create a loop to cycle through the array to print out all the values


// for (let i = 0; i < array.length; i++){
//     console.log (array[i]);
// }

// create a function that when called asks you to withdoraw an amount. Balance should reduce as approprate.

// let balance = 100;

// const myfunc = (num) => {
//     return balance -= num;
// }

// console.log(myfunc(10));


                                /// oOPs ////


// let rosie = {
//     _name: "Rosie",
//     _thirst: 50,
//     _isWiggling: false,
//     _isHopping: false,
//     get name() {
//         return this._name;
//     },

//     get drink() {
//         this._thirst -= 10;
//         return this._thirst;
//     }
// }
//     console.log(rosie.name);
//     console.log(rosie.drink);



//     class Bunny{

//         constructor(name){
//             this.name = name;
//             this.hops = 0;   
//         }
//         get name(){
//             return this._name;
//         }
//         get hops(){
//             return this._hops;
//         }
//         increaseHops(){
//             this._hops++;
//         }
//     }

//     const rosie = new Bunny("Rosie");

//     console.log(rosie.name);


                        // Activity:

// Let's create a class called Cars for a car parking company.
// This will allow you to store information of:
// car registration number, number of hours parked and total amount charged.
// (Say £1.50 per hour?)

// The first car entered the car park, parked for 5 hours and ready to pay.
// Display this information so the driver can pay his/her parking fee.


class Cars {
    constructor(reg, arrival, hourlyCost) {
        this._reg = reg;
        this._arrival = arrival;
        this._hourlyCost = hourlyCost;
        this._hasPaid = false;
    }
    get hasPaid() {
        return this._hasPaid;
    }
    getDeparture(departure) {
        this._departureTime = departure;
    }
    calculateCost() {
        return (this._departureTime - this._arrival) * this._hourlyCost;
    }
    makePayment(amountPaid) {
        if (amountPaid >= this.calculateCost()) {
            this._hasPaid = true;
            return `Parking has been paid`;
        } else {
            return `Parking has not been paid`;
        }
    }
}

const AA11A1 = new Cars("AA11A1", 2, 1.50);
// enters tickets, departure time is captured
AA11A1.getDeparture(11);
// read cost out to user
console.log(AA11A1.calculateCost());
console.log(AA11A1.hasPaid);
console.log(AA11A1.makePayment(13.5));
console.log(AA11A1.hasPaid);

console.log(AA11A1);

// // example of using bracket notation to access data via iteration
// let array = ["_reg", "_arrival", "_hourlyCost", "_hasPaid", "_departureTime"];

// for (let i = 0; i < array.length; i++) {
//     console.log(AA11A1[array[i]]);
// }





//  creating different enemies 

// class Enemy {
//     constructor(name, health){
//         this._name = name;
//         this._health = health;
//         this._weapons = ["Sword", "bow"];
//     }
//     get name(){
//         return this._name;
//     }
//     get health() {
//         return this._health;
//     }
//     get weapons() {
//         return this._weapons;
//     }
//     reduceHealth(amount) {
//     return this._health -= amount;
//     }
// }


// const enemy1 = new Enemy("Goku", 10000);
// const enemy2 = new Enemy("Yusuf", 10);

// console.log(enemy1.health);
// console.log(enemy1.reduceHealth(100));
// console.log(enemy2.health);



