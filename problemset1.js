//Stefan Dierauf Nov 2013
//solutions to problem set 1 from sudo soldiers


//find the sum of all the multiples of 3 and 5 below 1000
var problem1 = function() {
  var sum = 0;
  for (var i = 1; i < 1000; i++) {
    if (i % 3 == 0) {
      sum += i;
    } else if (i % 5 == 0) {
      sum += i;
    }
  }
  console.log("The sum of all the multiples of 3 and 5 below 1000 is: " + sum);
}

problem1();
