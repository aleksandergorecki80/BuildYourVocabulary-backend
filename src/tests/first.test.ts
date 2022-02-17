describe('First tests', () => {
  it('should return 1 + 2 = 3', () => {
    function sum(a: number, b: number) {
      return a + b;
    }
    expect(sum(1, 2)).toBe(3);
  });
});
