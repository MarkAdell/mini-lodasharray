const expect = require('chai').expect;
const _ = require('../');

describe('concat function', () => {
    it('should return the concatination of two arrays', () => {
        expect(_.concat([1,2], [3,4,5])).to.be.eql([1,2,3,4,5]);
    });
    it('should return the passed array if passed with one array', () => {
        expect(_.concat([1,2,3,4,5])).to.be.eql([1,2,3,4,5]);
    });
    it('should return undefined if passed anything other than arrays', () => {
        expect(_.concat([1,2,3,4], 5)).to.be.eql(undefined);
    });
});