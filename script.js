function YourChoice(price, calories) {
  (this.price = price), (this.calories = calories);
}

const SMALL_SIZE = new YourChoice(50, 20);
const MIDDLE_SIZE = new YourChoice(75, 30);
const Big_SIZE = new YourChoice(100, 40);

const TOPPING_CHEEZE = new YourChoice(10, 20);
const TOPPING_SALAD = new YourChoice(20, 5);
const TOPPING_POTATO = new YourChoice(15, 10);
const TOPPING_SPICE = new YourChoice(15, 0);
const TOPPING_MAYO = new YourChoice(20, 5);

function Hamburger({ price, calories }) {
  (this.price = price), (this.calories = calories);
}

Hamburger.prototype.addtoping = function ({ price, calories }) {
  return (this.price += price), (this.calories += calories);
};
Hamburger.prototype.getPrice = function () {
  return this.price;
};
Hamburger.prototype.getCallories = function () {
  return this.calories;
};

const hamburger = new Hamburger(Big_SIZE);

hamburger.addtoping(TOPPING_MAYO);
hamburger.addtoping(TOPPING_POTATO);
// hamburger.addtoping(TOPPING_POTATO);

// console.log(hamburger);
console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Callories with sauce: ' + hamburger.getCallories());
