import leapYear from './leapYear';

describe('leapYear', () => {
  it('should return true if year is 4', () => {
    expect(leapYear(4)).toBe(true);
  });
  it('should return false if year is 5', () => {
    expect(leapYear(5)).toBe(false);
  });
  it("should return true if year is divisible by 4", () => {
    expect(leapYear(8)).toBe(true);
  });

});