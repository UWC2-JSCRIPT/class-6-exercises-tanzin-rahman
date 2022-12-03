/**
 * Car class
 * @constructor
 * @param {String} model
 */

class Car{
constructor(setModel, maxSpeed){
this.currentSpeed = 0;
this.model = str;

this.accelerate=function(){
    this.currentSpeed += 1;
    }
this.break=function(){
        this.currentSpeed -= 1;
        }  
};  
  honk() {
    console.log('Beep');
    }

  toString() {
     console.log(`${this.model} accelerates at ${this.accelerate} and breaks at ${this.brek}`);
  }   
  static sort(a, b) {
    return b.maxSpeed - a.maxSpeed;
    }     
}

/*Car.sort = function(a, b) {
    return b.maxSpeed - a.maxSpeed;
    };
// static method

// Define property on the class itself
Car.colors = [
'Sonic gray',
'Rally red'
];

// Define property on the prototype
Car.prototype.numWheels = 4;
*/
const cars = [
    new Car('Camry', 100), 
    new Car('911', 160)
    ];
cars.sort(Car.sort);

class Porsche extends Car {
    constructor(model, maxSpeed) {
    super('Porsche', model, maxSpeed);
    this.turboCharged = true;
    }
    }
    const nineEleven = new Porsche('911', 160);
    console.log(nineEleven.toString());
    nineEleven.honk();

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
class ElectricCar extends Car{
    constructor(motor,accelerate){
        this.motor = motor;
        this.accelerate = accelerate;
    };
    toString(){"hi Electric Car"};
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
