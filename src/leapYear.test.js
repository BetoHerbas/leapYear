import leapYear from './leapYear';

describe('leapYear', () => {
  it('should return true if year is 4', () => {
    expect(leapYear(4)).toBe(true);
  });

});