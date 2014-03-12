var set = [1, 2, 3];

var fuckClojure = function(arg) {
  if (arg.length == 0) {
    return [[]];
  } else {
    for (var i = 0; i < arg.length; i++) {
      var newSet = arg.splice(i, 1);
      console.log(newSet);
      var results = []
      results.push(fuckClojure(arg));
    }
  } 
}

console.log(fuckClojure(set));






var multiply = function(x) {
  return function(y) {
    return x*y;
  }
}

console.log(m(5)(6));

var dub = m(2);
console.log(dub(5));

var list = [
  "bob",
  "larry",
  "moe",
  "charles"
];

var nums = [1, 2, 3, 4];

var squared = nums.map(function (x) {
  return m(x)(x);
});
console.log(squared);


function add(a, b) {
  return a + b;
}

function filt(a) {
  return a.length > 3;
}

console.log(list.filter(filt).map(
  function(x) {
  return x.length;
}).reduce(add));

//console.log(lengths);
//console.log(lengths.reduce(add));
