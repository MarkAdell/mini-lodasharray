const expect = require('chai').expect;
const _ = require('../');

describe('concat function', () => {
    it('should return the concatination of values of passed arrays with any other types', () => {
        expect(_.concat([1],[2,3],4,{n: 5})).to.be.eql([1,2,3,4,{n: 5}]);
    });
});
