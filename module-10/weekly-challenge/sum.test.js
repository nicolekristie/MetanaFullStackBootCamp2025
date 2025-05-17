import { sum } from './sum.js'


describe('sum function', () => {
    test('throws an error if a string is passed', () => {
      expect(() => sum("a", 5)).toThrow('Invalid value: Value must be a number.');
    });
  
    test('Adds the sum of 2 positive numbers', ()=> {
        expect(sum(1, 2)).toBe(3);
    });
    test('Add the sum of 2 negative numbers', ()=> {
        expect(sum(-15,-12)).toBe(-27);
    })

});