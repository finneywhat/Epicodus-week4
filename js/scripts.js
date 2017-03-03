// var price = 0;
var vegToppings = [];
var meatToppings = [];

function pizzaOrder(size, veggies, meats) {
  this.size = size;
  this.veggies = veggies;
  this.meats = veggies;
}

pizzaOrder.prototype.pizzaPrice = function() {
  return this.size + (this.veggies.length * 1) + (this.meats.length * 2)
}

// pizzaOrder.prototype.sizePrice = function() {
//   if (this.size === "small") {
//     price += 10;
//   } else if (this.size === "medium") {
//     price += 13;
//   } else {
//     price += 15;
//   }
//   return price;
// }
//
// pizzaOrder.prototype.veggiePrice = function() {
//   price = price + (this.veggies * 1);
//   return price;
// }
//
// pizzaOrder.prototype.meatPrice = function() {
//   price = price + (this.meats * 2);
//   return price;
// }

$(function(){
  $("#order-form").submit(function(){
    event.preventDefault();

    var userSizeSelection = parseInt($("#size").val());
    console.log(userSizeSelection);
    var vegToppings = [];
    $("input:checkbox[name=veggie-toppings]:checked").each(function(){
    vegToppings.push($(this).val());
    return vegToppings;
  });
    console.log(vegToppings);

    var meatToppings = [];
    $("input:checkbox[name=meat-toppings]:checked").each(function(){
    meatToppings.push($(this).val());
    return meatToppings;
    });
    console.log(meatToppings);

    var pizza = new pizzaOrder(userSizeSelection, vegToppings, meatToppings);
    console.log(pizza);
    // var totalPrice = (pizza.pizzaPrice)

  });
});
