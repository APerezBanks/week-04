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
//     },
//     example() {
//         for (let i = 0; i < 10; i++) {

//         }
//     }
// }

// console.log(rosie.name);
// console.log(rosie.drink);

// class Bunny {
//     constructor (name) {
//         this._name = name;
//     }
// }

// const rosie = new Bunny("Rosie");

// class Enemy {
//     constructor(name, health) {
//         this._name = name;
//         this._health = health;
//         this._weapons = ["sword", "bow"];
//     }
//     get name() {
//         return this._name;
//     }
//     get health() {
//         return this._health;
//     }
//     get weapons() {
//         return this._weapons;
//     }
//     reduceHealth(amount) {
//         return this._health -= amount;
//     }
// }

// const enemy1 = new Enemy("Jordan", 1000);
// const enemy2 = new Enemy("Yusuf", 10);

// console.log(enemy1.health);
// console.log(enemy1.reduceHealth(100));
// console.log(enemy2.health);
// console.log(enemy1.reduceHealth(100));
// console.log(enemy2.health);
// console.log(enemy1.reduceHealth(100));
// console.log(enemy2.health);
// console.log(enemy2.reduceHealth(10));

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
    get Departure(departure) {
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
