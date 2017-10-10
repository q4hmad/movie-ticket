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

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#surveyResult').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
