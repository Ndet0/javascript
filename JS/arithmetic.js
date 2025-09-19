
// Write your code here
//let counter = 0;
//=> undefined

// Return the current value of 'counter' and then decrement by 1
//counter--;
//=> 0

// Check the new value of 'counter'
//counter;
//=> -1

// Decrement 'counter' and then return the new value
//--counter;
//=> -2

// Check the new value of 'counter'
//counter;
//=> -2

//let counter = 0;
//=> undefined

//counter++;
//=> 0

//counter;
//=> 1


//++counter;
//=> 1

//counter;
//=> 1

//let counter = 0;
//=> undefined

//counter += 10;
//=> 10

//counter -= 2;
//=> 8

//counter *= 4;
//=> 32

//counter /= 2;
//=> 16

//counter %= 6;
//=> 4

//counter **= 3;
//=> 64

//counter++;
//=> NaN

// console.log(counter)

Number.isInteger(42);
//=> true

Number.isInteger(0.42);
//=> false


Number.isInteger(42);        // true
Number.isInteger(3.14);       // false
Number.isInteger('42');       // false

Number.isFinite(100);         // true
Number.isFinite(Infinity);     // false
Number.isFinite(NaN);          // false

Number.isNaN(NaN);            // true
Number.isNaN(10);              // false
Number.isNaN('hello');         // false (string is not NaN)
Number.isNaN(undefined);       // false

Number.parseInt('42', 10);    // 42 (decimal)
Number.parseInt('101', 2);    // 5 (binary)
Number.parseInt('3.14');      // 3 (ignores decimal part)
Number.parseInt('abc');       // NaN (invalid)

Number.parseFloat('3.14159'); // 3.14159
Number.parseFloat('42');       // 42
Number.parseFloat('3.14abc');  // 3.14 (stops at invalid character)
Number.parseFloat('hello');    // NaN

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

console.log(Number.MIN_VALUE); // 5e-324




require ( './helpers.js' );

const chai = require('chai')
const expect = chai.expect;

describe('index.js', function() {
  describe('multiply', function() {
    it("is an equation whose multiplied results will equal 62", function() {
      expect(num1).to.be.a('number')
      expect(num2).to.be.a('number')
      expect(multiply).to.eq(62)
    });
  });
  describe('random', function() {
    it("generates a random integer greater than 0", function() {
      expect(Number.isInteger(random)).to.be.true
      expect(random).to.not.eq(0)
    });
  });
  describe('mod', function() {
    it("is an equation that calculates a remainder that is equal to 4", function() {
      expect(num3).to.be.a('number')
      expect(num4).to.be.a('number')
      expect(mod).to.eq(4)
    });
  });
  describe('max', function() {
    it("will return 20 as the highest number in the set", function() {
      expect(max).to.eq(20)
    });
  });
});
