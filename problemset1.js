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

//find the sum of all the even fibbonaci numbers below 4000000
var problem2 = function() {
  var max = 4000000
  var sum = 0;
  var getNthFibbonaci = function(num) {
    if (num == 1 || num == 0) {
      return num;
    } else {
      return getNthFibbonaci(num - 1) + getNthFibbonaci(num - 2);
    }
  }

  var counter = 1;
  var fib = getNthFibbonaci(counter);
  while (fib < max) {
    if (fib % 2 == 0) {
      sum += fib;
    }
    counter++;
    fib = getNthFibbonaci(counter);
  }

  console.log("The sum of all even fibbonaci numbers below " + max + " is: " + sum );
}

problem2();



