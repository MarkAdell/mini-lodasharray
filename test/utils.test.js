const expect = require('chai').expect;
const utils = require('../lib/utils.js');

describe('areNumbers function', () => {
    it('should return true if passed array of numbers', () => {
        expect(utils.areNumbers([1,2,3])).to.equal(true);
    });
    it('should return false if passed anything except array of numbers', () => {
        expect(utils.areNumbers([1,2,'3'])).to.equal(false);
        expect(utils.areNumbers()).to.equal(false);
        expect(utils.areNumbers([])).to.equal(false);
    });
});