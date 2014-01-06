var getfib = function(num) {
  if (num < 2) {
    return 1;
  } else {
    return getfib(num - 1) + getfib(num - 2);
  }
}
 var numberz = 1;

var stuff = function() {
  console.log(getfib(numberz));
  numberz++;
  stuff();
}

stuff();

