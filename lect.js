var Test = function (id) {
  this.something = id;
  this.foo = function() {
    console.log('this is a test: ' + this.something);
  }
}
;

var a = new Test(10);
var b = new Test(111);

a.foo();
b.foo();

Test.prototype.FUN = function() {
  console.log("holy FUCK " + this.something * this.something);
}

a.FUN();
b.FUN();

