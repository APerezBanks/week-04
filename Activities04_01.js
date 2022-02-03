// Activity:

// Let's create a class called Cars for a car parking company.
// This will allow you to store information of:
// car registration number, number of hours parked and total amount charged.
// (Say £1.50 per hour?)

// The first car entered the car park, parked for 5 hours and ready to pay.
// Display this information so the driver can pay his/her parking fee.

// class Car {
//     constructor(reg){
//         this._registrationNum = reg;
//         this._hoursParked = 0;
//         this._amountCharged = 0.00;
//         this._moneyPaid = 0;
//     }
//     get reg(){
//     return this._registrationNum;
//     }
//     get hoursParked(){
//         return this._hoursParked;
//     }
//     get amountCharged(){
//         return this._amountCharged;
//     }
 

//     // here below is where the hours parked add to the amount per hour
//     increaseHours(){
//         this._hoursParked++;
//         this._amountCharged += 1.50;
//     }

  
// }


// const pay = (reg, hr) => {
//     const car = new Car(reg);
//     for ( i = 0; i < hr; i++){
//         car.increaseHours();
//     }
//     return `This is going to cost you  £${car.amountCharged} for ${car.hoursParked} hours.`;
// }

// // p1g30n goes to reg, and the 7 to the hr on top

// console.log(pay("P1 G30N", 5));





                    //// Jordan solution////


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

// example of using bracket notation to access data via iteration
// let array = ["_reg", "_arrival", "_hourlyCost", "_hasPaid", "_departureTime"];

// for (let i = 0; i < array.length; i++) {
//     console.log(AA11A1[array[i]]);
// }

// jordan code part b///


class  Staff extends Cars {
    constructor(staffNum, credits, reg, arrival, hourlyCost){
        super(reg, arrival, hourlyCost);
        this._staffNum = staffNum;
        this._creditAmount = credits;
    }
    applydiscount() {
        this._hourlycost /= 4;
    }
}

const AA = new Cars ("AA1A1", 2, 1.50);
const staffObj = new Staff (1234, 100 , "AA11A1", 2, 1.50);


staffObj.applydiscount();
console.log(staffObj)
           
 







                // Activity (1.B): Car Park

// Let’s continue with our car park project.
// Add a subclass for staff, so that staff can provide their staff number, 
// and credits they have left to pay for the car park fees.
// Given a staff member parked for 5 hours as before,
// show how much it will be charged and remaining balance.


// class Car {
//     constructor(reg){
//         this._registrationNum = reg;
//         this._hoursParked = 0;
//         this._amountCharged = 0.00;
//     }
//     get reg(){
//     return this._registrationNum;
//     }
//     get hoursParked(){
//         return this._hoursParked;
//     }
//     get amountCharged(){
//         return this._amountCharged;
//     }

//     increaseHours(){
//         this._hoursParked++;
//         this._amountCharged += 1.50;
//     }

  
// }


// const pay = (reg, hr) => {
//     const car = new Car(reg);
//     for ( i = 0; i < hr; i++){
//         car.increaseHours();
//     }
//     return `This is going to cost you  £${car.amountCharged} for ${car.hoursParked} hours.`;
// }

// console.log(pay("P1 G30N", 5));



// class Staff extends Car {
//     constructor(){
//         this._staffNum = 0;
//         this._credits = 0;
//     }
//     get staffNum(){
//         return this.staffNum;
//     }

//     get credits(){
//         return this._credits;
//     }

// }


// // not sure how to continue from here...





