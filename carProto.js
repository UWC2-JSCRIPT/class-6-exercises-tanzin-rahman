/**
 * Car class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class Car{
    constructor(model){
        this.model= model;
        this.currentSpeed = 0;
        this.accelerate = () => {
            this.currentSpeed++;
        }
        this.brake = () => {
            this.currentSpeed--;
        }
        
    }
    toString = () =>{
        return `model: ${this.model}, currentSpeed: ${this.currentSpeed}`;
    }
}

class ElectricCar extends Car{
    constructor(model){
        super(model);
        this.turboCharged = true;
    }
    toString2= () =>{
        return `TurboCharged ${this.toString()}`;
    }

}

const car1 = new Car('Honda');
car1.accelerate();
car1.accelerate();
car1.brake();
console.log(car1.toString());

const nineEleven = new ElectricCar('Porsche');
nineEleven.accelerate();
nineEleven.accelerate();
nineEleven.accelerate();
nineEleven.brake();
console.log(nineEleven.toString2());