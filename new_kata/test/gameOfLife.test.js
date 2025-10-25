const {getNextGen} = require('../gameOfLife');

describe('Game of Life - getNextGen', () => {
  test('should kill a lone cell due to underpopulation', () => {
    const input = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];
    const expected = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];

    expect(getNextGen(input)).toEqual(expected);
  });

  test('should evolve correctly for small cluster', () => {
    const input = [
      [0, 0, 0],
      [1, 1, 0],
      [0, 1, 1],
    ];
    const expected = [
      [0, 0, 0],
      [1, 1, 1],
      [1, 1, 1],
    ];

    expect(getNextGen(input)).toEqual(expected);
  });

  test('should handle overpopulation in full 3x3 grid', () => {
    const input = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ];
    const expected = [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ];

    expect(getNextGen(input)).toEqual(expected);
  });

  test('should handle small scattered cells', () => {
    const input = [
      [0, 0, 0],
      [1, 0, 0],
      [0, 1, 1],
    ];
    const expected = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 1, 0],
    ];
    
    expect(getNextGen(input)).toEqual(expected);
  });
});