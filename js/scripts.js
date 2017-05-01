// Back-end (Business Logic)
function pizzaObj(size, veggies, meats) {
  this.size = size;
  this.veggies = veggies;
  this.meats = meats;
};

pizzaObj.prototype.pizzaPrice = function() {
  if (this.size === 15) {
    this.veggies = this.veggies.length * 1.5;
    this.meats = this.meats.length * 2.5;
  } else {
    this.veggies = this.veggies.length * 1;
    this.meats = this.meats.length * 1.5;
  }
  return parseFloat(this.size + this.veggies + this.meats).toFixed(2);
};

pizzaObj.prototype.getName = function() {
  if (this.size === 15) {
    return "Large pizza";
  } else if (this.size === 13) {
    return "Medium pizza";
  } else if (this.size === 10) {
    return "Small pizza";
  }
};

pizzaObj.prototype.listVegToppings = function(vegTopping, array) {
    return ("<li>" + vegTopping + '</li>');
  };

pizzaObj.prototype.listMeatToppings = function(meatTopping, array) {
  return ('<li>' + meatTopping + '</li>');
  };

// Front-end (User Interface)
$(function(){
  var total = 0;
  $("#order-form").submit(function(){
    var vegToppings = [];
    var meatToppings = [];
    event.preventDefault();

    var userSizeSelection = parseInt($("#size").val());

    $("input:checkbox[name=veggie-toppings]:checked").each(function(){
      vegToppings.push($(this).val());
      return vegToppings;
    });

    $("input:checkbox[name=meat-toppings]:checked").each(function(){
      meatToppings.push($(this).val());
      return meatToppings;
    });

    if (!userSizeSelection) {
      $("#error").show();
      $(".sm-md-toppings").hide();
      $(".lrg-toppings").hide();
      $("#order-results").hide();
    } else {
      var pizza = new pizzaObj(userSizeSelection, vegToppings, meatToppings);
      var price = parseFloat(pizza.pizzaPrice());
      total += price;
    };

    $(".pizza-list, .modal-order-info").append("<li><span class='user-size'><a>" + pizza.getName() + " | " + (vegToppings.length + meatToppings.length) + " toppings" + "</a></span>" +
    "<span class='user-pizza-price1'>$" + price.toFixed(2) + "</span><ul class='toppings'>" + pizza.listVegToppings(vegToppings) + pizza.listMeatToppings(meatToppings) + "</ul>"
    );

    $('#total-price').text("$" + total.toFixed(2));
    $("#user-pizza-price").text(total.toFixed(2));

    $("ul.pizza-list > li").last().click(function() {
      $(this).find('ul.toppings > li').slideToggle();
    });

    $('ul.modal-order-info > li').last().click(function(){
      $(this).find('ul.toppings > li').slideToggle();
    });

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
      showResults();
    } else if (userSizeSelection === 13) {
      showResults();
    } else {
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
    $(".sm-md-toppings").hide();
    $(".lrg-toppings").hide();
    $("#order-form").fadeIn(600);
  });

  $('#slogan-typeit').typeIt({
       strings: ["Anytime's Pizza Thyme", "Eatsa some pizza", "Oh man, I'm getting hungry", "I should probably scroll down", "Maybe order a pizza"],
       loop: true,
       speed: 200,
       breakLines: false,
       autoStart: true,
  });

  $("#delivery-option").click(function(){
    $('#order-results').fadeOut();
  });

  $("#close-modal").click(function(){
    $('#order-results').fadeIn();
  });

  $("#delivery").click(function() {
    $("#delivery-form").slideToggle();
  });

  $("#pick-up").click(function() {
    $(".pick-up-instructions").slideToggle();
  });

  $("#pay-btn").click(function(){
    $("#order-form").fadeOut(600);
    // $("#order-results").hide();
    $("#pay-form").fadeIn(600);
  });

  $("#reload").click(function(){
    location.reload();
  });
});
