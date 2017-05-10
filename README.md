# Pizza Order

#### Constructor/Prototype Exercise - Week 4 Independent Project for Epicodus, 03.03.17

#### By - Chris Finney

## Description

###### Website for a pizza company which allows a customer to choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.

* Create a pizza object constructor with properties for toppings and size.
* Create a prototype method for the cost of a pizza depending on the selections chosen.

## Setup

* In the terminal, type `git clone https://github.com/finneywhat/Epicodus-week4.git`

* Type `open index.html` to open in browser.

## Specs

| Behavior | Example Input | Example Output |
|----------|:-------------:|:--------------:|
|take user's form input and create object|large, [pepperoni, onions, peppers]| {size: large; toppings: [pepperoni, onions, peppers];}|
|utilize pizza prototype to determine price|{size: large; toppings: [pepperoni, onions, peppers];}|size: large ($14) + [toppings] $1.50 * 3 = $18.50|
|form validation for invalid entry|size: (no selection)|!size|

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* Jquery
* Git

## Legal

** Copyright (c) 2017 Chris Finney **

##### This software is licensed under the MIT license.
