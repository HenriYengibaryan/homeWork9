//1
function uniques(arr) {
  debugger;
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      return false;
    }
  }
  return true;
}

//3

function CoffeShop(name, menu) {
  this.menu = menu;
  this.name = name;
  this.orders = [];
  let resDrink = [];
  let resFood = [];
  for (let i = 0; i < this.menu.length; i++) {
    if (this.menu[i].type === "drink") {
      resDrink.push(this.menu[i]);
    } else {
      resFood.push(this.menu[i]);
    }
  }
  this.DrinkOnly = function () {
    return resDrink;
  };
  this.foodOnly = function () {
    return resFood;
  };
  this.addOrders = function (name) {
    debugger;
    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].item === name) {
        this.orders.push(this.menu[i]);
      }
    }
    return this.orders;
  };
  this.cheapeStilem = function () {
    let lownumber = Number.MAX_VALUE;
    let digit = 0;
    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].price < lownumber) {
        lownumber = this.menu[i].price;
        digit = i;
      }
    }
    return this.menu[digit].item;
  };
  this.listOrders = function () {
    if (this.orders.length === 0) {
      return "all order be ready";
    } else {
      return this.orders;
    }
  };
  this.fulfiOrder = function () {
    if (this.orders === []) {
      ("All orders have been fulfilled!&quot");
    } else {
      let item = this.orders[0].item;
      this.orders.shift();
      return "The " + item + " is ready!";
    }
  };
  this.amenount = function () {
    let count = 0;
    for (let i = 0; i < this.orders.length; i++) {
      count += this.orders[i].price;
    }
    return count;
  };
}
//1
function missingNumbers(arr) {
  let overal = arr[arr.length - 1] - arr[0] + 1;
  let count = overal - arr.length;
  return count;
}
