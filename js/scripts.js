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

    var meatToppings = [];
    $("input:checkbox[name=meat-toppings]:checked").each(function(){
    meatToppings.push($(this).val());
    return meatToppings;
    });

    var pizza = new pizzaOrder(userSizeSelection, vegToppings, meatToppings);
    console.log(pizza);
    var totalPrice = pizza.pizzaPrice();
    $("#user-pizza-price1").text(totalPrice);
    $("#user-pizza-price").text(totalPrice);

    if (!userSizeSelection) {
      $("#error").show();
      $(".sm-md-toppings").hide();
      $(".lrg-toppings").hide();
      $("#order-results").hide();
    } else if (userSizeSelection === 10) {
      $("#user-size").text("small");
      $("#error").hide();
      $(".sm-md-toppings").show();
      $(".lrg-toppings").hide();
      $("#order-results").show();
    } else if (userSizeSelection === 13) {
      $("#user-size").text("medium");
      $("#error").hide();
      $(".sm-md-toppings").hide();
      $(".lrg-toppings").show();
      $("#order-results").show();
    } else {
      $("#user-size").text("large");
      $("#error").hide();
      $(".sm-md-toppings").hide();
      $(".lrg-toppings").show();
      $("#order-results").show();
    }

    $("#order-form").change();
    window.scrollTo(0, 3000);

  });

  $("#pay-btn").click(function(){
    $("#order-form").fadeOut(600);
    $("#pay-form").fadeIn(3000);
    $("#order-results").fadeOut(600);
    // $("#output-text-pay").show();
    // $("#priceOfTicket2").text(ticketOutput);
  });

  $("#reload").click(function(){
    location.reload();
  });
});
