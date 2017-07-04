
//Business logic
function Ticket(movie, time, age)  {
  this.movie = movie;
  this.time = time;
  this.age = [];
}



//Uswer interface logic
$(document).ready(function() {
  $("form#movieTicket").submit(function(event) {
  event.preventDefault();

  var movie = $("input:radio[name=movie]:checked").val();
  var time = $("input:radio[name=time]:checked").val();
  var age = parseInt($("input.enter-age").val());
  var ticketInfo = new Ticket(movie, time, age);
  console.log(ticketInfo)

  });
});
