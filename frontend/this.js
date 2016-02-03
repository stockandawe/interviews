/* What is the output of the following code? */
var User = {
  count: 1,

  getCount: function() {
    return this.count;
  }
};

console.log(User.getCount());

var func = User.getCount;
console.log(func());
