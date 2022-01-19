import getArea from "./getArea";

describe('getArea', () => {
  test('should work for square', () => {
    expect(getArea(3)).toBe(9)
  });

  test('should work for rectangle', () => {
    expect(getArea(3, 2)).toBe(6)
  });
});