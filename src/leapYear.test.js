import leapYear from './leapYear';

describe('leapYear', () => {
  it('should return true if year is 4', () => {
    expect(leapYear(4)).toBe(true);
  });
  it('shouldn´t return true if year is 5', () => {
    expect(leapYear(5)).toBe(false);
  });

});