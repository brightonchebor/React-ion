let logName = function (food) {
  console.log(this.fname + " " + this.lname + "'s Favorite Food was " + food);
};
const person = {
  fname: "George",
  lname: "Washington",
};
let logMe = logName.bind(person, "tacos");
logMe();
