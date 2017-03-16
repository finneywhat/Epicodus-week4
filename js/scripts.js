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

function Order() {
  this.items = [];
}

Order.prototype.getOrderTotal = function() {
  return this.items.reduce(function(total, item) {
    return total + parseFloat(item.pizzaPrice().toFixed(2));
  });
}

// Front-end (User Interface)
$(function(){

  var vegToppings = [];
  var meatToppings = [];
  var pizzas = [];

  $("#order-form").submit(function(){
    event.preventDefault();
    var vegToppings = [];
    var meatToppings = [];
    var userSizeSelection = parseInt($("#size").val());

    $("input:checkbox[name=veggie-toppings]:checked").each(function(){
      vegToppings.push($(this).val());
      return vegToppings;
    });

    $("input:checkbox[name=meat-toppings]:checked").each(function(){
      meatToppings.push($(this).val());
      return meatToppings;
    });

    var pizza = new pizzaOrder(userSizeSelection, vegToppings, meatToppings);

    pizzas.push(pizza);

    pizzas.forEach(function(pizza) {
      console.log(pizzas);
      // $(".pizza-list").append("<li>+ " + this.size + "<span class='float-topping-price-right veggie-price'></span></li>");
    });

    var totalPrice = pizza.pizzaPrice();
    $("#user-pizza-price1").text("$" +  userSizeSelection + ".00");
    $("#user-pizza-price").text(totalPrice);
    $("#total-price").text("$" + totalPrice);

    var appendToppings = function() {
      vegToppings.forEach(function(topping) {
        $("#pizza-toppings-list").append("<li>+ " + topping + "<span class='float-topping-price-right veggie-price'></span></li>");
      });
      meatToppings.forEach(function(topping){
        $("#pizza-toppings-list").append("<li>+ " + topping + "<span class='float-topping-price-right meat-price'> </span></li>");
      });
    }

    $("#pizza-toppings-list").empty();
    appendToppings();

    var showResults = function() {
      $("#error").hide();
      $(".sm-md-toppings").show();
      $(".lrg-toppings").hide();
      $("#order-results").show();
      $(".veggie-price").text("$1.00");
      $(".meat-price").text("$1.50");
    }

    if (!userSizeSelection) {
      $("#error").show();
      $(".sm-md-toppings").hide();
      $(".lrg-toppings").hide();
      $("#order-results").hide();
    } else if (userSizeSelection === 10) {
      $("#user-size a").text(" pizza");
      $("#user-size a").prepend("Small");
      showResults();
    } else if (userSizeSelection === 13) {
      $("#user-size a").text(" pizza");
      $("#user-size a").prepend("Medium");
      showResults();
    } else {
      $("#user-size a").text(" pizza");
      $("#user-size a").prepend("Large");
      $("#error").hide();
      $(".sm-md-toppings").hide();
      $(".lrg-toppings").show();
      $("#order-results").show();
      $(".veggie-price").text("$1.50");
      $(".meat-price").text("$2.50");
    };

  });

  $("#clear-btn").click(function(){
    location.reload();
  });

  $("#another-pizza-btn").click(function(){
    $("#order-form").trigger("reset");
    $("#order-form").fadeIn(600);

  });

  $("#user-size a").click(function() {
    $("#pizza-toppings-list").slideToggle();
  });

$('#slogan-typeit').typeIt({
     strings: ["Anytime's Pizza Thyme", "Eatsa some pizza", "Oh man, I'm getting hungry", "I should probably scroll down", "Maybe order a pizza"],
     loop: true,
     speed: 200,
     breakLines: false,
     autoStart: true,
});

  $("#pay-btn").click(function(){
    $("#order-form").fadeOut(600);
    $("#order-results").fadeOut(1000);
    $("#pay-form").fadeIn(600);
  });


  $("#reload").click(function(){
    location.reload();
  });
});
