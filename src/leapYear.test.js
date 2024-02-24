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
  it("should return false if year is not divisible by 4 like 2019", () => {
    expect(leapYear(2019)).toBe(false);
  });
  it("should return true if year is divisible by 400", () => {
    expect(leapYear(2000)).toBe(true);
  });
  it("should return false if year is divisible by 100 but not by 400 like 1700", () => {
    expect(leapYear(1700)).toBe(false);
  });
  it("should return true if year is divisible by 4 but not by 100 like 2016", () => {
    expect(leapYear(2000)).toBe(true);
  });
  it("should return false if the year is divisible by 100 but no by 400 like 2100", () => {
    expect(leapYear(2100)).toBe(false);
  });

});