var price = 0;

function pizzaOrder(size, veggieToppings, meatToppings) {
  this.size = size;
  this.veggies = veggieToppings;
  this.meats = meatToppings;
}

pizzaOrder.prototype.sizePrice = function() {
  if (this.size === "small") {
    price += 10;
  } else if (this.size === "medium") {
    price += 13;
  } else {
    price += 15;
  }
  return price;
}

pizzaOrder.prototype.veggiePrice = function() {
  price = price + (this.veggies * 1);
  return price;
}

pizzaOrder.prototype.meatPrice = function() {
  price = price + (this.meats * 2);
  return price;
}

$(function(){
  $("#order-form").submit(function(){
    event.preventDefault();

    var userSizeSelection = $("#size").val();
    $("input:checkbox[name=veggie-toppings]:checked").each(function(){
    var vegToppings = $(this).val();
    });

    $("input:checkbox[name=meat-toppings]:checked").each(function(){
    var meatToppings = $(this).val();
    });

    var pizza = new pizzaOrder(userSizeSelection, vegToppings, meatToppings);

    var totalPrice = (pizza.sizePrice + pizza.veggiePrice + pizza.meatPrice)

  });
});
