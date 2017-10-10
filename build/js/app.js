(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//Uswer interface logic
var Ticket = require('./../js/movie-ticket.js').ticketModule;

$(document).ready(function() {
  $("#movieTicket").submit(function(event) {
  event.preventDefault();

  var movie = $("input:radio[name=movie]:checked").val();
  var time = $("input:radio[name=time]:checked").val();
  var age = parseInt($("input.enter-age").val());
  var ticketInfo = new Ticket(movie, time, age);
  console.log(ticketInfo.ticketPrice());
  var result = (ticketInfo.ticketPrice());
  $("#surveyResult").append("<li>" + result + "</li>");


  });
});

},{"./../js/movie-ticket.js":2}],2:[function(require,module,exports){

//Business logic


function Ticket(movie, time, age)  {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.ticketPrice = function() {
  if (this.movie === "Diehard1") {
    var price = "$1.00";
  } else if (this.age >= 65 || this.time === "1100") {
    var price = "$5.00";
  } else if (this.age < 65 && this.time !== "1100") {
    var price = "$8.00";
  }
  return (this.movie + ", playing at " + this.time + ", costs " + price);
}

exports.ticketModule = Ticket;

},{}]},{},[1]);
