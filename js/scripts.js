// Back-end (Business Logic)

function pizzaOrder(size, veggies, meats) {
  this.size = size;
  this.veggies = veggies;
  this.meats = meats;
}

pizzaOrder.prototype.pizzaPrice = function() {
  if (this.size === 15) {
    this.veggies = this.veggies.length * 1.5;
    this.meats = this.meats.length * 2.5;
  } else {
    this.veggies = this.veggies.length * 1;
    this.meats = this.meats.length * 1.5;
  }
  return (this.size + this.veggies + this.meats).toFixed(2);
}

// Front-end (User Interface)
$(function(){
  $("#order-form").submit(function(){
    event.preventDefault();

    var userSizeSelection = parseInt($("#size").val());

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
    var totalPrice = pizza.pizzaPrice();
    $("#user-pizza-price").text(totalPrice);

    if (!userSizeSelection) {
      $("#error").show();
      $(".sm-md-toppings").hide();
      $(".lrg-toppings").hide();
      $("#order-results").hide();
    } else if (userSizeSelection === 10 || userSizeSelection === 13) {
      $("#error").hide();
      $(".sm-md-toppings").show();
      $(".lrg-toppings").hide();
      $("#order-results").show();
    } else {
      $("#error").hide();
      $(".sm-md-toppings").hide();
      $(".lrg-toppings").show();
      $("#order-results").show();
    }

    $("#order-form").change();
  });
});
