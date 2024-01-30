require('./helpers.js');

const chai = require('chai');
const expect = chai.expect;

function max() {
  let num1 = 10;
  let num2 = 2;
  let multiply = num1 * num2;
  let remainder = 20;

  // Compare the values and return the maximum
  let maxNumber = Math.max(num1, num2, multiply, remainder);
  return maxNumber;
}

describe('index.js', function() {
  describe('multiply', function() {
    it("is an equation whose multiplied results will equal 62", function() {
      expect(num1).to.be.a('number');
      expect(num2).to.be.a('number');
      expect(multiply).to.equal(62);
    });
  });
  describe('random', function() {
    it("generates a random integer greater than 0", function() {
      let random = Math.floor(Math.random() * 100) + 1;
      expect(Number.isInteger(random)).to.be.true;
      expect(random).to.be.greaterThan(0);
    });
  });
  describe('mod', function() {
    it("is an equation that calculates a remainder that is equal to 4", function() {
      let mod = calculateMod();
      expect(mod).to.equal(4);
    });
  });
  describe('max', function() {
    it("will return 20 as the highest number in the set", function() {
      expect(max()).to.equal(20);
    });
  });
});