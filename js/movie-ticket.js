
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
};

exports.ticketModule = Ticket;
