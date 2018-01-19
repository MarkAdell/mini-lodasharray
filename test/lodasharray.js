const expect = require('chai').expect;
const _ = require('../');

describe('concat function', () => {
    it('should return the concatination of values of passed arrays with any other types', () => {
        expect(_.concat([1],[2,3],4,{n: 5})).to.be.eql([1,2,3,4,{n: 5}]);
    });
});

describe('uniq function', () => {
    it('should return the array after removing duplications', () => {
        expect(_.uniq([1,1,2,2,'3','3',4,5,5])).to.eql([1, 2, '3', 4, 5]);
    });
});

describe('range function', () => {
    it('should return an array of numbers within the given range', () => {
        expect(_.range(1,5)).to.eql([1,2,3,4,5]);
        expect(_.range(5,1)).to.eql([5,4,3,2,1]);
    });
    it('should return the range starting from 0 if passed if one parameter', () => {
        expect(_.range(3)).to.eql([0,1,2,3]);
        expect(_.range(-3)).to.eql([0,-1,-2,-3]);
    });
    it('should return an empty array if called without parameters', () => {
        expect(_.range()).to.eql([]);
    });
});
