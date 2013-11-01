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

//what is the largest prime factor of 600851475153 (a: 6875)



//largest palindrome made from 2 2digit numbers is 9009 = 91 * 99, what is the largest made from 2 3digit numbers (a: 906609)



//find the smallest number divisible by the numbers from 1 to 20 without a remainder
var problem5 = function() {
  var max = 20;
  var answer = max;
  var hasRemainder = function(num) {
    for (var i = 1; i < max; i++) {
      if (num % i != 0) {
        return false;
      }
    }
    return true;
  }

  while (!hasRemainder(answer)) {
    answer++;
  }

  console.log("The smallest number divisible by the numbers from 1 to " + max + " is " + answer);
}

problem5();

