const cal = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  subject: function (a, b) {
    console.log(a * b);
  },
  power: function (a, b) {
    console.log(a ** b);
  },
};

cal.add(1, 2);
cal.minus(3, 1);
cal.subject(2, 3);
cal.power(2, 3);
